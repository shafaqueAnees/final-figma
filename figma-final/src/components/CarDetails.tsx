import { FaRegClock } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdSpeedometer } from 'react-icons/io';
import FiveStarRating from "@/components/fivestar";

const CarDetails = () => {
  return (
    <section className="bg-white border w-full-[327px] h-[318px] border-gray-200 rounded-lg shadow-lg p-6 max-w-xl mx-auto">
      <div className="flex flex-col gap-4">
        {/* Car Title and Reviews */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 w-[174px] h-[46px]">Nissan GT-R</h2>
          <div
      className="flex items-center w-[76px] h-[12px] gap-[4px] opacity-0"
      style={{ background: 'transparent' }}
    >
      {/* Render 5 stars */}
   
      <div className="p-6">
      {/* Example with a rating of 3 */}
      <div className="flex items-center">
        <FiveStarRating rating={3} />
        <span className="ml-2 text-sm text-gray-600">3/5</span>
      </div>
    </div>
    <div>
    <p className="text-gray-600 text-sm">440+ Reviewer</p>
    </div>
       
          </div>
        </div>

      {/* Car Description */}
        
        <div className='w-[295px] h-[72px]'>
        <p className="text-gray-700 text-[12px]">
          NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
        </p>
        </div>

        {/* Car Details */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 w-[295px] h-[48px]">
          <div className="w-[124px] h-[48px]">
            <div className='w-[125px] h-[16px]'>
            <p className="font-semibold size-[12px]">Type</p>
            <p>Sport</p>
            </div>
          </div>
          <div>
            <p className="font-semibold">Capacity</p>
            <p>2 Person</p>
          </div>
          <div>
            <p className="font-semibold">Steering</p>
            <p>Manual</p>
          </div>
          <div>
            <p className="font-semibold">Fuel</p>
            <p>Gasoline</p>
          </div>
          <div>
            <p className="font-semibold">Fuel Capacity</p>
            <p>70 L</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-lg font-bold text-gray-800">$80.00 / day</p>
          <p className="line-through text-gray-500">$100.00</p>
        </div>

        {/* Rent Button */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Rent Now
        </button>
      </div>
    </section>
  );
};

export default CarDetails;
