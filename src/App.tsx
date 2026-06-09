import { useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ExperienceSection from "./components/Experience";
import './App.css';

function App() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay ?? '0') * 100;
            setTimeout(() => el.classList.add('visible'), delay);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main id="main-content">
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
