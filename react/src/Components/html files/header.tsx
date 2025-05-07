import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-[#C89934] to-indigo-700 shadow-lg">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-white text-2xl font-bold">
                TeachHub
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link
                to="/"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/profile"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                Profile
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/reports"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                Reports
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
              {/* works */}
              <Link
                to="/works"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/top-students"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                Top Students
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/courses"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                Course
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/blog"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-blue-200 transition duration-300 font-medium relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C89934] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex space-x-3">
              <Link
                to="/login"
                className="bg-white text-[#C89934] hover:bg-blue-100 px-4 py-2 rounded-lg font-medium transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#C89934] text-white hover:bg-[#A67B28] px-4 py-2 rounded-lg font-medium transition duration-300"
              >
                Sign Up
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
