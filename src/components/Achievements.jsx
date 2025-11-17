import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="flex items-start justify-between gap-10">
          <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 text-orange-600 font-semibold mb-4">
              <span className="size-2 rounded-full bg-orange-500" />
              Achievements
            </div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-black">Sculpting Landmarks</h3>
            <p className="mt-4 text-slate-600 max-w-md">Curved forms, warm inner glows, and dramatic fog blend into iconic silhouettes across continents.</p>
          </div>
          <div className="hidden md:flex items-center gap-6 w-1/2">
            <motion.img
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              src="https://images.unsplash.com/photo-1526488797143-1e254887b87e?q=80&w=1887&auto=format&fit=crop"
              alt="curved sculpture"
              className="w-[58%] h-[360px] object-cover rounded-[22px] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.35)]"
            />
            <motion.img
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              src="https://images.unsplash.com/photo-1521337706261-9c210f7ee1a6?q=80&w=1670&auto=format&fit=crop"
              alt="portrait sculpture"
              className="w-[38%] h-[420px] object-cover rounded-[22px] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.35)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
