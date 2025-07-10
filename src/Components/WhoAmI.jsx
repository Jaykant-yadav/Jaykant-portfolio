import React from 'react'

export default function WhoAmI() {
    return (
        <section className="w-full px-4 py-16 text-center">
            <div className='flex'>
                <div className='w-full md:w-1/2 flex justify-center md:justify-end mx-12 '>
                    <img src='/JaykantPic.jpg' className="w-60 h-75 md:w-72 md:h-80 rounded-2xl ring-2 ring-blue-500  border-blue-500 shadow object-cover shadow-lg shadow-indigo-500/50"
                    />
                </div>
                <div className="">
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
                        Who am I?
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        I’m <span className="text-blue-600 font-semibold">Jaykant Yadav</span>,
                        a passionate <span className="text-green-600 font-medium">Full Stack Developer</span> based in India.
                        I love turning ideas into real-world web experiences using technologies like
                        <span className="text-purple-600 font-medium"> ReactJS</span>,
                        <span className="text-yellow-500 font-medium"> Node.js</span>, and
                        <span className="text-green-500 font-medium"> MongoDB</span>.
                    </p>

                    <p className="mt-4 text-md text-gray-500">
                        Currently focused on building intuitive, fast, and scalable applications while continuously leveling up my skills and contributing to open-source.
                    </p>
                </div>
            </div>

        </section>
    );
}
