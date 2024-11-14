"use client"
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="w-full h-[40px] lg:h-[100px] bg-[#121618] oswald flex justify-between items-center pt-2 lg:pt-16">
      {/* Drawer Toggle Button */}
      <div className='w-full flex justify-end px-4'>
        <button
          className="text-white lg:hidden"
          onClick={toggleDrawer}
        >
          {isDrawerOpen ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
      </div>

      {/* Drawer for Large Screens */}
      <div >
        <ul
          className={`fixed top-0 right-0 h-full z-10  bg-[#121618] w-[300px] transition-transform duration-300 transform ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          } lg:static lg:translate-x-0 lg:flex lg:w-[400px] lg:justify-between`}
        >
          <li className="text-[#f5f5f5] text-[16px] font-normal px-4 mt-10 lg:mt-0">HOME</li>
          <li className="text-[#f5f5f5] text-[16px] font-normal px-4 mt-10 lg:mt-0">MENU</li>
          <li className="text-[#f5f5f5] text-[16px] font-normal px-4 mt-10 lg:mt-0">MAKE A RESERVATION</li>
          <li className="text-[#f5f5f5] text-[16px] font-normal px-4 mt-10 lg:mt-0">CONTACT US</li>
        </ul>

        {/* Close Button inside Drawer */}
        {isDrawerOpen && (
          <div className="absolute top-4 right-4 z-10">
            <IoMdClose size={24} className="text-white" onClick={toggleDrawer} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;