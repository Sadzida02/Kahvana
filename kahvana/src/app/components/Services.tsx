import React from 'react'

function Services() {
  return (
    <div className='bg-almostWhite w-1000 h-250 rounded-2xl relative bottom-32 z-7 flex justify-between items-center mx-56 px-12 text-center'>
        <div className='flex flex-col justify-center items-center'>
            <img src="/dev.png" alt="development" width={100} height={100} />
            <h3 className='text-xl font-extrabold mt-4 mb-2'>Development</h3>
            <p className='text-sm'>We offer mobile & <br /> web development</p>
        </div>

        <div className='bg-black h-32 w-0.5'></div>

        <div className='flex flex-col justify-center items-center'>
            <img src="/marketing.png" alt="development" width={100} height={100} />
            <h3 className='text-xl font-extrabold mt-4 mb-2'>Marketing</h3>
            <p className='text-sm'>We offer marketing & <br /> digital support</p>
        </div>

        <div className='bg-black h-32 w-0.5'></div>

        <div className='flex flex-col justify-center items-center'>
            <img src="/design.png" alt="development" width={100} height={100} />
            <h3 className='text-xl font-extrabold mt-4 mb-2'>UI/UX</h3>
            <p className='text-sm'>We offer UI & <br />UX design</p>
        </div>

        <div className='bg-black h-32 w-0.5'></div>

        <div className='flex flex-col justify-center items-center'>
            <img src="/seo.png" alt="development" width={100} height={100} />
            <h3 className='text-xl font-extrabold mt-4 mb-2'>SEO</h3>
            <p className='text-sm'>We offer SEO services</p>
        </div>


      
    </div>
  )
}

export default Services
