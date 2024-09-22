import React, { useState } from 'react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown) => {
    setShowDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src="https://th.bing.com/th/id/OIP.cwA_sO58WTx6imuS3ZT7tQAAAA?rs=1&pid=ImgDetMain" alt="Logo" className="h-10 w-10" />
        <div className="text-green-600 font-bold text-2xl">Printify</div>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
        <div className="w-8 h-1 bg-gray-700 mb-1"></div>
        <div className="w-8 h-1 bg-gray-700 mb-1"></div>
        <div className="w-8 h-1 bg-gray-700"></div>
      </div>

      {/* Menu items */}
      <ul className={`hidden md:flex space-x-6 text-gray-700 font-semibold`}>
        <li className="relative">
          <div
            className="flex items-center justify-between w-full cursor-pointer"
            onMouseEnter={() => handleMouseEnter('catalog')}
            onMouseLeave={handleMouseLeave}
            onClick={() => showDropdown === 'catalog' ? setShowDropdown(null) : handleMouseEnter('catalog')}
          >
            Catalog
            <span className="ml-2">{showDropdown === 'catalog' ? '▲' : '▼'}</span>
          </div>
          {showDropdown === 'catalog' && (
            <ul className="absolute left-0 bg-gray-100 rounded-md mt-1">
              <li className="px-4 py-2 hover:bg-gray-200">T-shirts</li>
              <li className="px-4 py-2 hover:bg-gray-200">Mugs</li>
              <li className="px-4 py-2 hover:bg-gray-200">Hoodies</li>
            </ul>
          )}
        </li>
        <li className="relative">
          <div
            className="flex items-center justify-between w-full cursor-pointer"
            onMouseEnter={() => handleMouseEnter('how-it-works')}
            onMouseLeave={handleMouseLeave}
            onClick={() => showDropdown === 'how-it-works' ? setShowDropdown(null) : handleMouseEnter('how-it-works')}
          >
            How it Works
            <span className="ml-2">{showDropdown === 'how-it-works' ? '▲' : '▼'}</span>
          </div>
          {showDropdown === 'how-it-works' && (
            <ul className="absolute left-0 bg-gray-100 rounded-md mt-1">
              <li className="px-4 py-2 hover:bg-gray-200">Start for Free</li>
              <li className="px-4 py-2 hover:bg-gray-200">How to Customize</li>
              <li className="px-4 py-2 hover:bg-gray-200">Design Ideas</li>
            </ul>
          )}
        </li>
        <li>Pricing</li>
        <li>Blog</li>
        <li className="relative">
          <div
            className="flex items-center justify-between w-full cursor-pointer"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
            onClick={() => showDropdown === 'services' ? setShowDropdown(null) : handleMouseEnter('services')}
          >
            Services
            <span className="ml-2">{showDropdown === 'services' ? '▲' : '▼'}</span>
          </div>
          {showDropdown === 'services' && (
            <ul className="absolute left-0 bg-gray-100 rounded-md mt-1">
              <li className="px-4 py-2 hover:bg-gray-200">Shipping</li>
              <li className="px-4 py-2 hover:bg-gray-200">Fulfillment</li>
              <li className="px-4 py-2 hover:bg-gray-200">Support</li>
            </ul>
          )}
        </li>
        <li>Use-cases</li>
        <li>Need help?</li>
      </ul>

      {/* Right side buttons */}
      <div className="space-x-4 hidden md:flex">
        <button className="text-gray-700 hover:text-green-600">Log in</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
          Sign up
        </button>
      </div>

      {/* Full-Screen Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col p-4">
          <button className="self-end text-gray-700" onClick={closeMobileMenu}>
            Close
          </button>
          <ul className="flex flex-col space-y-4 mt-8 text-gray-700 font-semibold">
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => closeMobileMenu()}
              >
                Catalog
              </div>
            </li>
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => closeMobileMenu()}
              >
                How it Works
              </div>
            </li>
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => closeMobileMenu()}
              >
                Pricing
              </div>
            </li>
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => closeMobileMenu()}
              >
                Blog
              </div>
            </li>
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => closeMobileMenu()}
              >
                Services
              </div>
            </li>
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => closeMobileMenu()}
              >
                Use-cases
              </div>
            </li>
            <li>
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => closeMobileMenu()}
              >
                Need help?
              </div>
            </li>
            <li>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
                onClick={() => closeMobileMenu()}
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
