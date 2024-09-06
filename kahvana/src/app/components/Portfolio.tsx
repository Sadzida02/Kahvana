import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  return (
    <div className=' w-full pt-60'>

      <div className='flex flex-col-3 items-center justify-between'>
        <div className='w-475 h-0.5 bg-white'></div>      
          <h4 className='text-36 text-white font-semibold'>Portfolio</h4>
        <div className='w-475 h-0.5 bg-white'></div>
      </div>
  
    <div className='grid grid-cols-3 gap-20 mx-185 mt-16'>
            
            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover'>              
              <img src="/swipelix.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75 items-center text-center rounded-xl'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>Swipelix</p>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover'>              
              <img src="/cordoba.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75 items-center text-center rounded-xl'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>Cordoba</p>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover'>              
              <img src="/comp-2000.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75 items-center text-center rounded-xl'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>Comp-2000</p>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover relative'>              
              <img src="/europrofili.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75 items-center text-center rounded-xl absolute top-72'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>Europrofil</p>
              </div>
            </div>

            <div className='text-center'>
              <div className=''>
                <h2 className='font-medium text-white text-48 whitespace-nowrap'>NAŠA <br /> PROŠLOST <br /> NIJE TAJNA</h2>
                <p className='font-semibold text-[#333333] text-sm pt-5'> Preuzmi naš portofolio i saznaj detalje</p>            
              </div>            
              <div className='py-10'>           
                <a href="#" className='bg-kahvanaPink text-white text-sm font-semibold w-167 h-49 text-center p-4 rounded-2xl'>DOWNLOAD<FontAwesomeIcon icon={faDownload} className='ml-2 inline' width={16} height={16} /></a>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover items-center relative'>              
              <img src="/manage-it.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75  text-center rounded-xl absolute top-72'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>Manage-IT</p>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover'>              
              <img src="/quad.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75 items-center text-center rounded-xl'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>Quad-tour Bjelašnica</p>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover'>              
              <img src="/fitness.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75 items-center text-center rounded-xl'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>City-cab</p>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover'>              
              <img src="/fitness.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75 items-center text-center rounded-xl'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>City Fitness</p>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl custom-img3 bg-cover'>              
              <img src="/law.png" alt=""width={299} height={306} />              
              <div className='bg-white w-299 h-75 items-center text-center rounded-xl'>
                <p className='font-extrabold text-[#333333] text-xl text-center items-center pt-5 '>Law Office Ibrahimović</p>
              </div>
            </div>


            
            

            
            </div>    
                   
          </div>

    


  )
}

export default Portfolio