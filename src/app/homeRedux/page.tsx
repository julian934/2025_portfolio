'use client'
import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
//import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Link from 'next/link'
import JB_Profile_Pic from '../utils/images/profile/JB_Professional_Pic.jpg'
import Logo from '../utils/images/logo/Julian_Borner_Logo.png'
import * as motion from "motion/react-client"
//import NextJS from '@/app/utils/images/misc/Next_JS_1.avif'
//import Snippets from '@/app/utils/images/misc/code_snippets.webp'
//import cryptoCurrency from '@/app/utils/images/misc/crypto_1.webp'
import DownwardArrow from '@/app/utils/images/misc/icons8-downward-arrow-66.png'
import GitHub from '@/app/utils/images/misc/icons8-github-50.png'
import LinkedIn from '@/app/utils/images/misc/icons8-linkedin-50.png'
import emailjs from '@emailjs/browser';
import UH_logo from '@/app/utils/images/misc/University_of_Houston_seal.svg.png';
import JSE_Cert from '@/app/utils/images/misc/jse_40_01.png'
import gam3rs_img from '@/app/utils/images/misc/Gam3rs_Web_App.jpg'
import etq_clone_img from '@/app/utils/images/misc/ETQ_Amsterdam_Clone.jpg'
import Head from 'next/head'

//import test_bg from '@/app/utils/images/misc/test-background.jpg'
//type Props = {}

