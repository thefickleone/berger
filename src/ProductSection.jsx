import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    title: "Silk Glamour",
    category: "Interior Luxury",
    desc: "Ultra-smooth finish with high sheen and rich color depth for royal interiors.",
    tags: ["High Sheen", "Anti-Fungal"]
  },
  {
    title: "WeatherCoat Anti-Dust",
    category: "Exterior Armor",
    desc: "Advanced dust-guard technology keeping your exterior walls pristine for a decade.",
    tags: ["Dust Resistant", "10yr Warranty"]
  },
  {
    title: "Imperia Luxury",
    category: "Designer Finish",
    desc: "Italian-grade wood and glass finishes for bespoke designer furniture and surfaces.",
    tags: ["High Gloss", "Scratch Proof"]
  }
];

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.15,
      ease: [0.21, 0.45, 0.32, 0.9] 
    }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -12, borderColor: 'rgba(234, 179, 8, 0.3)' }}
    className="group relative bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-sm transition-all overflow-hidden"
  >
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/15 transition-all duration-700" />
    
    <span className="text-[10px] uppercase tracking-[0.3em] text-brand-accent font-black">
      {product.category}
    </span>
    <h3 className="text-3xl font-bold mt-3 mb-4 text-white tracking-tight">{product.title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
      {product.desc}
    </p>
    
    <div className="flex flex-wrap gap-2">
      {product.tags.map(tag => (
        <span key={tag} className="text-[9px] px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-slate-300 font-bold tracking-widest uppercase">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProductSection = () => {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none"
          >
            Curated <br />
            <span className="text-brand-accent italic font-serif">finishes</span>
          </motion.h2>
          <p className="text-slate-500 text-lg">
            Authorized Berger technology paired with artisan craftsmanship.
          </p>
        </div>
        <motion.button 
          whileHover={{ x: 5 }}
          className="text-brand-accent text-xs font-black tracking-[0.2em] border-b-2 border-brand-accent/20 pb-2 hover:border-brand-accent transition-all uppercase"
        >
          View Catalogue →
        </motion.button>
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