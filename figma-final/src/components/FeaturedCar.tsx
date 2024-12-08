import React from 'react';
import Image from 'next/image'; // For image optimization
import Car1 from '@/Images/image 7.png'; // Replace with your actual car image path
import Car2 from '@/Images/image 8.png'; // Replace with your actual car image path

const FeaturedCar = () => {
  return (
    <div className='w-full-[1440] h-[px]'>
    <div className="relative flex w-full h-[360px] bg-[#FFFFFF] p-6 space-x-6">
      {/* First car div */}
      <div className="w-[50%] h-full bg-[#3563E9] p-4 rounded-lg shadow-md">
        <h1 className="text-white text-lg font-Plus Jakarta Sans font-size-[32px] font-weight-[600] leading-[48px] text-align-[left] mb-2">The Best Platform for Car Rental</h1>
        <p className="text-white text-sm mb-4">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
        <button className="text-white bg-[#54A6FF] w-[120px] h-[44px] px-4 py-2 rounded-full text-sm font-medium  mb-4">Rental car</button>
        <div className="flex justify-center items-center mt-4"> {/* Added mt-4 to push the image down */}
          <Image
            src={Car1} // Replace with the actual image path
            alt="Car Image 1"
            width={260} // Adjust width and height according to your design
            height={130}
            className="object-cover rounded-tl-[10px]"
          />
        </div>
      </div>

      {/* Second car div */}
      <div className="w-[50%] h-full bg-[#54A6FF] p-4 rounded-lg shadow-md">
        <h1 className="text-white text-lg font-Plus Jakarta Sans font-size-[32px] font-weight-[600] leading-[48px] text-align-[left] mb-2">Easy way to rent a car at a low price</h1>
        <p className="text-white text-sm mb-4">Providing cheap car rental services and safe and comfortable facilities.</p>
        <button className="text-white bg-[#3563E9] w-[120px] h-[44px] px-4 py-2 rounded-full text-sm font-medium mb-4">Login</button>
        <div className="flex justify-center items-center mt-4"> {/* Added mt-4 to push the image down */}
          <Image
            src={Car2} // Replace with the actual image path
            alt="Car Image 2"
            width={260} // Adjust width and height according to your design
            height={130}
            className="object-cover rounded-tr-[10px]"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default FeaturedCar;
