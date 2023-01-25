import "./App.css";
import { Homepage } from "./pages/Homepage";
import { Navbar } from "./layouts/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
