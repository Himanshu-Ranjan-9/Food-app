import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../assets/bg1.jpg';
import X from '../assets/icons8-x-64.png';

function SignUp({ handleSignUpmodel, handleLoginmodel }) {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: ""
  });

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    handleLoginmodel();
    handleSignUpmodel();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,

      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      handleSignUpmodel();
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
      <div className='DivWrapper fixed  top-0  bottom-0 left-0 right-0 ' style={{ backgroundColor: "rgba(0,0, 0, 0.8)", filter: "blur(8px)", backgroundBlendMode: "brighten" }}></div>
      <button className='absolute right-[300px] top-20 z-40'>
        <img src={X} alt="" className="w-12 h-12 z-40" onClick={handleSignUpmodel} />
      </button>
      <div className="DivContainer w-[50rem] h-[35rem] z-20 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">

        <div className="flex w-[100%] h-full z-30 justify-center rounded-xl" style={{ background: `rgb(0, 0, 0, 0.3) url(${bg})`, backgroundBlendMode: "darken", backgroundSize: "cover", backgroundRepeat: "noRepeat", backgroundPosition: "bottom" }}>

          <div className=" h-[100%] w-[50%]  text-center justify-center  flex flex-col  ">
            <h3 className=' text-white font-Pompiere text-4xl font-bold'>SignUp</h3>
            <form action="" className='flex flex-col  gap-2 mt-4' onSubmit={handleSubmit} >
              <label htmlFor="name">
                <input type="text" id='name' placeholder='Full Name' name="name" value={credentials.name} className='border-black text-black border-2 rounded-3xl mb-2 w-[100%] p-2 pl-8 bg-white justify-center' onChange={onChange} />
              </label>

              <label htmlFor="email">
                <input type="email" id='email' placeholder='Email' name="email" value={credentials.email} className='border-black text-black w-[100%] border-2 rounded-3xl mb-2  p-2 pl-8 bg-white justify-center' onChange={onChange} />
              </label>

              <label htmlFor="password">
                <input type="password" id='password' placeholder='Password' name="password" value={credentials.password} className='border-black w-[100%] border-2 p-2 pl-8 mb-2 rounded-3xl  bg-white' onChange={onChange} />
              </label>

              <label htmlFor="geolocation">
                <input type="text" id='geolocation' name="geolocation" value={credentials.geolocation} placeholder='Geolocation' className='border-black w-[100%] border-2 p-2 pl-8  rounded-3xl  bg-white' onChange={onChange} />
              </label>
              <button type='submit' className='text-white mb-4 p-2 bg-blue-500 rounded-3xl mx-16'>SignUp</button>
              <p className='flex justify-center mb-4 text-white' onClick={handleSignUpClick}>Already have an Account?<span className="flex justify-center cursor-pointer">&nbsp; Login</span></p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;
