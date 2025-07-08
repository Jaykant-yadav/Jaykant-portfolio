import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="absolute inset-0 -z-5 h-full w-full items-center px-5 py-8 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <Navbar />

    </div>
  )
}

