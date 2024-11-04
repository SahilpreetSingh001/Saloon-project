import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";

const BookinDetails = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);

    setFormSubmitted(true); 

    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <div className='h-[120vh] w-[100vw] bg-[#91A78F] flex'>
      <div className='w-[50%] h-full flex flex-col p-[100px]'>
          <h2 className='font-title text-[40px] mt-[50px]'><i>Models for <br /> Discounted Services </i></h2>
          <p className='font-title2 text-[13px] mt-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam ab tempore velit necessitatibus quod doloremque doloribus dolor aspernatur laudantium!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='p-[20px] mt-[50px]'>
        <div className='flex gap-[15px]'>
          <span> 
            <p className='font-title2'>First Name</p>
            <input type="text" {...register("name")} placeholder='First Name' className='p-[6px] h-[40px] w-[250px]'/>
          </span>  
          <span>
            <p className='font-title2'>Last Name</p>
            <input type="text" {...register("lastname")} placeholder='Last Name' className=' p-[6px] h-[40px] w-[250px]'/>
          </span>
        </div>

        <div className='mt-[30px]'>
          <p className='mb-[10px] font-title2'>Email</p>
          <input type="email" {...register("mail")} placeholder='Email' className='p-[6px] h-[40px] w-[515px]'/>
        </div>

        <div className='mt-[30px]'>
          <p className='mb-[10px] font-title2'>Subject</p>
          <input type="text" {...register("subject")} placeholder='Subject' className='p-[6px] h-[40px] w-[515px]'/>
        </div>
        <div className='mt-[30px]'>
          <p className='mb-[10px] font-title2'>Message</p>
          <input type="text" {...register("message")} placeholder='Message' className='p-[6px] h-[120px] w-[515px] align-top'/>
        </div>
        <input
          type="submit"
          disabled={isSubmitting}
          value="submit"
          className=" font-title2 h-[50px] mt-[20px] w-[130px] border-2 text-black border-black text-[19px] hover:bg-black  hover:text-white"
        />
        {formSubmitted && (
        <div className="text-[20px] font-title2 mt-[20px] text-black">
          Your Form Is Submitted...
        </div>
      )}
      </form>

     
    </div>
  );
}

export default BookinDetails;
