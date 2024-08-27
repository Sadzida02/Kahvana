import React from 'react'

function WhyChooseUs() {
  return (
    <div className='text-white'>
        <div className='flex mt-32 items-center justify-center'>
            <div className='w-475 h-0.5 bg-white'></div>
            <h2 className='p-2 w-1/3 text-4xl text-center font-extrabold'>Why Choose Us?</h2>
            <div className='w-475 h-0.5 bg-white'></div>
         </div>

        <div className='h-850 mx-24'>
            <div className='mt-36 flex items-center justify-between mx-48'>
                <div className='flex flex-col items-center justify-center text-lightGray'>
                    <p className='text-2xl '>We are the best!</p>
                    <div className='bg-lightGray rounded-2xl w-8 h-8 mt-4'></div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <p className='text-2xl'>We are the best!</p>
                    <div className='bg-white rounded-3xl w-10 h-10 mt-4'></div>
                </div>
                <div className='flex flex-col items-center justify-center text-lightGray'>
                    <p className='text-2xl'>We are the best!</p>
                    <div className='bg-lightGray rounded-2xl w-8 h-8 mt-4'></div>
                </div>
            </div>
            <div className='bg-white h-0.5 w-620 relative bottom-5 mx-305 mb-40'></div>

            <div className='flex justify-around'>
                <div className='w-580'>
                    <p className='lg:text-xl sm:text-sm'>Text koji opisuje zasto smo najbolji. Mislim nece ici najbolji smo vec neki kontent, zavisno od kontent kreatora, sta zeli da bude, ali jasan je cilj, da prikazemo zasto bas mi. Text koji opisuje zasto smo najbolji. Mislim nece ici najbolji smo vec neki kontent, zavisno od kontent kreatora, sta zeli da bude, ali jasan je cilj, da prikazemo zasto bas mi. Text koji opisuje zasto smo najbolji. Mislim nece ici najbolji smo vec neki kontent, zavisno od kontent kreatora, sta zeli da bude, ali jasan je cilj, da prikazemo zasto bas mi. </p>
                </div>

                <div>
                    <img src="/office.jpg" width={472} height={365} alt="" className='relative bottom-16 z-0 rounded-3xl' />
                    <img src="/office.jpg" width={382} height={341} alt="" className='relative bottom-64 left-36 rounded-3xl z-5' />
                </div>
            </div>
         </div>

      
    </div>
  )
}

export default WhyChooseUs
