export default function Stats() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
        <div className="col-span-1 md:col-span-2">
          <div className="text-[64px] md:text-[96px] font-extrabold tracking-tight text-black leading-none">100+</div>
          <div className="text-slate-500 mt-2">Projects Delivered</div>
        </div>
        <div className="col-span-1 md:col-span-2">
          <div className="text-[64px] md:text-[96px] font-extrabold tracking-tight text-black leading-none">15yr</div>
          <div className="text-slate-500 mt-2">Experience</div>
        </div>
      </div>
    </section>
  );
}
