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
import Career from "../components/careerPage/Career";
import SuperDailyProgram from "./superDailyProgram/SuperDailyProgram";
import ResearchHub from '../components/ResearchHub';

function App() {
  return (
    <Router>
      {<NavBar />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Apply" element={<ApplicationForm />} />
        <Route path="/step" element={<Step />} />
        <Route path="/success story" element={<SuccessStory />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route
          path="/super_daily_app_program"
          element={<SuperDailyProgram />}
        />
        <Route path="/research" element={<ResearchHub />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
