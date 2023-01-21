import { useState } from "react";
import "./App.css";
import { Navbar } from "./layouts/Navbar";
import { Homepage } from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
