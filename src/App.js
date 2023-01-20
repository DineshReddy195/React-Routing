import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Nav";
import Home from "./Pages/Home";
import Aboutus from "./Pages/About";
import Contactus from "./Pages/Contact";
import Services from "./Pages/Services";
import Projects from "./Pages/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route index element={<Home />} />
        <Route path="AboutUs" element={<Aboutus />} />
        <Route path="ContactUs" element={<Contactus />} />
        <Route path="Services" element={<Services />} />
        <Route path="Projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;