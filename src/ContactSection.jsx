import React from 'react';
import { MapPin, Phone, MessageCircle, Star } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-white mb-16 text-center">Visit <span className="text-blue-500">Firdous Gallery</span></h2>
      <div className="flex flex-col lg:flex-row gap-10">
        
        <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-6">
          {/* 💡 Fix: Secure HTTPS Embed URL */}
          <iframe src="https://maps.google.com/maps?q=Jatra,Birbhum&t=&z=13&ie=UTF8&iwloc=&output=embed" className="w-full h-64 rounded-2xl border-0" loading="lazy"></iframe>
        
          <div className="flex items-center gap-4 text-slate-300">
            <div className="bg-blue-500/20 p-3 rounded-full text-blue-500"><MapPin size={24} /></div>
            <p className="font-medium text-lg">Jatra, Birbhum, West Bengal</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a href="tel:+919876543210" className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-4 rounded-xl font-bold transition-all"><Phone size={20} /> Call Now</a>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg"><MessageCircle size={20} /> WhatsApp</a>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex text-blue-500 mb-4">{[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}</div>
            <p className="text-slate-300 italic mb-4">"Best paint shop in Birbhum. The 3D color matching helped me choose the perfect shade for my living room!"</p>
            <p className="text-white font-bold text-xs uppercase tracking-widest">Rahul S.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex text-blue-500 mb-4">{[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}</div>
            <p className="text-slate-300 italic mb-4">"Firdous Gallery provided authentic Berger products with huge discounts. Highly recommend their home delivery."</p>
            <p className="text-white font-bold text-xs uppercase tracking-widest">Ayesha M.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
