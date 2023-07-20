import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { MenuMovil } from "./components/MenuMovil";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-stone-400 w-full min-h-screen">
      <Sidebar />
      <MenuMovil/>
    </div>
  );
}

export default App;
