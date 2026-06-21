function ProjectCard({ title, tag }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 w-64 text-white shadow-lg hover:scale-105 transition-transform">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <span className="inline-block bg-blue-500/30 text-sm px-3 py-1 rounded-full">
        {tag}
      </span>
    </div>
  );
}
export default function Projects() {
const projects = [
  { id: 1, title: "Quote Generator", tag: "JavaScript" },
  { id: 2, title: "BMI Calculator", tag: "JavaScript" },
];
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-8 text-center">โปรเจกต์</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tag={project.tag}
          />
        ))}
      </div>
    </section>
  );
}