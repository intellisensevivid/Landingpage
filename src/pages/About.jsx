import React from 'react'
import Navbar from '../components/common/Navbar'
import aboutbg1 from '../assets/aboutbg1.jpg'
import '../../styles/about.css'

function About() {
  return (
    <div>
        <Navbar/>


      
        <div className='aboutbg1 bg-red-300 py-[60px] px-[5vw] md:h-[500px] h-[230px] text-center md:pt-[180px] pt-[80px]' style={{ backgroundImage: `url(${aboutbg1})` }}>
            <h1 className='font-bold md:text-[55px] text-[24px]  text-yellow-500'>GET TO KNOW US</h1>
            <p className='font-bold md:text-[26px] text-[15px] text-neutral-50'>Boost your financial firm's online presence with our top-notch IT support services.</p>
        </div>


    </div>
  )
}

export default About