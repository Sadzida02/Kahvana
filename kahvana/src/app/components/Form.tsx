import React from 'react'

const Form = () => {
  return (
    <div className=' bg-almostWhite w-1550  h-502 flex flex-col-2 '>
        <div className='  mt-10'>
            <img src="/formaslika.jpg" alt="" className='w-552 h-402 ml-40 rounded-2xl' />
        </div>
        
        <div className=' mt-5 flex-row-2 flex  '>
            <div className=' items-center justify-center mr-10 '>
            <label htmlFor="name" className=' flex flex-col ml-60'>Ime</label>
            <input type="text" value="" id='name' placeholder='Upisite svoje ime' className='w-285 h-58 rounded-2xl ml-60 '/>
            <label htmlFor="name" className=' flex flex-col ml-60'>Ime</label>
            <input type="text" value="" id='name' placeholder='Upisite svoje ime' className='w-285 h-58 rounded-2xl ml-60 '/>
            <div className='w-610 h-100'>
                <label htmlFor="name" className=' flex flex-col  ml-60 '>Ime</label>
                <input type="textarea" value="" id='name' placeholder='Upisite svoje ime' className='w-700 h-100 rounded-2xl ml-60  '/>
       
            
              
                </div>
              
            </div>
            
            <div className=' items-center justify-center mr-40 '>
            <label htmlFor="name" className=' flex flex-col '>Ime</label>
            <input type="text" value="" id='name' placeholder='Upisite svoje ime' className='w-285 h-58 rounded-2xl mr-5'/>
            <label htmlFor="name" className=' flex flex-col '>Ime</label>
            <input type="text" value="" id='name' placeholder='Upisite svoje ime' className='w-285 h-58 rounded-2xl mr-5'/>
          
     
            </div>
            
        </div>
     
 

    </div>
  )
}

export default Form