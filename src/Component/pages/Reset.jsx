import React, { useState } from 'react';
import { FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing FontAwesome icons

function Reset() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');  // Clear error when user starts typing
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setError('');  // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
      alert('Password reset successful');
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#FFFFFF]">
      <div
        id="img"
        className="flex flex-col items-center w-full mb-3 py-5 lg:h-[1158.13px] md:h-[900px] h-auto mt-[70px]"
      >
<div className="flex justify-center items-center mt-20 md:mt-52">
<div className="w-[100%] max-w-[646px] p-10 bg-white shadow-md rounded-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Reset <span className="text-[#3D55CC]">Password</span>
            </h2>
            <p className="text-center text-gray-500 mb-6">
              Create a new password to securely regain access to your account.
            </p>

            <form onSubmit={handleSubmit}>
              {/* Password Input */}
              <div className="relative mb-4">
                <label className="block text-gray-600 mb-1">New Password</label>
                <FaLock className="absolute left-3 top-12 transform -translate-y-1/2 text-[#3D55CC]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full py-2 pl-10 pr-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter password"
                />
                <span
                  className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Confirm Password Input */}
              <div className="relative mb-4">
                <label className="block text-gray-600 mb-1">Confirm Password</label>
                <FaLock className="absolute left-3 top-12 transform -translate-y-1/2 text-[#3D55CC]" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="w-full py-2 pl-10 pr-10 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter confirm password"
                />
                <span
                  className="absolute right-3 top-12 transform -translate-y-1/2 cursor-pointer text-gray-400"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

              {/* Centered Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[70%] py-2 bg-[#3D55CC] text-white font-semibold rounded-full"
                >
                  Change password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reset;