const HomeRedux = () => {
  //const [senderName,setSenderName]=useState<any>();
  //const [email,setEmail]=useState<any>();
 // const [messageData,setMessageData]=useState<any>();
  const userRef=useRef(null);
  const emailRef=useRef(null);
  const messageRef=useRef(null);
  const formRef=useRef<HTMLFormElement>(null);
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  }
  
  const submitData=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    /*
    const sentData={
      name:userRef.current.value,
      email:emailRef.current.value,
      message:messageRef.current.value
    }*/
    await emailjs.sendForm(`${process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!}`,`${process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!}`,formRef.current!,{
      publicKey:process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
    }).then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );

  }
  return (
    <div className='bg-white text-black' >
      <Head>
        <title>I am Julian</title>
        <meta name="description" content="The portfolio of Julian Borner" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Julian Borner – Portfolio" />
        <meta property="og:description" content="The portfolio of Julian Borner" />
        <meta property="og:url" content="https://2025-portfolio-dj667rsh7-julian934s-projects.vercel.app//homeRedux" />
        <meta property="og:image" content="https://2025-portfolio-dj667rsh7-julian934s-projects.vercel.app//Julian_Borner_Logo.png" />
        <meta property="og:type" content="website" />
      </Head>
        <div className=' w-full static h-36 py-4 bg-white border-2 absolute' >
          <div className='flex justify-between w-full absolute' >
            <div className='flex self-center px-4 ' >
            <div className='flex  justify-self-center ' >
                    
                    {/*<Image className='w-24 h-24' src={JB_Profile_Pic} alt="Julian Borner Profile Pic" /> */}
                </div>
                <div className=' self-center md:relative  justify-self-center top-4 md:top-0' >
                  <Link href='/homeRedux' >
                    <Image className='w-40 h-28 md:scale-150  ' src={Logo} alt='Julian Borner Logo' />
                    </Link>
                </div>
                
            </div>
            <div className='flex  justify-between p-6 self-center space-x-6 ' >
                <Link className=' text-yellow-600 text-lg' href='/HomeRedux' >Home</Link>
                <Link className='text-yellow-600 text-lg ' href='#about' >About</Link>
                <Link className=' text-yellow-600 text-lg ' href='#projects' >Projects</Link>
                <Link className=' text-yellow-600 text-lg ' href='#contact' >Contact</Link>

            </div>

          </div>
        </div>
        <div className='h-screen flex ' id='/' >
        <motion.div className='md:flex md:flex-col max-sm:relative max-sm:top-96 max-sm:h-28 max-sm:w-28 justify-start self-center max-sm:self-start z-50 bg-yellow-600 p-2 space-y-4  rounded-lg ml-4 '  >
           <Link className='max-sm:relative hover:bg-white  max-sm:h-12 max-sm:w-28 rounded-md' href='https://github.com/julian934' >
            <Image className='max-sm:h-12 max-sm:w-28' src={GitHub} alt='gitHub' />
           </Link>
          <Link className='hover:bg-white rounded-md' href='https://www.linkedin.com/in/julian-borner-709b91b7/' >
            <Image className='max-sm:h-full max-sm:w-full' src={LinkedIn} alt='LinkedIn' />
          </Link>
          
        </motion.div>
        <div className='flex flex-col max-sm:relative  justify-center w-full space-y-4 ' >
          <div className='flex max-sm:w-full flex-col md:self-center md:justify-self-center ' >
            <div className='relative  md:self-center max-sm:-top-36  ' >
            <h1 className='flex text-yellow-600  max-sm:justify-center md:text-center text-6xl md:text-7xl  md:top-60 md:-left-20 max-sm:top-20 absolute  w-96 max-sm:w-full' >
              I am 
              </h1>
            </div>
          
          <div className='md:w-full max-sm:h-fit max-sm:w-screen md:relative md:-left-28 max-sm:-left-14  max-sm:relative   self-center  ' >
          <Image className='md:w-full   md:h-full max-sm:scale-150 '  src={Logo} alt='Julian Borner Logo' />
          </div>
          </div>
            
              <p className='flex max-sm:relative max-sm:top-28 self-center  max-sm:w-5/6 justify-self-center max-sm:justify-self-end text-xl' >A Result-Oriented Web Developer that specializes in 
                building, managing and maintaining full-stack applications.
              </p>
              <Link className=' shadow-lg hover:shadow-xl  hover:scale-125 max-sm:relative max-sm:top-48 justify-self-center self-center flex w-24 h-10 bg-yellow-600 text-center text-white rounded-lg' href='#projects'>
               <h1 className='w-full  self-center flex text-center justify-center text-white md:text-lg' >Projects</h1>
                </Link>
              <motion.div className='flex justify-center self-center max-sm:relative max-sm:top-60 md:-top-10' transition={transition} >
                <Link href='#about' >
                
                <Image className='flex hover:scale-125 bg-yellow-600 rounded-lg hover:bg-white ' src={DownwardArrow} alt='Downward Arrow' />
                </Link>
                 </motion.div>
        </div>
          
          

        </div>
        <div className='md:h-screen  bg-slate-100 ' id='about'  >
            <div className='flex flex-col self-center w-full p-4  space-y-2 ' >
               <h1 className='flex justify-center self-center text-yellow-600 text-5xl' >About Me</h1>
                  <hr className='flex self-center w-60 bg-black ' />
                 <p className='flex w-1/3 max-sm:w-5/6 self-center text-lg ' >Here you will find more information about me, what I do, and my current skills mostly in terms 
                    of programming and technology.</p> 
            </div>
            <div className='flex w-full max-sm:flex-col  ' >
                <div className='flex flex-col p-4 w-1/2   max-sm:w-full' >
                    <Image className='flex max-sm:w-3/4 max-sm:h-3/4 max-sm:self-center rounded-sm md:rounded-md' src={JB_Profile_Pic} alt='Profile Pic' />
                     <div className='flex flex-col   p-4 w-5/6 max-sm:w-full  bg-slate-100 rounded-md' >
                         <div className='flex w-1/2 self-center justify-around ' >
                            <Image className='w-44 h-44 max-sm:h-20 max-sm:w-20 ' src={UH_logo} alt='University of Houston Seal' />
                            <Image className='w-44 h-44  max-sm:h-20 max-sm:w-20 ' src={JSE_Cert} alt='JSE-40' />
                         </div>
                         <div className='flex flex-col max-sm:w-full max-sm:justify-self-between   justify-around p-4 w-5/6 self-center  ' >
                         <Link className=' shadow-lg hover:shadow-xl hover:scale-125  justify-self-center self-center flex w-32 h-10 bg-yellow-600 text-center text-white rounded-lg' href='#contact'> <h1 className='w-full  self-center flex text-center justify-center text-white' >Contact Me</h1> </Link>
                        
                      
                      </div>
                      
                      </div>
                     
                </div>
                <div className='flex flex-col space-y-2  w-1/2 max-sm:w-full p-4' >
                    <h1 className='flex self-center text-yellow-600 text-3xl' >Get to know me!</h1>
                    <p className='flex self-center text-lg max-sm:text-wrap md:px-10 ' >I graduated from the University of Houston in August of 2023 with a Bachelor&apos;s of Science in Digital Media from 
                      the Cullen College of Engineering and received my certification for entry-level web development from the JavaScript Institute. I specialize in full-stack web development using React and Next.js, and UI/UX design 
                       using Figma. I create and build functional web applications and intuitive User Interfaces that generate revenue for your business, helping it grow exponentially. I&apos;m open to Job opportunities where I 
                       can contribute, learn and grow within your organization. If you want to work with me, don&apos;t hesitate to contact me.    
                    </p>
                   
                    <div>

                    </div>
                    <div className='flex flex-col w-full h-full self-center justify-center space-y-4 ' >
                    <h1 className='flex self-center justify-center text-3xl text-yellow-600 ' >My Skills</h1>
                        <div className='flex  self-center flex-wrap w-full space-x-4 space-y-2  p-4' >
                        <div className='flex bg-slate-200 rounded-md w-32 h-14 space-x-4' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800 ' >Full-Stack Web Development</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-20 h-14 space-x-4' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >UI/UX Design</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-28 h-14 space-x-4' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >Crypto Development</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-x-4' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >HTML</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-4' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >CSS</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-24 h-14 space-4' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >JavaScript</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >React</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >Next.js</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-24 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >Typescript</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >Solidity</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >GIT</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >SASS</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >Github</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-28 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >Responsive Design</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-16 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >SEO</h1>
                          </div>
                          <div className='flex bg-slate-200 rounded-md w-20 h-14 space-4 ' >
                            <h1 className=' w-full self-center justify-self-center text-center text-slate-800' >Terminal</h1>
                          </div>
                        
 
                        </div>
                          
                    </div>
                    
                </div>

            </div>
        </div>
        <div className='h-screen ' id='projects' >
            
            <div className='flex flex-col self-center w-full p-4  space-y-2 ' >
              <h1 className='flex justify-center self-center text-yellow-600 text-5xl' >Projects</h1>
                <hr className='flex self-center w-1/6' />
                 <p className='flex w-1/2 max-sm:w-full self-center text-lg ' >Here you will find some of the personal and client projects that I have created, with a detailed description of each project, along with the technologies
                     used to created them.</p> 
            </div>
            <div className='flex flex-col justify-scenter h-full p-4 space-y-4' >
                
                <div className='flex flex-row max-sm:flex-col self-center min-h-[300px]  max-sm:p-2' >
                   
                     <Image className='w-1/2 max-sm:w-full border-2 rounded-md' src={etq_clone_img} width={1000} height={1000} quality={100} alt='ETQ-Amsterdam Clone' /> 
                     <div className='flex flex-col self-center space-y-4 ' >
                        <h1 className='text-center text-2xl text-yellow-600 ' >ETQ-Amsterdam Clone</h1>
                        <p className='w-4/5 self-center ' > The ETQ-Amsterdam Clone is a clone of the pre-existing ETQ-Amsterdam webshop. This site features a full ecommerce suite, such as user sign-in/sign-up, purchasing 
                          products and even adding items to your wishlist. This site was built using Next.js, Stripe and TypeScript. </p>
                        <Link className=' shadow-lg hover:shadow-xl hover:scale-125  justify-self-center self-center flex w-32 h-10 bg-yellow-600 text-center text-white rounded-lg' href='/projects/webdev/etq_clone'> <h1 className='w-full  self-center flex text-center justify-center text-white' >View Project</h1> </Link>
                     </div>
                </div>
                <div className='flex flex-row max-sm:flex-col self-center min-h-[300px]  max-sm:p-2' >
                    
                    <Image className='w-1/2 max-sm:w-full border-2 rounded-md' src={gam3rs_img} width={1000} height={1000} quality={100} alt='Gam3r Network' /> 
                     <div className='flex flex-col self-center space-y-4' >
                        <h1 className='text-center text-2xl text-yellow-600 ' >The Gam3r Network</h1>
                        <p className='w-4/5 self-center' >The Gam3r Network is a companion website to The Gam3r Network YouTube channel that features video creation and upload, 
                          chat forums and free games. The Gam3r Network site was built using Next.js, Node and TypeScript. </p>
                        <Link className=' shadow-lg hover:shadow-xl hover:scale-125  justify-self-center self-center flex w-32 h-10 bg-yellow-600 text-center text-white rounded-lg' href='/projects/webdev/gam3r_network'> <h1 className='w-full  self-center flex text-center justify-center text-white' >View Project</h1> </Link>
                     </div>
                </div>

            </div>
        </div>
        <div className='h-screen space-y-4 ' id='contact' >
          <div className='flex flex-col self-center  ' >
            <h1 className=' self-center text-5xl text-yellow-600 ' >Contact</h1>
             <hr className=' self-center  w-1/5' />
              <p className=' self-center max-sm:w-5/6' >Feel free to contact me using the form below! I&apos;d love to work with you! </p>

          </div>
          <div className='flex justify-self-center rounded-md  w-3/4 h-3/4 max-sm:w-full max-sm:h-full bg-slate-100 ' >
            <form className='h-full w-full self-center  flex flex-col p-4 space-y-20 ' onSubmit={submitData} ref={formRef} >
              <div className='w-1/2 max-sm:w-full self-center' >
              <h1 className='text-lg' >Name</h1>
              <input className='p-4 bg-slate-200 rounded-md w-full' placeholder='Enter Your Name' ref={userRef} name="user_name"/>

              </div>
              <div className='w-1/2 max-sm:w-full self-center' >
                <h1 className='text-lg' >Email</h1>
                <input className='p-4 bg-slate-200 rounded-md w-full' placeholder='Enter Your Email' ref={emailRef} name="user_email" />

              </div>
              <div className='w-1/2 max-sm:w-full self-center h-60' >
                <h1 className='text-lg' >Message</h1>
                <input className='p-4 bg-slate-200 rounded-md w-full  h-full '  placeholder='Enter Your Message' ref={messageRef} name="message" />

              </div>
                <div className='w-1/2 max-sm:w-full self-center ' >
                  <button type='submit' className=' shadow-lg hover:shadow-xl hover:scale-125  justify-center w-28 h-10 text-white bg-yellow-600 rounded-md text-lg ' >
                     Submit
                  </button>

                </div>
            </form>

          </div>


        </div>
        <Footer/>
        </div>
  )
  
}

export default HomeRedux