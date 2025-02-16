import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const TechStack = forwardRef(({ tech, textVariants }, ref) => (
  <>
    <motion.h1
      ref={ref}
      variants={textVariants}
      className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-4  pb-2 text-4xl"
    >
      Technology Stack
    </motion.h1>
    <motion.div className="flex items-center justify-center flex-row gap-5">
      {tech.Frontend.length > 0 && (
        <motion.div
          variants={textVariants}
          className="flex max-h-[150px] flex-col gap-2 outline-double outline-2 rounded-3xl outline-white px-2 py-2"
        >
          <motion.h2
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-3xl"
          >
            Frontend
          </motion.h2>
          {tech.Frontend.map((item, index) => (
            <motion.p
              key={index}
              variants={textVariants}
              className="text-white font-sans font-thin mx-auto text-center w-full text-xl"
            >
              <AnimatedText text={item} />
            </motion.p>
          ))}
        </motion.div>
      )}
      {tech.Backend.length > 0 && (
        <motion.div
          variants={textVariants}
          className="flex flex-col gap-2 outline-double outline-2 rounded-3xl outline-white px-2 py-2"
        >
          <motion.h2
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-3xl"
          >
            Backend
          </motion.h2>
          {tech.Backend.map((item, index) => (
            <motion.p
              key={index}
              variants={textVariants}
              className="text-white font-sans font-thin mx-auto text-center w-full text-xl"
            >
              <AnimatedText text={item} />
            </motion.p>
          ))}
        </motion.div>
      )}
    </motion.div>
  </>
));

export default TechStack;
