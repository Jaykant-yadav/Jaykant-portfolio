import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const socialIconBox = "w-44 dark:bg-gray-600 h-24 p-6 rounded-lg shadow-lg shadow-indigo-500/50";
const IconStyle = "flex bg-slate-60";

export default function SocialMedia() {
    return (
        <section className="w-full text-center">
            {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Connect with me
            </h2> */}

            <div className="flex justify-center space-x-6 text-gray-600 text-2xl">
                {/* GitHub */}
                <div className={socialIconBox}>
                    <div className={IconStyle}>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition mt-1 text-3xl"
                        >
                            <FaGithub />
                        </a>
                        <span className='text-white ms-2'>GitHub</span>
                    </div>

                    <p className='text-sm text-white ms-5'>See My Work</p>
                </div>

                {/* LinkedIn */}
                <div className={socialIconBox}>
                    <div className={IconStyle}>
                        <a
                            href="https://linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition mt-1 text-3xl"
                        >
                            <FaLinkedin />
                        </a>
                        <span className='text-white ms-2'>LinkedIn</span>
                    </div>
                    <p className='text-sm text-white ms-8'>See My Work</p>
                </div>

                {/* Twitter */}
                <div className={socialIconBox}>
                    <div className={IconStyle}>
                        <a
                            href="https://twitter.com/yourhandle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition mt-1 text-3xl"
                        >
                            <FaTwitter />
                        </a>
                        <span className='text-white ms-2'>Twitter</span>
                    </div>
                    <p className='text-sm text-white ms-4'>See My Activity</p>
                </div>

                {/* Email */}
                <div className={socialIconBox}>
                    <div className={IconStyle}>
                        <a
                            href="mailto:hello@jaykant.dev"
                            className="text-white transition mt-1 text-3xl"
                        >
                            <FaEnvelope />
                        </a>
                        <span className='text-white ms-2'>Email ID</span>
                    </div>
                    <p className='text-sm text-white ms-8'>Contact Me</p>
                </div>
            </div>
        </section>
    );
}
