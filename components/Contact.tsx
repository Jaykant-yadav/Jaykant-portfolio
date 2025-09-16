import { socialLinks } from "@/data/portfolioData";
export default function Contact() {
  return (
    <section className="mt-20 max-w-3xl mx-auto" id="contact">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>

      {/* Contact Form */}
      <form
        className="flex flex-col gap-4"
        action="mailto:your-email@example.com"
        method="POST"
        encType="text/plain"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">LinkedIn</a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Twitter</a>
      </div>
    </section>
  );
}
