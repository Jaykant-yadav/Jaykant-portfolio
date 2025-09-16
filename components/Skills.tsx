interface Skill {
  name: string;
  level: string; // Beginner / Intermediate / Advanced
}

const skills: Skill[] = [
  { name: "Java", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "React", level: "Advanced" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "SQL / MongoDB", level: "Intermediate" },
];

export default function Skills() {
  return (
    <section className="mt-20" id="skills">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div key={skill.name} className="border rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-600">{skill.level}</p>
            <div className="bg-gray-200 h-2 rounded-full mt-2">
              <div
                className={`h-2 rounded-full bg-blue-600`}
                style={{
                  width:
                    skill.level === "Beginner"
                      ? "33%"
                      : skill.level === "Intermediate"
                      ? "66%"
                      : "100%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
