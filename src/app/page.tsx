import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex justify-center items-center">
      <div className="flex gap-10 my-80 text-white font-semibold">
        <Link href='/menu' className="border px-12 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg">Menu</Link>
        <Link href='/favourites' className="border px-12 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg">Favourites</Link>
        <Link href='/random' className="border px-12 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg">Generate</Link>
      </div>
    </div>
  )
}
