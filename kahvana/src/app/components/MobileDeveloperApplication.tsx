import React from 'react'

function JobApplication() {
  return (
    <div className='bg-almostWhite w-1288 h-798 mt-112 ml-75 rounded-2xl px-70'>
        <div className='py-10'>
            <p className='text-5xl'>Mobile Developer</p>
            <p className='text-2xl'>J/M/S - Full Time</p>
        </div>

        <div className='flex flex-row justify-between'>
            <div className='h-600 w-620 bg-white flex justify-center flex-col text-center items-center rounded-2xl'>
                    <h3 className='font-extrabold text-3xl'>Job Description</h3>
                    <p className='text-xl mt-5 w-552'>blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablablablablablablablablablablab
                    blablablablablablablablabla
                    </p>
            </div>

            <form action="">
                <div  className='flex flex-col'>
                    <label htmlFor="name" className='text-xl text-[#333333] mb-1'>Full name:</label>
                    <input type="text" value="" id='name' placeholder='John Doe' className='w-440 h-75 pl-3 rounded-2xl'/>
                </div>
                <div  className='flex flex-col mt-6'>
                    <label htmlFor="email" className='text-xl text-[#333333] mb-1'>Email:</label>
                    <input type="text" value="" id='name' placeholder='johndoe@gmail.com' className='w-440 h-75 pl-3 rounded-2xl'/>
                </div>
                <div  className='flex flex-col mt-6'>
                    <label htmlFor="name" className='text-xl text-[#333333] mb-1'>Phone number:</label>
                    <input type="text" value="" id='name' placeholder='+38761 751 848' className='w-440 h-75 pl-3 rounded-2xl'/>
                </div>

                <div className='flex justify-between items-center mt-8'>
                    <p>Upload your CV</p>
                    <a href="#" className='bg-black text-white w-182 rounded-md text-center py-2 h-11'>File</a>
                </div>

                <div className='flex justify-center mt-8'>
                    <button className='bg-[#4CAF50] w-121 rounded-md text-center p-1 h-16 text-white text-3xl font-extrabold'>APPLY</button>
                </div>

                <div className='flex justify-center mt-6'>
                    <p className='text-base'>info@kahvana.com</p>
                </div>
                
               
            </form>

        </div>
        
      
    </div>
  )
}

export default JobApplication
