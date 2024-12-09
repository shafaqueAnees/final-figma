import React from 'react'

const Minifooter = () => {
  return (
    <footer className='bg-white  p-10'>
        <div className='border-t-2 flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-between pt-6'>
            <div>
                <h1 className='text-sec'>©2022 MORENT. All rights reserved</h1>
            </div>
            <div className='flex items-center space-x-6'>
                <h2>Privacy & Policy</h2>
                <h2>Terms & Condition</h2>
            </div>
        </div>
    </footer>
  )
}

export default Minifooter