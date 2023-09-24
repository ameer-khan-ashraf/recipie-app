"use client";
import React from "react";
import Link from "next/link";
import { Menu, SoupIcon } from "lucide-react";

const NavLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "My Favourites",
    href: "/favourite",
  },
  {
    text: "Menu",
    href: "/menu",
  },
  {
    text: "Meal Generator",
    href: "/random",
  },
  {
    text: "About Me",
    href: "/about",
  },
];

const Nav = () => {
  const [state, setState] = React.useState(false);

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="flex gap-2 items-center text-xl font-medium text-blue-500">
              <SoupIcon />
              <span>Recipes</span>
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {NavLinks.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-blue-600">
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
