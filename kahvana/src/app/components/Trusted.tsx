import React from 'react'

const Trusted = () => {
  return (
    <div className='bg-almostWhite relative mt-20 gap-20 px-12 flex flex-col-3  '>
       <div className='flex-row mt-20 ml-20'>

      <div className='w-280 h-200  rounded-2xl   bg-white' >

   
       <div className='flex flex-col rounded-2xl  w-250 h-200  bg-white  items-center justify-center'>
            <img src="/formkit_people.png" alt="people" width={100} height={100} />
            <h3 className='text-xl font-extrabold ml-3'>Review</h3>
          
        </div>
        </div>
         
        <div className='w-280 h-200  rounded-2xl   bg-[#EDEAEA]  mt-5 ' >

   
<div className='flex flex-col rounded-2xl   w-250 h-200  bg-[#EDEAEA]  items-center justify-center'>
     <img src="/formkit_people.png" alt="people" width={100} height={100} />
     <h3 className='text-xl font-extrabold ml-3'>Review</h3>
   
 </div>
 </div>
         
 <div className='w-280 h-200 bg-[#EDEAEA] rounded-2xl   mt-5' >

   
<div className='flex flex-col  rounded-2xl   w-250 h-200 bg-[#EDEAEA]  items-center justify-center'>
     <img src="/formkit_people.png" alt="people" width={100} height={100} />
     <h3 className='text-xl font-extrabold ml-3'>Review</h3>
   
 </div>
 </div>
        </div>
        <div className='flex flex-col justify-center mt-10'>
            <img src="/reviewstreet.jpg" alt="development"  className='w-302 h-650 rounded-3xl '/>
            
           
        </div>

        <div className='flex flex-col justify-center mt-40  ml-10'>
            <p className='text-base flex-col text-center text-[#626060]'>DARE TO DREAM BIG</p>
            <p className='mt-5 whitespace-nowrap flex-col text-center text-black font-semibold text-36px'>Trusted by many</p>

          <a href="" className='w-539 h-150 bg-white rounded-3xl  flex-row flex mt-5'>
            <img src="/linkedin1.jpg" alt="" className='rounded-full h-150 w-150  flex flex-col'/>
            <div className='w-342 h-131  mt-2 ml-10 rounded-xl '>
            <h4>Ime Prezime</h4>
            <p>CEO @ Digital Hub</p>
            <p className='text-sm'>-Dreaming big is just the beginning! 
                Turn your dreams into reality through our services. 
                From visionary product design to cutting-edge mobile app development.
                </p>
            </div>

          </a>
          <a href="" className='w-539 h-150 bg-white rounded-3xl  flex-row flex mt-5'>
          <div className='w-342 h-131  mt-2 ml-10 rounded-xl '>
            <h4>Ime Prezime</h4>
            <p>CEO @ Digital Hub</p>
            <p className='text-sm'>-Dreaming big is just the beginning! 
                Turn your dreams into reality through our services. 
                From visionary product design to cutting-edge mobile app development.
                </p>
            </div>
            <img src="/linkedin2.jpg" alt="" className='rounded-full h-150 w-150  flex flex-col'/>
         

          </a>
          <a href="" className='w-539 h-150 bg-white rounded-3xl  flex-row flex mt-5'>
            <img src="/linkedin3.jpg" alt="" className='rounded-full h-150 w-150  flex flex-col'/>
            <div className='w-342 h-131  mt-2 ml-10 rounded-xl '>
            <h4>Ime Prezime</h4>
            <p>CEO @ Digital Hub</p>
            <p className='text-sm'>-Dreaming big is just the beginning! 
                Turn your dreams into reality through our services. 
                From visionary product design to cutting-edge mobile app development.
                </p>
            </div>

          </a>
          
           
        </div>

        

        
     
    </div>
  )
}

export default Trusted