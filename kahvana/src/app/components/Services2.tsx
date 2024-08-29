import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

function Services2() {
  return (
    <div className='text-white my-24'>
        <div className='flex items-center justify-center'>
            <div className='w-475 h-0.5 bg-white'></div>
            <h2 className='p-2 w-1/3 text-4xl font-extrabold text-center'>Services</h2>
            <div className='w-475 h-0.5 bg-white'></div>
         </div>

         <div className='h-366 flex justify-around items-center mt-8 mx-190'>
            <div className='hover:bg-white hover:text-black p-5 rounded-2xl'>
                <h2 className='text-3xl'>Web App</h2>
                <hr className='w-24 h-1 bg-white my-3'/>
                <p className='text-xl my-8'>Bla bla naa bla bla Bla bla <br />naa bla bla Bla bla naa <br /> bla bla Bla bla naa bla bla</p>
                <a href="#" className='text-sm font-light'>More about this service <FontAwesomeIcon icon={faArrowRight} className='ml-2 inline' width={16} height={16}></FontAwesomeIcon></a>
            </div>

            <div className='bg-white h-44 w-1'></div>

            <div className='hover:bg-white hover:text-black p-5 rounded-2xl'>
                <h2 className='text-3xl'>Marketing</h2>
                <hr className='w-24 h-1 bg-white my-3'/>
                <p className='text-xl my-8'>Bla bla naa bla bla Bla bla <br />naa bla bla Bla bla naa <br /> bla bla Bla bla naa bla bla</p>
                <a href="#" className='text-sm font-light'>More about this service <FontAwesomeIcon icon={faArrowRight} className='ml-2 inline' width={16} height={16}></FontAwesomeIcon></a>
            </div>
            
            <div className='bg-white h-44 w-1'></div>

            <div className='hover:bg-white hover:text-black p-5 rounded-2xl'>
                <h2 className='text-3xl'>SEO</h2>
                <hr className='w-24 h-1 bg-white my-3'/>
                <p className='text-xl my-8'>Bla bla naa bla bla Bla bla <br />naa bla bla Bla bla naa <br /> bla bla Bla bla naa bla bla</p>
                <a href="#" className='text-sm font-light'>More about this service <FontAwesomeIcon icon={faArrowRight} className='ml-2 inline' width={16} height={16}></FontAwesomeIcon></a>
            </div>
            

         </div>
      
    </div>
  )
}

export default Services2
