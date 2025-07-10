import React from 'react'

export default function HeroSection() {
    return (
        <section className="w-full py-28 flex items-center justify-center px-5 md:px-12 lg:px-24 bg-transparent">
            <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row -inset-y-px justify-around gap-10">

                {/* ⬅️ Left Side: Text */}
                <div className="w-full md:w-1/2 text-center md:text-left mx-5">
                    {/* Tagline */}
                    <p className="text-gray-400 text-lg mb-2">
                        Transforming <span className="text-blue-500 font-semibold">ideas</span> into
                        <span className="text-purple-500 font-semibold"> pixel-perfect web experiences</span>.
                    </p>

                    {/* Name */}
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        Hi, I'm <span className="text-blue-500">Jaykant Yadav</span>
                    </h1>

                    {/* Role */}
                    <p className="text-xl md:text-2xl text-gray-300 mt-3">
                        A passionate <span className="text-green-400 font-semibold">Full Stack Developer</span>
                    </p>

                    {/* CTA */}
                    <div className='flex flex-row gap-5'>
                        <div>
                            <a
                                href="mailto:hello@jaykant.dev"
                                className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                            >
                                HIRE ME
                            </a>
                        </div>
                        <div>
                            <div>
                            <a
                                href="mailto:hello@jaykant.dev"
                                className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                            >
                                Download CV
                            </a>
                        </div>
                        </div>
                    </div>

                </div>

                {/* Profile Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end mx-12 ">
                    <img
                        src="/JaykantPic.jpg" // put your image inside public/profile.png
                        alt="Jaykant Yadav"
                        className="w-60 h-75 md:w-72 md:h-80 rounded-2xl ring-2 ring-blue-500  border-blue-500 shadow object-cover shadow-lg shadow-indigo-500/50"
                    />
                </div>

            </div>
        </section>
    );
}

