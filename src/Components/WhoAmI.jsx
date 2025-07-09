import React from 'react'

export default function WhoAmI() {
  return (
    <section className="w-full px-4 py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Who am I?
        </h2>

        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          I’m <span className="text-blue-600 font-semibold">Jaykant Yadav</span>,
          a passionate <span className="text-green-600 font-medium">Full Stack Developer</span> based in India.
          I love turning ideas into real-world web experiences using technologies like
          <span className="text-purple-600 font-medium"> ReactJS</span>, 
          <span className="text-yellow-500 font-medium"> Node.js</span>, and 
          <span className="text-pink-500 font-medium"> MongoDB</span>.
        </p>

        <p className="mt-4 text-md text-gray-500">
          Currently focused on building intuitive, fast, and scalable applications while continuously leveling up my skills and contributing to open-source.
        </p>
      </div>
    </section>
  );
}
