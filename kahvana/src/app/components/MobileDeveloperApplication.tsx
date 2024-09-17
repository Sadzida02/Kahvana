
'use client'
import React, { useState } from 'react';

function JobApplication() {
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Handler for file input changes
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    } else {
      setFile(null); // Handle case where no file is selected
    }
  };

  // Handler for text input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new FormData instance
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    
    if (file) {
      formDataToSend.append('file', file);
    }

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        body: formDataToSend,
      });
      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application.');
      }
    } catch (error) {
      alert('An error occurred.');
    }
  };

  return (
    <div className='bg-almostWhite w-1288 h-798 mt-112 ml-75 rounded-2xl px-70'>
      <div className='py-10'>
        <p className='text-5xl'>Mobile Developer</p>
        <p className='text-2xl'>J/M/S - Full Time</p>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='h-600 w-620 bg-white flex justify-center flex-col text-center items-center rounded-2xl'>
          <h3 className='font-extrabold text-3xl'>Job Description</h3>
          <p className='text-xl mt-5 w-552'>
            {/* Description text */}
            blablablablablablablablablablablablablablablablablab
            {/* truncated for brevity */}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor="name" className='text-xl text-[#333333] mb-1'>Full name:</label>
            <input
              type="text"
              id='name'
              placeholder='John Doe'
              value={formData.name}
              onChange={handleInputChange}
              className='w-440 h-75 pl-3 rounded-2xl'
            />
          </div>
          <div className='flex flex-col mt-6'>
            <label htmlFor="email" className='text-xl text-[#333333] mb-1'>Email:</label>
            <input
              type="text"
              id='email'
              placeholder='johndoe@gmail.com'
              value={formData.email}
              onChange={handleInputChange}
              className='w-440 h-75 pl-3 rounded-2xl'
            />
          </div>
          <div className='flex flex-col mt-6'>
            <label htmlFor="phone" className='text-xl text-[#333333] mb-1'>Phone number:</label>
            <input
              type="text"
              id='phone'
              placeholder='+38761 751 848'
              value={formData.phone}
              onChange={handleInputChange}
              className='w-440 h-75 pl-3 rounded-2xl'
            />
          </div>

          <div className='flex justify-between items-center mt-8'>
            <p>Upload your CV</p>
            <input
              type="file"
              onChange={handleFileChange}
              className='bg-black text-white w-182 rounded-md text-center py-2 h-11'
            />
          </div>

          <div className='flex justify-center mt-8'>
            <button
              type="submit"
              className='bg-[#4CAF50] w-121 rounded-md text-center p-1 h-16 text-white text-3xl font-extrabold'
            >
              APPLY
            </button>
          </div>

          <div className='flex justify-center mt-6'>
            <p className='text-base'>info@kahvana.com</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobApplication;
