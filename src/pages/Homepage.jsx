import React from 'react'
import Navbar from '../components/common/Navbar'
import backgroundImage from '../assets/bgimage2.jpg';
import '../../styles/Homepage.css'
import globe from '../assets/globe.jpg'
import Footer from '../components/common/Footer'
import Questions from '../components/Accordion/Questions';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'


// section - 2 images 
import yellowsvg1 from '../assets/yellowsvg1.jpg'
import yellowsvg2 from '../assets/yellowsvg2.jpg'
import yellowsvg3 from '../assets/yellowsvg3.jpg'


//  Section - 3 (About) images 
import about from '../assets/about.jpg'


// services images 
import web from '../assets/web.jpg'
import database from '../assets/database.jpg'
import uiux from '../assets/uiux.jpg'
import mobileapp from '../assets/mobileapp.jpg'
import dataanalytics from '../assets/dataanalytics.jpg'
import softwaredevelopment from '../assets/softwaredevelopment.jpg'
import cybersecurity from '../assets/cybersecurity.jpg'
import techstack from '../assets/techstack.png'


//Industries we serve
import media from '../assets/media.png'
import education from '../assets/education.png'
import healthcare from '../assets/healthcare.png'
import hitech from '../assets/hitech.png'
import manufacturing from '../assets/manufacturing.png'
import travel from '../assets/travel.png'
import mining from '../assets/mining.png'
import fintech from '../assets/fintech.png'
import logistics from '../assets/logistics.png'
import construction from '../assets/construction.png'
import ecommerce from '../assets/ecommerce.png'
import utilities from '../assets/utilities.png'

import whychooseus from '../assets/whychooseus.jpg'
import contact from '../assets/contact.png'

