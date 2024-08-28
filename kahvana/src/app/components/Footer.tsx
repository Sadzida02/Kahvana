import React from 'react'
<<<<<<< HEAD

const Footer = () => {
  return (
    <div className='bg-[#111111]  '>
       <div className='flex flex-col-2 justifybetween w-1550  pt-5'>
       <h1 className='text-white text-3xl ml-40 whitespace-nowrap pt-10 text-48px'>Contact <span className='text-kahvanaPink '>Info</span></h1>
       <img src="/logo1.png" alt="kahvana logo" width={100} height={100}  className='ml-200 mt-5 '/>
       </div>
        
        
       <div className='bg-kahvanaPink h-0.5 mt-10 '>
   
       </div>

       <div>


        <img src="/kartasvijeta.png" alt="" className='-mt-48 opacity-0.005 '/>
       </div>
    </div>
  )
}

export default Footer
=======
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationDot, faMailBulk} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="relative h-868 w-full text-white">
        <div className="bg-footerGray h-868 w-full">
            <div className='mx-100 flex pt-12 justify-between items-center '>
                    <h2 className='font-extrabold text-5xl'>Contact <span className='text-kahvanaPink'>Info</span></h2>
                    <img src="/logoWithoutName.png" width={140} height={140} alt="" className='' />
            </div>
            <div className='bg-kahvanaPink h-1 w-full my-4'></div>

            <div className='flex mx-155 mt-16 justify-between items-center'>
                <div>
                    <h3 className='font-extrabold text-3xl'>Head Office: <br /> USA</h3>
                    <div className='text-2xl my-6'>
                        <div className='py-3'>
                            <FontAwesomeIcon icon={faPhone} width={20} height={20} className='inline' />
                            <p className='py-3 inline ml-2'>+387626788898</p>
                        </div>

                        <div className='py-3'>
                            <FontAwesomeIcon icon={faMailBulk} width={20} height={20} className='inline' />
                            <p className='inline ml-2'>info@kahvana.com</p>
                        </div>

                        <div className='py-3'>
                            <FontAwesomeIcon icon={faLocationDot} width={20} height={20} className='inline' />
                            <p className='inline ml-2 w-313'>651 N Broad St, Suite 201 <br /> Middletown, DE 19709 US</p>
                        </div>
                    </div>                    
                </div>

                <div className='bg-kahvanaPink h-36 w-1 ml-20'></div>

                <div>
                    <h3 className='font-extrabold text-3xl'>Admin Office: <br /> Bosnia and Herzegovina</h3>
                    <div className='text-2xl my-6'>
                        <div className='py-3'>
                            <FontAwesomeIcon icon={faPhone} width={20} height={20} className='inline' />
                            <p className='py-3 inline ml-2'>+387626788898</p>
                        </div>

                        <div className='py-3'>
                            <FontAwesomeIcon icon={faMailBulk} width={20} height={20} className='inline' />
                            <p className='inline ml-2'>info@kahvana.com</p>
                        </div>

                        <div className='py-3'>
                            <FontAwesomeIcon icon={faLocationDot} width={20} height={20} className='inline' />
                            <p className='inline ml-2 w-313'>Maršala Tita 54, 71 000 Sarajevo</p>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='text-center'>
                <a href="#" className='font-bold text-xl'>More from <span className='text-kahvanaPink'>us</span></a>
            </div>

            <div className='flex justify-between items-center mx-155 text-2xl my-16'>
                <a href="#">Affiliate</a>
                <a href="#">Home</a>
                <a href="#">Portfolio</a>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>

            <div className='flex items-center justify-center'>
                <img src="/instagram.png" alt="" />
                <img src="/linkedinLogo.png" alt="" />
                <img src="/facebookLogo.png" alt="" />
            </div>

            <div className='flex items-center justify-center mt-7 gap-3'>
                <a href="#" className='text-base font-normal'> Terms & Conditions</a>
                <a href="#"> Privacy Policy</a>
            </div>

            <div>
            
            </div>
        </div> 

        <img src="kartasvijeta.png" className="absolute top-0 left-0 w-full h-full object-cover opacity-5" alt="Background image"></img>
        
</div>
        
            

        
      
    
  )
}

export default Footer
>>>>>>> 029bc457b8409426abe22816f509c3b137b6a710
