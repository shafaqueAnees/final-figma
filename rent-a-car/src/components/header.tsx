import Image from 'next/image'
import React from 'react'
import filter from '../../public/icons/filter.png'
import profile from '../../public/images/prof.png'
import { CiSearch } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { IoSettingsSharp } from 'react-icons/io5'

const Header = () => {
  return (
    <header className='bg-white w-full flex justify-start md:justify-between items-start md:items-center p-6'>
        <div className='flex flex-col md:flex-row md:space-y-0 space-y-8 items-center justify-between space-x-0
         md:space-x-20 w-full md:w-[500px]'>
            <div className='self-start'>
                <h1 className='text-primary text-3xl font-bold'>MORENT</h1>
            </div>
            <div className='border flex w-full lg:w-96 items-center rounded-full'>
            <CiSearch  size={20} className='ml-3 text-sec'/>
                <input type="text" placeholder='Search something here...'
                className='px-2 py-1 outline-none w-full lg:w-80'
                />
                <Image src={filter} alt='' width={20} className='mr-3'/>
            </div>
            
        </div>
        <div>
            <div className='flex items-center space-x-6'>
                <div className='hidden sm:block'>
                <div className='space-x-6 flex items-center'>      
            <div className='h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center border'>
            <FaHeart size={20} color='#596780'/>
            </div>
            <div className='h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center border relative'>
            <div className='absolute h-2 w-2 bg-[#FF4423] rounded-full top-0 right-0'></div>
            <IoIosNotifications size={20} color='#596780'/>
            </div>
            <div className='h-8 w-8 rounded-full bg-white shadow-lg flex items-center justify-center border'>
            <IoSettingsSharp size={20} color='#596780'/>
            </div>
            </div>
            </div>
            <div  className='w-14 h-14 flex items-center'>
                <Image src={profile}  alt=''/>
            </div>
            </div>
        </div>
        
    </header>
  )
}

export default Header