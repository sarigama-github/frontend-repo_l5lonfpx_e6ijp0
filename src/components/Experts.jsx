export default function Experts() {
  const team = [
    { name: "Ayla Park", role: "Design Principal", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1280&auto=format&fit=crop" },
    { name: "Jun Hara", role: "Computational Lead", img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1280&auto=format&fit=crop" },
    { name: "Mina Cho", role: "Materials Director", img: "https://images.unsplash.com/photo-1548685913-6a2667ed9b48?q=80&w=1280&auto=format&fit=crop" },
    { name: "Leo Dune", role: "Visualization", img: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1280&auto=format&fit=crop" },
  ];
  return (
    <section id="experts" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-10">Experts</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((m) => (
            <div key={m.name} className="text-center">
              <div className="mx-auto size-28 md:size-32 rounded-full overflow-hidden grayscale shadow-xl">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
              </div>
              <div className="mt-4 font-semibold text-black">{m.name}</div>
              <div className="text-slate-500 text-sm">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
