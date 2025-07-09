import React from 'react'

export default function HeroSection() {
    return (
        <div className='inset-0 -z-10 h-full w-full items-center [background:radial-gradient(200%_50%_at_20%_50%,#000_70%,#63e_250%)]'>
            <section className="min-h-screen flex flex-col items-center justify-center text-center">
                {/* Tagline */}
                <span className='text-white mb-1 bg-slate-500 rounded-lg p-1 text-sm font-semibold font-sans'>Next Project Coming soon...</span>
                <p className="text-gray-500 font-serif md:text-4xl mb-3 mt-8">
                    Transforming <span className="text-blue-600 font-medium">ideas</span> into
                    <span className="text-purple-600 font-medium"> pixel-perfect web experiences</span>.
                </p>

                {/* Name */}
                <h1 className="text-4xl md:text-2xl font-bold text-gray-800 mb-2">
                    Hello, I'm <span className="text-blue-600">Jaykant Yadav</span>
                </h1>

                {/* Title */}
                <p className="text-lg md:text-2xl text-gray-700 mb-6">
                    a <span className="text-green-600 font-semibold">Full Stack Developer</span>
                </p>

                {/* Profile Image */}
                <img
                    src="/profile.png"  // ✅ Place your image in public/profile.png
                    alt="Jaykant Yadav"
                    className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-100 mb-6"
                />

                {/* Contact Button */}
                <a
                    href="mailto:hello@jaykant.dev"
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Let's Connect — hello@jaykant.dev
                </a>
            </section>
        </div>
    );
}

