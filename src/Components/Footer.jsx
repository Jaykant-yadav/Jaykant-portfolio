import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 text-center mt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Name or Logo */}
        <h4 className="text-xl font-semibold text-gray-800 mb-2">
          Jaykant Yadav
        </h4>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 text-gray-600 mb-2 text-sm">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-black transition">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-blue-600 transition">LinkedIn</a>
          <a href="mailto:hello@jaykant.dev" className="hover:text-red-500 transition">Email</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Jaykant Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
