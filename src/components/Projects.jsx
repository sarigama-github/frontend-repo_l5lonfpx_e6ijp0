import { motion } from "framer-motion";

const images = [
  // Curated luxury architectural renders
  "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1491554150235-3608f7aacc05?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499002238440-d264edd596ec?q=80&w=2400&auto=format&fit=crop",
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-black">Notable Projects</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-[22px] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.35)] group"
            >
              <img src={src} alt="project" className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
