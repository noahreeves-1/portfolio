import "./App.css";
import { Navbar } from "./layouts/Navbar/Navbar";
import { Homepage } from "./pages/Homepage";
import { Footer } from "./layouts/Footer/Footer";
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
      <footer className="mt-auto">
        <Footer />
      </footer>
    </>
  );
}

export default App;
