import React from 'react'

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "XYZ Institute of Technology",
      year: "2021 – 2025",
      grade: "8.2 CGPA",
    },
    {
      degree: "Higher Secondary (Class 12th)",
      institution: "ABC Senior Secondary School",
      year: "2019 – 2021",
      grade: "85%",
    },
    {
      degree: "Secondary (Class 10th)",
      institution: "ABC Senior Secondary School",
      year: "2017 – 2019",
      grade: "88%",
    },
  ];

  return (
    <section className="w-full px-4 py-1 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Education
        </h2>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 shadow-sm rounded-lg p-6 text-left hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
              <p className="text-gray-700 mt-1">{edu.institution}</p>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{edu.year}</span>
                <span>{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
