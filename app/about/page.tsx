import Image from "next/image";
import { about } from "@/data/portfolioData";
export default function About() {
  return (
    <section className="mt-20 flex flex-col md:flex-row items-center gap-8" id="about">
      {/* Left: Image */}
      <div className="flex-1 flex justify-center md:justify-start">
        <Image
          src="/images/profile.jpg"
          alt="Jaykant Profile"
          width={250}
          height={250}
          className="rounded-full shadow-lg"
        />
      </div>

      {/* Right: Text */}
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 mb-4">
          {about.bio.map((para, idx) => (
          <p key={idx} className="text-gray-700 mb-4">{para}</p>
        ))}
        </p>
        <ul className="flex flex-wrap gap-2 mt-4">
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Java</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Next.js</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Tailwind CSS</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded">React</li>
          <li className="bg-blue-100 text-blue-800 px-3 py-1 rounded">Node.js</li>
        </ul>

      </div>
    </section>
  );
}
