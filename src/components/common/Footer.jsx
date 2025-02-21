import React from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Footer() {
  
 
  return (

    <div className='bg-black md:px-[4vw] px-[3vw] md:pb-[30px]  pb-[15px]'>
          <div className='flex gap-[22px] flex-wrap justify-between md:pt-[40px] pt-[30px] md:pb-[25px] pb-[10px]  bg-black'>

            <div className='w-fit'>
                <h3 className='font-bold md:text-[20px] text-[18px] text-yellow-500 md:pb-[22px] pb-[17px]'>Company</h3>
                <Link to='/'>
                  <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Homepage</p>
                </Link>

                <Link to='/'>
                  <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>About Us</p>
                </Link>

                <Link to='/'>
                  <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Services</p>
                </Link>

                <Link to='/'>
                  <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Expert Team</p>
                </Link>

                <Link to='/'>
                  <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Success stories</p>
                </Link>
            </div>




                    {/* CONTACT */}
              <div className='w-[255px] pt-[4px]'>
                <h3 className='font-bold md:text-[20px] text-[18px] text-yellow-500 md:pb-[22px] pb-[17px]'>Contact</h3> 

              <div className='flex items-center md:gap-[20px] gap-[10px] md:mb-[20px] mb-[15px]'>
                  <FaMapMarkerAlt className='text-yellow-500 md:text-[20px] text-[16px]'/>

                    <p className='text-neutral-300 md:text-[15px] text-[14px]'>374 FA Tower USA <br />
                    Nigeria.</p>
              </div>


              <div className='flex items-center md:gap-[20px] gap-[10px] md:mb-[20px] mb-[15px]'>
                  <FaPhone className='text-yellow-500 md:text-[20px] text-[16px]'/>

                  <a href="tel:+2349025367017" class='text-neutral-300 md:text-[15px] text-[14px]'>(+880)155-69569</a>
              </div>


              <div className='flex items-center md:gap-[20px] gap-[10px] md:mb-[20px] mb-[15px]'>
                  <FaEnvelope className='text-yellow-500 md:text-[20px] text-[16px]'/>

                  <a href="http://mail to:">
                    <p className='text-neutral-300 md:text-[15px] text-[14px]'>Support@bematron.com</p>
                  </a>
              </div>


              <div className='flex items-center md:gap-[20px] gap-[10px] md:mb-[20px] mb-[15px]'>
                    <FaClock className='text-yellow-500 md:text-[20px] text-[16px]'/>

                    <p className='text-neutral-300 md:text-[15px] text-[14px]'> Opening Hours:  8:00am - 6:00pm</p><br />
              </div> 
              </div>



            



            <div className='w-fit pt-[4px]'>
              <h3 className='font-bold md:text-[18px] text-[18px] text-yellow-500 md:pb-[22px] pb-[17px]'>What we do</h3>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Web development</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Database Mgt</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Product Design <br/>& UI/UX Design</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Mobile App development</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Software development</p>
              </Link>

                <Link to='/'>
                  <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Cybersecurity</p>
                </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Data Analytics</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Project Mgt.</p>
              </Link>

            
            </div>




            <div className='w-fit pt-[4px]'>
              <h3 className='font-bold md:text-[18px] text-[18px] text-yellow-500 md:pb-[22px] pb-[17px]'>Technology</h3>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Java, C#, C++, Python</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>React, PHP, Springboot, CSS</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>MySql, NodeJS, ExpressJS</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>VueJS, Angular, Flutter</p>
              </Link>


              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Kotlin, Dart, Swift</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'>Azure, PostgreSQL, Etc</p>
              </Link>

              <Link to='/'>
                <p className='md:pb-[20px] pb-[15px] text-neutral-300 md:text-[15px] text-[14px] hover:underline'></p>
              </Link>
            </div>




            {/* <div className='w-[280px]  pt-[15px] text-left md:pb-[2px] pb-[10px]'>

                <div className='flex items-center md:gap-[25px] gap-[20px] h-[45px] p-2'>
                    <Link to="https://wa.me/+2349025367017"> <FaWhatsapp className='md:text-[28px] text-[22px] text-fuchsia-300 md:hover:text-[32px] hover:text-[25px]'/></Link>
                    <Link to="https://twitter.com/vaa_global"><FaTwitter className='md:text-[28px] text-[22px] text-fuchsia-300 md:hover:text-[32px] hover:text-[25px]'/></Link>
                    <Link to="https://www.instagram.com/vaa_global/ "><FaInstagram className='md:text-[28px] text-[22px] text-fuchsia-300 md:hover:text-[32px] hover:text-[25px]'/></Link>
                    <Link to="https://ng.linkedin.com/company/virtualassistanceacademy"><FaLinkedin className='md:text-[28px] text-[22px] text-fuchsia-300 md:hover:text-[32px] hover:text-[25px]'/></Link>
                </div>
            </div> */}
          </div>


          <p className='text-neutral-300 md:text-[15px] text-[12px]'>Copyright © {new Date().getFullYear()}. All rights reserved.</p><br />
     </div>

  )
}

export default Footer