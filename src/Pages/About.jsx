import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import aboutImg from '../assets/aboutus.jpg';

const About = () => {
  const pageTitle = "About Crowbar Ventures Ltd | Our Story";
  const pageDescription = "Learn about John and Jai, the co-founders of Crowbar Ventures Ltd, and the story of how they came together to solve problems from opposite sides of the world.";

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {/* Note: For og:image to work, you need to provide an absolute URL to your image.
            For example: https://www.yourwebsite.com/assets/aboutus.jpg */}
        {/* <meta property="og:image" content={aboutImg} /> */}
      </Helmet>
      <div className="relative w-full md:w-1/2 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-24 transform -skew-x-12 origin-left hidden md:block"></div>
        <motion.img
          animate={{ // moves left & right
            rotate: [20,-20,20,-20]
          }}
          transition={{
            duration: 5,     // speed of one shake
            repeat: Infinity,  // keep repeating
            repeatType: "loop" // loop forever
          }}
          src={aboutImg}
          alt="Co-founders of Crowbar Ventures Ltd, John and Jai, collaborating."
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative text-xl md:text-2xl lg:text-3xl text-gray-800 leading-loose max-w-md font-light"
        >
          We’re{" "}
          <span className="font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            John and Jai
          </span>
          , co-founders of{" "}
          <span className="font-semibold text-indigo-600">Crowbar Ltd.</span>{" "}
          Our journey started when both of us were solving the same problem on
          opposite sides of the world. After a friend connected us,{" "}
          <span className="italic text-gray-600">the rest is history.</span>
        </motion.p>
      </div>

    </div>
  );
};

export default About;
