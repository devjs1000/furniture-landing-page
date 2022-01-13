import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between mx-2">
      <div className="px-2 rounded-full w-full ">
        <img
          className="h-12 w-auto object-cover"
          src="https://seeklogo.com/images/W/woodland-logo-0EC7F57B3B-seeklogo.com.png"
          alt="brand"
          aria-label="brand"
        />
      </div>
      <div className="relative  w-full flex justify-around">
        <button className="text-gray-400 mx-2 drops hover:text-gray-800">
          PRODUCTS
          <div className="fixed hidden text-left text-gray-400 ">
            <ul>
              <li className='hover:text-gray-800'>tables</li>
              <li className='hover:text-gray-800'>almirahs</li>
              <li className='hover:text-gray-800'>desks</li>
            </ul>
          </div>
        </button>
        <button className="text-gray-400 mx-2 hover:text-gray-800">
          HOME DECOR
        </button>
        <button className="text-gray-400 drops mx-2 hover:text-gray-800">
          HOW IT WORKS
          <div className="fixed hidden text-left text-gray-400 ">
            <ul>
              <li className='hover:text-gray-800'>tables</li>
              <li className='hover:text-gray-800'>almirahs</li>
              <li className='hover:text-gray-800'>desks</li>
            </ul>
            </div>
        </button>
        <button className="text-gray-400   mx-2 drops hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
        
        <div className="fixed hidden  text-left text-gray-400 ">
            <ul>
              <li className='hover:text-gray-800 '>about</li>
              <li className='hover:text-gray-800'>contact</li>
              <li className='hover:text-gray-800 '>help</li>
            </ul>
            </div>
        </button>
      </div>
    </nav>
  );
}
