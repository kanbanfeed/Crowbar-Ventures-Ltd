import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FloatingInput , {FloatingText} from './FloatingInput'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("Form submitted:", formData);
    alert("Your message has been sent to info@crowbarltd.com!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-20 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-center"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-500 max-w-2xl mb-10 text-center"
        >
          Have questions or want to work with us? Fill out the form below and we’ll get back to you.
        </motion.p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="bg-indigo-400 p-8 rounded-2xl shadow-lg max-w-lg w-full space-y-6"
          action="https://formspree.io/f/myznojnq"
          method='POST' 
        >
          <FloatingInput label="Name" name="name" type="text" formData={formData} setFormData={setFormData} />
          <FloatingInput label="Email" name="email" type="email" formData={formData} setFormData={setFormData} />
          <FloatingText label="Message" name="message" type="message" formData={formData} setFormData={setFormData}/>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-600 transition font-semibold cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>
      </main>
  );
};

export default ContactForm;

