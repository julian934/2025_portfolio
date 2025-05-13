'use client'
import React from 'react'
//import Navbar from '@/app/components/navbar/navbar'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/app/utils/images/logo/Julian_Borner_Logo.png'
//import Footer from '@/app/components/newFooter/footer'
import Footer from '@/app/components/footer/footer'
import gam3rs_img from '@/app/utils/images/misc/Gam3rs_Web_App.jpg'
//import etq_clone_img from '@/app/utils/images/misc/ETQ_Amsterdam_Clone.jpg'
import node_img from '@/app/utils/images/misc/icons8-node-js-64.png'
import react_img from '@/app/utils/images/misc/icons8-react-48.png'
import next_img from '@/app/utils/images/misc/Next_JS_1.avif'

//type Props = {}

const Gam3r_Network = () => {
  return (
    <div className=' bg-white text-black ' >
      
      <div className=' w-full static h-36 py-4 bg-white border-2 absolute' >
          <div className='flex justify-between w-full absolute' >
            <div className='flex self-center px-4 ' >
            <div className='flex  justify-self-center ' >
                    
                    
                </div>
                <div className=' self-center md:relative  justify-self-center top-4 md:top-0' >
                  <Link href='/homeRedux' >
                    <Image className='w-40 h-28 md:scale-150  ' src={Logo} alt='Julian Borner Logo' />
                    </Link>
                </div>
                
            </div>
            <div className='flex justify-between p-6 self-center space-x-6 ' >
                <Link className=' text-yellow-600 text-lg' href='/HomeRedux' >Home</Link>
                <Link className='text-yellow-600 text-lg ' href='#about' >About</Link>
                <Link className=' text-yellow-600 text-lg ' href='#projects' >Projects</Link>
                <Link className=' text-yellow-600 text-lg ' href='#contact' >Contact</Link>

            </div>

          </div>
        </div>
        <div className=' bg-white text-black h-screen ' >
          <div className='w-full flex h-2/3 space-y-4 flex-col   justify-self-center self-center z-5 p-4' > 
            
            <div className='flex w-3/5 max-sm:w-full self-center h-full rounded-md border-2 mt-32 z-50 max-sm:pt-4 ' >
            <Image className='w-full h-full ' src={gam3rs_img} alt='banner background' /> 
            </div>
            <div className='flex flex-col self-center w-2/3 max-sm:w-full z-50 space-y-4' >
              <h1 className=' self-center text-2xl text-yellow-600  ' >The Gam3r Network</h1>
              <p className='  self-center border-2 w-5/6 max-sm:w-full h-full text-lg max-sm:p-2' >The Gam3r Network is a companion website to The Gam3r Network YouTube channel that features video creation and upload, 
              chat forums and free games. The Gam3r Network site was built using Next.js, React, Node and TypeScript. The site is continuously updated
               and maintained by me.  </p>
              <Link className='w-36 h-10 hover:scale-125 bg-yellow-600 text-white text-center rounded-md flex self-center ' href='https://gam3rs.vercel.app/home' >
              <h1 className='flex self-center justify-center w-full h-full text-center mt-4 ' >Live Link
                </h1>
                </Link>

            </div>

          </div>
          
          
          <div className='flex flex-col rounded-md space-y-4 w-3/5 max-sm:w-5/6  h-1/6 justify-self-center border-2 border-slate-2' >
            <h1 className='flex self-center  text-2xl text-yellow-600 ' >Features</h1>
            <div className='flex space-x-4 self-center justify-around h-full w-full' >
              <ul className='flex flex-col text-center  w-1/3 ' >
                <li className='text-yellow-600' >Responsive Design</li>
                <li className='text-yellow-600' >Stripe </li>
              </ul>
              <ul className='flex flex-col text-center w-1/3' >
                <li className='text-yellow-600' >Ecommerce Suite </li>
                <li className='text-yellow-600'>Next-Auth User Authentication </li>
              </ul>
              <ul className='flex flex-col text-center w-1/3' >
                <li className='text-yellow-600 '>Next.js </li>
                <li className='text-yellow-600'>TypeScript </li>
              </ul>
            </div>
          </div>
          <div className='flex justify-around max-sm:pt-4 max-sm:space-x-2' >
          <div className='flex justify-self-around flex-col w-1/4 max-sm:w-1/2 border-2 rounded-md  ' >
            <h1 className='flex justify-center w-full text-yellow-600 ' >Average Load Time</h1>
               <h3 className='flex justify-center w-full p-4 text-2xl ' >1.2 seconds</h3>
            </div>
            <div className='flex justify-self-around  flex-col w-1/4 max-sm:w-1/2 border-2 rounded-md ' >
            <h1 className='flex justify-self-around w-full flex justify-center w-full text-yellow-600' >Technology Used</h1>
              
              
               <div className='flex justify-around p-4 ' >
                <Image  className='flex w-14 max-sm:w-12 ' src={node_img} alt='Node' />
                <Image  className='flex w-14 max-sm:w-12' src={react_img} alt='Node' />
                <Image  className='flex w-20 max-sm:w-16 max-sm:h-4/5 ' src={next_img} alt='Node' />
               </div>
               
            </div>
          </div>

        </div>
        <div className='flex bg-white' >
              <Footer/>
        </div>
      </div>
  )
}

export default Gam3r_Network