import React from 'react'

export default function Skills() {
  const skills = [
    { name: "HTML5", color: "text-orange-500" },
    { name: "CSS3", color: "text-blue-500" },
    { name: "JavaScript", color: "text-yellow-500" },
    { name: "ReactJS", color: "text-cyan-500" },
    { name: "Tailwind CSS", color: "text-teal-500" },
    { name: "Node.js", color: "text-green-600" },
    { name: "Express.js", color: "text-gray-700" },
    { name: "MongoDB", color: "text-green-500" },
    { name: "Git & GitHub", color: "text-pink-600" },
    { name: "Java", color: "text-red-600" },
  ];

  return (
    <section className="w-full px-4 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          My <span className="text-blue-600">Skills</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-200 shadow-sm py-4 px-6 rounded-lg hover:shadow-md transition-all"
            >
              <span className={`text-lg font-medium ${skill.color}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
