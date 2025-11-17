import { Menu, Search, Home, Star } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[86%] lg:w-[80%]">
      <div className="flex items-center justify-between rounded-[22px] backdrop-blur-xl bg-white/5 border border-white/10 px-4 md:px-6 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3 text-white/90">
          <div className="size-9 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_10px_20px_-5px_rgba(255,122,0,0.6)] flex items-center justify-center font-semibold tracking-[-0.02em]">A</div>
          <span className="font-semibold tracking-[-0.01em]">ArcForge Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white transition-colors inline-flex items-center gap-2" href="#"><Home size={16}/>Home</a>
          <a className="hover:text-white transition-colors" href="#projects">Projects</a>
          <a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
          <a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
          <a className="hover:text-white transition-colors" href="#experts">Experts</a>
        </div>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-3 py-2 transition-colors">
            <Search size={16}/>Search
          </button>
          <button className="inline-flex items-center gap-2 text-black bg-gradient-to-b from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 rounded-2xl px-3.5 py-2.5 shadow-[0_10px_30px_-10px_rgba(255,122,0,0.8)]">
            <Star size={16} className="text-black"/>
            Get Quote
          </button>
          <button className="md:hidden text-white/80 p-2 rounded-xl hover:bg-white/10"><Menu/></button>
        </div>
      </div>
    </div>
  );
}
