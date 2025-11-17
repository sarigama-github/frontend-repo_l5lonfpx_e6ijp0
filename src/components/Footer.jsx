import { motion, useAnimationControls } from "framer-motion";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { useEffect } from "react";

export default function Footer() {
  const controls = useAnimationControls();

  useEffect(() => {
    const onScroll = () => {
      const footer = document.getElementById("footer-title");
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        controls.start({
          letterSpacing: ["0em", "0.08em", "0.02em"],
          opacity: [0.6, 1, 1],
        });
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <motion.h2
          id="footer-title"
          initial={{ opacity: 0.6, letterSpacing: "0em" }}
          animate={controls}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          LET’S TALK
        </motion.h2>
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
