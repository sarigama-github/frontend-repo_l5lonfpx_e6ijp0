import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight">LET’S TALK</h2>
        <div className="mt-8 flex items-center gap-4 text-white/70">
          <a href="#" className="inline-flex items-center gap-2 hover:text-white"><Mail size={18}/>hello@arcforge.studio</a>
          <span className="opacity-30">•</span>
          <a href="#" className="inline-flex items-center gap-2 hover:text-white"><Instagram size={18}/>Instagram</a>
          <span className="opacity-30">•</span>
          <a href="#" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={18}/>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
