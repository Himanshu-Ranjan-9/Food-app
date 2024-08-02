import React, { useState } from 'react'
import google_icon from "../assets/icons8-google-48.png"
import fb_icon from "../assets/icons8-facebook-48.png"
import { Link, useNavigate } from 'react-router-dom'
import bg from '../assets/bg2.jpg'
import X from "../assets/icons8-x-64.png"



function Login({ handleLoginmodel, handleSignUpmodel }) {
  const handleSignUpClick = () => {
    handleLoginmodel();
    handleSignUpmodel();
  };

  const [btnStyle, setBtnStyle] = React.useState({})
  const leftClick = () => {
    setBtnStyle({ left: '0' });
  };

  const rightClick = () => {
    setBtnStyle({ left: '110px' });
  };


  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSigninClick = () => {
    handleLoginmodel();
    handleSignUpmodel();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,

      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      handleLoginmodel();
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate("/"); 
    }
    else{
      alert("Enter valids credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <>

      <div className='DivWrapper fixed  top-0  bottom-0 left-0 right-0  ' style={{ backgroundColor: "rgba(0,0, 0, 0.8)", filter: "blur(8px)", backgroundBlendMode: "brighten" }}></div>
      <button className='absolute right-[300px] top-20 z-40'>
        <img src={X} alt="" className="w-12 h-12 z-40" onClick={handleLoginmodel} />
      </button>
      <div className="DivContainer w-[50rem] h-[35rem]  z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">

        <div className="flex w-[100%] h-full z-30 justify-center rounded-xl" style={{ background: `rgb(0, 0, 0, 0.3) url(${bg})`, backgroundBlendMode: "darken", backgroundSize: "cover", backgroundRepeat: "noRepeat", backgroundPosition: "bottom" }}>

          <div className=" h-[100%] w-[50%]  text-center justify-center  flex flex-col  ">
            <h3 className=' text-white font-Pompiere text-4xl font-bold'>Signin</h3>
            <form action="" className='flex flex-col  gap-2 mt-4'>
              <input type="email" placeholder='Enail' className='border-black text-black border-2 rounded-3xl mb-2  p-2 pl-8 bg-white justify-center' name="email" value={credentials.email} onChange={onChange} />
              <input type="password" placeholder='Password' className='border-black border-2 p-2 pl-8  rounded-3xl  bg-white' name="password" value={credentials.password} onChange={onChange} />
              <Link className="flex justify-end text-white ">Forgot password </Link>
              <button type='submit' className='text-white mb-4 p-2 bg-blue-500 rounded-3xl mx-16  ' onClick={handleSubmit}>Login</button>
              <button type='submit' className='border-black border-2  flex justify-center items-center bg-white rounded-3xl mb-2  p-2 pl-8'><img src={google_icon} alt="" className='w-6 h-6' />&nbsp; login by google </button>
              <button type='submit' className='border-black border-2 flex justify-center items-center bg-white rounded-3xl mb-2 p-2 pl-8'><img src={fb_icon} alt="" className='w-6 h-6' />&nbsp; login by facebook </button>
              <p className='flex justify-center mb-4 text-white'>Don't have an Account yet?<span className="flex justify-center cursor-pointer"
                onClick={handleSignUpClick}
              >&nbsp; SignUp</span></p>

            </form>


          </div>
        </div>


      </div>



    </>
  )
}

export default Login

