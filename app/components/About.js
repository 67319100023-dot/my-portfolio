function Section({ title, children }) {
  return (
    <section className="py-20 px-8 text-center">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <main> 
        <span className="text-[30px] mb-[30px] leading-none">
        
      <Section title="เกี่ยวกับฉัน">
        <p>สวัสดี ผมชื่อ นายสิรภพ คล้ายสุบรรณ</p>
        <p>กำลังศึกษาที่ วิทยาลัยพณิชยการธนบุรี</p>
        <p>ระดับการศึกษา ป.ตรี</p>
      </Section>
      </span>
    </main>
  );
}