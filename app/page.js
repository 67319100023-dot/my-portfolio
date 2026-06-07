export default function Home() {
  const name = "สิรภพ คล้ายสุบรรณ";
  const Avatar = "😎"
  const Tagline = "Web Developer · Bangkok"
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-blue-400">
      <div className="text-center text-white">

        <span className="text-[120px] mb-[40px] animate-bounce leading-none">
          {Avatar}
        </span>

        <h1 className="text-6xl font-bold mb-4">
          สวัสดี ผมชื่อ {name} 
        </h1>
        
        <p className="text-xl mb-8">{Tagline}</p>

       <div className="flex justify-center gap-10">
          <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition duration-300">
            Projects
          </button>
          <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition duration-300">
            Contact
          </button>
        </div>
        {/* ---------------------------------- */}
        
      </div>
    </main>
  );
}