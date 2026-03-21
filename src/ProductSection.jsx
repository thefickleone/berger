import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { title: "Silk Glamour", category: "Interior", desc: "Ultra-smooth finish with high sheen.", tags: ["High Sheen", "Anti-Fungal"] },
  { title: "WeatherCoat Anti-Dust", category: "Exterior", desc: "Advanced dust-guard technology.", tags: ["Dust Resistant", "10yr Warranty"] },
  { title: "Imperia Luxury", category: "Wood Coating", desc: "Italian-grade wood and glass finishes.", tags: ["High Gloss", "Scratch Proof"] },
  { title: "Home Shield", category: "Waterproofing", desc: "Advanced PU roof coating.", tags: ["Elastomeric", "Cool Roof"] }
];
const categories = ["All", "Interior", "Exterior", "Wood Coating", "Waterproofing"];

const ProductSection = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter(p => p.category === active);

  return (
    <section id="products" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-10 text-center">Curated <span className="text-blue-500">Products</span></h2>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${active === cat ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>{cat}</button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {filtered.map(p => (
            <motion.div key={p.title} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-sm flex flex-col hover:-translate-y-2 transition-transform">
              <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-2">{p.category}</span>
              <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm mb-4 flex-grow">{p.desc}</p>
              <div className="flex gap-2">{p.tags.map(t => <span key={t} className="text-[9px] px-2 py-1 rounded bg-white/10 text-slate-300 font-bold uppercase">{t}</span>)}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
export default ProductSection;