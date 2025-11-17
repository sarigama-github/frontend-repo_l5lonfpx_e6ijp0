import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const bgUrl = "https://images.unsplash.com/photo-1546182990-dffeafbe841d?q=80&w=2070&auto=format&fit=crop";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fogY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={sectionRef} className="relative min-h-[92vh] overflow-hidden" id="home">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0b0b0c]"/>

      {/* Cinematic hero image with parallax + slow zoom-out */}
      <motion.img
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        style={{ y: imgY, scale: imgScale, willChange: "transform" }}
        src={bgUrl}
        alt="futuristic black-glass architecture"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
      />

      {/* Fog gradients with slight parallax */}
      <motion.div
        aria-hidden
        style={{ y: fogY, willChange: "transform" }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_60%)]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Huge background word with parallax */}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 0.12 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ y: titleY, willChange: "transform" }}
        className="absolute bottom-8 left-6 md:left-12 text-[22vw] leading-none font-extrabold tracking-tighter text-white/10 select-none pointer-events-none"
      >
        ARCHI
      </motion.h1>

      {/* Floating frosted controls */}
      <div className="relative z-10 max-w-[1200px] mx-auto pt-40 md:pt-48 px-6">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-fit rounded-3xl backdrop-blur-xl bg-white/10 border border-white/15 px-4 py-2 text-white/80 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
        >
          Award-Winning Studio
        </motion.div>

        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-white text-5xl md:text-7xl font-black tracking-tight"
        >
          Futuristic Architectural Experiences
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl text-white/70"
        >
          Black-glass structures with warm amber cores, sculpted for tomorrow’s skyline.
        </motion.p>

        {/* Frosted buttons */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
          }}
          className="mt-8 flex items-center gap-4"
        >
          {["Explore", "Our Process", "Contact"].map((label) => (
            <motion.button
              key={label}
              variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-2xl px-5 py-3 backdrop-blur-xl border border-white/15 bg-white/10 text-white hover:bg-white/20 transition-transform"
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Floating filter bar */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/15 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-white/80 text-sm">
            {[
              { label: "Type", value: "Residential" },
              { label: "Price", value: "$500k–$3M" },
              { label: "Area", value: "120–680 m²" },
              { label: "Date", value: "2025" },
            ].map((f) => (
              <div key={f.label} className="flex items-center justify-between rounded-2xl px-4 py-3 bg-white/5 border border-white/10">
                <span className="text-white/60">{f.label}</span>
                <span className="font-medium">{f.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
