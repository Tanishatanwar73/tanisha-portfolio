import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./pages/About";
import SkillPage from "./pages/skillPage";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import CustomCursor from "./components/CustomCursor";
import NeuralNetwork from "./components/NeuralNetwork";
import Contact from "./components/Contact";
import { motion, useReducedMotion } from "motion/react";
import './App.css'

function App() {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = (delay = 0) => shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 48 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <div className="app-shell">
      <div className="ambient-background" aria-hidden="true">
        <NeuralNetwork />
        <span className="ambient-orb ambient-orb-blue" />
        <span className="ambient-orb ambient-orb-cyan" />
        <span className="ambient-sweep" />
      </div>

      <div className="app-content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <SkillPage />
          <motion.div {...revealProps(0.1)}><Projects /></motion.div>
          <motion.div {...revealProps(0.05)}><Experience /></motion.div>
          <motion.div {...revealProps(0.1)}><Contact /></motion.div>
        </main>

        <Footer />
        <FloatingContact />
      </div>
      <CustomCursor />
    </div>
  )
}

export default App
