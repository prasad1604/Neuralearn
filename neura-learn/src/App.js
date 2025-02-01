import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './Assets/CSS/main.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import HomeCarousel from './Components/HomeCarousel';
import HomeCard from './Components/HomeCard';
import Contact from './Components/Contact';
import About from './Components/About';
import GuessNumber from './Components/GuessNumber';
import ChooseGames from './Components/ChooseGames';

const HomePage = () => {
  return (
    <>
      <HomeCarousel />
      <HomeCard />
    </>
  )
}

const ContactPage = () => {
  return (
    
    <Contact/>   
  )
}

const AboutPage = () => {
  return (
    <About/>
  )
}

const ChooseGamesPage = () => {
  return (
    <>
    <ChooseGames/>
    </>
  )
}

const GuessNumberPage = () => {
  return (
    <GuessNumber/>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/ChooseGamesPage" element = {<ChooseGamesPage/>}/>
        <Route path="/ChooseGamesPage/GuessNumberPage" element={<GuessNumberPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

