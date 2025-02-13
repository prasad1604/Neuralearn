import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute";

// import './Assets/CSS/main.css';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomeCarousel from "./Components/HomeCarousel";
import HomeCard from "./Components/HomeCard";
import Contact from "./Components/Contact";
import About from "./Components/About";
import GuessNumber from "./Components/GuessNumber";
import ChooseGames from "./Components/ChooseGames";
import Landing from "./Components/LandingPage";
import PrintableActivities from "./Components/PrintableActivities";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const HomePage = () => {
  return (
    <>
      <HomeCarousel />
      <HomeCard />
    </>
  );
};

const ContactPage = () => {
  return <Contact />;
};

const AboutPage = () => {
  return <About />;
};

const ChooseGamesPage = () => {
  return (
    <>
      <ChooseGames />
    </>
  );
};

const GuessNumberPage = () => {
  return <GuessNumber />;
};

const LandingPage = () => {
  return <Landing />;
};

const PrintableActivitiesPage = () => {
  return <PrintableActivities />;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/games" element={<ChooseGamesPage />} />
          <Route path="/games/guess-number" element={<GuessNumberPage />} />
          <Route path="/printables" element={<PrintableActivitiesPage />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
