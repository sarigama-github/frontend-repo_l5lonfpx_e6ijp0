import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-10">Engagement</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* White card pop-in */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-white p-8 shadow-[0_30px_100px_-40px_rgba(0,0,0,0.3)] ring-1 ring-black/5"
          >
            <h4 className="text-2xl font-bold text-black">Studio</h4>
            <p className="text-slate-600 mt-2">For boutique to mid-scale projects</p>
            <div className="mt-6 text-4xl font-extrabold text-black">$8k+</div>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>Concept + 3 iterations</li>
              <li>Material + lighting study</li>
              <li>Planning documentation</li>
            </ul>
            <button className="mt-8 w-full rounded-2xl bg-black text-white py-3 hover:opacity-90">Start</button>
          </motion.div>

          {/* Black card slide-in */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-black p-8 shadow-[0_40px_140px_-60px_rgba(255,122,0,0.6)] ring-1 ring-white/10"
          >
            <h4 className="text-2xl font-bold text-white">Flagship</h4>
            <p className="text-white/70 mt-2">For iconic, large-scale developments</p>
            <div className="mt-6 text-4xl font-extrabold text-white">$25k+</div>
            <ul className="mt-6 space-y-3 text-white/80">
              <li>Signature concept + masterplan</li>
              <li>Advanced parametric systems</li>
              <li>Full visualization suite</li>
            </ul>
            <button className="mt-8 w-full rounded-2xl bg-gradient-to-b from-orange-400 to-orange-600 text-black py-3 hover:from-orange-500 hover:to-orange-700">Consult</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
