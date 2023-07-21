import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

export const MenuMovil = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setshowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 p-4 py-2 px-8 flex items-center justify-between rounde-tl-xl rounded-tr-xl">
      <Sidebar showMenu={showMenu} />
      <button className="p-2">
        <i className="bx bx-user"></i>
      </button>
      <button className="p-2">
        <i className="bx bxs-plus-square"></i>
      </button>
      <button className="p-2">
        <i className="bx bx-shopping-bag"></i>
      </button>
      <button onClick={toggleMenu} className="text-white p-2">
        <i className="bx bx-menu"></i>
      </button>
    </nav>
  );
};
