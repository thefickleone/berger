import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { title: "Silk Glamour", category: "Interior", desc: "Ultra-smooth finish with high sheen and rich color depth for royal interiors.", tags: ["High Sheen", "Anti-Fungal"] },
  { title: "Easy Clean", category: "Interior", desc: "Washable luxury emulsion that keeps your walls looking new.", tags: ["Stain Resistant", "Durable"] },
  { title: "WeatherCoat Anti-Dust", category: "Exterior", desc: "Advanced dust-guard technology keeping your exterior walls pristine for a decade.", tags: ["Dust Resistant", "10yr Warranty"] },
  { title: "WeatherCoat Long Life", category: "Exterior", desc: "Heavy-duty exterior protection against extreme rain and sun.", tags: ["PU Polymer", "Waterproof"] },
  { title: "Imperia Luxury", category: "Wood Coating", desc: "Italian-grade wood and glass finishes for bespoke designer furniture.", tags: ["High Gloss", "Scratch Proof"] },
  { title: "Home Shield", category: "Waterproofing", desc: "Advanced PU roof coating to permanently stop water leakage.", tags: ["Elastomeric", "Cool Roof"] }
];

const categories = ["All", "Interior", "Exterior", "Wood Coating", "Waterproofing"];

const ProductCard = ({ product }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -8, borderColor: 'rgba(33, 150, 243, 0.5)' }}
    className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm transition-all overflow-hidden flex flex-col h-full relative group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-all duration-500" />
    
    <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold mb-3 inline-block">
      {product.category}
    </span>
    <h3 className="text-2xl font-bold mb-3 text-white">{product.title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
      {product.desc}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {product.tags.map(tag => (
        <span key={tag} className="text-[9px] px-3 py-1 rounded-full bg-white/10 text-slate-300 font-bold tracking-widest uppercase">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4"
          >
            Premium <span className="text-brand-accent">Finishes</span>
          </motion.h2>
          <p className="text-slate-400 text-lg">
            Authorized Berger technology paired with artisan craftsmanship at Firdous Gallery.
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              activeCategory === category 
                ? 'bg-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default ProductSection;