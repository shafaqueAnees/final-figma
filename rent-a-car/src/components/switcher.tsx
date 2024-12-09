import React from 'react'
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa'

const Switcher = () => {
  return (
    <section>
        <div className='flex items-center justify-between flex-col md:flex-row'>
            <div className='bg-white rounded-lg py-4 px-10 space-y-4 w-full md:w-[550px]'>
                <div className='flex space-x-2'>
                <input type="radio" />
                <h1 className='text-sec'>Pick-up</h1>
                </div>
                <div className='flex justify-between'>
                    <div className="space-y-1 relative
                     after:content-[''] after:w-[1px] after:h-full after:bg-para after:absolute after:top-0 after:-right-14 after:hidden sm:after:block
                    ">
                        <h1 className='text-sec font-bold'>Location</h1>
                        <select className='outline-none text-para'>
                            <option value="karachi">Karachi</option>
                            <option value="lahore">Lahore</option>
                            <option value="islamabad">Islamabad</option>
                        </select>
                    </div>
                    <div className="space-y-1 relative
                     after:content-[''] after:w-[1px] after:h-full after:bg-para after:absolute after:top-0 after:-right-14 after:hidden sm:after:block
                    ">
                        <h1 className='text-sec font-bold'>Date</h1>
                        <select className='outline-none text-para'>
                            <option value="karachi">11-04-25</option>
                            <option value="lahore">11-04-25</option>
                            <option value="islamabad">11-04-25</option>
                        </select>
                    </div>
                    <div className="space-y-1 
                    ">
                        <h1 className='text-sec font-bold'>Time</h1>
                        <select className='outline-none text-para'>
                            <option value="karachi">2PM</option>
                            <option value="lahore">11Am</option>
                            <option value="islamabad">9Am</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className='h-14 w-14 bg-primary rounded-lg flex items-center justify-center -space-x-2 md:rotate-90'>
            <FaLongArrowAltUp size={22} color='white'/>
            <FaLongArrowAltDown size={22} color='white'/>
            </div>

            <div className='bg-white rounded-lg py-4 px-10 space-y-4 w-full md:w-[550px]'>
                <div className='flex space-x-2'>
                <input type="radio" />
                <h1 className='text-sec'>Drop-Off</h1>
                </div>
                <div className='flex justify-between'>
                    <div className="space-y-1 relative
                     after:content-[''] after:w-[1px] after:h-full after:bg-para after:absolute after:top-0 after:-right-14 after:hidden sm:after:block
                    ">
                        <h1 className='text-sec font-bold'>Location</h1>
                        <select className='outline-none text-para'>
                            <option value="karachi">Karachi</option>
                            <option value="lahore">Lahore</option>
                            <option value="islamabad">Islamabad</option>
                        </select>
                    </div>
                    <div className="space-y-1 relative
                     after:content-[''] after:w-[1px] after:h-full after:bg-para after:absolute after:top-0 after:-right-14 after:hidden sm:after:block
                    ">
                        <h1 className='text-sec font-bold'>Date</h1>
                        <select className='outline-none text-para'>
                            <option value="karachi">11-04-25</option>
                            <option value="lahore">11-04-25</option>
                            <option value="islamabad">11-04-25</option>
                        </select>
                    </div>
                    <div className="space-y-1 
                    ">
                        <h1 className='text-sec font-bold'>Time</h1>
                        <select className='outline-none text-para'>
                            <option value="karachi">2PM</option>
                            <option value="lahore">11Am</option>
                            <option value="islamabad">9Am</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Switcher