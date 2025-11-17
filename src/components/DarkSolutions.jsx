import { motion } from "framer-motion";

export default function DarkSolutions() {
  return (
    <section id="solutions" className="relative bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-orange-400 font-semibold mb-3">
            <span className="size-2 rounded-full bg-orange-500" />
            Design Solutions
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">Minimal. Precise. Adaptive.</h3>
          <ul className="mt-6 space-y-3 text-white/80">
            {[
              "Parametric facades with thermal intelligence",
              "Sustainable materials and passive cooling",
              "Integrated urban fog and lighting choreography",
              "Seamless interior-exterior spatial flow",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2 size-2 rounded-full bg-orange-500" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1529235433435-4e85f7aa3e29?q=80&w=2400&auto=format&fit=crop"
            alt="glowing architecture"
            className="rounded-[22px] shadow-[0_40px_120px_-40px_rgba(255,122,0,0.6)]"
          />
          <div className="absolute inset-0 rounded-[22px] ring-1 ring-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
