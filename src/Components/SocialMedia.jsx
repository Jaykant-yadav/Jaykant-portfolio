import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <section className="w-full py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Connect with me
      </h2>

      <div className="flex justify-center space-x-6 text-gray-600 text-2xl">
        {/* GitHub */}
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition"
        >
          <FaLinkedin />
        </a>

        {/* Twitter */}
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaTwitter />
        </a>

        {/* Email */}
        <a
          href="mailto:hello@jaykant.dev"
          className="hover:text-red-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}
