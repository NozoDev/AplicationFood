import { useState } from "react";
import { MenuMovil } from "./components/MenuMovil";
import { Sidebar } from "./components/Sidebar";
import { MenuOrder } from "./components/MenuOrder";


function App() {
  

  return (
    <div className="bg-stone-400 w-full min-h-screen">
      <Sidebar/>
      <MenuMovil/>
      <MenuOrder />
    </div>
  );
}

export default App;
