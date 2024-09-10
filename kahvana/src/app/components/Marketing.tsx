import React from 'react'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Marketing = () => {
  return (
    <div className='w-full h-1024 text-white '>
    <div className='flex  pt-52 items-center'>
        <div className='w-[68px] h-0.5 bg-white '></div>
        <FontAwesomeIcon icon={faArrowLeft} className='ml-2 inline' width={40} height={40}/>
        <h2 className=' text-36 px-10'>Marketing </h2>
        


        <div className='w-[1150px] h-0.5 bg-white '></div>
        </div>
    <div className='flex flex-col-2 justify-between mx-100'>
        <div className='flex w-[562px] mt-20'>
        <p className='text-xl '>
        "At Kahvana, our marketing services are designed to supercharge your business's online presence and reach. 
        We specialize in creating targeted marketing strategies, compelling content, and engaging campaigns that connect with your audience.
         Let us help you stand out in the digital landscape, drive growth, and achieve your marketing goals. 
         With Kahvana, success is just a campaign away."
         <br /> <br />

"At Kahvana, our marketing services are designed to supercharge your business's online presence and reach.
 We specialize in creating targeted marketing strategies, compelling content, and engaging campaigns that connect with your audience.
  Let us help you stand out in the digital landscape, drive growth, and achieve your marketing goals. 
  With Kahvana, success is just a campaign away."
        </p>
        </div>

        <div className='flex flex-col mt-10'>
        <h4 className='text-[30px] whitespace-nowrap ml-20'>Projects correlated to Marketing</h4>
          <div className='grid grid-cols-2 p-10 '>
            <div className='flex flex-col '>
              <img src="/project1.png" alt="" className='mr-20'/>
              <p className='text-center mr-20'>Project 1</p>
            </div>
            <div className='flex flex-col '>
              <img src="/project2.png" alt="" className='mr-20' />
              <p className='text-center mr-20'>Project 2</p>
            
            </div>
            <div className='flex flex-col '>
              <img src="/project3.png" alt="" className='mr-20 mt-20'/>
              <p className='text-center mr-20'>Project 3</p>
            </div>
            <div className='flex flex-col '>
              <img src="/project4.png" alt="" className='mr-20 mt-20' />
              <p className='text-center mr-20'>Project 4</p>
            </div>

          </div>
        </div>

    </div>
    
    
    
    
    </div>
  )
}

export default Marketing