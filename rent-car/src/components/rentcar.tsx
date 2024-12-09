'use client'
import React, { useState } from 'react'
// import { CiHeart } from 'react-icons/ci'
import Image from 'next/image'
import empLike from '../../public/images/empLike.png'
import fillLike from '../../public/images/fillLike.png'
import car1 from '../../public/images/car1.png'
import gas from '../../public/icons/gas.png'
import user from '../../public/icons/user.png'
import steer from '../../public/icons/steer.png'
import {pcarData} from '../../public/carData/pcar'
import Link from 'next/link'

type car={
    id:number,
    title:string,
    type:string,
    img:string,
    capacity:string,
    gasoline:string,
    steering:string,
    price:number,
    desc:string,
    fav:boolean
}

const Rentcar = () => {
    // const [fav,setFav] = useState(false)
    const [carData,setCarData] = useState(pcarData)

    const handleFav = (id:number,favi:boolean)=>{
     setCarData(carData.map((favCar)=>favCar.id===id?{...favCar,fav:!favCar.fav}:favCar))
    }

  return (
    <div className='py-10'>
        <div className='flex justify-between px-8'>
            <h1 className='text-para'>Popular Car</h1>
            <p className='text-primary font-semibold'>View All</p>
        </div>
        <div className='py-6 gap-6 flex justify-center flex-wrap'>
            {/* card starting from here   */}
            {carData.slice(0,4).map((pcar)=>(
                
                <div key={pcar.id} className='bg-white rounded-lg p-4 w-72'>

                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold text-sec'>{pcar.title}</h1>
                        <p className='text-para text-sm'>{pcar.type}</p>
                    </div>
                    <div className='cursor-pointer' onClick={()=>handleFav(pcar.id,pcar.fav)}>
                    {pcar.fav===true?<Image src={fillLike} alt=''/>:<Image src={empLike} alt=''/>}
                    </div>
                </div>
                <Link href='/car-details'>
                <div className='relative flex justify-center py-14 cursor-pointer'>
                    <Image src={pcar.img} alt=''/>
                    <div className='absolute bottom-6 left-0 right-0 h-16 bg-white opacity-10 backdrop-blur-sm'
                    ></div>
                </div>
                </Link>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-1'>
                        <Image src={gas} alt='' className='w-6 h-6'/>
                        <p className='text-para text-sm'>{pcar.gasoline}</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <Image src={steer} alt='' className='w-6 h-6'/>
                        <p className='text-para text-sm'>{pcar.steering}</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <Image src={user} alt='' className='w-6 h-6'/>
                        <p className='text-para text-sm'>{pcar.capacity}</p>
                    </div>
                </div>

                <div className='flex justify-between items-center pt-6'>
                    <h1 className='text-sec text-lg font-bold'>${pcar.price}.00/<span className='text-para text-sm'>day</span></h1>
                    <Link href='/payment'>
                    <button className='bg-primary px-4 py-2 rounded-md text-white'>Rent Car</button>
                    </Link>
                </div>

            </div>
            ))}
           
            {/* card starting from here   */}
        </div>
        <div className='px-8'>
            <h1 className='text-para'>Recomendation Car</h1>
       </div>
       <div className='py-6 gap-6 flex justify-center flex-wrap'>
            {/* card starting from here   */}
            {carData.slice(4).map((pcar)=>(
                
                <div key={pcar.id} className='bg-white rounded-lg p-4 w-72'>

                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-xl font-bold text-sec'>{pcar.title}</h1>
                        <p className='text-para text-sm'>{pcar.type}</p>
                    </div>
                    <div className='cursor-pointer' onClick={()=>handleFav(pcar.id,pcar.fav)}>
                    {pcar.fav===true?<Image src={fillLike} alt=''/>:<Image src={empLike} alt=''/>}
                    </div>
                </div>
                <Link href='/car-details'>
                <div className='flex relative justify-center py-14 cursor-pointer'>
                <div className='absolute bottom-6 left-0 right-0 h-16 bg-white opacity-10 backdrop-blur-sm'
                    ></div>
                    <Image src={pcar.img} alt=''/>
                </div>
                </Link>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-1'>
                        <Image src={gas} alt='' className='w-6 h-6'/>
                        <p className='text-para text-sm'>{pcar.gasoline}</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <Image src={steer} alt='' className='w-6 h-6'/>
                        <p className='text-para text-sm'>{pcar.steering}</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                        <Image src={user} alt='' className='w-6 h-6'/>
                        <p className='text-para text-sm'>{pcar.capacity}</p>
                    </div>
                </div>

                <div className='flex justify-between items-center pt-6'>
                    <h1 className='text-sec text-lg font-bold'>${pcar.price}.00/<span className='text-para text-sm'>day</span></h1>
                    <Link href='/payment'>
                    <button className='bg-primary px-4 py-2 rounded-md text-white'>Rent Car</button>
                    </Link>
                </div>

            </div>
            ))}
           
            {/* card starting from here   */}
        </div>
    </div>
  )
}

export default Rentcar