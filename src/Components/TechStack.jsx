import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiLua, SiSupabase, SiVite } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { Tooltip } from 'react-tooltip';

const techIcons = {
  'React': FaReact,
  'Node.js': FaNodeJs,
  'MongoDB': SiMongodb,
  'Tailwind CSS': SiTailwindcss,
  'TypeScript': SiTypescript,
  'Lua': SiLua,
  'Supabase': SiSupabase,
  'Vite': SiVite,
  'C#': TbBrandCSharp,
};

const TechStack = forwardRef(({ tech, textVariants }, ref) => (
  <>
    <motion.h1
      ref={ref}
      variants={textVariants}
      className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-4 my-5 pb-2 text-2xl md:text-4xl"
    >
      Technology Stack
    </motion.h1>
    <motion.div className="flex items-start justify-center flex-col md:flex-row my-5 gap-5 w-full max-w-4xl mx-auto px-4">
      {tech.Frontend.length > 0 && (
        <motion.div
          variants={textVariants}
          className="flex w-full md:w-auto flex-col gap-2 outline-double outline-2 rounded-3xl outline-white px-4 py-4"
        >
          <motion.h2
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-2xl md:text-3xl"
          >
            Frontend
          </motion.h2>
          <div className="flex flex-wrap gap-2 justify-center min-h-fit">
            {tech.Frontend.map((item, index) => {
              let icons = [];
              if (item.includes('+')) {
                icons = item.split('+').map(part => techIcons[part.trim()]).filter(Boolean);
              } else {
                const Icon = techIcons[item];
                if (Icon) icons = [Icon];
              }
              return (
                <div key={index} className="flex items-center gap-1 bg-white/10 border border-white/20 rounded-full px-2 md:px-3 py-1 shadow hover:bg-white/20 transition-all" data-tooltip-id={`frontend-tooltip-${index}`} data-tooltip-content={item}>
                  {icons.map((Icon, i) => Icon && <Icon key={i} className="text-lg md:text-xl text-cyan-400" />)}
                  <span className="text-white text-sm md:text-lg font-sans font-thin">{item}</span>
                  <Tooltip id={`frontend-tooltip-${index}`} />
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
      {tech.Backend.length > 0 && (
        <motion.div
          variants={textVariants}
          className="flex w-full md:w-auto flex-col gap-2 outline-double outline-2 rounded-3xl outline-white px-4 py-4"
        >
          <motion.h2
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-2xl md:text-3xl"
          >
            Backend
          </motion.h2>
          <div className="flex flex-wrap gap-2 justify-center min-h-fit">
            {tech.Backend.map((item, index) => {
              let icons = [];
              if (item.includes('+')) {
                icons = item.split('+').map(part => techIcons[part.trim()]).filter(Boolean);
              } else {
                const Icon = techIcons[item];
                if (Icon) icons = [Icon];
              }
              return (
                <div key={index} className="flex items-center gap-1 bg-white/10 border border-white/20 rounded-full px-2 md:px-3 py-1 shadow hover:bg-white/20 transition-all" data-tooltip-id={`backend-tooltip-${index}`} data-tooltip-content={item}>
                  {icons.map((Icon, i) => Icon && <Icon key={i} className="text-lg md:text-xl text-green-400" />)}
                  <span className="text-white text-sm md:text-lg font-sans font-thin">{item}</span>
                  <Tooltip id={`backend-tooltip-${index}`} />
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.div>
  </>
));

export default TechStack;
