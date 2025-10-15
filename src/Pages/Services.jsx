import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  const pageTitle = "Our Services & Holdings | Crowbar Ventures Ltd";
  const pageDescription = "Explore the professional services and diversified holdings offered by Crowbar Ventures Ltd, including consulting, technology solutions, and digital innovation.";
  const services = [
    { name: "Consulting", desc: "Expert guidance for your business strategy." },
    { name: "Technology Solutions", desc: "Custom-built software and IT systems." },
    { name: "Digital Innovation", desc: "Creative digital products & transformation." },
    { name: "Investments", desc: "Holding investments in diverse sectors." },
    { name: "Research & Development", desc: "Future-driven innovation and prototyping." },
  ];
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {/* You can add an og:image meta tag here with an absolute URL to a relevant image */}
      </Helmet>
      <main className="flex-1 flex flex-col items-center justify-start text-center px-6 md:px-20 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Our Services & Holdings
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-500 max-w-2xl mb-12"
        >
          Crowbar Ltd. offers a range of professional services and diversified
          holdings. Below is a short list (placeholders) which will be expanded
          further.
        </motion.p>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-indigo-300 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition text-left"
            >
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-500">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Services;
