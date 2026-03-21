import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  // CONFIG: Change this to the actual store number
  const WHATSAPP_NUMBER = "919000000000"; 
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert("Please fill in your details.");
    
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Firdous Gallery! I saw your website and I'm interested in a premium paint consultation for my project.`
  )}`;

  return (
    <section className="py-32 px-6 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left: Brand & Info */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              Start your <br />
              <span className="text-brand-accent italic font-serif">transformation</span>
            </h2>
            <p className="mt-6 text-slate-400 text-lg max-w-md">
              Visit our gallery in Jatra for a tactile experience of luxury textures and high-sheen finishes.
            </p>
          </motion.div>

          <div className="space-y-6">
            <div className="flex items-start gap-6 p-6 rounded-[32px] bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Our Location</p>
                <p className="text-white font-medium">Jatra, Birbhum, West Bengal, 731238</p>
              </div>
            </div>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-6 p-6 rounded-[32px] bg-green-500/5 border border-green-500/10 hover:bg-green-500/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Direct Line</p>
                <p className="text-white font-medium group-hover:text-green-400 transition-colors">Chat with Firdous Gallery</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right: The Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-10 rounded-[40px] bg-brand-card border border-white/10 shadow-2xl relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-slate-500 font-bold ml-2">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" 
                  placeholder="Milan Mahato"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase text-slate-500 font-bold ml-2">Email Address</label>
                <input 
                  required
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all" 
                  placeholder="milan@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase text-slate-500 font-bold ml-2">Message</label>
              <textarea 
                rows="4" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all resize-none" 
                placeholder="I want to repaint my living room with Silk Glamour..."
              ></textarea>
            </div>

            <button 
              disabled={status === 'sending' || status === 'success'}
              className="w-full group relative h-16 bg-brand-accent rounded-2xl overflow-hidden font-black text-black uppercase tracking-widest disabled:opacity-50 transition-all"
            >
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.div 
                    key="idle" 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2"
                  >
                    Send Request <Send size={16} />
                  </motion.div>
                )}
                {status === 'sending' && (
                  <motion.div 
                    key="sending" 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                  </motion.div>
                )}
                {status === 'success' && (
                  <motion.div 
                    key="success" 
                    initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} 
                    className="flex items-center justify-center gap-2 text-green-900"
                  >
                    Request Sent <CheckCircle2 size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;