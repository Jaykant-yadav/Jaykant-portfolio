import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import WhoAmI from './Components/WhoAmI';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Footer from './Components/Footer';
import SocialMedia from './Components/SocialMedia';

export default function App() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed top-0 left-0 -z-10 h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <Navbar />
      <HeroSection />
      <SocialMedia />
      <WhoAmI />
      <Skills />
      <Education />
      <Footer />
    </div>
    // <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
  )
}

