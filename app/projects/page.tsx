import { projects } from "@/data/portfolioData";
/* interface Project {
  title: string;
  description: string;
  link: string;
} */

/* const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    link: "/projects/portfolio",
  },
  {
    title: "AI Chatbot",
    description: "An AI-powered chatbot using OpenAI API.",
    link: "/projects/ai-chatbot",
  },
  {
    title: "E-commerce Web App",
    description: "A full-stack e-commerce application with React and Node.js.",
    link: "/projects/e-commerce",
  },
]; */

export default function Projects() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
