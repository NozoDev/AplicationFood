import React from "react";

export const Sidebar = () => {
  return (
    <div className="bg-[#1F1D2B] fixed left-0 top-0 w-26 h-full rounded-tr-xl rounded-br-xl">
     <div>
     <ul className="pl-3">
        <li>
          <h1 className="text-2xl animate-pulse text-gray-300 uppercase font-bold text-center my-5">
            Logo
          </h1>
        </li>
        <li className="bg-stone-400 p-3  rounded-tl-xl rounded-bl-xl ">
          <a href="#" className="p-3 bg-red-400  rounded-xl block text-center">
            <i className="bx bx-home text-white text-2xl "></i>
          </a>
        </li> 
        <li className="hover:bg-stone-400 mt-2 p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="p-3 group-hover:bg-red-400  rounded-xl block text-center ">
            <i className="bx bx-envelope text-red-400 text-2xl group-hover:text-white ransition-colors"></i>
          </a>
        </li>
        <li className="hover:bg-stone-400 p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="p-3 group-hover:bg-red-400  rounded-xl block text-center ">
            <i className="bx bxs-food-menu text-red-400 text-2xl group-hover:text-white ransition-colors"></i>
          </a>
        </li>
        <li className="hover:bg-stone-400 p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="p-3 group-hover:bg-red-400  rounded-xl block text-center ">
            <i className="bx bxs-pizza text-red-400 text-2xl group-hover:text-white ransition-colors"></i>
          </a>
        </li>
        <li className="hover:bg-stone-400 p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="p-3 group-hover:bg-red-400  rounded-xl block text-center ">
            <i className="bx bxs-bell-ring text-red-400 text-2xl group-hover:text-white ransition-colors"></i>
          </a>
        </li>
        <li className="hover:bg-stone-400 p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="p-3 group-hover:bg-red-400  rounded-xl block text-center ">
            <i className="bx bxs-user-account text-red-400 text-2xl group-hover:text-white ransition-colors"></i>
          </a>
        </li>
        
      </ul>
     </div>
     <div>
      <ul className="pl-4">
        <li className="mt-20 hover:bg-stone-400 p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a href="#" className="p-3 group-hover:bg-red-400  rounded-xl block text-center ">
            <i className="bx bxs-cog text-red-400 text-2xl group-hover:text-white ransition-colors"></i>
          </a>
        </li>
      </ul>
     </div>
    </div>
  );
};
