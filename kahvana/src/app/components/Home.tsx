import React from 'react'

function Home() {
  return (
    <div>
        <div id='banner' className='flex flex-col items-center justify-center text-center gap-5'>
            <div className='w-526'>
                <h1 className='text-9xl font-bold'>we do <span className='text-kahvanaPink '>IT</span> <br />better<span className='text-kahvanaPink '>.</span></h1> 
            </div>
            
            <p className='h-72 text-2xl font-normal'>Software Engineering - Data Enhancement and <br />Psychographic Analysis - Graphic Design and Print</p>
            <a href="#" className='bg-kahvanaPink text-white text-sm font-semibold w-167 h-49 text-center p-4 rounded-2xl'>Get in Touch</a>
        </div>
        
      
    </div>
  )
}

export default Home
