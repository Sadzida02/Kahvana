import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane} from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <div>
        <div id='banner' className='text-white flex flex-col items-center justify-center text-center gap-5 bg-cover bg-no-repeat bg-center h-1040 custom-img' >
            <div className='w-526 mt-36 font-bold'>
                <h1 className='text-9xl'>we do <span className='text-kahvanaPink '>IT</span> <br />better<span className='text-kahvanaPink '>.</span></h1> 
            </div>
            
            <p className='h-72 text-2xl font-normal'>Software Engineering - Data Enhancement and <br />Psychographic Analysis - Graphic Design and Print</p>
            <a href="#contact" className='bg-kahvanaPink text-white text-sm font-semibold w-167 h-49 text-center p-4 rounded-2xl'>Get in Touch <FontAwesomeIcon icon={faPaperPlane} className='ml-2 inline' width={16} height={16} /></a>
        </div>      
    </div>
  )
}

export default Home
