
import { motion } from 'framer-motion';
import { useRef } from 'react';
import vid1 from './assets/videos/empirehound/vid1.mp4';

import AnimatedText from './Components/AnimatedText';
import FeatureItem from './Components/FeatureItem';
import TechStack from './Components/TechStack';
import NavigationMenu from './Components/NavigationMenu';

function Main({ onClick }) {
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const techStackRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionRefs = {
    Introduction: introRef,
    Features: featuresRef,
    'Technology Stack': techStackRef,
  };

  const description =
    "Empire's Hound is an ability-based action RPG where you fight as a Hound, an elite mercenary serving the Empire of Verseria. Undertake perilous missions, battle relentless enemies, and amass wealth and power—all while following the mercenary creed: Profit before honor. Currently in development, Empire's Hound features fast-paced combat, deep ability-based mechanics.";

  const tech = {
    Frontend: [],
    Backend: ['Powered by Luau', "Roblox Studio"],
  };

  const features = [
    {
      name: 'Gameplay',
      description: "In Empire's Hound, fast-paced, ability-driven combat pushes your skills to the limit. Use your hard-earned wealth to unlock powerful weapons and abilities, then fight through relentless waves of enemies to prove your worth.",
      video: vid1,
    },
  ];

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const containerVariants = {
    visible: { transition: { delayChildren: 0.5, staggerChildren: 0.2 } },
  };

  const handleClick = (e) => {
    if (e.target === e.currentTarget) onClick();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md flex-col flex justify-center items-center fixed"
    >
      <motion.div
        onClick={handleClick}
        className="w-full h-full flex justify-center overflow-auto py-28 space-x-5 md:px-20 px-5 scroll-smooth"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xl:max-w-[50%] max-w-full h-max py-5 flex-grow bg-white bg-opacity-20 rounded-2xl flex flex-col justify-start items-center backdrop-blur-md px-10 space-y-5"
        >
          <motion.h1
            variants={textVariants}
            className="text-white md:text-9xl text-7xl font-sans font-thin mx-auto text-center w-full rounded-3xl mb-10 pb-5"
          >
            Empire's Hound [WIP]
          </motion.h1>
          <motion.hr variants={textVariants} className="w-full mx-auto " />
          <motion.h1
            ref={introRef}
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-4xl"
          >
            Introduction
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center w-full"
          >
            <AnimatedText text={description} />
          </motion.p>
          <motion.hr variants={textVariants} className="w-full mx-auto " />
          <motion.h1
            ref={featuresRef}
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2  pb-2 text-4xl"
          >
            Features
          </motion.h1>
          {features.map((feature, index) => (
            <FeatureItem
              key={feature.name}
              feature={feature}
              index={index}
              textVariants={textVariants}
            />
          ))}
          <motion.hr variants={textVariants} className="w-full mx-auto " />
          {/*
            Pass the techStackRef to the TechStack component so that the ref
            attaches to the Technology Stack heading inside TechStack.
          */}
          <TechStack ref={techStackRef} tech={tech} textVariants={textVariants} />
          <motion.hr variants={textVariants} className="w-full mx-auto " />
          <motion.a
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            href="https://www.roblox.com/games/17739159211/Empires-Hound-Beta"
            variants={textVariants}
            target="_blank"
            className="text-white backdrop-blur-md font-sans font-thin mx-auto text-center rounded-3xl px-2 outline-double pb-2 text-4xl"
          >
            <motion.h2 data-cursor-exclusion data-cursor-size='80px' className="text-white mix-blend-darken font-sans font-thin mx-auto text-center rounded-3xl px-2 text-4xl">
              Game Link
            </motion.h2>
          </motion.a>
        </motion.div>
        <NavigationMenu sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      </motion.div>
    </motion.div>
  );
}

export default Main;