import { FaArrowRight, FaRocket, FaCheckCircle, FaUsers, FaUserTie, FaLightbulb, FaWhatsapp, FaTelegram } from 'react-icons/fa';

 const ContainerVariants = {
    hidden: {
        y: -250
    },
    visible: {
        y: 10
    }
 }

 const nextVariants = {
    hidden: {
        opacity: 0 
    },
    visible: {
        opacity: 1, 
    }
 }


  //scroll reveal
  const Homepage = () => {
    const ScrollRevealVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

    const slideInVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      };

  return (
        <>
             {/* Navbar  */}
              <Navbar/> 

        {/* SECTION-1  */}
        <section
        className='bg-custom-image md:pt-[100px] pt-[55px] px-[5vw] md:pb-[175px] pb-[150px]  h-fit  bg-cover bg-no-repeat bg-center'  
        style={{ backgroundImage: `url(${backgroundImage})` }} >
        
           <div className='p-2'>
             
              <motion.h2
                 initial="hidden"
                 animate="visible"
                 variants={ContainerVariants}
                 className='text-neutral-800 font-mono text-center md:p-[8px] p-[6px] bg-[#daa913] rounded-[4px] text-[13px] md:text-[20px] w-fit'> ~ At DEX we don't just solve problems, we create possibilities ~ </motion.h2><br />

              <motion.h1
                  variants={nextVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: '0.6', type: 'spring', mass: 0.4, staggerChildren: 0.9 }}
                  className='md:text-[84px] text-[36px]  text-white font-bold'>IT Solutions <br /> <span className='text-[#daa913] md:text-[90px] text-[36px]'>&</span> Technology
              </motion.h1>


              <motion.p
                     initial="hidden"
                     animate="visible"
                     variants={ContainerVariants}

                 className='text-neutral-50 md:text-[16px] text-[15px] rounded-[8px]  mt-[10px]'>As industry leaders in tech solutions, we harness expertise to craft tailored <br /> innovations, driving businesses forward. Our commitment? Empowering success <br /> through cutting-edge technology, every step of the way.
              </motion.p><br />

               <Link to="/contact">
                 <motion.button initial={{ x: -250 }}
                    animate={{ x: -10,  }}     
                    whileHover={{scale: [1,1.1,1,1.1,1,1.1,1]} }                  
                    className='md:h-[50px] h-[48px] w-fit font-bold md:text-[18px] text-[15px] bg-[#daa913] md:px-[40px] px-[20px] hover:bg-black hover:text-[#daa913] hover:border-2 hover:border-[#daa913] hover:transition-[all-ease]'>Get a free quote</motion.button></Link>
           </div>
            
        </section>




             {/* SECTION 2 */}
         <section
         className='w-[100vw] pb-[50px] text-center h-fit m-auto mt-[-80px]'>
           <div className='m-auto w-[98vw] md:p-2 p-1  flex flex-wrap justify-between md:gap-[30px] gap-[20px] 2xl:w-[1200px]'>
            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
             transition={{ duration: 0.6 }}
             variants={ScrollRevealVariants}
            className='section-2-container m-auto hover:border-[1px] border-yellow-600 md:h-[170px] h-[130px] bg-white md:w-fit w-[85%] p-4 shadow'>
                <div className='gap-4 md:h-[80px] h-[50px] w-[290px] m-auto flex'>
                    <img src={yellowsvg1} alt="" />
                    <h2 className='font-bold md:text-[22px] text-[18px] h-fit mt-[15px] '>Innovation</h2>
                </div>

                <div className='h-[70px] w-[280px] m-auto  text-left'>
                    <p className='text-[14px]  text-neutral-500 mt-[10px] text-left'>Empowering tomorrow's possibilities through relentless innovation</p>
                </div>
            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              variants={ScrollRevealVariants}
            className='section-2-container hover:border-[1px] border-yellow-600 m-auto md:h-[170px] h-[130px] md:w-fit w-[85%] bg-white p-4 shadow'>
                <div className='flex gap-4 md:h-[80px] h-[50px] w-[290px] m-auto'>
                    <img src={yellowsvg2} alt="" />
                    <h2 className='font-bold md:text-[22px] text-[18px] h-[70px] mt-[5px]'>Reliability <br /> & Security</h2>
                </div>


                <div className='h-[70px] w-[280px] m-auto text-left'>
                    <p className='text-[14px] text-neutral-500 mt-[10px] text-left pr-[10px]'>Ensuring trust through robust reliability and security measures.</p>
                </div>
            </motion.div>


            <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
             transition={{ duration: 0.6 }}
             variants={ScrollRevealVariants}
            className='section-2-container hover:border-[1px] border-yellow-600 m-auto md:h-[170px] h-[130px] md:w-fit w-[85%] bg-white px-4 p-4 shadow'>
                <div className='flex gap-4 text-left md:h-[80px] h-[50px] w-[290px] m-auto'>
                    <img src={yellowsvg3} alt="" />
                    <h2 className='font-bold md:text-[22px] text-[18px] h-[70px] mt-[5px] w-[120px]'>Scalability & Growth</h2>
                </div>

                <div className='h-[70px] w-[280px] m-auto text-left'>
                    <p className='text-[14px] text-neutral-500 mt-[10px] text-left'>Unleashing limitless potential through scalable solutions and growth.</p>
                </div>
            </motion.div>
          </div> 
         </section>



         {/* SECTION - 3 ---- ABOUT OUR COMPANY */}
         <section
         className='px-[5vw] md:py-[100px] py-[50px] flex flex-wrap gap-6 '>
             <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    variants={ScrollRevealVariants}
             className='bg-neutral-400  border-l-8 border-yellow-600 m-auto md:h-[650px] h-[400px] w-[500px] sm:flex-grow md:flex-grow-0 '>
                <img src={about} alt="" className='md:h-[590px] h-[390px] md:w-[490px] w-[400px] mt-[-10px] m-auto'/>
             </motion.div>


              <div className=' m-auto md:p-4 p-[5px] h-fit pb-[30px] mt-[25px] sm:flex-grow md:flex-grow-0 md:w-[535px] w-[90vw] basis-[535px]'>
                <motion.h3 
                       initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        variants={ScrollRevealVariants}
                
                className='font-bold text-yellow-600 md:text-[15px] text-[14px] mb-[20px]'>~ ABOUT OUR COMPANY ~</motion.h3>
                <motion.h1 
                       initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        variants={ScrollRevealVariants}
                
                className='font-bold md:text-[40px] text-[24px]'>We empower Individuals and Businesses with <br /> Next-level  IT solutions</motion.h1><br />
                <motion.p  
                       initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        variants={ScrollRevealVariants}
                
                className='text-neutral-600 font-mono text-[14px]'> As a leading tech solution provider, we specialize in delivering cutting-edge software solutions, web development services, and IT consulting expertise tailored to meet the unique needs of businesses across diverse industries..</motion.p> <br /> <br />
                <motion.p  
                       initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        variants={ScrollRevealVariants}
                
                className='font-mono text-neutral-600 text-[14px]'>At the heart of our mission lies empowering individuals and businesses through digital transformation, unlocking their full potentials and enabling them to thrive in an ever-evolving technological landscape.</motion.p>

               

                <div className='mt-[30px] pl-[3px]  md:p-4 p-[5px] pt-[] h-fit w-[100%]  gap-[20px] flex flex-wrap'>
                        <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: false }}
                              transition={{ duration: 0.6 }}
                              variants={slideInVariants}
                        
                        className='md:h-[110px] border-t-[1px] border-yellow-600 md:w-[380px] h-fit w-[100%] flex gap-1 p-1 shadow'>
                            <div className=' w-[90px] pt-[22px] '>
                            <FaRocket className='m-auto text-[50px] text-yellow-600'/>
                            </div>

                            <motion.div
                                 initial="hidden"
                                 whileInView="visible"
                                 viewport={{ once: false }}
                                 transition={{ duration: 0.6 }}
                                 variants={slideInVariants}
                            
                            className=' md:w-[290px] mt-[5px] bg-neutral-100 h-fit w-full p-2'>
                                <h1 className='font-bold text-[18px]'>Manage Tech Services</h1>
                                <p className='text-[12px] mt-2 text-neutral-600'>We’ve designed a culture that allows our stewards to assimilate</p>
                            </motion.div>
                        </motion.div>
                </div>
             </div> 
         </section>





    

         {/* SECTION - 4 ------ SERVICES WE OFFER  */}
         <section
         
         className='px-[5vw] bg-white h-fit pt-[50px] py-[50px] text-center'>
            <motion.h3
             initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    variants={ScrollRevealVariants}
            className='text-yellow-600 font-bold md:text-[15px] text-[14px] mb-[20px]'>~ OUR COMPREHENSIVE TECH SOLUTIONS ~</motion.h3>
            <motion.h1h3
             initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    variants={ScrollRevealVariants}
            className='md:text-[43px] text-[24px] font-bold mb-[10px]'>High quality products and services that we offer</motion.h1h3>

            <motion.div
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: false }}
                   transition={{ duration: 0.6 }}
                   variants={ScrollRevealVariants}
            
            className='px-[20px] h-fit py-[40px] flex flex-wrap gap-[15px] 2xl:w-[1200px] m-auto'>
               
                 <div className='border-[1px] border-neutral-300  md:basis-[255px] basis-[230px] flex-grow p-1 h-[320px] m-auto rounded-[10px] shadow'>
                   <div className='h-[150px] text-left w-full hover:overflow-hidden'>
                     <img src={web} alt="image" className='h-[inherit] w-[inherit] rounded-[8px] hover:scale-[1.1] hover:transition-[all-linear-0.12s]'/>
                    </div>
                    <h1 className='p-1 text-[20px] font-bold text-left mt-[12px] ml-[12px]'>Web Development</h1>
                    <p className='md:text-[14px] text-[13px] text-neutral-600 text-left ml-[15px]'>We design and build fullstack websites and web Apps of all complexity levels for businesses.</p>
                    <div className='flex items-center pt-[10px] text-neutral-700 text-left ml-[15px] text-[14px] font-bold' >see more &nbsp; <FaArrowRight className='text-yellow-600'/></div>
                 </div>


                 
                 <div className='border-[1px] border-neutral-300 p-1 md:basis-[255px] basis-[230px] flex-grow h-[320px] m-auto rounded-[10px] shadow'>
                    
                    <div className='h-[150px] w-full hover:overflow-hidden'>
                      <img src={database} alt="image" className='h-[inherit] w-[inherit] rounded-[8px] hover:scale-[1.1] hover:transition-[all-linear-0.12s]'/>
                    </div>
                      <h1 className='p-1 text-[20px] text-left font-bold mt-[12px] ml-[12px]'>Database Management</h1>
                      <p className='md:text-[14px] text-[13px] text-neutral-600 text-left ml-[15px]'>Seamlessly Manage Your Database Infrastructure with Precision and Performance.</p>
                      <div className='flex items-center pt-[10px] text-neutral-700 text-left ml-[15px] text-[14px] font-bold' >see more &nbsp; <FaArrowRight className='text-yellow-600'/></div>
                    </div>
                 


                 
                 <div className='border-[1px] border-neutral-300 p-1 md:basis-[255px] basis-[230px] flex-grow h-[320px] m-auto rounded-[10px] shadow'>
                    
                    <div className='h-[150px] w-full hover:overflow-hidden'>
                     <img src={uiux} alt="image" className='h-[inherit] w-[inherit] rounded-[8px] hover:scale-[1.1] hover:transition-[all-linear-0.12s]'/>
                    </div>
                    <h1 className='p-1 text-[20px] text-left font-bold mt-[12px] ml-[12px]'>UI/UX Design</h1>
                    <p className='md:text-[14px] text-[13px] text-neutral-600 text-left ml-[15px]'>We can elevate Your Brand with Intuitive Product Design and Cutting-edge UI/UX Solutions.</p>
                    <div className='flex items-center pt-[10px] text-neutral-700 text-left ml-[15px] text-[14px] font-bold' >see more &nbsp; <FaArrowRight className='text-yellow-600'/></div>
                 </div>


                 
                 <div className='border-[1px] border-neutral-300 p-1 basis-[255px] flex-grow md:h-[320px] h-fit m-auto rounded-[10px] shadow'>
                   
                    <div className='h-[150px] w-full hover:overflow-hidden'>
                     <img src={mobileapp} alt="image" className='h-[inherit] w-[inherit] rounded-[8px] hover:scale-[1.1] hover:transition-[all-linear-0.12s]'/>
                    </div>
                    <h1 className='p-1 text-[20px] text-left font-bold mt-[12px] ml-[12px]'>Mobile App Development</h1>
                    <p className='md:text-[14px] text-[13px] text-neutral-600 text-left ml-[15px]'> We deliver tailored Mobile App Development Solutions to Propel Your Business Forward.</p>
                    <div className='flex items-center pt-[10px] text-neutral-700 text-left ml-[15px] text-[14px] font-bold md:mb-[0px] mb-[19px]' >see more &nbsp; <FaArrowRight className='text-yellow-600'/></div>
                 </div>


                 
                 <div className='border-[1px] border-neutral-300 p-1 basis-[255px] flex-grow h-[320px] m-auto rounded-[10px] shadow'>
                    
                    <div className='h-[150px] w-full hover:overflow-hidden'>
                     <img src={softwaredevelopment} alt="image" className='h-[inherit] w-[inherit] rounded-[8px] hover:scale-[1.1] hover:transition-[all-linear-0.12s]'/>
                    </div>
                    <h1 className='p-1 text-[20px] text-left font-bold mt-[12px] ml-[12px]'>Software Development</h1>
                    <p className='md:text-[14px] text-[13px] text-neutral-600 text-left ml-[15px]'>From Concept to Deployment, We're Your Trusted Partner in Software Development Excellence.</p>
                    <a href=""></a><div className='flex items-center pt-[10px] text-neutral-700 text-left ml-[15px] text-[14px] font-bold' >see more &nbsp; <FaArrowRight className='text-yellow-600'/></div>
                 </div>
                 {/* use <Link> to wrap the see more div  */}


                 
                   <div className='border-[1px] border-neutral-300 p-1 basis-[255px] flex-grow h-[320px] m-auto rounded-[10px] shadow'>
                    
                        <div className='h-[150px] w-full hover:overflow-hidden'>
                        <img src={cybersecurity} alt="image" className='h-[inherit] w-[inherit] rounded-[8px] hover:scale-[1.1] hover:transition-[all-linear-0.12s]'/>
                        </div>
                        <h1 className='p-1 text-[20px] text-left font-bold mt-[12px] ml-[12px]'>CyberSecurity</h1>
                        <p className='md:text-[14px] text-[13px] text-neutral-600 text-left ml-[15px]'>Fortify Your Systems with Robust Cybersecurity Measures and Proactive Threat Management.</p>
                        <div className='flex items-center pt-[10px] text-neutral-700 text-left ml-[15px] text-[14px] font-bold' >see more &nbsp; <FaArrowRight className='text-yellow-600'/></div>
                   </div>


                 
                 <div className='border-[1px] border-neutral-300 p-1 basis-[255px] flex-grow h-[320px] m-auto rounded-[10px] shadow'>
                    
                    <div className='h-[150px] w-full hover:overflow-hidden'>
                     <img src={web} alt="image" className='h-[inherit] w-[inherit] rounded-[8px] hover:scale-[1.1] hover:transition-[all-linear-0.12s]'/>
                    </div>
                    <h1 className='p-1 text-[20px] text-left font-bold mt-[12px] ml-[12px]'>Project Management</h1>
                    <p className='md:text-[14px] text-[13px] text-neutral-600 text-left ml-[15px]'>We deliver expert Project Management to Ensure Seamless Execution and Timely Delivery.</p>
                    <div className='flex items-center pt-[10px] text-neutral-700 text-left ml-[15px] text-[14px] font-bold' >see more &nbsp; <FaArrowRight className='text-yellow-600'/></div>
                 </div>


                 
                 <div className='border-[1px] border-neutral-300 p-1 basis-[255px] flex-grow h-[320px] m-auto rounded-[10px] shadow'>
                    
                    <div className='h-[150px] w-full hover:overflow-hidden'>
                     <img src={dataanalytics} alt="image" className='h-[inherit] w-full rounded-[8px] hover:scale-[1.1] hover:transition-[all-linear-0.12s]'/>
                    </div>
                    <h1 className='p-1 text-[20px] text-left font-bold mt-[12px] ml-[12px]'>Data Analytics</h1>
                    <p className='md:text-[14px] text-[13px] text-neutral-600 text-left ml-[15px]'>Harness the Power of Data Analytics to Drive Business Growth and Innovation.</p>
                    <div className='flex items-center pt-[10px] text-neutral-700 text-left ml-[15px] text-[14px] font-bold' >see more &nbsp; <FaArrowRight className='text-yellow-600'/></div>
                 </div>
            </motion.div>
        </section>





                {/* PROCESS  */}
        <section
        className='bg-black px-[5vw] w-full  h-[fit] py-[50px] gap-4'>
            <div className='2xl:w-[1200px] flex flex-wrap m-auto'>
                <motion.div
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: false }}
                       transition={{ duration: 0.6 }}
                       variants={slideInVariants}
                
                className='md:py-[50px] py-[25px] md:p-[30px] p-[15px]  bg-yellow-600 h-fit md:w-[400px] w-[300px] m-auto'>
                    <h3 className='font-bold md:mb-[10px] mb-[5px]'>OUR WORKING PROCESS</h3>
                    <h1 className='md:text-[35px] text-[26px] md:leading-[45px] leading-[30px] font-bold mb-[15px]'>How we work for our customers</h1>
                     <motion.button
                         whileHover={{ scale: 1.09, boxShadow: "0px 0px 8px black" }}
                        className='w-fit h-fit md:px-[16px] px-[10px] md:py-[12px] py-[8px] rounded-[10px] bg-black text-white md:text-[16px] text-[14px] mb-[25px] hover:border-2 hover:border-black hover:bg-transparent hover:text-black hover:h-[49px] hover:font-bold'>See more</motion.button>
                    <img src={whychooseus} alt="" className='md:h-[220px] h-[160px]'/>
                </motion.div>



             <motion.div
                 initial={{ y: -250, opacity: 0 }}
                 animate={{y: -10, opacity:1 }}
                 whileInView="visible"
                 transition={{ delay: 0.2, duration:0.5, type: 'spring', stiffness: 500}}

              className='m-auto  h-fit md:w-[700px] w-[90%] py-[60px]  flex flex-wrap gap-[20px] md:gap-[30px] p-[4px]'>

                 <motion.div
                       initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.6 }}
                 variants={slideInVariants}
                 
                 className='p-[12px] shadow  border-[1px] border-neutral-500 rounded-[10px] h-fit w-[230px] flex-grow-0 m-auto basis-[295px] md:basis-[270px]'>
                     <h1 className='md:text-[40px] text-[34px] font-bold text-yellow-600'>1.</h1>
                     <h3 className='md:text-[26px] text-[20px] text-white font-bold'>Discovery and Planning</h3>
                     <p className='mt-[10px] text-[14px] text-neutral-400'>The goal is to establish a clear direction for the project and set the foundation for successful execution.</p>
                 </motion.div>


                 <motion.div
                       initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.6 }}
                 variants={slideInVariants}
                 
                 className='p-[12px] shadow  border-[1px] border-neutral-500 rounded-[10px] h-fit w-[230px] flex-grow-0 m-auto basis-[295px] md:basis-[270px]'>
                     <h1 className='md:text-[40px] text-[34px] font-bold text-yellow-600'>2.</h1>
                     <h3 className='md:text-[26px] text-[20px] text-white font-bold'>Design and Development</h3>
                     <p className='mt-[10px] text-[14px] text-neutral-400'>The focus is on creating high-quality, user-friendly solutions that meet client needs and industry standards.</p>
                 </motion.div>


                 <motion.div
                       initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.6 }}
                 variants={slideInVariants}
                 
                 className='p-[12px] shadow  border-[1px] border-neutral-500 rounded-[10px] h-fit w-[230px] flex-grow-0 m-auto basis-[295px] md:basis-[270px]'>
                     <h1 className='md:text-[40px] text-[34px] font-bold text-yellow-600'>3.</h1>
                     <h3 className='md:text-[26px] text-[20px] text-white font-bold'>Deployment and Implementation</h3>
                     <p className='mt-[10px] text-[14px] text-neutral-400'>The emphasis is on ensuring a smooth transition from development to production and making the solution available to end-users.</p>
                 </motion.div>


                 <motion.div
                       initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.6 }}
                 variants={slideInVariants}
                 
                 className='p-[12px] shadow border-[1px] border-neutral-500 rounded-[10px] h-fit w-[230px] flex-grow-0 m-auto basis-[295px] md:basis-[270px]'>
                     <h1 className='md:text-[40px] text-[34px] font-bold text-yellow-600'>4.</h1>
                     <h3 className='md:text-[26px] text-[20px] text-white font-bold'>Support and Maintenance</h3>
                     <p className='mt-[10px] text-[14px] text-neutral-400'>We ensure the solution remains functional, secure, and efficient over time, meeting evolving needs and addressing any issues that arise.</p>
                 </motion.div>
             </motion.div>
             </div>
        </section>







        {/* INDUSTRIES WE SERVE  */}
        <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              variants={ScrollRevealVariants}
        
        className='px-[5vw] h-fit py-[60px]'>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                variants={slideInVariants}
            >
              <h2 className='font-bold text-yellow-600 md:text-[15px] text-[14px]'>~ INDUSTRIES WE SERVE ~</h2><br />
              <h1 className='md:text-[40px] text-[24px] font-bold'>Specialized software solutions tailored to specific <br /> industries</h1><br />
            </motion.div>
            <motion.p
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.6 }}
                 variants={ScrollRevealVariants}
              
            className='md:text-[18px] text-[14px]'>Our team of software development specialists works closely with clients, comprehending their challenges and goals. 
            This collaboration enables us to craft custom software solutions that are both efficient and scalable, catering to diverse.</motion.p><br /><br />

            <div className='h-fit flex flex-wrap  justify-center gap-[12px]'>
                <div className='border-b-[8px]  hover:bg-neutral-200 hover:border-[1px] text-center p-2 md:pt-8 pt-[10px] bg-neutral-100 rounded-[10px] border-yellow-600 h-[140px] md:h-[180px]  basis-[140px] md:basis-[180px]'>
                    <img src={manufacturing} alt="" className='md:h-[60px] h-[70px] m-auto md:mb-[30px] mb-[20px]'/>

                    <p className='md:text-[15px] text-[13px] font-bold '>Manufacturing</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                    <img src={logistics} alt="" className='h-[70px] m-auto md:mb-[30px] mb-[20px]'/>

                    <p className='md:text-[15px] text-[13px] font-bold'>Logistics</p>
                </div>

               



                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                <img src={hitech} alt="" className='h-[60px] m-auto md:mb-[30px] mb-[30px]'/>

                    <p className='md:text-[15px] text-[13px] font-bold'>Hi-tech</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[15px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                    <img src={healthcare} alt="" className='h-[60px] m-auto md:mb-[30px] mb-[25px]'/>

                    <p className='md:text-[15px] text-[13px] font-bold'>Healthcare</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                   <img src={education} alt="" className='h-[60px] m-auto md:mb-[30px] mb-[20px]'/>

                    <p className='md:text-[15px] text-[13px] font-bold'>Education</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                    <img src={media} alt="" className='md:h-[60px] h-[50px] m-auto mb-[13px]'/>

                    <p className='md:text-[15px] text-[12px] font-bold'>Media & Entertainment</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px]  p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 rounded-[10px] shadow border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                    <img src={fintech} alt="" className='h-[60px] m-auto mb-[30px]'/>  

                    <p className='md:text-[15px] text-[13px] font-bold'>FinTech</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 rounded-[10px] shadow border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                    <img src={travel} alt="" className='h-[56px] m-auto md:mb-[30px] mb-[15px]'/>

                    <p className='md:text-[15px] text-[13px] font-bold'>Travel & Hospitality</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                    <img src={mining} alt="" className='h-[60px] m-auto mb-[30px]'/>

                    <p className='md:text-[15px] text-[13px] font-bold'>Mining</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                    <img src={construction} alt="" className='md:h-[60px] h-[65px] m-auto md:mb-[20px] mb-[10px]'/>

                    <p className='md:text-[15px] text-[12px] font-bold'>Real Estate & Construction</p>
                </div>

                
             
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                   <img src={ecommerce} alt="" className='md:h-[60px] h-[60px] m-auto md:mb-[30px] mb-[0px]'/>
                  
                    <p className='md:text-[15px] text-[13px] font-bold'>Retail & E commerce</p>
                </div>

                
                <div className='border-b-[8px] hover:bg-neutral-200 hover:border-[1px] p-2 md:pt-8 pt-[10px] text-center bg-neutral-100 shadow rounded-[10px] border-yellow-600 h-[140px] md:h-[180px] basis-[140px] md:basis-[180px]'>
                    <img src={utilities} alt="" className='md:h-[60px] h-[55px] m-auto md:mb-[10px] mb-[5px]'/>

                    <p className='md:text-[15px] text-[13px] font-bold'>Utilities & On-demand</p>
                </div>
            </div>
        </motion.section>






            {/* TECHNOLOGY STACK  */}
        <section
          className='px-[5vw]  md:py-[100px] py-[40px] bg-white h-fit'>
            <motion.h3
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.6 }}
                 variants={slideInVariants}
            
            className='font-bold text-yellow-600 md:text-[15px] text-[14px] md:mb-[20px] mb-[10px]'>OUR TECHNOLOGY STACK</motion.h3>
            <motion.h2
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.6 }}
                 variants={slideInVariants}
            
            className='md:text-[40px] text-[24px] font-bold md:mb-[20px] mb-[15px]'>See the various technologies we work with</motion.h2>
            <motion.p
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.6 }}
                 variants={slideInVariants}
            
            className='md:text-[18px] text-[14px] md:mb-[65px] mb-[25px]'>We leverage cutting-edge programming languages and frameworks in our technology stack, enabling us to 
                provide tailored software development services and Tech solutions. 
            </motion.p>
            <motion.img
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  variants={slideInVariants}

            src={techstack} alt="" className='w-full'/>
        </section>




         <section
            className='px-[0.5vw] bg-neutral-950  py-[50px] h-fit text-center flex flex-wrap gap-[-3px]'>

                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                variants={ScrollRevealVariants}
                
                className='bg-yellow-600 w-[760px] md:p-4 p-2 md:py-[25px] py-[20px] m-auto'>
                   <h1 className='md:text-[38px] text-[24px] font-bold text-black'>IT Solutions & services <br /> at your Fingertips</h1>
                   <button className='md:h-[54px] h-[36px] md:w-[220px] w-[170px] rounded-[6px] outline-none bg-white border-black md:mt-[30px] mt-[15px] text-[14px] font-bold hover:bg-transparent hover:border-2 hover:border-black'>
                      DISCOVER MORE
                   </button>
                </motion.div>
         </section>





                    {/* WHY CHOOSE US? */}
         <section
           className='px-[5vw] bg-black md:pt-[50px] pt-[25px] md:pb-[50px] pb-[40px] h-fit'>
             <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                variants={ScrollRevealVariants}
             className='md:text-[30px] text-[22px] text-white font-bold 2xl:mb-[70px] mb-[30px] m-auto w-fit'>WHY CHOOSE US?</motion.h1>



        <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              variants={ScrollRevealVariants}

        className='flex flex-wrap gap-[20px] justify-between items-center 2xl:w-[1200px] m-auto'>
           <div>
                <div className='flex gap-2'>
                    <p className=''><FaCheckCircle className='text-[14px] md:text-[17px] text-yellow-600 mt-[4px]'/></p>
                    <p className='text-neutral-300'> We are a trusted IT partner with a proven track record of success.</p>
                </div><br />


                <div className='flex gap-2'>
                    <p className='text-neutral-200'><FaCheckCircle className='text-[14px] md:text-[17px] text-yellow-600 mt-[4px]'/></p>
                    <p className='text-neutral-300'>Our team is comprised of highly skilled and certified professionals.</p>
                </div><br />


                <div className='flex gap-2'>
                    <p className='text-neutral-200'><FaCheckCircle className='text-[14px] md:text-[17px] text-yellow-600 mt-[4px]'/></p>
                    <p className='text-neutral-300'>We offer customized solutions tailored to your specific business needs.</p>
                </div><br />


                <div className='flex gap-2'>
                    <p className='text-neutral-200'><FaCheckCircle className='text-[14px] md:text-[17px] text-yellow-600 mt-[4px]'/></p>
                    <p className='text-neutral-300 md:text-[16px] text-[14px]'>We are committed to providing exceptional customer service and support.</p>
                </div><br />


                
                <div className='flex gap-2'>
                    <p className='text-neutral-200'><FaCheckCircle className='text-[14px] md:text-[17px] text-yellow-600 mt-[4px]'/></p>
                    <p className='text-neutral-300 md:text-[16px] text-[14px]'> We understand the importance of delivering value without compromising on quality. </p>
                </div><br />


                <div className='flex gap-2'>
                    <p className='text-neutral-200'><FaCheckCircle className='text-[14px] md:text-[17px] text-yellow-600 mt-[4px]'/></p>
                    <p className='text-neutral-300 md:text-[16px] text-[14px]'>We believe in transparency in all aspects of our business, including pricing. </p>
                </div><br />
                


                <div className='flex gap-2'>
                    <p className='text-neutral-200'><FaCheckCircle className='text-[14px] md:text-[17px] text-yellow-600 mt-[4px]'/></p>
                    <p className='text-neutral-300 md:text-[16px] text-[14px]'> Our detailed roadmaps and project coordination ensure on-time delivery.</p>
                </div><br />
          </div>  


            <div className='md:h-[350px] h-[230px] md:w-[500px] w-[335px]'>
                <img src={whychooseus} alt="" className='h-[100%] w-[100%] mt-[-20px]'/>
            </div>
        </motion.div>
     </section>

             

        {/* section  */}
        <motion.section
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false }}
               transition={{ duration: 0.8 }}
               variants={ScrollRevealVariants}
        
        className='md:py-[100px] py-[60px] px-[5vw] gap-[14px] md:gap-[18px] 2xl:gap-[24px] flex flex-wrap justify-between  2xl:w-[1200px] m-auto'>
            <motion.div
                  initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              variants={slideInVariants}          

            className='shadow md:h-[220px] h-[150px] border-[1px] border-[#daa913] text-center md:w-[230px] w-[200px] pt-[20px] m-auto'>
                <div className='bg-[#d4d1d1] m-auto md:w-[65px] w-[40px] md:h-[65px] h-[40px] md:pt-[12px] pt-[6px]'>
                   <FaCheckCircle className='md:text-[38px] text-[26px] m-auto'/>
                </div> 

                <h1 className='md:text-[35px] text-[20px] font-bold m-auto md:mt-[8px] mt-[4px] mb-[5px]'>2320</h1>

                <div className='bg-[#daa913] md:w-[185px] w-[170px]  pt-[6px] align-middle items-center md:h-[35px] h-[30px] m-auto text-center'>
                    <p className='md:text-[14px] text-[12px] font-bold'>PROJECTS COMPLETED</p>
                </div>
            </motion.div>



            <motion.div
                  initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              variants={slideInVariants}          

            className='shadow md:h-[220px] h-[150px] border-[1px] border-[#daa913] text-center md:w-[230px] w-[200px] pt-[20px] m-auto'>
                <div className='bg-[#d4d1d1] m-auto md:w-[65px] w-[40px] md:h-[65px] h-[40px] md:pt-[12px] pt-[6px]'>
                   <FaUserTie className='md:text-[38px] text-[26px] m-auto'/>
                </div> 

                <h1 className='md:text-[35px] text-[20px] font-bold m-auto md:mt-[8px] mt-[4px] mb-[5px]'>108</h1>

                <div className='bg-[#daa913] md:w-[185px] w-[170px] pt-[6px] md:h-[35px] h-[30px] m-auto text-center'>
                    <p className='md:text-[14px] text-[12px] font-bold'>IT SPECIALISTS</p>
                </div>
            </motion.div>



            <motion.div
                  initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              variants={slideInVariants}          

            className='shadow md:h-[220px] h-[150px] border-[1px] border-[#daa913] text-center md:w-[230px] w-[200px] pt-[20px] m-auto'>
                <div className='bg-[#d4d1d1] m-auto md:w-[65px] w-[40px] md:h-[65px] h-[40px] md:pt-[12px] pt-[6px]'>
                    <FaUsers className='md:text-[38px] text-[26px] m-auto'/>
                </div> 

                <h1 className='md:text-[35px] text-[20px] font-bold m-auto md:mt-[8px] mt-[4px] mb-[5px]'>89</h1>

                <div className='bg-[#daa913] md:w-[185px] w-[170px] pt-[6px] md:h-[35px] h-[30px] m-auto text-center'>
                    <p className='md:text-[14px] text-[12px] font-bold'>SATISFIED CLIENTS</p>
                </div>
            </motion.div>



            <motion.div
                  initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              variants={slideInVariants}          

            className='shadow md:h-[220px] h-[150px] border-[1px] border-[#daa913] text-center md:w-[230px] w-[200px] pt-[20px] m-auto'>
                <div className='bg-[#d4d1d1] m-auto md:w-[65px] w-[40px] md:h-[65px] h-[40px] md:pt-[12px] pt-[6px]'>
                   <FaLightbulb className='md:text-[38px] text-[26px] m-auto'/>
                </div> 

                <h1 className='md:text-[35px] text-[20px] font-bold m-auto md:mt-[8px] mt-[4px] mb-[5px]'>34</h1>

                <div className='bg-[#daa913] md:w-[185px] w-[170px] pt-[6px]  md:h-[35px] h-[30px] m-auto text-center'>
                    <p className='md:text-[14px] text-[12px] font-bold'> SMART SOLUTION</p>
                </div>
            </motion.div>
        </motion.section>








          {/* SECTION - 5 ------ FORM & ACCORDION*/}
          <motion.section
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: false }}
                 transition={{ duration: 0.8 }}
                 variants={ScrollRevealVariants}
          
                className='px-[5vw] flex flex-wrap gap-4 pb-[100px] md:pt-[50px] pt-[40px]'>

             <div className='bg-black md:w-[580px] w-[100%] m-auto h-fit pb-[25px] p-4 md:px-[56px] px-[9px] md:pt-[50px]' style={{backgroundImage: "url('/path/to/your/image.jpg')"}}> 
                    
                  <div className='border-t-[10px] border-[#daa913] pt-[40px] w-[100%] py-[40px] md:px-[40px] px-[20px] bg-neutral-800'> 
                        <h3 className='text-[#daa913] font-bold mb-[15px]'>CONTACT US</h3>
                        <h1 className='md:text-[40px] text-[28px] font-bold text-neutral-300 mb-[25px]'>Write Email</h1>
                       {/* form */}
                      <form action="" className=''>
                        <input type="text" name="" id="" className='w-[100%] md:h-[60px] h-[40px] bg-transparent border-yellow-600 border-[1px] outline-none md:pl-[20px] pl-[15px] text-neutral-300' placeholder='Name' required/><br /><br />
                        <input type="email" name="" id="" className='w-[100%] md:h-[60px] h-[40px] bg-transparent border-yellow-600 border-[1px] outline-none md:pl-[20px] pl-[15px] text-neutral-300' placeholder='Email' required/><br /><br />
                        <input type="text" name="" id="" className='w-[100%] md:h-[60px] h-[40px] bg-transparent border-yellow-600 border-[1px] outline-none md:pl-[20px] pl-[15px] text-neutral-300' placeholder='Subject' required/><br /><br />
                        <input type="text" name="" id="" className='w-[100%] md:h-[60px] h-[40px] bg-transparent border-yellow-600 border-[1px] outline-none md:pl-[20px] pl-[15px] text-neutral-300' placeholder='Message' required/> <br /><br />

                        <button className='font-bold bg-[#daa913] md:h-[50px] h-[40px] md:px-[25px] px-[15px]'>Send a message</button>

                      </form>
                </div> 
             </div>  


              <motion.div
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: false }}
                   transition={{ duration: 0.6 }}
                   variants={slideInVariants}
              
              className='accordion m-auto md:p-4 p-[5px]  h-fit pb-[30px] md:w-[530px] w-full'>
                 <Questions/>
             </motion.div> 
        </motion.section>




          {/* Have an idea or project? */}
          <section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                variants={ScrollRevealVariants}
          className='md:pt-[100px] rounded-tl-[30px] rounded-tr-[30px] pt-[60px] pb-[100px] px-[1vw] md:px-[5vw] bg-neutral-400 h-fit '>
               
               <div className='flex flex-wrap gap-[25px] items-center justify-center 2xl:w-[1200px] m-auto'>
                <motion.img
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{ duration: 0.6 }}
                      variants={slideInVariants}
                
                src={contact} alt="" className='md:h-[400px] h-[350px] m-auto'/>

                <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{ duration: 0.6 }}
                      variants={ScrollRevealVariants}
                
                className='h-fit md:w-[550px] w-[100%] m-auto text-center rounded-[12px] p-[10px] bg-slate-800 py-[25px]'>
                    <h3 className='text-[#daa913] font-bold md:text-[40px] text-[26px] mb-[20px]'>Tell us about your project</h3>
                    <p className='md:text-[18px] text-[15px] text-neutral-400 mb-[30px]'>"Got an idea or project in mind? Reach out to us today or schedule an appointment.
                    Our dedicated representatives are standing by to assist you, and we'll get back to you promptly!"</p>
  

                    <div className='flex flex-wrap items-center justify-evenly '>
                       <span className='md:p-4 p-[12px] rounded-[15px] bg-black flex items-center gap-[20px]  text-neutral-400 md:border-none border-[1px] border-neutral-700'>
                          <a href='https://wa.me/=2349017105774'> <FaWhatsapp className='md:text-[52px] text-[24px] text-neutral-400'/></a>
                          <a href='https://wa.me/+2349017105774'> <p className='hover:underline hover:text-[#daa913]'>+234 901 710 5774</p></a>
                        </span> 


                        <span className='md:p-4 p-[12px] rounded-[15px] bg-black flex items-center gap-[20px]  text-neutral-400 md:border-none border-[1px] md:mt-0 mt-[15px] border-neutral-700'>
                          <a href='https://t.me/Emmyquincy2'> <FaTelegram className='md:text-[52px] text-[24px] text-neutral-400'/></a>
                          <a href='https://t.me/Emmyquincy2'> <p className='hover:underline hover:text-[#daa913]'>+234 901 710 5774</p></a>
                        </span> 
                    </div>
                </motion.div>
                </div>
          </section>




             {/* WE ARE TRUSTED  */}
         <section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                variants={ScrollRevealVariants}
         
         className='px-[5vw] py-[80px] bg-black text-center'>
          <motion.h1
             initial="hidden"
             whileInView="visible"
             viewport={{ once: false }}
             transition={{ duration: 0.6 }}
             variants={ScrollRevealVariants}
          
          className='font-mono text-center text-yellow-500 md:text-[32px] text-[20px]'>WE ARE TRUSTED BY <br /> INDIVIDUALS AND BUSINESSES ACROSS THE GLOBE</motion.h1>
          <motion.img
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false }}
               transition={{ duration: 0.6 }}
               variants={ScrollRevealVariants}
          
          className='md:h-[350px] h-[160px] m-auto ' src={globe} alt="" />
          <motion.h2
               initial="hidden"
               whileInView="visible"
               viewport={{ once: false }}
               transition={{ duration: 0.6 }}
               variants={slideInVariants}
          
          className='md:text-[34px] text-[20px] font-mono text-yellow-500 m-auto'>YOU TOO CAN TRUST US!</motion.h2>
         </section>







                    {/* CALL-TO-ACTION */}
            <section
            className='px-[5vw] md:py-[40px] py-[35px] bg-[#daa913] flex flex-wrap gap-2 justify-between items-center'>

                <motion.div
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: false }}
                     transition={{ duration: 0.6 }}
                     variants={ScrollRevealVariants}
                
                className=''>
                  <motion.h1
                        initial="hidden"
                     whileInView="visible"
                     viewport={{ once: false }}
                     transition={{ duration: 0.6 }}
                     variants={ScrollRevealVariants}
                  
                  className='font-bold text-black md:text-[24px] text-[20px] m-auto'>READY TO COLLABORATE WITH BEMATRON TECHNOLOGIES?</motion.h1>
                  <motion.h2
                        initial="hidden"
                     whileInView="visible"
                     viewport={{ once: false }}
                     transition={{ duration: 0.6 }}
                     variants={ScrollRevealVariants}
                  
                  className='font-bold text-black md:text-[20px] text-[16px] pt-[12px] m-auto'>We deliver quality to our customers.</motion.h2>
               </motion.div>


               <motion.button
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: false }}
                   transition={{ duration: 0.6 }}
                   variants={slideInVariants}
               
               className='bg-black text-yellow-600 md:hover:border-[3px] hover:border-2 hover:border-black
                hover:text-black hover:bg-transparent rounded-[25px] md:text-[18px] text-[14px] h-fit 
                md:py-[10px] py-[5px] font-bold w-fit md:px-[45px] px-[15px] border-2 border-black'>
                    contact us
               </motion.button>
            </section>





            {/* NEWSLETTER */}
            <section className='px-[5vw] md:py-[100px] py-[60px] text-center bg-black border-b-[1px] border-neutral-700'>
                <motion.h2
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: false }}
                     transition={{ duration: 0.6 }}
                     variants={slideInVariants}
                
                className='font-bold text-[#daa913] md:text-[45px] text-[22px] mb-[20px] font-mono'>Stay in the loop with our monthly newsletter!</motion.h2>
                
                <motion.h3
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: false }}
                      transition={{ duration: 0.6 }}
                      variants={ScrollRevealVariants}
                 
                 className='text-neutral-400 md:text-[22px] text-[15px] md:mb-[50px] mb-[30px]'>Get exclusive updates, industry insights, and special offers delivered straight to your inbox.
                Subscribe now for the latest news and trends in <span className='font-bold text-white'>DEX!</span></motion.h3>

                <span>
                   <input type="text" name="" id="" className='md:h-[50px] h-[40px] md:w-[400px] border-none outline-none p-2' placeholder='Your Email Address' required/> &nbsp; 

                   <button className='md:text-[18px] text-[15px] hover:border hover:border-[#daa913] hover:bg-transparent hover:text-[#daa913] md:h-[50px] bg-[#daa913] h-[40px] px-[25px] text-black font-extrabold outline-none'> Submit </button>
                </span>

            </section>






         {/* FOOTER  */}
         <Footer/>

        </>
  )
}
export default Homepage;