
import React from 'react';
import { motion } from 'framer-motion';
// import 'tailwindcss/tailwind.css';

const App = () => {
  const slideInVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    //the content should slide in
    <div className="text-center">
      <section className="h-screen flex items-center justify-center border border-gray-300 my-5 text-2xl">
        Scroll down to reveal more content
      </section>
      <motion.section
        className="h-screen flex items-center justify-center border border-gray-300 my-5 text-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={slideInVariants}
      >
        Hello, I am revealed as you scroll!
      </motion.section>
      <motion.section
        className="h-screen flex items-center justify-center border border-gray-300 my-5 text-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={slideInVariants}
      >
        More content revealed on scroll.
      </motion.section>
      <motion.section
        className="h-screen flex items-center justify-center border border-gray-300 my-5 text-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={slideInVariants}
      >
        Even more content...
      </motion.section>
    </div>
  );
};

export default App;
