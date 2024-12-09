import Image from 'next/image'
import React from 'react'
import car1 from '../../public/images/car1.png'
import car2 from '../../public/images/car2.png'

const Herocard = () => {
  return (
    <>
    <section className='flex w-full justify-between'>
    <div className='bg-[#54A6FF] rounded-md text-white p-6 w-[600px]'>
        <div className='w-72 space-y-4'>
            <h1 className='text-3xl font-semibold'>The Best Platform for Car Rental</h1>
            <p className='text-sm'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
            <button className='bg-primary px-4 py-2 rounded-sm'>Rent Car</button>
        </div>
        <div className='flex justify-center'>
            <Image src={car1} alt=''/>
        </div>
    </div>
    <div className='bg-primary rounded-md text-white p-6 w-[600px] hidden lg:block'>
        <div className='w-72 space-y-4'>
            <h1 className='text-3xl font-semibold'>Easy way to rent a car at a low price</h1>
            <p className='text-sm'>Providing cheap car rental services and safe and comfortable facilities.</p>
            <button className='bg-[#54A6FF] px-4 py-2 rounded-sm'>Rent Car</button>
        </div>
        <div className='flex justify-center'>
            <Image src={car2} alt=''/>
        </div>
    </div>
    </section>
    </>
  )
}

export default Herocard