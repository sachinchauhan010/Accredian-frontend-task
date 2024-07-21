import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/accredianlogo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Accredian Logo" className="h-10" />
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex items-center"
            >
              Courses
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute mt-2 w-48 bg-white shadow-lg rounded">
                <Link
                  to="/course1"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Frontend
                </Link>
                <Link
                  to="/course2"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  Backend
                </Link>
                <Link
                  to="/course3"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(false)}
                >
                  FullStack
                </Link>
              </div>
            )}
          </div>
        </div>
        <button
          className="block md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className={`md:flex items-center space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
          <Link to="/refer" className="text-gray-700 hover:text-gray-900 transition block md:inline-block">Refer & Earn</Link>
          <Link to="/resources" className="text-gray-700 hover:text-gray-900 transition block md:inline-block">Resources</Link>
          <Link to="/about" className="text-gray-700 hover:text-gray-900 transition block md:inline-block">About Us</Link>
          <Link to="/login" className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition block md:inline-block">Login</Link>
          <Link to="/try-for-free" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition block md:inline-block">Try for free</Link>
        </nav>
      </div>
    </header>
  );
}
