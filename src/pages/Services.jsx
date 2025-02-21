
import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="App">
      <section className="section">Scroll down to reveal more content</section>
      <motion.section
        className="section h-[300px] w-[300px] bg-red-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        Hello, I am revealed as you scroll!
      </motion.section>
      
      <motion.section
        className="section h-[300px] w-[300px] bg-blue-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        More content revealed on scroll.
      </motion.section> <br />

      <motion.section
        className="section h-[300px] w-[300px] bg-fuchsia-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        Even more content...
      </motion.section>

      <motion.section
        className="section h-[300px] w-[300px] bg-fuchsia-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        Even more content...
      </motion.section>

      <motion.section
        className="section h-[300px] w-[300px] bg-fuchsia-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        Even more content...
      </motion.section>

      <motion.section
        className="section h-[300px] w-[300px] bg-green-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        Even more content...
      </motion.section>

      <motion.section
        className="section h-[300px] w-[300px] bg-yellow-300"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        Even more content...
      </motion.section>
    </div>
  );
};

export default App;
