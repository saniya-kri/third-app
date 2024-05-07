import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center w-10/12 mt-6 lg:mt-20 mx-auto'>
      <h1 className='text-4xl font-semibold sm:text-6xl lg:text-7xl text-center tracking wide'>
        VirtualR build tools   
        <span className='bg-gradient-to-r from-orange-500 to-orange-800  text-transparent  bg-clip-text'>
         {" "} for developers
        </span>
      </h1>
      <p className='mt-10 text-lg text-neutral-500 max-w-4xl'>
             Empower your creativity and bring your VR app ideas to life with our intuitive development tools. get started today and turn your imagination into immersive reality !   
        </p>
        <div className='flex justify-center my-10'>
        <a href="#" className="bg-gradient-to-r from-orange-500 to bg-orange-800 px-3 py-3 rounded-md mt-3">
             Start for free
            </a>
        <a href="#" className="hover:bg-orange-800 px-3 py-3 rounded-md bg-transparent border ml-7 duration-400 transition-all mt-3 border-orange-900">
             Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center flex-wrap lg:flex-nowrap">
                <video autoPlay loop muted className='rounded-lg border-orange-700 w-1/2 border shadow-orange-400 my-4 mx-2'>
                        <source src={video1} type='video/mp4'/>
                </video>
                <video autoPlay loop muted className=' w-1/2 rounded-lg border border-orange-700 shadow-orange-400 my-4 mx-2'>
                        <source src={video2} type='video/mp4'/>
                </video>
        </div>
    </div>
  )
}

export default HeroSection




