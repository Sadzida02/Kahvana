import React from 'react'

function Trusted3() {
  return (
    <div className='bg-almostWhite relative gap-20 px-24 py-28 flex flex-col-2 h-1024 justify-between'>

    <div className='flex flex-col justify-center items-center gap-24'>

    <div className='w-250 h-200 flex flex-col rounded-2xl bg-[#EDEAEA] items-center justify-center' >
            <img src="/formkit_people.png" className="opacity-30" alt="people" width={100} height={100} />
            <h3 className='text-xl font-extrabold opacity-30'>Review</h3>    
      </div>

      <div className='w-250 h-200 flex flex-col rounded-2xl bg-[#EDEAEA] items-center justify-center' >
            <img src="/areas.png" className="opacity-30" alt="people" width={100} height={100} />
            <h3 className='text-xl font-extrabold opacity-30'>Areas of our work</h3>    
      </div>
     
      <div className='w-250 h-200 flex flex-col rounded-2xl bg-white items-center justify-center' >
            <img src="/faq.png" alt="people" width={100} height={100} />
            <h3 className='text-xl font-extrabold'>FAQ</h3>    
      </div>
    </div>
   
      <div className='flex flex-col justify-center items-center'>
          <p className='text-base flex-col text-center text-[#626060]'>There are no stupid questions!</p>
          <p className=' whitespace-nowrap flex-col text-center text-black font-semibold text-36px'>We answered the most frequent questions:</p>
          
          <div className='mt-10  flex flex-col gap-9'>
            <div className='w-876 h-100 bg-white flex items-center rounded-xl justify-between'>
                <p className='font-semibold px-8 text-2xl '><span className='text-3xl font-extrabold'>1.</span> &nbsp; What are your core services and solutions?</p>
                <img src="/down-solid.png" className="mr-12" alt="" width={16} height={16}/>
            </div>
            <div className='w-876 h-100 bg-white flex items-center rounded-xl justify-between'>
                <p className='font-semibold px-8 text-2xl '><span className='text-3xl font-extrabold'>2.</span> &nbsp; How do you stay updated with IT trends?</p>
                <img src="/down-solid.png" className="mr-12" alt="" width={16} height={16}/>
            </div>
            <div className='w-876 h-100 bg-white flex items-center rounded-xl justify-between'>
                <p className='font-semibold px-8 text-2xl '><span className='text-3xl font-extrabold'>3.</span> &nbsp; Can you share notable client success stories??</p>
                <img src="/down-solid.png" className="mr-12" alt="" width={16} height={16}/>
            </div>
            <div className='w-876 h-100 bg-white flex items-center rounded-xl justify-between'>
                <p className='font-semibold px-8 text-2xl '><span className='text-3xl font-extrabold'>4.</span> &nbsp; What security measures do you have in place??</p>
                <img src="/down-solid.png" className="mr-12" alt="" width={16} height={16}/>
            </div>
            <div className='w-876 h-100 bg-white flex items-center rounded-xl justify-between'>
                <p className='font-semibold px-8 text-2xl '><span className='text-3xl font-extrabold'>5.</span> &nbsp; How do you handle scalability in IT solutions??</p>
                <img src="/down-solid.png" className="mr-12" alt="" width={16} height={16}/>
            </div>
            
          </div>

          
             
      </div> 
   
  </div>
  )
}

export default Trusted3
