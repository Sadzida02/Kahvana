import React from 'react'

function AboutUs() {
  return (
    <div>
    <div className='w-full text-white flex flex-col bg-cover bg-no-repeat bg-center h-1040 custom-img'>
        <div className='flex items-center justify-center mt-52'>
            <div className='w-475 h-0.5 bg-white'></div>
            <h2 className='p-2 w-1/3 text-4xl text-center font-extrabold'>About Us</h2>
            <div className='w-475 h-0.5 bg-white'></div>
         </div>

         <div className='flex justify-around mx-24 mt-44 h-402'>
                <div className='w-620'>
                    <p className='lg:text-xl sm:text-sm text-center'>"At Kahvana, we are an agile team of tech experts passionate about innovation. Our mission is to deliver top-notch IT solutions that empower businesses in the digital age. With a dedicated group of software developers, network engineers, and cybersecurity specialists, we've successfully streamlined operations and enhanced security for our clients. Join us on our journey to harness technology's power and drive digital transformation with Kahvana as your trusted IT partner." </p>
                </div>

                <div>
                    <img src="/office.jpg" width={472} height={365} alt="" className='relative bottom-16 z-0  shadow-my rounded-3xl' />
                    <img src="/office.jpg" width={382} height={341} alt="" className='relative bottom-64 left-36 rounded-3xl z-5 shadow-my' />
                </div>

                
            </div>

            <div className='text-xl text-white flex items-center justify-center font-thin my-10'>
                    <p>Scroll down to meet us</p><img src="/down-solid.png" className="ml-3 invert" alt="" width={16} height={16}/>    
            </div>
    </div>

    <div className='bg-white w-full px-24 text-black py-20'>
                <div className='text-center mb-16'>
                    <h3 className='font-extrabold text-4xl'>The Magicians</h3>
                </div>

                <div className='flex flex-col-3 justify-between'>
                    <div className='flex flex-col justify-center text-center'>
                        <img src="/person.jpg" width={333} height={460} alt="person" className='rounded-xl'/>
                        <p className='text-3xl font-extrabold my-2'>Ime Prezime</p>
                        <p className='text-sm'>CEO</p>
                    </div>
                    <div className='flex flex-col justify-center text-center'>
                        <img src="/person.jpg" width={333} height={460} alt="person" className='rounded-xl'/>
                        <p className='text-3xl font-extrabold my-2'>Ime Prezime</p>
                        <p className='text-sm'>CTO</p>
                    </div>
                    <div className='flex flex-col justify-center text-center'>
                        <img src="/person.jpg" width={333} height={460} alt="person" className='rounded-xl'/>
                        <p className='text-3xl font-extrabold my-2'>Ime Prezime</p>
                        <p className='text-sm'>COO</p>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-20 mt-12'>
                    <div className='flex flex-col justify-center text-center text-xl font-extrabold'>
                        <img src="/person.jpg" width={244} height={350} alt="person" className='rounded-xl'/>
                        <p className='my-2'>Ime Prezime</p>
                        <p className='text-darkGray'>UI/UX Designer</p>
                    </div>
                    <div className='flex flex-col justify-center text-center text-xl font-extrabold'>
                        <img src="/person.jpg" width={244} height={350} alt="person" className='rounded-xl'/>
                        <p className='my-2'>Ime Prezime</p>
                        <p className='text-darkGray'>Web Developer</p>
                    </div>
                    <div className='flex flex-col justify-center text-center text-xl font-extrabold'>
                        <img src="/person.jpg" width={244} height={350} alt="person" className='rounded-xl'/>
                        <p className='my-2'>Ime Prezime</p>
                        <p className='text-darkGray'>Mobile Developer</p>
                    </div>
                    <div className='flex flex-col justify-center text-center text-xl font-extrabold'>
                        <img src="/person.jpg" width={244} height={350} alt="person" className='rounded-xl'/>
                        <p className='my-2'>Ime Prezime</p>
                        <p className='text-darkGray'>Marketing Specialist</p>
                    </div>
                    <div className='flex flex-col justify-center text-center text-xl font-extrabold'>
                        <img src="/person.jpg" width={244} height={350} alt="person" className='rounded-xl'/>
                        <p className='my-2'>Ime Prezime</p>
                        <p className='text-darkGray'>Graphic Designer</p>
                    </div>
                    <div className='flex flex-col justify-center text-center text-xl font-extrabold'>
                        <img src="/person.jpg" width={244} height={350} alt="person" className='rounded-xl'/>
                        <p className='my-2'>Ime Prezime</p>
                        <p className='text-darkGray'>Data Specialist</p>
                    </div>
                    <div className='flex flex-col justify-center text-center text-xl font-extrabold'>
                        <img src="/person.jpg" width={244} height={350} alt="person" className='rounded-xl'/>
                        <p className='my-2'>Ime Prezime</p>
                        <p className='text-darkGray'>SEO</p>
                    </div>
                    <div className='flex flex-col justify-center text-center text-xl font-extrabold'>
                        <img src="/person.jpg" width={244} height={350} alt="person" className='rounded-xl'/>
                        <p className='my-2'>Ime Prezime</p>
                        <p className='text-darkGray'>Q/A</p>
                    </div>

                </div>
                
            </div>
    </div>
  )
}

export default AboutUs
