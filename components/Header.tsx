import Image from 'next/image'
import React from 'react'
import logo from '/public/cover.png'
import { BeakerIcon, ChevronDownIcon, HomeIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { StarIcon } from '@heroicons/react/24/outline'



function Header() {
  return (
    <div className='sticky top-0 flex bg-white px-4 py-2 shadow-sm'>
        <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
            <Image 
            objectFit="contain"
            src={logo}
            layout='fill' />
        </div>
        <div className='mx-7 flex items-center xl:min-w-[300px]'>
          <HomeIcon className="h-5 w-5" />
          <p className='flex-1 hidden ml-2 lg:inline'>Home</p>
          <ChevronDownIcon className='h-5 w-5'/>
        </div>

        {/* Search Box */}
        <form className='flex flex-1 items-center space-x-2 
        border border-gray-200 rounded-lg 
        bg-gray-100 px-3 py-1'>
          <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
          <input 
          className='flex-1 bg-transparent outline-none'
          type="text" placeholder="Search your queries" />
          <button type="submit" hidden></button>
        </form>

    </div>
  )
}

export default Header