import React from 'react'

const Trusted = () => {
  return (
    <div className='bg-almostWhite relative gap-20 px-24 py-28 flex flex-col-3 h-1024'>

      <div className='flex flex-col justify-center items-center gap-24'>

        <div className='w-250 h-200 flex flex-col rounded-2xl bg-white items-center justify-center' >
              <img src="/formkit_people.png" alt="people" width={100} height={100} />
              <h3 className='text-xl font-extrabold'>Review</h3>    
        </div>
        <div className='w-250 h-200 flex flex-col rounded-2xl bg-[#EDEAEA] items-center justify-center' >
              <img src="/formkit_people.png" alt="people" width={100} height={100} />
              <h3 className='text-xl font-extrabold'>Review</h3>    
        </div>
        <div className='w-250 h-200 flex flex-col rounded-2xl bg-[#EDEAEA] items-center justify-center' >
              <img src="/formkit_people.png" alt="people" width={100} height={100} />
              <h3 className='text-xl font-extrabold'>Review</h3>    
        </div>
      </div>
     
            <img src="/reviewstreet.jpg" alt="development"  width={302} height={804}  className='rounded-3xl '/>
            
           

        <div className='flex flex-col justify-center items-center'>
            <p className='text-base flex-col text-center text-[#626060]'>DARE TO DREAM BIG</p>
            <p className='mt-5 whitespace-nowrap flex-col text-center text-black font-semibold text-36px'>Trusted by many</p>

          <a href="" className='w-539 h-150 bg-white rounded-3xl  flex-row flex mt-5'>
            <img src="/linkedin1.jpg" alt="" className='rounded-full h-150 w-150 border-black border-2'/>
            <div className='w-342 h-131 mt-2 ml-10 rounded-xl '>
              <h4>Ime Prezime</h4>
              <p>CEO @ Digital Hub</p>
              <p className='text-sm'>-Dreaming big is just the beginning! Turn your dreams into reality through our services. From visionary product design to cutting-edge mobile app development.</p>
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
            <img src="/linkedin2.jpg" alt="" className='rounded-full h-150 w-150 border-2 border-black'/>
          </a>

          <a href="" className='w-539 h-150 bg-white rounded-3xl  flex-row flex mt-5'>
            <img src="/linkedin3.jpg" alt="" className='rounded-full h-150 w-150 border-2 border-black'/>
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