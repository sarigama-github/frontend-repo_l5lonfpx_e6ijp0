import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1529429612779-c8e40ef2f36e?q=80&w=2069&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1533002090804-088fda69d411?q=80&w=2067&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1487956382158-bb926046304a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2070&auto=format&fit=crop",
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-black">Notable Projects</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-3xl shadow-xl group"
            >
              <img src={src} alt="project" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
