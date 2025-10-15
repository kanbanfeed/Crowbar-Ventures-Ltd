import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const pageTitle = "Crowbar Ventures Ltd | Unlocking Innovation";
  const pageDescription = "Unlock your business potential with cutting-edge solutions from Crowbar Ventures Ltd. We specialize in driving innovation and growth.";
  const imageUrl = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph / Facebook */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <main className="flex flex-1 flex-col md:flex-row items-center justify-center px-10 md:px-20 py-16 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Unlocking Innovation <br /> with{""}
            <span className="text-indigo-400">Crowbar Ltd.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Unlock your business potential with our cutting-edge solutions.
          </p>
          <button className="px-6 py-3 bg-indigo-500 rounded-lg shadow-lg hover:bg-indigo-600 transition cursor-pointer">
            <Link to="/about"> Get Started</Link>
          </button>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={imageUrl}
          alt="A team collaborating on a laptop, symbolizing innovation and teamwork."
          className="rounded-2xl shadow-2xl w-full md:w-1/2 object-cover"
        />
      </main>
    </div>
  );
};

export default Home;
