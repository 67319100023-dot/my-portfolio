import Hero from "./components/Hero";

function Greeting({ name }) {
  return <h1>สวัสดี {name}</h1>;
}
function Section({ title, children }) {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}

function Skills(){
const skills = ["Frontend","Backend"]
return(
<section className="py-20 px-8">
    <h2 className="">ทักษะ</h2>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
  <span key={skill}>{skill}</span>
))}
    </div>
  </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Greeting name="สิรภพ" />
      <Greeting name="omg" />
      <Section title="เกี่ยวกับฉัน">
  <p>ผมจะเป็นโปเกม่อนแชมป์เปี้ยน </p>
  </Section>
  <Section title="ระดับการศึกษา">
  <p>ป.ตรี </p>
   </Section>
    </main>
  );
}