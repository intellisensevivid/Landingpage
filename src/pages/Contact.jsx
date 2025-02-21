import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import contact from '../assets/contact.png'
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';
import contactimg from '../assets/contactimg.jpg'
import contactBackground from '../assets/contactbg.jpg'
// import '../pages/styles/contact.css'
import '../../styles/contact.css'

function Contact() {

  
  return (
    <>
        <Navbar/>

        <div className='contactbg bg-gradient-to-tr from-transparent to-black px-[5vw] md:pt-[180px] pt-[80px] text-center md:h-[500px] h-[230px]' style={{ backgroundImage: `url(${contactBackground})` }}>
            <h1 className='md:text-[55px] text-[24px] font-bold  text-yellow-500'>CONTACT BEMATRON</h1>
            <h3 className='font-bold md:text-[26px] text-[15px] text-neutral-300'>Reach out to us for your project enquiries, complaints and partnership</h3>
        </div>




      <div className='px-[5vw] py-[70px] bg-neutral-8 00 text-center h-fit flex flex-wrap gap-6'>
             
            <div className='bg-neutral-100 p-4 py-[40px] md:w-[60%] w-[full] rounded-[8px] shadow'> 
            <h1 className='md:text-[40px] text-[22px] font-bold p-2 text-left'>Get a free quote</h1>
              <form action="" className='w-[100%] bg-neutral-100 p-2'>
                  <input type="text" name="" id="" className='w-[100%] md:h-[60px] h-[40px] bg-transparent border-neutral-400 text-neutral-600 border-[1px] outline-none md:pl-[20px] pl-[15px] rounded-[9px] focus:border-[1px] focus:border-yellow-500' placeholder='First & Last Name' required/><br /><br />
                  <input type="email" name="" id="" className='w-[100%] md:h-[60px] h-[40px] bg-transparent border-neutral-400 text-neutral-600 border-[1px] outline-none md:pl-[20px] pl-[15px] rounded-[9px] focus:border-[1px] focus:border-yellow-500' placeholder='Email' required/><br /><br />
                  <input type="text" name="" id="" className='w-[100%] md:h-[60px] h-[40px] bg-transparent border-neutral-400 text-neutral-600 border-[1px] outline-none md:pl-[20px] pl-[15px] rounded-[9px] focus:border-[1px] focus:border-yellow-500' placeholder='Country' required/><br /><br />

                  <div className='flex flex-wrap gap-3  w-[100%] justify-between   rounded-[8px]'>

                      <div className='flex flex-wrap gap-[30px] w-[100%] justify-between items-center'>
                          <select name="" id="" className='md:w-[45%] w-[100%]  md:h-[60px] h-[40px] bg-transparent border-neutral-400 border-[1px] outline-none  md:pl-[20px] pl-[15px] rounded-[8px] focus:border-[1px] focus:border-yellow-500'>
                            <option value="">Where did you find us ?</option>
                            <option value="">Google search</option>
                            <option value="">Facebook</option>
                            <option value="">Twitter</option>
                            <option value="">LinkedIn</option>
                            <option value="">Instagram</option>
                            <option value="">Email</option>
                            <option value="">Others</option>
                          </select>



                          <select name="" id="" className='md:w-[45%] w-[100%] md:h-[60px] h-[40px] bg-transparent border-neutral-400 border-[1px] outline-none  md:pl-[20px] pl-[15px] rounded-[8px] focus:border-[1px] focus:border-yellow-500'>
                            <option value="">What is your budget ?</option>
                            <option value="">$1,000 - $5,000</option>
                            <option value="">$5,000 - $10,000</option>
                            <option value="">$10,000 - $30,000</option>
                            <option value="">$30,000 - $50,000</option>
                            <option value="">$50,000 - $100,000</option>
                            <option value="">$100,000+</option>
                          </select>
                       </div>
                   </div><br />

                  <input type="text" name="" id="" className='md:h-[150px] h-[100px] w-full bg-transparent outline-none focus:border-[1px] focus:border-yellow-500 p-[15px] border-[1px] border-neutral-400 rounded-[8px]' placeholder='Message'/><br /><br />

                <div className='text-left'>
                  <button className='font-bold bg-[#daa913] rounded-[5px] md:h-[50px] h-[40px] md:px-[25px] px-[15px] hover:bg-black hover:text-yellow-500'>Send a message</button>
                </div>

              </form>
            </div> <br />


            <div className='shadow md:w-[35%] w-[full] bg-neutral-100 rounded-[8px] p-2 m-auto'>
                <img src={contactimg} alt="" className='rounded-[6px] border-[1px]'/>

                <div className='text-left py-[20px]'>
                  <h2 className='font-bold text-[25px]'>What next ?</h2>
                  <p className='pb-[10px]'>1. </p>
                  <p className='pb-[10px]'>2.</p>
                  <p className='pb-[10px]'>3.</p>
                  <p className='pb-[10px]'>4.</p>
                  <p className='pb-[10px]'>5.</p>
                </div>
            </div>
      </div>


      {/* Have an idea or project? */}
      <section className='md:pt-[100px] rounded-tl-[30px] rounded-tr-[30px] pt-[60px] pb-[100px] px-[1vw] md:px-[5vw] bg-neutral-200 h-fit flex flex-wrap gap-[25px] items-center justify-between'>
                <img src={contact} alt="" className='h-[400px] m-auto'/>

                <div className='h-fit md:w-[550px] w-[100%] text-center rounded-[12px] p-[10px] bg-slate-800 py-[25px]'>
                    <h3 className='text-[#daa913] font-bold md:text-[40px] text-[28px] mb-[20px]'>Tell us about your project</h3>
                    <p className='md:text-[18px] text-[16px] text-neutral-400 mb-[30px]'>"Got an idea or project in mind? Reach out to us today or schedule an appointment.
                    Our dedicated representatives are standing by to assist you, and we'll get back to you promptly!"</p>
  

                    <div className='flex flex-wrap items-center justify-evenly '>
                       <span className='md:p-4 p-2 rounded-[15px] bg-black flex items-center gap-[20px]  text-neutral-400 md:border-none border-[1px] border-neutral-700'>
                          <a href='https://wa.me/=2349017105774'> <FaWhatsapp className='md:text-[52px] text-[22px] text-neutral-400'/></a>
                          <a href='https://wa.me/+2349017105774'> <p className='hover:underline hover:text-[#daa913]'>+234 901 710 5774</p></a>
                        </span> 


                        <span className='md:p-4 p-2 rounded-[15px] bg-black flex items-center gap-[20px]  text-neutral-400 md:border-none border-[1px] md:mt-0 mt-[15px] border-neutral-700'>
                          <a href='https://t.me/Emmyquincy2'> <FaTelegram className='md:text-[52px] text-[22px] text-neutral-400'/></a>
                          <a href='https://t.me/Emmyquincy2'> <p className='hover:underline hover:text-[#daa913]'>+234 901 710 5774</p></a>
                        </span> 
                    </div>
                </div>
          </section>






      <Footer/>
    </>
  )
}

export default Contact