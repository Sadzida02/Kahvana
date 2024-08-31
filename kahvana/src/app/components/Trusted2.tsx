import React from 'react'

function Trusted2() {
  return (
    <div className='bg-almostWhite relative gap-20 px-24 py-28 flex flex-col-2 h-1024 justify-between'>

      <div className='flex flex-col justify-center items-center gap-24'>

      <div className='w-250 h-200 flex flex-col rounded-2xl bg-[#EDEAEA] items-center justify-center' >
              <img src="/formkit_people.png" className="opacity-30" alt="people" width={100} height={100} />
              <h3 className='text-xl font-extrabold opacity-30'>Review</h3>    
        </div>

        <div className='w-250 h-200 flex flex-col rounded-2xl bg-white items-center justify-center' >
              <img src="/areas.png" className="opacity-100" alt="people" width={100} height={100} />
              <h3 className='text-xl font-extrabold'>Areas of our work</h3>    
        </div>
       
        <div className='w-250 h-200 flex flex-col rounded-2xl bg-[#EDEAEA] items-center justify-center' >
              <img src="/faq.png" alt="people" className="opacity-30" width={100} height={100} />
              <h3 className='text-xl font-extrabold opacity-30'>FAQ</h3>    
        </div>
      </div>
     
        <div className='flex flex-col justify-center items-center'>
            <p className='text-base flex-col text-center text-[#626060]'>THERE ARE NO LIMITS!</p>
            <p className=' whitespace-nowrap flex-col text-center text-black font-semibold text-36px'>WE ARE PROFI AT</p>
            <p className='w-790 mt-6 text-base'>"Our IT company specializes in delivering cutting-edge software solutions tailored to meet the specific needs of our clients. We provide a wide range of services, including custom application development, web design and development, as well as the implementation of complex IT infrastructure solutions. Our expertise spans across various sectors, from healthcare to finance, allowing us to offer personalized IT services that cater to each client's unique requirements. We keep a close eye on the latest IT trends, ensuring our clients stay ahead in the rapidly evolving industry. Through careful analysis of business processes and technological needs, we work to optimize efficiency and reduce costs for our clients. "</p>

            <div className='grid grid-cols-3 gap-12 w-790 mt-12'>
                <div className='text-center w-200'>
                    <div className='custom-img2 rounded-2xl flex items-center justify-center h-150'>
                        <img src="/trustedIcon1.png" alt="" />
                    </div>
                    <p className='font-semibold pt-4'>Mobile Development</p>
                </div>
                <div className='text-center w-200'>
                    <div className='custom-img2 rounded-2xl flex items-center justify-center h-150'>
                        <img src="/trustedIcon2.png" alt="" />
                    </div>
                    <p className='font-semibold pt-4'>Web Development</p>
                </div>
                <div className='text-center w-200'>
                    <div className='custom-img2 rounded-2xl flex items-center justify-center  h-150'>
                        <img src="/trustedIcon3.png" alt="" />
                    </div>
                    <p className='font-semibold pt-4'>IoT</p>
                </div>
                <div className='text-center w-200'>
                    <div className='custom-img2 rounded-2xl flex items-center justify-center h-150'>
                        <img src="/trustedIcon4.png" alt="" />
                    </div>
                    <p className='font-semibold pt-4'>Marketing</p>
                </div>
                <div className='text-center w-200'>
                    <div className='custom-img2 rounded-2xl flex items-center justify-center h-150'>
                        <img src="/trustedIcon5.png" alt="" />
                    </div>
                    <p className='font-semibold pt-4'>SEO</p>
                </div>
                <div className='text-center w-200'>
                    <div className='custom-img2 rounded-2xl flex items-center justify-center h-150'>
                        <img src="/trustedIcon6.png" alt="" />
                    </div>
                    <p className='font-semibold pt-4'>Human Resources</p>
                </div>
            </div>      
           
        </div>       
     
    </div>
  )
}

export default Trusted2
