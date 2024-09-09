'use client'
import React from 'react'
import { useEffect, useState, useRef } from 'react';


const Trusted = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [showNewElements, setShowNewElements] = useState(false);

  const handleTrusted2 = () => {
    const divElement = divRef.current;

    if (divElement) {
      // Remove existing elements
      if (divElement.firstChild) {
        divElement.removeChild(divElement.firstChild);
        
      }
      const newDiv = document.createElement('div');
      newDiv.className = 'flex flex-col justify-center items-center ml-24 ';

      const title1 = document.createElement('p');
      title1.textContent = 'THERE ARE NO LIMITS!';
      title1.className = 'text-base flex-col text-center text-[#626060]';

      const title2 = document.createElement('p');
      title2.textContent = 'WE ARE PROFI AT';
      title2.className = 'whitespace-nowrap flex-col text-center text-black font-semibold text-36px';

      const paragraph = document.createElement('p');
      paragraph.textContent = '"Our IT company specializes in delivering cutting-edge software solutions tailored to meet the specific needs of our clients. We provide a wide range of services, including custom application development, web design and development, as well as the implementation of complex IT infrastructure solutions. Our expertise spans across various sectors, from healthcare to finance, allowing us to offer personalized IT services that cater to each client\'s unique requirements. We keep a close eye on the latest IT trends, ensuring our clients stay ahead in the rapidly evolving industry. Through careful analysis of business processes and technological needs, we work to optimize efficiency and reduce costs for our clients. "</p>';
      paragraph.className = 'w-790 mt-6 text-base';

      // Create the grid and elements
      const gridDiv = document.createElement('div');
      gridDiv.className = 'grid grid-cols-3 gap-12 w-790 mt-12';

      // Add elements to the grid
      gridDiv.innerHTML = `
        <div class="text-center w-200">
          <div class="custom-img2 rounded-2xl flex items-center justify-center h-150">
            <img src="/trustedIcon1.png" alt="" />
          </div>
          <p class="font-semibold pt-4">Mobile Development</p>
        </div>
        <div class="text-center w-200">
          <div class="custom-img2 rounded-2xl flex items-center justify-center h-150">
            <img src="/trustedIcon2.png" alt="" />
          </div>
          <p class="font-semibold pt-4">Web Development</p>
        </div>
        <div class="text-center w-200">
          <div class="custom-img2 rounded-2xl flex items-center justify-center h-150">
            <img src="/trustedIcon3.png" alt="" />
          </div>
          <p class="font-semibold pt-4">IoT</p>
        </div>
        <div class="text-center w-200">
          <div class="custom-img2 rounded-2xl flex items-center justify-center h-150">
            <img src="/trustedIcon4.png" alt="" />
          </div>
          <p class="font-semibold pt-4">Marketing</p>
        </div>
        <div class="text-center w-200">
          <div class="custom-img2 rounded-2xl flex items-center justify-center h-150">
            <img src="/trustedIcon5.png" alt="" />
          </div>
          <p class="font-semibold pt-4">SEO</p>
        </div>
        <div class="text-center w-200">
          <div class="custom-img2 rounded-2xl flex items-center justify-center h-150">
            <img src="/trustedIcon6.png" alt="" />
          </div>
          <p class="font-semibold pt-4">Human Resources</p>
        </div>
      `;

      // Append elements to the new div
      newDiv.appendChild(title1);
      newDiv.appendChild(title2);
      newDiv.appendChild(paragraph);
      newDiv.appendChild(gridDiv);

      divElement.appendChild(newDiv);
     

      setShowNewElements(!showNewElements);
    }
  };

  const handleTrusted3 = () => {
    const divElement = divRef.current;

    if (divElement) {
      // Remove existing elements
      if (divElement.firstChild) {
        divElement.removeChild(divElement.firstChild);
        
      }
      const newDiv = document.createElement('div');
      newDiv.className = 'flex flex-col justify-center items-center';

      // Create and style the elements within the new div
      const title1 = document.createElement('p');
      title1.textContent = 'There are no stupid questions!';
      title1.className = 'text-base flex-col text-center text-[#626060]';

      const title2 = document.createElement('p');
      title2.textContent = 'We answered the most frequent questions:';
      title2.className = 'whitespace-nowrap flex-col text-center text-black font-semibold text-36px';

      const gridDiv = document.createElement('div');
      gridDiv.className = 'mt-10 flex flex-col gap-9';

      gridDiv.innerHTML=``
      // Create and style the individual grid items
      const gridItem1 = document.createElement('div');
      gridItem1.className = 'w-876 h-100 bg-white flex items-center rounded-xl justify-between';
      const gridItem1Text = document.createElement('p');
      gridItem1Text.textContent = 'What are your core services and solutions?';
      gridItem1Text.className = 'font-semibold px-8 text-2xl';
      const gridItem1Image = document.createElement('img');
      gridItem1Image.src = '/down-solid.png';
      gridItem1Image.className = 'mr-12';
      gridItem1Image.alt = '';
      gridItem1Image.width = 16;
      gridItem1Image.height = 16;
      gridItem1.appendChild(gridItem1Text);
      gridItem1.appendChild(gridItem1Image);

      // Create and style the other grid items similarly
      const gridItem2 = document.createElement('div');
      gridItem2.className = 'w-876 h-100 bg-white flex items-center rounded-xl justify-between';
      const gridItem2Text = document.createElement('p');
      gridItem2Text.textContent = 'How do you stay updated with IT trends?';
      gridItem2Text.className = 'font-semibold px-8 text-2xl';
      const gridItem2Image = document.createElement('img');
      gridItem2Image.src = '/down-solid.png';
      gridItem2Image.className = 'mr-12';
      gridItem2Image.alt = '';
      gridItem2Image.width = 16;
      gridItem2Image.height = 16;
      gridItem2.appendChild(gridItem2Text);
      gridItem2.appendChild(gridItem2Image);
      
      const gridItem3 = document.createElement('div');
      // ... (add styling and content for gridItem3)
      const gridItem4 = document.createElement('div');
      // ... (add styling and content for gridItem4)
      const gridItem5 = document.createElement('div');
      // ... (add styling and content for gridItem5)

      // Append the grid items to the grid div
      gridDiv.appendChild(gridItem1);
      gridDiv.appendChild(gridItem2);
      gridDiv.appendChild(gridItem3);
      gridDiv.appendChild(gridItem4);
      gridDiv.appendChild(gridItem5);

      // Append all elements to the new div
      newDiv.appendChild(title1);
      newDiv.appendChild(title2);
      newDiv.appendChild(gridDiv);

      divElement.appendChild(newDiv);
     

      setShowNewElements(!showNewElements);
    }
  };


  return (
    <div className='bg-almostWhite relative gap-20 px-24 py-28 flex flex-col-3 h-1024'>

      <div className='flex flex-col justify-center items-center gap-24'>

        <div className='w-250 h-200 flex flex-col rounded-2xl bg-white items-center justify-center' >
              <img src="/formkit_people.png" alt="people" width={100} height={100} />
              <h3  className='text-xl font-extrabold'>Review</h3>    
        </div>
        <div onClick={handleTrusted2}  className='w-250 h-200 flex flex-col rounded-2xl bg-[#EDEAEA] items-center justify-center' >
              <img src="/areas.png" className='opacity-30' alt="people" width={100} height={100} />
              <h3 className='text-xl font-extrabold opacity-30'>Areas of our work</h3>    
        </div>
        <div onClick={handleTrusted3} className='w-250 h-200 flex flex-col rounded-2xl bg-[#EDEAEA] items-center justify-center' >
              <img src="/faq.png" className='opacity-30' alt="people" width={100} height={100} />
              <h3 className='text-xl font-extrabold opacity-30'>FAQ</h3>    
        </div>
      </div>
     
     <div ref={divRef} >
      <div className='flex gap-20'>
        <img id="street"src="/reviewstreet.jpg" alt="development"  width={302} height={804}  className='rounded-3xl '/>
        <div id="trusted1" className='flex flex-col justify-center items-center'>
            <p className='text-base flex-col text-center text-[#626060]'>DARE TO DREAM BIG</p>
            <p className='mt-5 whitespace-nowrap flex-col text-center text-black font-semibold text-36px'>Trusted by many</p>

          <a href="" className='w-539 h-150 bg-white rounded-3xl  flex-row flex mt-5'>
            <img src="/linkedin1.jpg" alt="" className='rounded-full h-150 w-150 border-black border-2'/>
            <div className='w-342 h-131 mt-2 ml-10 rounded-xl '>
              <h4>Ime Prezime</h4>
              <p>CEO @ Digital Hub</p>
              <p className='text-sm'>-Dreaming big is just the beginning! Turn your dreams into reality through our services. From visionary product design to cutting-edge mobile app development.</p>
            </div>
          </a>

          <a href="" className='w-539 h-150 bg-white rounded-3xl  flex-row flex mt-5'>
          <div className='w-342 h-131  mt-2 ml-10 rounded-xl '>
            <h4>Ime Prezime</h4>
            <p>CEO @ Digital Hub</p>
            <p className='text-sm'>-Dreaming big is just the beginning! 
                Turn your dreams into reality through our services. 
                From visionary product design to cutting-edge mobile app development.
                </p>
            </div>
            <img src="/linkedin2.jpg" alt="" className='rounded-full h-150 w-150 border-2 border-black'/>
          </a>
          <a href="" className='w-539 h-150 bg-white rounded-3xl  flex-row flex mt-5 mb-20'>
            <img src="/linkedin3.jpg" alt="" className='rounded-full h-150 w-150 border-2 border-black flex flex-col'/>
            <div className='w-342 h-131  mt-2 ml-10 rounded-xl '>
            <h4>Ime Prezime</h4>
            <p>CEO @ Digital Hub</p>
            <p className='text-sm'>-Dreaming big is just the beginning! 
                Turn your dreams into reality through our services. 
                From visionary product design to cutting-edge mobile app development.
                </p>
            </div>

          </a>
          
           
        </div>
        </div>
        </div>
        

        
     
    </div>
  )
}

export default Trusted