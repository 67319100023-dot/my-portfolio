export default function Skill() {
  const skills = ["Editing", "graphics"];
  return (
    <section className="py-20 px-8 text-center">
      <h2 className="text-4xl font-bold mb-8">ทักษะ</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-slate-700 text-white rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}