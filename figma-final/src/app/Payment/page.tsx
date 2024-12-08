"use client"; // This marks the component as a client component

import React, { useState } from "react";
import { FiMenu, FiSettings } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineBell } from "react-icons/ai";
import Image from "next/image"; // For image optimization
import Logo from "@/Images/Image.png"; // Adjust the path to the actual image

const page: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header Section */}
      <header className="w-full h-[124px] bg-white border-b border-gray-200 shadow-md relative">
        <div className="flex justify-between items-center px-4 h-full">
          {/* Menu Icon */}
          <div className="relative">
            <FiMenu
              className="text-gray-600 cursor-pointer"
              size={20}
              onClick={toggleMenu}
            />
            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-[150px] py-2 z-20">
                <ul className="flex flex-col space-y-2 px-4">
                  <li>
                    <a href="/" className="text-gray-700 hover:text-blue-500">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-700 hover:text-blue-500">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="text-gray-700 hover:text-blue-500">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/newpage" className="text-gray-700 hover:text-blue-500">
                      New Page
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Logo and Search Bar */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-blue-500">MORENT</h1>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] h-[30px] p-2 pl-4 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 text-blue-500">
                <FiMenu size={16} />
              </button>
            </div>
          </div>

          {/* Icons and Avatar Section */}
          <div className="flex items-center gap-3">
            <AiOutlineHeart className="text-gray-600 cursor-pointer" size={20} />
            <AiOutlineBell className="text-gray-600 cursor-pointer" size={20} />
            <FiSettings className="text-gray-600 cursor-pointer" size={20} />
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300">
              <Image
                src={Logo} // Replace with actual image path
                alt="User Avatar"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content of New Page */}
      <main className="p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to the New Page</h2>
        <p>This is the content of the new page you requested. You can add more sections here.</p>
      </main>
    </div>
  );
};

export default page;
