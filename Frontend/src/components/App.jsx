import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationForm from "../components/ApplicationForm"; // Move the form component to a separate file
import About from "../components/About";
import Home from "../components/Home";
import "../Styles/About.css";
import "./App.css";
import Step from "../components/Step";
import SuccessStory from "../components/SuccessStory";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Premium from "../components/Premium";
import NavBar from "../components/NavBar";
import PopUpBox from "../components/subBox/PopUpBox";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Apply" element={<ApplicationForm />} />
        <Route path="/step" element={<Step />} />
        <Route path="/achievers" element={<SuccessStory />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/subscription-Boxes" element={<PopUpBox />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
