import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import DarkSolutions from "./components/DarkSolutions";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Experts from "./components/Experts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      {/* Sections */}
      <Achievements />
      <Projects />
      <DarkSolutions />
      <Stats />
      <Pricing />
      <Experts />
      <Footer />
    </div>
  )
}

export default App
