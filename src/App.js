import './App.css';
import HelpDesk from './components/HelpDesk';
import Home from './components/Home';
import SafetyGuide from './components/SafetyGuide';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import EarthquakeBanner from './components/EarthquakeBanner';
import About from './components/About';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/safety" element={<Home />} />
        <Route exact path="/helpdesk" element={
          <>
          <Header/>
          <EarthquakeBanner />
          <HelpDesk />
          </>
          } />
        <Route exact path="/safetyguide" element={
          <>
          <Header />
          <EarthquakeBanner />
          <SafetyGuide />
          </>
          } />
        <Route exact path="/about" element={
          <>
          <Header />
          <EarthquakeBanner />
          <About />
          </>
          } />
      </Routes>
  );
}

export default App;
