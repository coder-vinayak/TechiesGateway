import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Highlightedtect from '../Common/Highlightedtect';
import { FcGoogle } from "react-icons/fc";

const SignUp = ({toggleForm}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
<div className="signup-container flex items-center justify-center px-8 md:px-16 lg:px-24 py-5 w-full max-w-[746px] rounded-[24px] bg-[#F6F6F6] shadow-[0px_8px_48px_0px_#00000014] mx-auto mt-2">
<form className="signup-form w-full" onSubmit={handleSubmit}>
        {/* Main Heading */}
        <h1 className='font-semibold text-center text-2xl mb-2'>Sign up to <Highlightedtect text={'SMM panel'} /></h1>
        <p className='font-extralight text-center mb-6'>Boost your social media effortlessly with our fast, affordable SMM panel!</p>

        {/* Input Box Headings */}
        <h3 className="font-medium mb-2">Full name</h3>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input
            type="text"
            name="fullName"
            placeholder="Enter your Full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <h3 className="font-medium mb-2">Username</h3>
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <h3 className="font-medium mb-2">Email -ID</h3>
        <div className="input-group">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <h3 className="font-medium mb-2">Mobile no.</h3>
        <div className="input-group">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <input
            type="text"
            name="mobile"
            placeholder="Enter your mobile no."
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password Input */}
        <h3 className="font-medium mb-2">Password</h3>
        <div className="input-group">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span onClick={togglePasswordVisibility} className="toggle-password-icon">
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>

       
       

        <button type="submit" className="signup-button">Sign-up</button>

        {/* Horizontal Rule */}
        <div className="flex items-center my-6">
          <hr className="w-full border-gray-300" />
          <span className="mx-4 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>

        <div className="social-login flex p-5 gap-6">
          <button className="google-login flex items-center gap-2">
            <FcGoogle size={24} /> Login with Google
          </button>
          <button className="facebook-login flex items-center gap-2">
            <FontAwesomeIcon icon={faFacebook} size={24} /> Login with Facebook
          </button>
        </div>

        <p className="text-center mt-4">Already have an account? <button onClick={toggleForm}><Highlightedtect text={"Login"}  /></button></p>
      </form>
    </div>
  );
};

export default SignUp;