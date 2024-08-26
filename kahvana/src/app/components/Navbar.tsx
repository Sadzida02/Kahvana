import React from 'react'

function Navbar() {
  return (
    <div className='w-1440 h-99 rounded-xl fixed bg-white mx-10 mt-16 flex justify-between items-center px-24 opacity-80'>
        <img src="/logo.png" alt="kahvana logo" width={121} height={38} />
        <div className='flex text-center font-normal text-xl'>
            <ul>
                <a href='#'className='px-8'>Portfolio</a>
                <a href='#'className='px-8'>About Us</a>
                <a href='#'className='px-8'>Home</a>
                <a href='#'className='px-8'>Careers</a>
                <a href='#'className='px-8'>Blog</a>
                <a href='#'className='px-8'>Contact</a>
            </ul>
        </div>

        <div className='flex'>
            <div className='flex items-center'>
                <img src="/BiH.png" alt="Bosnian" className='w-5 h-3'/><span className='pl-1'>BA</span>
            </div>
            <span className='px-2'>|</span>
            <div className='flex items-center'> 
                <img src="/En.png" alt="English" className='w-5 h-3'/><span className='pl-1'>EN</span>
            </div>                  
        </div>
      
    </div>
  )
}

export default Navbar
