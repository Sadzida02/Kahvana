import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-regular-svg-icons";

const Form = () => {
  return (
    <div id="contact" className=' bg-almostWhite w-full h-522 flex flex-row justify-between px-100 py-16'>
        
          <img src="/formaslika.jpg" alt="" width={552} height={402} className='rounded-2xl' />
        
        <div className='flex flex-col'>
        <div className='grid grid-cols-2 gap-3'>
            
            <div  className='flex flex-col'>
              <label htmlFor="name" className='text-base'>Ime</label>
              <input type="text" value="" id='name' placeholder='Upisite svoje ime' className='w-285 h-58 pl-3 rounded-2xl'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="surname" className='text-base'>Prezime</label>
              <input type="text" value="" id='surname' placeholder='Upisite svoje prezime' className='w-285 h-58 pl-3 rounded-2xl'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-base'>Email</label>
              <input type="text" value="" id='email' placeholder='Upisite svoj email' className='w-285 h-58 pl-3 rounded-2xl'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="phone" className='text-base'>Broj telefona</label>
              <input type="text" value="" id='phone' placeholder='Upisite svoj broj telefona' className='w-285 h-58 pl-3 rounded-2xl'/>
            </div>              
          </div>

          <div className='flex flex-col mt-6'>
          <label htmlFor="message" className=''>Poruka</label>
              <input type="textarea" value="" id='message' placeholder='Upisite svoju poruku' className='w-610 h-100 pl-3 rounded-2xl'/>
          </div>

          <div className='mt-5 flex justify-between'>
            <div className='flex w-218 h-47 bg-white p-3 items-center'>
              <input type="checkbox" />
              <p className='inline pl-2 text-10'>Nisam robot</p>
              <img src="/recaptcha.png" width={25} height={25} className='ml-20' alt="" />
            </div>

            <a href="#" className='bg-kahvanaPink text-white text-sm font-semibold w-167 h-49 text-center p-4 rounded-2xl'>POŠALJI UPIT<FontAwesomeIcon icon={faPaperPlane} className='ml-2 inline' width={16} height={16} /></a>
          </div>
        </div>
        </div>
     
 

    
  )
}

export default Form