"use client";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Convert formData to a plain object
    const formDataObject: Record<string, unknown> = { ...formData };

    emailjs.send(
      'service_upunbmn',
      'template_z7nt83x',
      formDataObject, // Using the plain object here
      'X4Dxl2tliQ0lyQoxV'
    )
    .then((response) => {
      alert('Message sent successfully!');
      setFormData({
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
      });
    })
    .catch((error) => {
      alert('Failed to send message, please try again.');
    });
  };

  return (
    <div id="contact" className='bg-almostWhite w-full h-522 flex flex-row justify-between px-16 py-16'>
      <img src="/formaslika.jpg" alt="" width={552} height={402} className='rounded-2xl' />
      <div className='flex flex-col'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-3'>
            <div className='flex flex-col'>
              <label htmlFor="name" className='text-base'>Ime</label>
              <input 
                type="text" 
                value={formData.name} 
                onChange={handleChange} 
                id='name' 
                placeholder='Upisite svoje ime' 
                className='w-285 h-58 pl-3 rounded-2xl'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="surname" className='text-base'>Prezime</label>
              <input 
                type="text" 
                value={formData.surname} 
                onChange={handleChange} 
                id='surname' 
                placeholder='Upisite svoje prezime' 
                className='w-285 h-58 pl-3 rounded-2xl'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-base'>Email</label>
              <input 
                type="text" 
                value={formData.email} 
                onChange={handleChange} 
                id='email' 
                placeholder='Upisite svoj email' 
                className='w-285 h-58 pl-3 rounded-2xl'
                required
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="phone" className='text-base'>Broj telefona</label>
              <input 
                type="text" 
                value={formData.phone} 
                onChange={handleChange} 
                id='phone' 
                placeholder='Upisite svoj broj telefona' 
                className='w-285 h-58 pl-3 rounded-2xl'
                required
              />
            </div>              
          </div>
          <div className='flex flex-col mt-6'>
            <label htmlFor="message" className=''>Poruka</label>
            <textarea 
              value={formData.message} 
              onChange={handleChange} 
              id='message' 
              placeholder='Upisite svoju poruku' 
              className='w-610 h-100 pl-3 rounded-2xl'
              required
            />
          </div>
          <div className='mt-5 flex justify-between'>
            <div className='flex w-218 h-47 bg-white p-3 items-center'>
              <input type="checkbox"  />
              <p className='inline pl-2 text-10'>Nisam robot</p>
              <img src="/recaptcha.png" width={25} height={25} className='ml-20' alt="" />
            </div>
            <button type="submit" className='bg-kahvanaPink text-white text-sm font-semibold w-167 h-49 text-center p-4 rounded-2xl'>
              POŠALJI UPIT
              <FontAwesomeIcon icon={faPaperPlane} className='ml-2 inline' width={16} height={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
