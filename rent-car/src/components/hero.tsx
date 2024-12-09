import React from 'react'
import Herocard from './herocard'
import car1 from '../../public/images/car1.png'
import Switcher from './switcher'
const Hero = () => {
  return (
    <section className='space-y-10'>
        <Herocard
        />
        <Switcher/>
    </section>
  )
}

export default Hero