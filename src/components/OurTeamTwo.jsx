import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from './Footer'
import { useEffect } from 'react'
const OurTeamTwo = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling behavior
    });
  }, []); 

  return (
    <div className='w-[100%] h-screen'>
        <div className='w-full h-[150px] 
       font-title text-[50px] flex justify-center items-center '><i>TeamName Team</i></div>
        <div className='bg-[#EBEAE6] w-full h-[110vh] flex justify-start'>
              <div className='w-[50%] flex justify-end mt-[70px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[400px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] mt-[30px]'>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore doloremque .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore doloremque Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum facilis dicta laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore doloremque Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate eveniet perferendis vel, commodi itaque consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>
        </div>
        
        <div className='bg-white w-full h-[90vh] flex justify-start' >
              <div className='w-[50%] flex justify-end mt-[30px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[425px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] '>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae..</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore dolor laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>
        </div>

        <div className='bg-[#EBEAE6] w-full h-[90vh] flex justify-start'>
              <div className='w-[50%] flex justify-end mt-[30px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[425px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] '>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae..</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore dolor laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>
        </div>

        <div className='bg-white w-full h-[90vh] flex justify-start'>
              <div className='w-[50%] flex justify-end mt-[30px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[425px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] '>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae..</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore dolor laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>

        </div>

        <div className='bg-[#EBEAE6] w-full h-[90vh] flex justify-start'>
              <div className='w-[50%] flex justify-end mt-[30px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[425px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] '>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae..</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore dolor laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>
        </div>

        <div className='bg-white w-full h-[90vh] flex justify-start'>
              <div className='w-[50%] flex justify-end mt-[30px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[425px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] '>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae..</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore dolor laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>
        </div>
        <div className='bg-[#EBEAE6] w-full h-[90vh] flex justify-start'>
              <div className='w-[50%] flex justify-end mt-[30px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[425px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] '>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae..</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore dolor laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>
        </div>
        <div className='bg-white w-full h-[90vh] flex justify-start'>
              <div className='w-[50%] flex justify-end mt-[30px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[425px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] '>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae..</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore dolor laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>
        </div>
        <div className='bg-[#EBEAE6] w-full h-[90vh] flex justify-start'>
              <div className='w-[50%] flex justify-end mt-[30px]'>
                <img src="./public/image3.png" alt="" className='h-[425px] w-[425px]'/>
              </div>
              <div className='w-[50%] flex justify-start flex-col p-[50px] pl-[60px]'>
                <h2 className='font-title text-[40px] '>Name</h2>
                <p className='font-title2 underline'><i>NAME@NAME-SALON.COM</i></p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERIENCE : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit .</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>INSPIRATION : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, recusandae..</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>EXPERTIES : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores porro reiciendis incidunt dolorem blanditiis ipsam. Consequuntur nisi labore dolor laboriosam ex saepe consequuntur minima nostrum. Laudantium, repellat sequi!.</p>
                <p className='w-[80%] mt-[20px] text-[13px] font-title1'><b>PRODUCTS : </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores consequatur, recusandae impedit quaerat accusantium quod at voluptas similique ad. Unde pariatur neque nemo illo!.</p>
              </div>
        </div>

        <div
        className="relative w-full h-[400px]  mb-[30px] flex items-center justify-center bg-cover bg-center bg-[url('/public/image6.png')]"
      >
        
        <div className="absolute bottom-16">
        <button className=" text-[13px] mb-[31px] bg-[#F2C1A9] h-[68px] w-[163px] rounded-[31px]">
          <NavLink
              to="/book"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              BOOK NOW
            </NavLink>
          </button>
        </div>
      </div>

      <div className="text-[30px] font-title w-screen h-[30px] flex items-center justify-center mb-[30px]">
        <i>@ABCDSALON</i>
      </div>
      <Footer/>
    </div>
  )
}

export default OurTeamTwo
