import Nav from "./components/Nav";
import Footer from "./components/footer";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Contact from "./components/contact";
import Careers from "./components/careers/Careers";
import "./components/homepage/homepage.css";
import { ToastContainer } from "react-toastify";

import { Route, Routes } from "react-router-dom";
import JobToast from "./components/JobToast"; // Import as a component
function App() {
  return (
    <>
      <ToastContainer />
      <JobToast /> {/* Use JobToast as a component */}
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>

        <Route path="/about" element={<About />}></Route>
        <Route path="/careers" element={<Careers />}></Route>
      </Routes>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
