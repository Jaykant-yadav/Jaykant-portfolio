import Image from "next/image";
import { about } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mt-12">
      {/* Left: Text */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm <span className="text-blue-600">{about.name}</span>
        </h1>
        <p className="mt-6 text-lg text-gray-700">
          {about.bio[0]} <br />
        </p>
        <a
          href="/Jaykant_Resume.pdf"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Right: Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/images/profile.jpg"
          alt="Jaykant Profile"
          width={300}
          height={300}
          className="rounded-full shadow-lg h-auto"
          priority={true}
        />
      </div>
    </section>
  );
}
