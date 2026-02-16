import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ExperienceSection from "./components/Experience";
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
