import React from 'react'

const About = () => {
  return (
    <div className='container'>

<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Me</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                        {"Hello there! I'm Ameer, and I'm passionate about crafting captivating digital experiences through the art of frontend development. Allow me to take you on a journey through my world of pixels, code, and creativity."}
                    </p>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="w-full h-full" src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" alt="A group of People" />
                </div>
            </div>
    
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">The Tech Stack</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">
                    
                        This app is powered by Next.js, a powerful React framework that enhances performance and SEO. Its server-side rendering and routing capabilities ensure seamless navigation and fast loading times.SWR is the secret sauce behind real-time data fetching. It optimizes data fetching, ensures data consistency, and provides an incredibly smooth user experience.Tailwind CSS streamlines styling and ensures a responsive design, making the app look great on all devices.
                    </p>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default About