import React from 'react'
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"]});

const Blog = () => {
  return (
    <div className='w-full text-white '>
      <div className='flex flex-col-3 items-center justify-between pt-52'>
          <div className='w-475 h-0.5 bg-white '></div>
          <h4 className='text-36 text-white font-semibold'>Blog</h4>
          <div className='w-475 h-0.5 bg-white'></div>
      </div>

    <div className='flex flex-col-2 justify-between items-center mx-100 my-32'>    
      <img src="/logoWithoutName.png" alt="logo" width={516.83} height={500} />
      <div className='flex flex-col w-[575px] '>
        <p className='text-xl font-normal mt-10'>
        At Kahvana's blog, we bring together a team of passionate tech enthusiasts who regularly share insights and stories from the world of IT innovation. 
        Our mission is to provide you with engaging and informative articles that inspire you to explore new technologies and stay ahead of the latest trends in digital transformation. 
        Covering everything from software development and network engineering to cybersecurity, our blog is your go-to source for learning, idea exchange, and staying informed about the latest IT solutions. 
        </p>
      </div>
    </div>

    <div className='text-xl text-white flex items-center justify-center font-thin'>
      <p>Scroll down to read more</p><img src="/down-solid.png" className="ml-3 invert" alt="" width={16} height={16}/>    
    </div>
    
    <div className='flex flex-row px-[50px] mx-[50px] my-16 gap-8'>

      <div className='flex flex-col w-[497.01px] h-[330.38] bg-[#1B1B1F] rounded-2xl'>
        <img src="/blog1.png" alt="" width={497} height={212} className='rounded-t-2xl'/>
        <div className='flex flex-col gap-2 p-4'>
          <div className='bg-[#F1ECFF] h-5 w-121 rounded-2xl flex justify-between items-center px-1'>
            <div className='bg-kahvanaPink w-[11px] h-[11px] rounded-50'></div>
            <a className="text-kahvanaPink text-[10px] {raleway.className}" href=""><span className={raleway.className}>Artificial Inteligence</span></a>
          </div>
          <p className='text-[19.31px] font-bold'>Neka AI tema ili nesto sdsdsdsdsdsdsdsdsdsdsdsdsdsd</p>
          <p className='text-[10.01px] text-[#E3E1E6] font-normal'> <span className={raleway.className}>Feb 19 &nbsp;• &nbsp;10 min read</span></p>
        </div>  
     </div>

     <div className='flex flex-col w-[337.01px] h-[330.38] bg-[#1B1B1F] rounded-2xl'>
        <img src="/blog2.png" alt="" width={497} height={212} className='rounded-t-2xl'/>
        <div className='flex flex-col gap-2 p-4'>
          <div className='bg-[#F1ECFF] h-5 w-75 rounded-2xl flex justify-between items-center px-1'>
            <div className='bg-kahvanaPink w-[11px] h-[11px] rounded-50'></div>
            <a className="text-kahvanaPink text-[10px] {raleway.className}" href=""><span className={raleway.className}>Neka tema</span></a>
          </div>
          <p className='text-[19.31px] font-bold'>Neka AI tema </p>
          <p className='text-[10.01px] text-[#E3E1E6] font-normal'> <span className={raleway.className}>Feb 19 &nbsp;• &nbsp;10 min read</span></p>
        </div>  
     </div>

     <div className='flex flex-col w-[337.01px] h-[330.38] bg-[#1B1B1F] rounded-2xl'>
        <img src="/blog3.png" alt="" width={497} height={212} className='rounded-t-2xl'/>
        <div className='flex flex-col gap-2 p-4'>
          <div className='bg-[#F1ECFF] h-5 w-75 rounded-2xl flex justify-between items-center px-1'>
            <div className='bg-kahvanaPink w-[11px] h-[11px] rounded-50'></div>
            <a className="text-kahvanaPink text-[10px] {raleway.className}" href=""><span className={raleway.className}>Neka tema</span></a>
          </div>
          <p className='text-[19.31px] font-bold'>Neka AI tema </p>
          <p className='text-[10.01px] text-[#E3E1E6] font-normal'> <span className={raleway.className}>Feb 19 &nbsp;• &nbsp;10 min read</span></p>
        </div>  
     </div>
    </div>

    <div className='flex flex-row px-[50px] mx-[50px] my-16 gap-8'>

     <div className='flex flex-col w-[337.01px] h-[330.38] bg-[#1B1B1F] rounded-2xl'>
        <img src="/blog2.png" alt="" width={497} height={212} className='rounded-t-2xl'/>
        <div className='flex flex-col gap-2 p-4'>
          <div className='bg-[#F1ECFF] h-5 w-75 rounded-2xl flex justify-between items-center px-1'>
            <div className='bg-kahvanaPink w-[11px] h-[11px] rounded-50'></div>
            <a className="text-kahvanaPink text-[10px] {raleway.className}" href=""><span className={raleway.className}>Neka tema</span></a>
          </div>
          <p className='text-[19.31px] font-bold'>Neka AI tema </p>
          <p className='text-[10.01px] text-[#E3E1E6] font-normal'> <span className={raleway.className}>Feb 19 &nbsp;• &nbsp;10 min read</span></p>
        </div>  
     </div>

     <div className='flex flex-col w-[337.01px] h-[330.38] bg-[#1B1B1F] rounded-2xl'>
        <img src="/blog3.png" alt="" width={497} height={212} className='rounded-t-2xl'/>
        <div className='flex flex-col gap-2 p-4'>
          <div className='bg-[#F1ECFF] h-5 w-75 rounded-2xl flex justify-between items-center px-1'>
            <div className='bg-kahvanaPink w-[11px] h-[11px] rounded-50'></div>
            <a className="text-kahvanaPink text-[10px] {raleway.className}" href=""><span className={raleway.className}>Neka tema</span></a>
          </div>
          <p className='text-[19.31px] font-bold'>Neka AI tema </p>
          <p className='text-[10.01px] text-[#E3E1E6] font-normal'> <span className={raleway.className}>Feb 19 &nbsp;• &nbsp;10 min read</span></p>
        </div>  
      </div>

      <div className='flex flex-col w-[497.01px] h-[330.38] bg-[#1B1B1F] rounded-2xl'>
        <img src="/blog1.png" alt="" width={497} height={212} className='rounded-t-2xl'/>
        <div className='flex flex-col gap-2 p-4'>
          <div className='bg-[#F1ECFF] h-5 w-121 rounded-2xl flex justify-between items-center px-1'>
            <div className='bg-kahvanaPink w-[11px] h-[11px] rounded-50'></div>
            <a className="text-kahvanaPink text-[10px] {raleway.className}" href=""><span className={raleway.className}>Artificial Inteligence</span></a>
          </div>
          <p className='text-[19.31px] font-bold'>Neka AI tema ili nesto sdsdsdsdsdsdsdsdsdsdsdsdsdsd</p>
          <p className='text-[10.01px] text-[#E3E1E6] font-normal'> <span className={raleway.className}>Feb 19 &nbsp;• &nbsp;10 min read</span></p>
        </div>  
     </div>
     </div>

     <div className='w-full flex flex-col justify-center items-center text-center my-36'>
      <p className='text-thin'>Subscribe to our exclusive mailing list and get the freshest stories <br /> from the Kahvana team</p>
      <div className='mt-10'>
        <input type="text" className='w-[450px] h-14 bg-black rounded-md border-[1px] border-white p-2' placeholder='EMAIL ADDRESS'/>
        <button className='bg-kahvanaPink w-200 h-14 text-2xl rounded-md p-2 ml-10'>SUBSCRIBE</button>
      </div>
     </div>
    
  </div>
  )
}

export default Blog