import "./App.css";
import { Navbar } from "./layouts/Navbar/Navbar";
import { Homepage } from "./pages/Homepage";
import { Footer } from "./layouts/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { WavyTop } from "./components/WavyTransition/WavyTop";

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
        <WavyTop color="fill-cloud-blue-500" />
        <Footer />
      </footer>
    </>
  );
}

export default App;
