export default function Home() {
  const name = "Sirapop Klysuban";
  const Avatar = "😎";
  const Tagline = "Web Developer · Bangkok";
  return (
    <main className=" ">
      <div className="text-center text-white">

        <span className="text-[120px] mb-[40px] leading-none">
          {Avatar}
        </span>

        <h1 className="text-6xl font-bold mb-4">
          สวัสดี ผมชื่อ {name}
        </h1>
        <p className="text-xl text-white/80">
          {Tagline}
        </p>

      </div>
    </main>
  );
}