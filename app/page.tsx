"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-50 to-white">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-gray-900"
      >
        Hi, I’m <span className="text-indigo-600">Jaykant Kumar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-gray-600 max-w-2xl"
      >
        A passionate Full-Stack Developer who loves building interactive and
        responsive web applications using the MERN stack.
      </motion.p>

      <a
        href="/projects"
        className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        View My Work
      </a>
    </main>
  );
}
