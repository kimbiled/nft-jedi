import React, {useEffect} from 'react';
const Header = () => {
  return (
    <header className="fonts-mono bg-[#0A1330] text-white shadow-md border-b-[#343B4F] border-b overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-evenly h-20">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-4 justify-between">
          <div className='flex flex-row items-center'>
            <img
                src="./images/icons/logo.png" // Замените на ваш логотип
                alt="Logo"
                className="w-8 h-5"
            />
          </div>

          {/* Back Button */}
         <div>
         <button className="flex items-center space-x-2 px-4 py-2 border border-[#343B4F] rounded-md hover:bg-gray-700 ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Back</span>
          </button>
         </div>
        </div>
        {/* Center Section: Navigation */}
        <nav className="hidden md:flex space-x-10 text-sm mr-8">
          <button className="hover:text-gray-400">Generate</button>
          <div className="relative group">
            <button className="hover:text-gray-400">Explore ▾</button>
            {/* Dropdown */}
            <div className="absolute left-0 hidden group-hover:block bg-[#0a0e17] border border-gray-700 rounded-lg shadow-lg mt-2 w-40">
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Option 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                Option 2
              </a>
            </div>
          </div>
          <button className="hover:text-gray-400">How it works</button>
          <button className="hover:text-gray-400">FAQ</button>
        </nav>

        {/* Right Section: Icons and Mobile Menu */}
        <div className="flex items-center space-x-2">
          {/* Icons */}
          <button className="hover:text-gray-400 hidden md:block  border border-[#343B4F] rounded-md hover:bg-gray-700 px-2 py-2">
            <img src="./images/icons/bell.png" alt='bell' className='w-5 h-5' />
          </button>
          <button className="hover:text-gray-400 hidden md:block  border border-[#343B4F] rounded-md hover:bg-gray-700 px-2 py-2">
            <img src="./images/icons/crystal.png" alt='crystal' className='w-5 h-5' />
          </button>
          {/* Explore Button */}
          <button className="hidden md:flex hover:text-gray-400 text-[#AEB9E1] hidden border border-[#343B4F] rounded-md hover:bg-gray-700 px-4 py-2 flex flex-row justify-between items-center w-32">
            Explore
            <img src="./images/icons/bag.png" alt='bag' className='w-4 h-4' />
          </button>

          {/* Mobile Menu Button */}
          <button className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
