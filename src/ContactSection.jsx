import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email.includes('@')) {
      alert("Please enter a valid email address.");
      return;
    }
    setLoading(true);

    // Simulation of a successful send
    setTimeout(() => {
      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden p-8">
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="text-white font-medium mb-4">Get in touch</p>
        <h3 className="text-white font-bold text-[30px]">Contact.</h3>

        <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        
        <div className="mt-10">
          <a 
            href="https://wa.me/910000000000" 
            target="_blank" 
            rel="noreferrer"
            className="text-green-500 font-bold underline"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;