import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-white 
    ">
        <div className='p-10 w-full flex flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between
        '>
            <div className='space-y-3'>
            <h1 className='text-primary text-3xl font-bold'>MORENT</h1>
            <p className='text-para w-72'>Our vision is to provide convenience and help increase your sales business.</p>
            </div>
            <div className='flex lg:space-x-12 justify-between flex-wrap items-center space-x-0 lg:space-y-0 space-y-4'>

                <div className='space-y-6'>
                    <h1 className='text-lg font-bold text-sec'>About</h1>
                    <ol className='space-y-4'>
                        <li className='text-para font-medium'>How It works</li>
                        <li className='text-para font-medium'>Featured</li>
                        <li className='text-para font-medium'>Partnership</li>
                        <li className='text-para font-medium'>Business Relationship</li>
                    </ol>
                </div>
                <div className='space-y-6'>
                    <h1 className='text-lg font-bold text-sec'>Community</h1>
                    <ol className='space-y-4'>
                        <li className='text-para font-medium'>Event</li>
                        <li className='text-para font-medium'>Blog</li>
                        <li className='text-para font-medium'>Podcast</li>
                        <li className='text-para font-medium'>Invite Friend</li>
                    </ol>
                </div>
                <div className='space-y-6'>
                    <h1 className='text-lg font-bold text-sec'>Socials</h1>
                    <ol className='space-y-4'>
                        <li className='text-para font-medium'>Discord</li>
                        <li className='text-para font-medium'>Instagram</li>
                        <li className='text-para font-medium'>Twitter</li>
                        <li className='text-para font-medium'>FaceBook</li>
                    </ol>
                </div>

            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer