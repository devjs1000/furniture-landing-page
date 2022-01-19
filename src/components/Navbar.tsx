import React,{useContext, useState} from "react";
import { context } from "../context/mainContext";

export default function Navbar() {
  const ctx=useContext(context)
  return (
    <nav className="flex justify-between mx-2">
      <img
        className="h-12 px-2 w-auto object-cover"
        src="https://seeklogo.com/images/W/woodland-logo-0EC7F57B3B-seeklogo.com.png"
        alt="brand"
        aria-label="brand"
      />
      <div className="relative  w-full flex justify-end">
        <button className="text-gray-400 mx-2  hover:text-gray-800 sm-hide">
          PRODUCTS
        </button>
        <button className="text-gray-400 sm-hide mx-2 hover:text-gray-800">
          HOME DECOR
        </button>
        <button className="text-gray-400 sm-hide  mx-2 hover:text-gray-800">
          HOW IT WORKS
        </button>
        <button className="text-gray-400 mx-2 sm-show hover:text-gray-800" onClick={()=>{
         ctx.setMenuNav(1)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
