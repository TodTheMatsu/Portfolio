// WhattodoInfo.jsx
import { motion } from 'framer-motion';
import { useRef } from 'react';
import vid1 from './assets/videos/howistheweather/vid1.mp4';
import vid2 from './assets/videos/howistheweather/vid2.mp4';
import vid3 from './assets/videos/howistheweather/vid3.mp4';
import vid4 from './assets/videos/howistheweather/vid4.mp4';
import vid5 from './assets/videos/howistheweather/vid5.mp4';

import AnimatedText from './Components/AnimatedText';
import FeatureItem from './Components/FeatureItem';
import TechStack from './Components/TechStack';
import NavigationMenu from './Components/NavigationMenu';

function Main({ onClick }) {
  // Create refs for the different sections.
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const techStackRef = useRef(null);

  // Function for smooth scrolling.
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Object mapping section names to refs.
  const sectionRefs = {
    Introduction: introRef,
    Features: featuresRef,
    'Technology Stack': techStackRef,
  };

  // Feature list for the weather application.
  const features = [
    {
      name: 'Daily weather forecast',
      description:
        'Shows daily weather information, including temperature, precipitation, and conditions.',
      video: vid1,
    },
    {
      name: 'Hourly temperature forecast',
      description:
        'Provides hourly temperature predictions for the next 24 hours.',
      video: vid2,
    },
    {
      name: 'Weather & News Data',
      description:
        'Fetches detailed weather data from the Open-Meteo API and relevant news articles from the Newsdata.io API.',
      video: vid3,
    },
    {
      name: 'Dynamic Backgrounds',
      description:
        'Changes the background image based on the current time of the day.',
      video: vid4,
    },
    {
      name: 'Modern Design',
      description:
        "Uses Tailwind CSS and Framer Motion for a modern and responsive design.",
      video: vid5,
    },
  ];

  // Description for the introduction section.
  const description =
    'A modern, responsive weather application built with React. It provides real-time weather data for your location, displaying both current and forecasted weather conditions with beautiful animated backgrounds.';

  // Technology stack information.
  const tech = {
    Frontend: ['React + Vite', 'Tailwind CSS'],
    Backend: [],
  };

  // Framer Motion variants.
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const containerVariants = {
    visible: { transition: { delayChildren: 0.5, staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md flex-col flex justify-center items-center fixed"
    >
      <motion.div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClick();
        }}
        className="w-full h-full flex justify-center overflow-auto py-28 space-x-5 md:px-20 px-5 scroll-smooth"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xl:max-w-[50%] max-w-full h-max py-5 flex-grow bg-white bg-opacity-20 rounded-2xl flex flex-col justify-start items-center backdrop-blur-md px-10 space-y-5"
        >
          {/* Main Heading */}
          <motion.h1
            variants={textVariants}
            className="text-white md:text-9xl text-7xl font-sans font-thin mx-auto text-center w-full outline rounded-3xl mb-10 pb-5"
          >
            How is the weather?
          </motion.h1>

          <motion.hr variants={textVariants} className="w-full mx-auto" />

          {/* Introduction Section */}
          <motion.h1
            variants={textVariants}
            ref={introRef}
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

          <motion.hr variants={textVariants} className="w-full mx-auto" />

          {/* Features Section */}
          <motion.h1
            variants={textVariants}
            ref={featuresRef}
            className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-4xl"
          >
            Features
          </motion.h1>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              index={index}
              feature={feature}
              textVariants={textVariants}
            />
          ))}

          <motion.hr variants={textVariants} className="w-full mx-auto flex items-center justify-center" />

          {/* Technology Stack Section */}
          <TechStack ref={techStackRef} tech={tech} textVariants={textVariants} />

          <motion.hr variants={textVariants} className="w-full mx-auto" />

          {/* Source Code Link */}
          <motion.a
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            href="https://github.com/TodTheMatsu/how-is-the-weather"
            variants={textVariants}
            target="_blank"
            className="text-white backdrop-blur-md font-sans font-thin mx-auto text-center rounded-3xl px-2 outline pb-2 text-4xl"
          >
            <motion.h2 className="text-white mix-blend-darken font-sans font-thin mx-auto text-center rounded-3xl px-2 text-4xl">
              Source code
            </motion.h2>
          </motion.a>
        </motion.div>

        {/* Navigation Menu */}
        <NavigationMenu sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      </motion.div>
    </motion.div>
  );
}

export default Main;
