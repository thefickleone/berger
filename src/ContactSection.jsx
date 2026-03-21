import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const whatsappNumber = "91XXXXXXXXXX"; // Replace with actual number
  const message = "Hello Firdous Gallery, I am interested in a premium paint consultation.";

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Visit the <span className="text-brand-accent">Gallery</span>
            </h2>
            <p className="mt-4 text-slate-400">
              Located in the heart of Jatra, Birbhum. Visit us for a live 
              demonstration of Berger Silk Glamour and designer finishes.
            </p>
          </motion.div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent font-bold">A</div>
              <div>
                <p className="text-xs text-slate-500 uppercase">Location</p>
                <p className="text-sm font-medium">Jatra, Birbhum, West Bengal, 731238</p>
              </div>
            </div>

            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              className="flex items-center gap-4 p-4 rounded-2xl bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 font-bold">W</div>
              <div>
                <p className="text-xs text-slate-500 uppercase">WhatsApp Concierge</p>
                <p className="text-sm font-medium group-hover:text-green-400 transition-colors">Start a Chat with Firdous</p>
              </div>
            </a>
          </div>
        </div>

        {/* Minimalist Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="p-8 rounded-3xl bg-brand-card border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl rounded-full" />
          
          <form className="space-y-4 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none" />
              <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none" />
            </div>
            <textarea placeholder="Tell us about your project" rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-accent outline-none"></textarea>
            <button type="button" className="w-full bg-brand-accent text-black font-bold py-4 rounded-xl hover:opacity-90 transition-opacity">
              SEND REQUEST
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;