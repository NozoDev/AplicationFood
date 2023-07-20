import { useState } from "react";

import { MenuMovil } from "./components/MenuMovil";
import { Sidebar } from "./components/Sidebar";


function App() {
  

  return (
    <div className="bg-stone-400 w-full min-h-screen">
      <Sidebar  />
      <MenuMovil/>
    </div>
  );
}

export default App;
