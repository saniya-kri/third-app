import React from "react";
import {Menu, X} from "lucide-react"
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constant";

const Navbar = () => {
      const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false)


      const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
      };

  return (
    <nav className="sticky backdrop-blur-lg top-0 py-3 z-50 border-b border-b-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm w-full">
        <div className="flex items-center w-full justify-between">

          <div className="flex items-center flex-shrink-0 p-2">
            <img className="w-10 h-10 mr-2" src={logo} alt="" srcset="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>

          <div className="flex justify-center items-center ml-11 mr-11 p-5 text-xxl">
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:flex justify-center item-center space-x-12 p-2">
            <a href="#" className=" px-3 text-center border rounded-md mt-1 py-2">
              Sign In
            </a>
            <a href="#" className="bg-gradient-to-r from-orange-500 to bg-orange-800 px-3 py-3 border rounded-md">
             Create an account
            </a>
          </div>
              <div className="lg:hidden md:flex flex-col justify-end">
                <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/> : <Menu/>}
                </button>
              </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-netural-900 w-full p-12 flex flex-col justify-center items-center lg:hidden bg-[#121212] pb-20">
            <ul>
              {navItems.map((item,index) => (
               <li key={index} className="py-4">
                 <a href={item.href}>{item.label}</a>
               </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 rounded-md border mt-1 sm:text-sm">
                Sign In
              </a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to bg-orange-800 px-3 py-3 border rounded-md">
             Create an account
            </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
