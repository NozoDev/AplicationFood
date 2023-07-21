import React from "react";

export const MenuOrder = () => {
  return (
    <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
      <div className="lg:col-span-6">
        <header className="p-4">
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
              <p className="text-gray-500">21/07/2023</p>
            </div>
            <form>
              <div className="w-full relative">
                <i class="bx bx-search-alt absolute left-2 top-1/2 -translate-y-1/2 text-gray-300"></i>
                <input
                  type="text"
                  className=" w-full py-2 pl-10 pr-4 bg-[#1F1D2B] rounded-lg text-gray-300 outline-none"
               placeholder="Search"
               />
              </div>
            </form>
          </div>
          <nav className="text-black-300 flex items-center justify-between border-b">
            <a href="#" className=" relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-red-400 before:left-0 before:rounded-full before:-bottom-[1px] text-red-400">Hot dishes</a>
            <a href="#" className=" py-2 pr-4">Cold dishes</a>
            <a href="#" className=" py-2 pr-4 ">Soup</a>
            <a href="#" className=" py-2 pr-4 ">Grill</a>
          </nav>
          <div>
            <h2>Choose dishes</h2>
            <i class='bx bxs-chevron-down' ></i>
          </div>
        </header>
      </div>
      <div className="lg:col-span-2 fixed lg:static right-0">Carrito</div>
    </main>
  );
};
