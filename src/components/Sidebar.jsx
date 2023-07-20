import React from "react";

export const Sidebar = () => {
  return (
    <div className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full">
      <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
        Logo
      </h1>
      <ul className="pl-4">
        <li className="bg-[#31776f] p-4 rounded-tl-xl rounded-bl-xl ">
          <a href="" className="p-4 bg-red-400 rounded-xl block text-center">
            <i className="bx bx-home text-white text-xl "></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
