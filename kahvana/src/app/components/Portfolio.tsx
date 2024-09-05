import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const Portfolio = () => {
  return (
    <div className=' w-full  pt-60  '>

    <div className='flex flex-col-3 items-center justify-between'>

    <div className='w-475 h-0.5 bg-white '>

      </div>

      <div className=''>
      <h4 className='text-36 text-white font-semibold'>Portfolio</h4>
      </div>


      <div className='w-475 h-0.5 bg-white'>

</div>
    </div>
  
    <div className='grid grid-cols-3 justify-between p-40 ml-20'>
            
            <div  className='flex flex-col w-299 h-381 rounded-xl bg-white  '>
              <div className=' '>
              <img src="/swipelix.png" alt=""width={299} height={306} />
              </div>

              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> Swipelix</p>
              </div>
            </div>
            
            <div  className='flex flex-col w-299 h-381 rounded-xl bg-white'>
              <div className=' '>
              <img src="/cordoba.png" alt=""width={299} height={306} />
              </div>
              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> Cordoba</p>
              </div>
            </div>

            <div  className='flex flex-col w-299 h-381 rounded-xl bg-white'>
              <div className=' '>
              <img src="/comp-2000.png" alt=""width={299} height={306} />
              </div>
              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> Comp-2000</p>
              </div>


            </div>
            <div  className='flex flex-col w-299 h-381 rounded-xl bg-white mt-10'>
              <div className=' '>
              <img src="/europrofili.png" alt=""width={299} height={306} />
              </div>
              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> Europrofili</p>
              </div>
            </div>

              <div className=' mt-10 pr-12 '>
              <div className='pr-12'>
              <h2 className='font-medium text-white text-48 text-center whitespace-nowrap'>NASA <br /> PROSLOST <br /> NIJE TAJNA</h2>
              <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 whitespace-nowrap  '> Preuzmi nas portofolio i saznaj detalje</p>
             
              </div>
             
              <div className='pl-24 py-10'>
             
              <a href="#" className='bg-kahvanaPink text-white text-sm font-semibold w-167 h-49 text-center p-4 rounded-2xl'>DOWNLOAD<FontAwesomeIcon icon={faDownload} className='ml-2 inline' width={16} height={16} /></a>
            
              </div>
           
              </div>


                   <div  className='flex flex-col w-299 h-381 rounded-xl bg-white mt-10'>
              <div className=' '>
              <img src="/manage-it.png" alt=""width={299} height={306} />
              </div>
              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> Manage-IT</p>
              </div>
            </div> 

            <div  className='flex flex-col w-299 h-381 rounded-xl bg-white mt-10'>
              <div className=' '>
              <img src="/quad.png" alt=""width={299} height={306} />
              </div>
              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> Quad Tour Bjelasnica</p>
              </div>
            </div> 

            <div  className='flex flex-col w-299 h-381 rounded-xl bg-white mt-10'>
              <div className=' '>
              <img src="/fitness.png"  width={299} height={306} />
              </div>
              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> CityCab</p>
              </div>
            </div> 

            <div  className='flex flex-col w-299 h-381 rounded-xl bg-white mt-10'>
              <div className=''>
              <img src="/fitness.png" alt=""width={299} height={306} className='p-10  rounded-75 ' />
              </div>
              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> City Fitness</p>
              </div>
            </div> 

            <div  className='flex flex-col w-299 h-381 rounded-xl bg-white mt-10'>
              <div className=' '>
              <img src="/law.png" alt=""width={299} height={306} />
              </div>
              <div className='w-299 h-0.5 bg-black'></div>
              <div className='bg-almostWhite w-299 h-75 items-center text-center rounded-sm'>
                <p className='font-semibold text-[#333333] text-xl text-center items-center pt-5 '> Law Office Ibrahimovic</p>
              </div>
            </div> 
             
              
                   
          </div>

    </div>


  )
}

export default Portfolio