import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApplicationForm from "../components/careerPage/ApplicationForm"; // Move the form component to a separate file
import About from "./About/About";
import Home from "./Home/Home";
import "../Styles/About.css";
import "./App.css";
import Step from "./premium/Step";
import SuccessStory from "../components/Home/SuccessStory";
import Layout from "../components/Layout";
import Footer from "../components/footer/Footer";
import Premium from "./premium/Premium";
import NavBar from "../components/NavBar";
import Career from "../components/careerPage/Career";
import SuperDailyProgram from "./superDailyProgram/SuperDailyProgram";
import ResearchHub from "../components/Research Hub/ResearchHub";
import PrivacyPolicy from "./privacyPolicy/PrivacyPolicy";
import TermsCondition from "./termsCondition/TermsCondition";
import Contact from './contact_us/contactPage'

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
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route
          path="/super_daily_app_program"
          element={<SuperDailyProgram />}
        />
        <Route path="/research" element={<ResearchHub />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
