// WhattodoInfo.jsx
import { motion } from 'framer-motion';
import { useRef } from 'react';
import vid1 from './assets/videos/whattodo/vid1.mp4';
import vid2 from './assets/videos/whattodo/vid2.mp4';
import vid3 from './assets/videos/whattodo/vid3.mp4';
import vid4 from './assets/videos/whattodo/vid4.mp4';
import vid5 from './assets/videos/whattodo/vid5.mp4';
import vid6 from './assets/videos/whattodo/vid6.mp4';
import vid7 from './assets/videos/whattodo/vid7.mp4';

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
    'A dynamic and interactive task management system that allows users to manage tasks through boards. The app features drag-and-drop functionality to reorder boards and tasks, supports dark mode, and integrates with a backend for storing board data.';

  const tech = {
    Frontend: ['React + Vite', 'Tailwind CSS'],
    Backend: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT (JSON Web Tokens)',
      'Crypto',
      'CORS (Cross-Origin Resource Sharing)',
    ],
  };

  const features = [
    {
      name: 'Tasks creation',
      description: 'Quickly add new tasks by typing a name and pressing Enter.',
      video: vid2,
    },
    {
      name: 'Boards creation',
      description: 'Create new boards by clicking the "Create Board" button.',
      video: vid3,
    },
    {
      name: 'Edit existing tasks',
      description:
        'Click on any task to edit its details. A modal opens, allowing users to update the task’s name or description in real time.',
      video: vid4,
    },
    {
      name: 'Reordering tasks and boards',
      description:
        'Easily reorder tasks and boards by dragging and dropping. Changes are instantly saved.',
      video: vid5,
    },
    {
      name: 'Toggle between light and dark mode',
      description:
        'Switch effortlessly between light and dark themes to suit your preference. Preferences are saved across sessions for a consistent experience.',
      video: vid6,
    },
    {
      name: 'Persistent Data Storage',
      description:
        'You can create an account and save your boards and tasks for future sessions.',
      video: vid7,
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
            className="text-white md:text-9xl text-7xl font-sans font-thin mx-auto text-center w-full outline-dashed rounded-3xl mb-10 pb-5"
          >
            What to do?
          </motion.h1>
          <motion.hr variants={textVariants} className="w-full mx-auto border-dashed" />
          <motion.h1
            ref={introRef}
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 outline-dashed pb-2 text-4xl"
          >
            Introduction
          </motion.h1>
          <motion.video
            variants={textVariants}
            viewport={{ once: true }}
            autoPlay
            loop
            className="w-full h-auto rounded-2xl shadow-2xl"
          >
            <source src={vid1} type="video/mp4" />
          </motion.video>
          <motion.p
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center w-full"
          >
            <AnimatedText text={description} />
          </motion.p>
          <motion.hr variants={textVariants} className="w-full mx-auto border-dashed" />
          <motion.h1
            ref={featuresRef}
            variants={textVariants}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 outline-dashed pb-2 text-4xl"
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
          <motion.hr variants={textVariants} className="w-full mx-auto border-dashed" />
          {/*
            Pass the techStackRef to the TechStack component so that the ref
            attaches to the Technology Stack heading inside TechStack.
          */}
          <TechStack ref={techStackRef} tech={tech} textVariants={textVariants} />
          <motion.hr variants={textVariants} className="w-full mx-auto border-dashed" />
          <motion.a
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            href="https://github.com/TodTheMatsu/what-to-do"
            variants={textVariants}
            target="_blank"
            className="text-white backdrop-blur-md font-sans font-thin mx-auto text-center rounded-3xl px-2 outline-dashed pb-2 text-4xl"
          >
            <motion.h2 data-cursor-exclusion data-cursor-size='80px' className="text-white mix-blend-darken font-sans font-thin mx-auto text-center rounded-3xl px-2 text-4xl">
              Source code
            </motion.h2>
          </motion.a>
        </motion.div>
        <NavigationMenu sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      </motion.div>
    </motion.div>
  );
}

export default Main;
