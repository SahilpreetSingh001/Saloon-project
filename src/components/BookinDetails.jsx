import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Footer from "./Footer";
import { NavLink } from 'react-router-dom';

const BookinDetails = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = r.text();
    console.log(data, res);

    setFormSubmitted(true); 

    setTimeout(() => {
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center relative ">
          <div className="bg-black w-[95vw] h-[40px] mt-[10px] rounded-[5px] flex items-center p-[8px]">
            <p className="text-white text-[18px] font-title">Welcome Guest</p>
          </div>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[95vw] font-title h-[40px] bg-[#c8e9f4] p-[20px] ml-[31px] mt-[20px] flex items-center text-[20px] font-semibold rounded-[5px] border-4 border-[#B3EDFF]">
            {" "}
            Choose Your Location
          </div>
          <div className="ml-[31px] font-title1 p-[20px]">
            <label className="text-[18px]">Available Locations : </label>
            <select
              {...register("location", {
                required: { value: true, message: "This field is required" },
              })}
            >
              <option value="other">options</option>
              <option value="city1">CityOne</option>
              <option value="city2">CityTwo</option>
            </select>
            
          </div>
          <div className="w-[95vw] font-title h-[40px] bg-[#c8e9f4] p-[20px] ml-[31px] mt-[20px] flex items-center text-[20px] font-semibold rounded-[5px] border-4 border-[#B3EDFF]">
            {" "}
            Enter Contact No.
          </div>
          <div className="ml-[31px] font-title1 p-[20px]">
            <input
              type="number"
              {...register("contact")}
              placeholder="Enter no.."
              className=" border-2 border-[#c8e9f4] h-[35px] w-[200px] rounded-[7px] p-[5px]"
            />
          </div>
          <div className="w-[95vw] font-title h-[40px] bg-[#c8e9f4] p-[20px] ml-[31px] mt-[20px] flex items-center text-[20px] font-semibold rounded-[5px] border-4 border-[#B3EDFF]">
            {" "}
            Enter Email ID
          </div>
          <div className="ml-[31px] font-title1 p-[20px]">
            <input
              type="email"
              {...register("mail")}
              placeholder="Email.."
              className=" border-2 border-[#c8e9f4] h-[35px] w-[200px] rounded-[7px] p-[5px]"
            />
          </div>
          <div className="w-[95vw] font-title h-[40px] bg-[#c8e9f4] p-[20px] ml-[31px] mt-[20px] flex items-center text-[20px] font-semibold rounded-[5px] border-4 border-[#B3EDFF]">
            {" "}
            Who are you booking an appointment for?
          </div>
          <div className="ml-[31px] font-title1 p-[20px]">
            <input
              type="number"
              {...register("noOfPersons")}
              placeholder="No. of Persons.."
              className=" border-2 border-[#c8e9f4] h-[35px] w-[200px] rounded-[7px] p-[5px]"
            />
          </div>
          <div className="w-[95vw] font-title h-[40px] bg-[#c8e9f4] p-[20px] ml-[31px] mt-[20px] flex items-center text-[20px] font-semibold rounded-[5px] border-4 border-[#B3EDFF]">
            {" "}
            Address
          </div>
          <div className="ml-[31px] font-title1 p-[20px]">
            <input
              type="text"
              {...register("address")}
              placeholder="Address.."
              className=" border-2 border-[#c8e9f4] h-[35px] w-[200px] rounded-[7px] p-[5px] "
            />
          </div>
          <div className="w-[95vw] font-title h-[40px] bg-[#c8e9f4] p-[20px] ml-[31px] mt-[20px] flex items-center text-[20px] font-semibold rounded-[5px] border-4 border-[#B3EDFF]">
            {" "}
            Date Of Appointment
          </div>
          <div className="ml-[31px] p-[20px] ">
            <input
              type="date"
              {...register("date")}
              className=" border-2 border-[#c8e9f4] h-[35px] w-[200px] rounded-[7px] p-[5px]"
            />
          </div>
          <div className="ml-[31px] flex justify-center items-center mb-[20px] gap-[800px]">
          <button className="bg-[#c8e9f4] font-title h-[50px] w-[150px] rounded-[8px] text-[19px] hover:bg-[#5accf3] mr-[40px]">
            <NavLink
              to="/book"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              Book a Services
            </NavLink>
          </button>
            <input
              type="submit"
              disabled={isSubmitting}
              value="submit"
              className="bg-[#c8e9f4] font-title h-[50px] w-[100px] rounded-[8px] text-[19px] hover:bg-[#5accf3]"
            />
          </div>
          
          {isSubmitting && <div className="text-[20px] font-title ml-[500px] text-[#39513C]">Your Booking is Confirmed</div>}
          {formSubmitted && (
        <div className="text-[20px] flex justify-center items-center font-title2 mt-[20px] text-[#39513C]">
          Your Form Is Submitted...
        </div>
      )}
        </form>
        <Footer/>
      </div>

    </>
  );
};

export default BookinDetails;
