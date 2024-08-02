import React, { useState } from "react";
import "./css/navebar.css";
import { Link } from "react-router-dom";
import Login from "../screens/Login";
import SignUp from "../screens/Signup";

function Navbar() {
  const [humburger, setHumburger] = useState(false);
  const [Loginmodel,setLoginModel] = useState(false);
  const [SignUpmodel,setSignUpModel] = useState(false);
  const handleClick = () => {
    setHumburger(!humburger);
  };
  const handleLoginmodel = ()=>{
   return setLoginModel(!Loginmodel)
  }
  const handleSignUpmodel = ()=>{
   return setSignUpModel(!SignUpmodel)
  }
  return (
    <div>
      <nav className={humburger ? "navbar-1069" : "navbar"}>
        <div
          className={`  absolute left-10 block
        ${humburger ? "humburger-menu-outer-1069" : "humburger-menu-outer"}

      `}
        >
          <div className="humburger-menu" onClick={handleClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        <i
          className={
            humburger
              ? `fas fa-times text-5xl  text-white absolute ml-4 mt-7`
              : ""
          }
          onClick={handleClick}
        ></i>

        <div
          className=// "leftside leftside-active"
          {humburger ? "leftside-active" : "leftside"}
        >
          <div
            className={
              // "logo"
              humburger ? "logo-1069" : "logo"
            }
          >
            <img
              className={
                humburger ? "logo-1069" : "logo"
                // `logo logo-1069`
              }
              src={require("../assets/logo.png")}
              alt=""
            />
          </div>
        </div>

        <div
          className={
            // `rightside ${rightside}`
            humburger ? "rightside-1069" : "rightside"
          }
        >
          <Link
            className={
              // `navEliment ${navEliment}`
              humburger ? "navEliment-1069" : "navEliment"
            }
            to="/"
          >
            Home
          </Link>
          <Link
            className={
              // `navEliment ${navEliment}`
              humburger ? "navEliment-1069" : "navEliment"
            }
            to="/"
          >
            My Orders
          </Link>
          <Link
            className={
              // `navEliment ${navEliment}`
              humburger ? "navEliment-1069" : "navEliment"
            }
            to="/"
          >
            About us
          </Link>
          <Link
            className={
              // `navEliment ${navEliment}`
              humburger ? "navEliment-1069" : "navEliment"
            }
            to="/"
          >
            Contact us
          </Link>
          <Link
            className={
              // `navEliment ${navEliment}`
              humburger ? "navEliment-1069" : "navEliment"
            }
            
            onClick={handleLoginmodel}
          > Login
          </Link>
            {Loginmodel && <Login handleLoginmodel={handleLoginmodel} handleSignUpmodel={handleSignUpmodel}/>}
         

          <Link
            className={
              // `navEliment ${navEliment}`
              humburger ? "navEliment-1069" : "navEliment"
            }
            to=""
            onClick={handleSignUpmodel}

          >
            Sign up
          </Link>
          {SignUpmodel && <SignUp handleLoginmodel={handleLoginmodel} handleSignUpmodel={handleSignUpmodel}/>}

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
