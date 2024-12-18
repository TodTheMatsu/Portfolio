import { motion } from 'framer-motion';
import { useRef } from 'react';
import vid1 from './assets/videos/howistheweather/vid1.mp4';
import vid2 from './assets/videos/howistheweather/vid2.mp4';
import vid3 from './assets/videos/howistheweather/vid3.mp4';
import vid4 from './assets/videos/howistheweather/vid4.mp4';
import vid5 from './assets/videos/howistheweather/vid5.mp4';
function WhattodoInfo({ onClick }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) onClick();
  };

  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const techStackRef = useRef(null);
  const scrollToSection = (ref) => {
    console.log(ref);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      name: 'Daily weather forecast',
      description: 'Shows daily weather information, including temperature, precipitation, and conditions.',
      video: vid1,
    },
    {
      name: 'Hourly temperature forecast',
      description: 'Provides hourly temperature predictions for the next 24 hours.',
      video: vid2
    },
    {
      name: 'Weather & News Data',
      description: 'Fetches detailed weather data from the Open-Meteo API and relevant news articles from the Newsdata.io API.',
      video: vid3
    },
    {
      name: 'Dynamic Backgrounds',
      description: 'Changes the background image based on the current time of the day.',
      video: vid4
    },
    {
      name: 'Modern Design',
      description: "Uses Tailwind CSS and Framer Motion for a modern and responsive design.",
      video: vid5
    }
  ];
  
  const sectionRefs = {
    Introduction: introRef,
    Features: featuresRef,
    'Technology Stack': techStackRef,
  };
  const description = 'A modern, responsive weather application built with React. It provides real-time weather data for your location, displaying both current and forecasted weather conditions with beautiful animated backgrounds.';
  const tech = {
    Frontend: [
      "React + Vite",
      "Tailwind CSS"
    ],
    Backend: [
    ]
  };
  

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const containerVariants = {
    visible: { transition: { delayChildren: 0.5, staggerChildren: 0.2 } },
  };

  const renderText = (text, textSize = 'text-xl') => (
    text.split('').map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: index * 0.005, ease: 'easeOut', duration: 1 } }}
        viewport={{ once: true }}
        className={`text-white font-sans font-thin mx-auto text-center w-full ${textSize}`}
      >
        {char}
      </motion.span>
    ))
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md flex-col flex justify-center items-center fixed"

    >
      <motion.div onClick={handleClick} className="w-full h-full flex justify-center overflow-auto py-28 space-x-5 md:px-20 px-5 scroll-smooth">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xl:max-w-[50%] max-w-full h-max py-5 flex-grow bg-white bg-opacity-20 rounded-2xl flex flex-col justify-start items-center backdrop-blur-md px-10 space-y-5"
        >
          <motion.h1 variants={textVariants} className="text-white md:text-9xl text-7xl font-sans font-thin mx-auto text-center w-full outline rounded-3xl mb-10 pb-5">
            How is the weather?
          </motion.h1>
          <motion.hr variants={textVariants} className="w-full mx-auto" />
          <motion.h1 variants={textVariants} ref={introRef} className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2  pb-2 text-4xl">
            Introduction
          </motion.h1>
          <motion.p variants={textVariants} className="text-white font-sans font-thin mx-auto text-center w-full">
            {renderText(description)}
          </motion.p>
          <motion.hr variants={textVariants} className="w-full mx-auto" />
          <motion.h1 variants={textVariants} ref={featuresRef} className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-4xl">
            Features
          </motion.h1>
          {features.map((feature, index) => (
            <>
              <motion.h2 variants={textVariants} className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-2xl">
                {index + 1}. {feature.name}
              </motion.h2>
              <motion.video variants={textVariants} autoPlay loop className="w-full h-auto rounded-2xl shadow-2xl">
                <source src={feature.video} type="video/mp4" />
              </motion.video>
              <motion.p variants={textVariants} className={`text-white font-sans font-thin mx-auto text-center w-full text-xl`}>
                {renderText(feature.description)}
              </motion.p>
            </>
          ))}
          <motion.hr variants={textVariants} className="w-full mx-auto flex items-center justify-center" />
          <motion.h1 variants={textVariants} ref={techStackRef} className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-4 pb-2 text-4xl">
            Technology Stack
          </motion.h1>
          <motion.div className='flex items-center justify-center flex-row gap-5'>
            <motion.div variants={textVariants} className='flex max-h-[150px] flex-col gap-2 outline outline-2 rounded-3xl outline-white px-2 py-2'>
              <motion.h2 variants={textVariants} className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-3xl">
                Frontend
              </motion.h2>
              {tech.Frontend.map((tech, index) => (
                <motion.p key={index} variants={textVariants} className={`text-white font-sans font-thin mx-auto text-center w-full text-xl`}>
                  {renderText(tech)}
                </motion.p>
              ))}
            </motion.div>

          </motion.div>
          <motion.hr variants={textVariants} className="w-full mx-auto" />
          <motion.a whileHover={{ scale: 1.1, transition: { duration: 0.2} }} href="https://github.com/TodTheMatsu/how-is-the-weather"  variants={textVariants} target="_blank" className="text-white  backdrop-blur-md font-sans font-thin mx-auto text-center rounded-3xl px-2 outline pb-2 text-4xl">
          <motion.h2  className="text-white mix-blend-darken font-sans font-thin mx-auto text-center rounded-3xl px-2 text-4xl">Source code</motion.h2>
          </motion.a>
        </motion.div>
        <motion.div className="xl:w-[200px] xl:right-[15%] xl:top-[20%] top-0  xl:bg-white bg-black bg-opacity-50  xl:bg-opacity-20 rounded-3xl flex xl:flex-col flex-row px-5 gap-5 py-2 justify-center items-center fixed backdrop-blur-xl">
          {Object.entries(sectionRefs).map(([section, ref]) => {
            return (
              <motion.h1
                key={section}
                onClick={() => scrollToSection(ref)}
                className="text-white font-sans font-thin text-center w-full text-2xl cursor-pointer"
              >
                {section}
              </motion.h1>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default WhattodoInfo;
