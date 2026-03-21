import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: "Silk Glamour",
    category: "Interior Luxury",
    desc: "Ultra-smooth finish with high sheen and rich color depth.",
    tags: ["High Sheen", "Anti-Fungal"]
  },
  {
    title: "WeatherCoat Anti-Dust",
    category: "Exterior Armor",
    desc: "Advanced dust-guard technology for pristine exterior walls.",
    tags: ["Dust Resistant", "10yr Warranty"]
  },
  {
    title: "Imperia Luxury",
    category: "Designer Finish",
    desc: "Italian-grade wood and glass finishes for bespoke interiors.",
    tags: ["High Gloss", "Scratch Proof"]
  }
];

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-all overflow-hidden"
  >
    {/* Decorative Gradient Background */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-all duration-500" />
    
    <span className="text-[10px] uppercase tracking-[0.2em] text-brand-accent font-bold">
      {product.category}
    </span>
    <h3 className="text-2xl font-bold mt-2 mb-4 text-white">{product.title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6">
      {product.desc}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {product.tags.map(tag => (
        <span key={tag} className="text-[9px] px-2 py-1 rounded-full border border-white/10 text-slate-300">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProductSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            CURATED <span className="text-brand-accent italic">COLLECTIONS</span>
          </h2>
          <p className="text-slate-400 mt-4">
            From deep-earth minerals to high-tech polymers, explore the range of 
            Berger verified finishes available at Firdous Gallery.
          </p>
        </div>
        <button className="text-brand-accent text-sm font-bold border-b border-brand-accent pb-1 hover:tracking-widest transition-all">
          VIEW FULL CATALOGUE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <ProductCard key={product.title} product={product} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;