import { useState } from "react";
import { Sidebar } from "./components/Sidebar";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-stone-900/70 w-full  min-h-screen">
      <Sidebar />
    </div>
  );
}

export default App;
