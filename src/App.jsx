// External dependencies
import { AnimatePresence, delay, motion } from 'framer-motion';
import { useMemo, useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import Card from './Card';
import BlogPost from './BlogPost';
import { blogPosts } from './data/blogPosts';
import { projectsData } from './data/projectData';
import ProjectModal from './Components/ProjectModal';

// Local components

// Assets
import assistant from './assets/assistant.png';
import howistheweather from './assets/Howistheweather.png';
import whattodo from './assets/whattodo.png';
import empirehounds from './assets/empirehounds.png';
import projectrts from './assets/projectrts.png';
// React icons for tech stack and social links
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiLua, SiSupabase } from 'react-icons/si';
import { TbBrandCSharp,TbDeviceGamepad  } from 'react-icons/tb';
import { HiOutlineMap, HiOutlineBriefcase, HiOutlinePencilAlt } from 'react-icons/hi';
import { BiWorld} from 'react-icons/bi';
// Animation variants and static data
const ImgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const smallGlowingLabels = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const bentoContainer = {
  hidden: { transition: { when: 'afterChildren' } },
  visible: {
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};

const bentosVar = {
  hidden: { x: 1500 },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  },
};

const imgParentVariants = {
  hidden: {},
  visible: {
    transition: {
      when: 'beforeChildren',
      delayChildren: 1.5,
      staggerChildren: 0.2,
    },
  },
};

const boxDesign = 'backdrop-blur-md';
const aboutMe =
  "I’m a passionate web developer with a strong drive for continuous learning and growth. My journey began in game development, where I spent over four years sharpening my programming and creative problem-solving skills. Now, I’m channeling that experience into web development—combining a solid technical foundation with a commitment to building innovative, user-focused solutions.";
const greetText = 'Hello my name is Lee.';

// Particle animation component
const ParticleBackground = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 3,
      duration: Math.random() * 20 + 10,
    }));
  }, []);

  return (
    <div className="inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -1000],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

function App() {
  // Memoized static arrays
  const links = useMemo(() => [
    {
      href: 'https://github.com/TodTheMatsu',
      label: 'Github',
      icon: FaGithub,
    },
    {
      href: 'https://www.linkedin.com/in/ph%C3%BAc-l%C3%AA-4591ab323/',
      label: 'Linkedin',
      icon: FaLinkedin,
    },
    {
      href: 'https://x.com/LeeLeembp',
      label: 'Twitter',
      icon: FaTwitter,
    },
  ], []);

  // Memoized projects first
  const webProjects = useMemo(() => [
    { id: 'whattodo', image: whattodo, projectKey: 'whattodo' },
    { id: 'howistheweather', image: howistheweather, projectKey: 'howistheweather' },
    { id: 'assistant', image: assistant, projectKey: 'assistant' },
  ], []);

  const gameProjects = useMemo(() => [
    { id: 'empirehound', image: empirehounds, projectKey: 'empirehound' },
    { id: 'projectrts', image: projectrts, projectKey: 'projectrts' },
  ], []);

  const allProjects = useMemo(() => [...webProjects, ...gameProjects], [webProjects, gameProjects]);

  // Enhanced tabs with icons and counts
  const tabs = useMemo(() => [
    { 
      key: 'journey', 
      label: 'My Journey',
      icon: <HiOutlineMap className="w-5 h-5" />,
      count: 5
    },
    { 
      key: 'projects', 
      label: 'Projects',
      icon: <HiOutlineBriefcase className="w-5 h-5" />,
      count: allProjects.length
    },
    { 
      key: 'blog', 
      label: 'Blog',
      icon: <HiOutlinePencilAlt className="w-5 h-5" />,
      count: blogPosts.length
    },
  ], [allProjects.length]);

  const [activeTab, setActiveTab] = useState('journey');
  const [activeProjectTab, setActiveProjectTab] = useState('web');
  const [activeCardId, setActiveCardId] = useState(null);
  const [activeBlogPost, setActiveBlogPost] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  // Use a stable callback for card click
  const handleCardClick = (projectKey) => {
    const project = allProjects.find(p => p.projectKey === projectKey);
    if (project && projectsData[projectKey]) {
      setSelectedProject(projectKey);
      setActiveCardId(projectKey);
    }
  };

  // Sort blog posts by date (newest first)
  const sortedBlogPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <div className={`bg-black h-screen w-full absolute flex flex-col items-center overflow-x-hidden ${selectedProject ? "overflow-hidden" : ""}`}>
        <ParticleBackground />
        <motion.div 
          className="fixed inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        <div className={`pb-20 flex-grow w-full absolute flex flex-col items-center overflow-x-hidden ${selectedProject ? "overflow-hidden" : ""}`}>
          <div className="w-full h-[105vh] mx-auto flex flex-col items-center justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                scale: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className='w-[70vw] h-[70vh] bg-gradient-to-r from-white/10 via-white/20 to-white/10 absolute rounded-full blur-[30vh]'
            />

            <motion.h1 className="z-10 text-4xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-2 break-words leading-tight">
              {greetText.split("").map((char, index) => (
                <motion.span 
                  className="text-white font-sans font-thin mx-auto text-center w-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    textShadow: [
                      '0 0 10px rgba(255,255,255,0.3)',
                      '0 0 20px rgba(255,255,255,0.5)',
                      '0 0 10px rgba(255,255,255,0.3)',
                    ],
                  }}
                  transition={{ 
                    delay: index * 0.05 + 1.5, 
                    duration: 1,
                    textShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }} 
                  key={index}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Scroll Down Arrow */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ 
                opacity: selectedProject || activeBlogPost ? 0 : 1,
                y: 0,
              }}
              transition={{ 
                delay: 3,
                duration: 1,
                opacity: { duration: 0.5, delay: 3 }
              }}
              className={`z-20 flex flex-col p-10 items-center group ${selectedProject || activeBlogPost ? 'pointer-events-none' : ''}`}
            >
              <motion.span 
                className="text-white font-thin text-sm mb-2 opacity-70 group-hover:opacity-100 transition-opacity"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Scroll Down
              </motion.span>
              <motion.svg 
                className="w-8 h-8 text-white opacity-70 group-hover:opacity-100 transition-opacity"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.div>
          </div>
          <motion.div variants={bentoContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-4 pointer-events-none w-full flex flex-wrap items-center justify-center gap-2" data-section="about">
            <motion.div 
              variants={bentosVar} 
              initial={{ opacity: 0, y: 80 }} 
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: 'easeOut' } }} 
              viewport={{ once: true }}
              className={`w-full h-[400px] flex-grow ${boxDesign}`}
            >
              <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>My tech stack</motion.h1>
              <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 blur-lg'>My tech stack</motion.h1>
              <motion.div variants={imgParentVariants} viewport={{ once: true }} initial="hidden" whileInView="visible" className='w-full flex flex-wrap justify-center items-center h-[300px] gap-4'>
                {/* Tech stack icons: React, MongoDB, Tailwind, Supabase, TypeScript, Lua, Node */}
                {[FaReact, SiMongodb, SiTailwindcss, SiSupabase, SiTypescript, SiLua, FaNodeJs, TbBrandCSharp].map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    variants={ImgVariants}
                    className='flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 lg:h-28 lg:w-28 xl:h-32 xl:w-32 rounded-md'
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2 + idx * 0.2,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: idx * 0.1,
                    }}
                  >
                    <motion.div
                      className="w-full h-full flex items-center justify-center"
                      animate={{
                        filter: [
                          'drop-shadow(0 0 0px #fff)',
                          'drop-shadow(0 0 8px #fff)',
                          'drop-shadow(0 0 0px #fff)'
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      }}
                    >
                      <Icon className='w-5/6 h-5/6 text-white' />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div 
            variants={bentosVar} 
            initial={{ opacity: 0, y: 80 }} 
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }} 
            viewport={{ once: true }}
            className={`h-auto flex-grow w-full ${boxDesign} mt-10`}
            style={{display: 'none'}}
          >
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>My Journey</motion.h1>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 blur-lg'>My Journey</motion.h1>
            
            <motion.div 
              className="flex flex-col items-center px-4 py-20 mt-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {/* Timeline items */}
              {[
                {
                  year: "2020",
                  title: "First Steps in Game Dev",
                  description: "Discovered my passion for coding by building games on Roblox. Learned Lua scripting, basic game mechanics, and the thrill of seeing players enjoy my creations.",
                  tech: ["Lua", "Roblox Studio", "Game Design"]
                },
                {
                  year: "2021-2024",
                  title: "BMO Box Studio & Freelance Adventures",
                  description: "Co-founded BMO Box with a friend—my first real taste of teamwork and project management. Balanced studio work with freelancing for other Roblox creators, sharpening my skills in both collaboration and client work.",
                  tech: ["Lua", "Teamwork", "Freelancing", "Client Projects"]
                },
                {
                  year: "2024",
                  title: "Web Dev Awakening",
                  description: "Made the leap from games to web apps. Built my first projects with React, Vite, and Node.js—excited by the speed, flexibility, and reach of modern web tech.",
                  tech: ["React", "JavaScript", "Node.js", "Vite"]
                },
                {
                  year: "2025",
                  title: "Startup Rollercoaster: CDO at a Roblox Company",
                  description: "Jumped from lead developer to Chief Development Officer in a month at a Roblox-focused startup. Led a team, juggled web design, and learned a ton about leadership—even when the startup hit tough times.",
                  tech: ["Leadership", "Project Management", "Web Design", "Game Dev"]
                },
                {
                  year: "2025",
                  title: "Front-end Developer @ Nexon Dev Vina",
                  description: "Joined Nexon Dev Vina, maintaining legacy Lua game code and building new features. Also dove deep into TypeScript and Vite for web projects, blending my game and web experience.",
                  tech: ["TypeScript", "Vite", "React", "Lua"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { 
                      opacity: 0,
                      x: index % 2 === 0 ? -100 : 100,
                      scale: 0.8
                    },
                    visible: { 
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        duration: 0.8
                      }
                    }
                  }}
                  className={`flex items-center w-full max-w-6xl mb-16 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:relative relative`}
                >
                  {/* Timeline line and dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 md:flex flex-col items-center hidden">
                    <motion.div 
                      className="w-6 h-6 bg-white rounded-full border-4 border-black shadow-lg"
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(255,255,255,0.3)',
                          '0 0 20px rgba(255,255,255,0.6)',
                          '0 0 0px rgba(255,255,255,0.3)'
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                      <motion.div 
                        className="w-1 h-32 bg-gradient-to-b from-white to-white/30 mt-2"
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                  </div>

                  {/* Mobile timeline dot */}
                  <div className="md:hidden flex items-center justify-center mb-4">
                    <motion.div 
                      className="w-4 h-4 bg-white rounded-full border-2 border-black shadow-lg"
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(255,255,255,0.3)',
                          '0 0 15px rgba(255,255,255,0.6)',
                          '0 0 0px rgba(255,255,255,0.3)'
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }}
                    />
                  </div>

                  {/* Content card */}
                  <motion.div 
                    className={`md:w-5/12 w-full p-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-xl border border-white/20 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 40px rgba(255,255,255,0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      className="text-white/80 text-lg font-light mb-2"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {item.year}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-white text-2xl font-light mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {item.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 font-light mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {item.description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      {item.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm font-light border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={bentosVar} className={`h-auto flex-grow w-full ${boxDesign}`}>
            {/* Enhanced Tab Navigation */}
            <motion.div 
              className="flex justify-center mb-16 py-8 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-2xl w-full max-w-fit">
                {/* Desktop Layout */}
                <div className="hidden md:flex gap-2 relative">
                  {/* Animated Background */}
                  <motion.div
                    className="absolute top-2 h-[calc(100%-16px)] bg-gradient-to-r from-white/20 via-white/25 to-white/20 rounded-xl border border-white/30 shadow-lg"
                    layoutId="activeTabBackground"
                    initial={false}
                    animate={{
                      x: tabs.findIndex(tab => tab.key === activeTab) * (160 + 8),
                      width: 160
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.6
                    }}
                  />
                  
                  {tabs.map(({ key, label, icon, count }, index) => (
                    <motion.button
                      key={key}
                      data-cursor-size="120px" 
                      data-cursor-exclusion
                      onClick={() => setActiveTab(key)}
                      className={`relative z-10 pointer-events-auto px-6 py-4 rounded-xl transition-all duration-300 group min-w-[160px] flex flex-col items-center gap-2 ${
                        activeTab === key 
                          ? 'text-white' 
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {/* Icon and Count Row */}
                      <motion.div 
                        className={`flex items-center gap-2 transition-all duration-300 ${
                          activeTab === key ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                        }`}
                        animate={{
                          scale: activeTab === key ? 1.1 : 1,
                          filter: activeTab === key 
                            ? 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' 
                            : 'drop-shadow(0 0 0px rgba(255,255,255,0))'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          animate={{
                            rotate: activeTab === key ? [0, 5, -5, 0] : 0
                          }}
                          transition={{
                            duration: 2,
                            repeat: activeTab === key ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          {icon}
                        </motion.div>
                        
                        <motion.span 
                          className={`text-xs px-2 py-1 rounded-full border transition-all duration-300 ${
                            activeTab === key
                              ? 'bg-white/20 border-white/30 text-white'
                              : 'bg-white/5 border-white/10 text-gray-400 group-hover:bg-white/10 group-hover:border-white/20'
                          }`}
                          animate={{
                            scale: activeTab === key ? 1.05 : 1,
                            boxShadow: activeTab === key 
                              ? '0 0 15px rgba(255,255,255,0.2)' 
                              : '0 0 0px rgba(255,255,255,0)'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {count}
                        </motion.span>
                      </motion.div>
                      
                      {/* Label */}
                      <motion.span 
                        className={`font-sans font-light text-lg transition-all duration-300 ${
                          activeTab === key 
                            ? 'text-white font-normal' 
                            : 'text-gray-400 group-hover:text-gray-200'
                        }`}
                        animate={{
                          textShadow: activeTab === key 
                            ? '0 0 10px rgba(255,255,255,0.3)' 
                            : '0 0 0px rgba(255,255,255,0)'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {label}
                      </motion.span>
                      
                      {/* Tap Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-white/10 opacity-0"
                        whileTap={{
                          opacity: [0, 0.3, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Layout */}
                <div className="flex md:hidden flex-col gap-1 relative w-full">
                  {/* Mobile Animated Background */}
                  <motion.div
                    className="absolute left-1 right-1 h-[calc(33.33%-4px)] bg-gradient-to-r from-white/20 via-white/25 to-white/20 rounded-lg border border-white/30 shadow-lg"
                    layoutId="activeTabBackgroundMobile"
                    initial={false}
                    animate={{
                      y: tabs.findIndex(tab => tab.key === activeTab) * (56 + 4),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                      duration: 0.6
                    }}
                  />
                  
                  {tabs.map(({ key, label, icon, count }, index) => (
                    <motion.button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`relative z-10 pointer-events-auto px-4 py-3 rounded-lg transition-all duration-300 group w-full flex items-center gap-3 h-14 ${
                        activeTab === key 
                          ? 'text-white' 
                          : 'text-gray-400'
                      }`}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {/* Mobile Icon */}
                      <motion.div
                        animate={{
                          rotate: activeTab === key ? [0, 5, -5, 0] : 0,
                          scale: activeTab === key ? 1.1 : 1
                        }}
                        transition={{
                          rotate: {
                            duration: 2,
                            repeat: activeTab === key ? Infinity : 0,
                            ease: "easeInOut"
                          },
                          scale: { duration: 0.3 }
                        }}
                        className={`transition-all duration-300 ${
                          activeTab === key ? 'text-white' : 'text-gray-500'
                        }`}
                      >
                        {icon}
                      </motion.div>
                      
                      {/* Mobile Label */}
                      <span className={`font-sans font-light text-base flex-1 text-left transition-all duration-300 ${
                        activeTab === key 
                          ? 'text-white font-normal' 
                          : 'text-gray-400'
                      }`}>
                        {label}
                      </span>
                      
                      {/* Mobile Count */}
                      <motion.span 
                        className={`text-xs px-2 py-1 rounded-full border transition-all duration-300 ${
                          activeTab === key
                            ? 'bg-white/20 border-white/30 text-white'
                            : 'bg-white/5 border-white/10 text-gray-400'
                        }`}
                        animate={{
                          scale: activeTab === key ? 1.05 : 1
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {count}
                      </motion.span>
                      
                      {/* Mobile Tap Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-lg bg-white/10 opacity-0"
                        whileTap={{
                          opacity: [0, 0.3, 0],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  ))}
                </div>
                
                {/* Background Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-2xl blur-xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [0.95, 1.02, 0.95]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Timeline Content */}
            {activeTab === 'journey' && (
              <motion.div 
                className="flex flex-col items-center px-4 py-20"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.3,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                {/* Timeline items */}
                {[
                  {
                    year: "2020",
                    title: "First Steps in Game Dev",
                    description: "Discovered my passion for coding by building games on Roblox. Learned Lua scripting, basic game mechanics, and the thrill of seeing players enjoy my creations.",
                    tech: ["Lua", "Roblox Studio", "Game Design"]
                  },
                  {
                    year: "2021-2024",
                    title: "BMO Box Studio & Freelance Adventures",
                    description: "Co-founded BMO Box with a friend—my first real taste of teamwork and project management. Balanced studio work with freelancing for other Roblox creators, sharpening my skills in both collaboration and client work.",
                    tech: ["Lua", "Teamwork", "Freelancing", "Client Projects"]
                  },
                  {
                    year: "2024",
                    title: "Web Dev Awakening",
                    description: "Made the leap from games to web apps. Built my first projects with React, Vite, and Node.js—excited by the speed, flexibility, and reach of modern web tech.",
                    tech: ["React", "JavaScript", "Node.js", "Vite"]
                  },
                  {
                    year: "2025",
                    title: "Startup Rollercoaster: CDO at a Roblox Company",
                    description: "Jumped from lead developer to Chief Development Officer in a month at a Roblox-focused startup. Led a team, juggled web design, and learned a ton about leadership—even when the startup hit tough times.",
                    tech: ["Leadership", "Project Management", "Web Design", "Game Dev"]
                  },
                  {
                    year: "2025",
                    title: "Front-end Developer @ Nexon Dev Vina",
                    description: "Joined Nexon Dev Vina, maintaining legacy Lua game code and building new features. Also dove deep into TypeScript and Vite for web projects, blending my game and web experience.",
                    tech: ["TypeScript", "Vite", "React", "Lua"]
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { 
                        opacity: 0,
                        x: index % 2 === 0 ? -100 : 100,
                        scale: 0.8
                      },
                      visible: { 
                        opacity: 1,
                        x: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                          duration: 0.8
                        }
                      }
                    }}
                    className={`flex items-center w-full max-w-6xl mb-16 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col md:relative relative`}
                  >
                    {/* Timeline line and dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 md:flex flex-col items-center hidden">
                      <motion.div 
                        className="w-6 h-6 bg-white rounded-full border-4 border-black shadow-lg"
                        animate={{
                          boxShadow: [
                            '0 0 0px rgba(255,255,255,0.3)',
                            '0 0 20px rgba(255,255,255,0.6)',
                            '0 0 0px rgba(255,255,255,0.3)'
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      />
                      {index < 4 && (
                        <motion.div 
                          className="w-1 h-32 bg-gradient-to-b from-white to-white/30 mt-2"
                          initial={{ scaleY: 0, originY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 1, delay: 0.5 }}
                          viewport={{ once: true }}
                        />
                      )}
                    </div>

                    {/* Mobile timeline dot */}
                    <div className="md:hidden flex items-center justify-center mb-4">
                      <motion.div 
                        className="w-4 h-4 bg-white rounded-full border-2 border-black shadow-lg"
                        animate={{
                          boxShadow: [
                            '0 0 0px rgba(255,255,255,0.3)',
                            '0 0 15px rgba(255,255,255,0.6)',
                            '0 0 0px rgba(255,255,255,0.3)'
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      />
                    </div>

                    {/* Content card */}
                    <motion.div 
                      className={`md:w-5/12 w-full p-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-xl border border-white/20 ${
                        index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                      }`}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 10px 40px rgba(255,255,255,0.1)"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <motion.div 
                        className="text-white/80 text-lg font-light mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {item.year}
                      </motion.div>
                      
                      <motion.h3 
                        className="text-white text-2xl font-light mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {item.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-300 font-light mb-4 leading-relaxed"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {item.description}
                      </motion.p>
                      
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {item.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 text-white/90 rounded-full text-sm font-light border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Projects Content */}
            {activeTab === 'projects' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Enhanced Project Sub-tabs */}
                <motion.div 
                  className="flex justify-center mb-8 md:mb-12 px-4 py-4 md:py-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-xl p-1.5 border border-white/10 w-full max-w-sm md:max-w-fit">
                    {/* Desktop Layout */}
                    <div className="hidden md:flex gap-1 relative">
                      {/* Desktop Animated Background for Sub-tabs */}
                      <motion.div
                        className="absolute top-1.5 h-[calc(100%-12px)] bg-gradient-to-r from-white/15 via-white/20 to-white/15 rounded-lg border border-white/20"
                        layoutId="activeProjectTabBackground"
                        initial={false}
                        animate={{
                          x: activeProjectTab === 'web' ? 0 : 140,
                          width: 140
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30
                        }}
                      />
                      
                      {[
                        { 
                          key: 'web', 
                          label: 'Websites',
                          icon: <BiWorld className="w-4 h-4" />,
                          count: webProjects.length
                        },
                        { 
                          key: 'game', 
                          label: 'Games',
                          icon: <TbDeviceGamepad className="w-4 h-4" />,
                          count: gameProjects.length
                        }
                      ].map(({ key, label, icon, count }, index) => (
                        <motion.button
                          key={key}
                          data-cursor-size="100px" 
                          data-cursor-exclusion
                          onClick={() => setActiveProjectTab(key)}
                          className={`relative z-10 pointer-events-auto px-4 py-3 rounded-lg transition-all duration-300 group min-w-[140px] flex items-center justify-center gap-2 ${
                            activeProjectTab === key 
                              ? 'text-white' 
                              : 'text-gray-400 hover:text-gray-200'
                          }`}
                          whileHover={{ 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 400, damping: 25 }
                          }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                        >
                          <motion.div
                            animate={{
                              rotate: activeProjectTab === key ? [0, 10, -10, 0] : 0,
                              scale: activeProjectTab === key ? 1.1 : 1
                            }}
                            transition={{
                              rotate: {
                                duration: 2,
                                repeat: activeProjectTab === key ? Infinity : 0,
                                ease: "easeInOut"
                              },
                              scale: { duration: 0.3 }
                            }}
                          >
                            {icon}
                          </motion.div>
                          
                          <span className={`font-sans font-light text-base transition-all duration-300 ${
                            activeProjectTab === key 
                              ? 'text-white font-normal' 
                              : 'text-gray-400 group-hover:text-gray-200'
                          }`}>
                            {label}
                          </span>
                          
                          <motion.span 
                            className={`text-xs px-1.5 py-0.5 rounded-full border transition-all duration-300 ${
                              activeProjectTab === key
                                ? 'bg-white/20 border-white/30 text-white'
                                : 'bg-white/5 border-white/10 text-gray-400 group-hover:bg-white/10'
                            }`}
                            animate={{
                              scale: activeProjectTab === key ? 1.05 : 1
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {count}
                          </motion.span>
                        </motion.button>
                      ))}
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden gap-1 relative">
                      {/* Mobile Animated Background for Sub-tabs */}
                      <motion.div
                        className="absolute top-1.5 h-[calc(100%-12px)] bg-gradient-to-r from-white/15 via-white/20 to-white/15 rounded-lg border border-white/20"
                        layoutId="activeProjectTabBackgroundMobile"
                        initial={false}
                        animate={{
                          x: activeProjectTab === 'web' ? 0 : 'calc(50% + 2px)',
                          width: 'calc(50% - 2px)'
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30
                        }}
                      />
                      
                      {[
                        { 
                          key: 'web', 
                          label: 'Websites',
                          shortLabel: 'Web',
                          icon: <BiWorld className="w-4 h-4" />,
                          count: webProjects.length
                        },
                        { 
                          key: 'game', 
                          label: 'Games',
                          shortLabel: 'Games',
                          icon: <TbDeviceGamepad className="w-4 h-4" />,
                          count: gameProjects.length
                        }
                      ].map(({ key, label, shortLabel, icon, count }, index) => (
                        <motion.button
                          key={key}
                          onClick={() => setActiveProjectTab(key)}
                          className={`relative z-10 pointer-events-auto px-3 py-2.5 rounded-lg transition-all duration-300 group flex-1 flex items-center justify-center gap-2 min-h-[44px] ${
                            activeProjectTab === key 
                              ? 'text-white' 
                              : 'text-gray-400'
                          }`}
                          whileTap={{ scale: 0.96 }}
                          initial={{ opacity: 0, x: index === 0 ? -15 : 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                        >
                          <motion.div
                            animate={{
                              rotate: activeProjectTab === key ? [0, 10, -10, 0] : 0,
                              scale: activeProjectTab === key ? 1.1 : 1
                            }}
                            transition={{
                              rotate: {
                                duration: 2,
                                repeat: activeProjectTab === key ? Infinity : 0,
                                ease: "easeInOut"
                              },
                              scale: { duration: 0.3 }
                            }}
                            className={`transition-all duration-300 ${
                              activeProjectTab === key ? 'text-white' : 'text-gray-500'
                            }`}
                          >
                            {icon}
                          </motion.div>
                          
                          <span className={`font-sans font-light text-sm transition-all duration-300 ${
                            activeProjectTab === key 
                              ? 'text-white font-normal' 
                              : 'text-gray-400'
                          }`}>
                            {shortLabel}
                          </span>
                          
                          <motion.span 
                            className={`text-xs px-1.5 py-0.5 rounded-full border transition-all duration-300 ${
                              activeProjectTab === key
                                ? 'bg-white/20 border-white/30 text-white'
                                : 'bg-white/5 border-white/10 text-gray-400'
                            }`}
                            animate={{
                              scale: activeProjectTab === key ? 1.05 : 1
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {count}
                          </motion.span>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className='w-full justify-center items-center flex flex-grow h-auto py-10 md:py-20'
                  key={activeProjectTab}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="flex flex-wrap justify-center gap-3 md:gap-4 p-2 md:p-4 w-full max-w-7xl">
                    {activeProjectTab === 'web' &&
                      webProjects.map(({ id, image, projectKey }, index) => (
                        <Card key={id} image={image} onClick={() => handleCardClick(projectKey)} index={index}/>))}
                    {activeProjectTab === 'game' &&
                      gameProjects.map(({ id, image, projectKey }, index)=> (
                        <Card key={id} image={image} onClick={() => handleCardClick(projectKey)} index={index}/>))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Blog Content */}
            {activeTab === 'blog' && (
              <motion.div 
                className="px-6 md:px-10 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Blog header with stats */}
                <motion.div 
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.div 
                    className="inline-flex items-center space-x-4 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white/80 text-sm font-light">
                        {sortedBlogPosts.length} Articles
                      </span>
                    </div>
                    <div className="w-px h-4 bg-white/20"></div>
                    <div className="flex items-center space-x-2">
                      <motion.svg 
                        className="w-4 h-4 text-white/60" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </motion.svg>
                      <span className="text-white/80 text-sm font-light">
                        Latest: {sortedBlogPosts[0]?.date}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                        delayChildren: 0.3
                      }
                    }
                  }}
                >
                  {sortedBlogPosts.map((post, index) => {
                    // Calculate reading time (roughly 200 words per minute)
                    const readingTime = Math.ceil(post.content.split(' ').length / 200);
                    const isLatest = index === 0;
                    
                    return (
                      <motion.article 
                        key={post.id}
                        data-cursor-text="READ"
                        variants={{
                          hidden: { 
                            opacity: 0,
                            y: 60,
                            scale: 0.85,
                            rotateX: -20
                          },
                          visible: { 
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            rotateX: 0,
                            transition: {
                              type: "spring",
                              stiffness: 100,
                              damping: 15,
                              duration: 0.8
                            }
                          }
                        }}
                        className={`group cursor-pointer relative overflow-hidden ${
                          isLatest ? 'md:col-span-2 xl:col-span-1' : ''
                        }`}
                        whileHover={{ 
                          y: -8,
                          transition: { type: "spring", stiffness: 400, damping: 25 }
                        }}
                        onClick={() => setActiveBlogPost(post)}
                      >
                        {/* Animated border gradient */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: 'linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2))',
                            backgroundSize: '300% 300%',
                          }}
                          animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                        
                        {/* Main card */}
                        <motion.div 
                          className="relative bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-xl rounded-2xl p-6 lg:p-8 h-full border border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden"
                          whileHover={{
                            boxShadow: "0 20px 60px rgba(255,255,255,0.15), 0 0 30px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.1)"
                          }}
                        >
                          {/* Background decoration */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                          
                          {/* Latest badge */}
                          {isLatest && (
                            <motion.div 
                              className="absolute top-4 right-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                            >
                              <motion.span
                                animate={{ opacity: [1, 0.6, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                              >
                                Latest
                              </motion.span>
                            </motion.div>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex flex-col h-full">
                            {/* Title */}
                            <motion.h2 
                              className="text-white text-xl lg:text-2xl font-light mb-4 leading-tight group-hover:text-white/95 transition-colors duration-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {post.title}
                            </motion.h2>
                            
                            {/* Preview */}
                            <motion.p 
                              className="text-gray-300 font-light mb-6 leading-relaxed text-sm lg:text-base flex-grow"
                              style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                              }}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              {post.preview}
                            </motion.p>
                            
                            {/* Footer */}
                            <motion.div 
                              className="flex justify-between items-center mt-auto pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors duration-300"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              {/* Date and reading time */}
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <motion.div 
                                    className="w-2 h-2 bg-gradient-to-r from-white/60 to-white/40 rounded-full"
                                    animate={{ 
                                      scale: [1, 1.2, 1],
                                      opacity: [0.6, 1, 0.6]
                                    }}
                                    transition={{ 
                                      duration: 3, 
                                      repeat: Infinity, 
                                      ease: "easeInOut",
                                      delay: index * 0.5 
                                    }}
                                  />
                                  <span className="text-gray-400 text-xs lg:text-sm font-light tracking-wide">
                                    {post.date}
                                  </span>
                                </div>
                                <div className="text-gray-500 text-xs">•</div>
                                <div className="flex items-center space-x-1">
                                  <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <span className="text-gray-500 text-xs font-light">
                                    {readingTime} min read
                                  </span>
                                </div>
                              </div>
                              
                              {/* Read more button */}
                              <motion.div 
                                className="flex items-center space-x-2 text-white/80 group-hover:text-white transition-colors duration-300"
                                whileHover={{ 
                                  x: 8,
                                  transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                data-cursor-size="80px" 
                                data-cursor-exclusion
                              >
                                <span className="text-xs lg:text-sm font-light">Read</span>
                                <motion.svg 
                                  className="w-4 h-4" 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                  whileHover={{ 
                                    x: 3,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                  }}
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </motion.svg>
                              </motion.div>
                            </motion.div>
                          </div>
                        </motion.div>
                      </motion.article>
                    );
                  })}
                </motion.div>
                
                {/* Bottom spacing for better scroll experience */}
                <div className="h-20"></div>
              </motion.div>
            )}
            <motion.div className='w-full justify-center items-center flex flex-grow h-auto py-20'>
              <div className="flex flex-wrap justify-center gap-4 p-4">
                {activeTab === 'web' &&
                  webProjects.map(({ id, image, info }, index) => (
                    <Card key={id} image={image} info={info} onClick={() => handleCardClick(id)} index={index}/>))}
                {activeTab === 'game' &&
                  gameProjects.map(({ id, image, info }, index)=> (
                    <Card key={id} image={image} info={info} onClick={() => handleCardClick(id)} index={index}/>))}
              </div>
            </motion.div>
          </motion.div>

          {/* Blog Section */}
          <motion.div variants={bentosVar} className={`h-auto flex-grow w-full ${boxDesign} mt-10`} style={{display: 'none'}}>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>Blog</motion.h1>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 blur-lg'>Blog</motion.h1>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {sortedBlogPosts.map((post) => (
                <motion.div 
                  key={post.id}
                  data-cursor-text="READ"
                  variants={{
                    hidden: { 
                      opacity: 0,
                      y: 50,
                      scale: 0.8,
                      rotateX: -15
                    },
                    visible: { 
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      rotateX: 0,
                    }
                  }}
                  className="p-[2px] bg-gradient-to-br from-white/20 via-transparent to-white/5 hover:from-white/30 hover:via-white/10 hover:to-white/20 rounded-xl transition-all duration-500 group cursor-pointer"
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 2,
                    boxShadow: "0 10px 40px rgba(255,255,255,0.1), 0 0 20px rgba(255,255,255,0.05)"
                  }}
                  onClick={() => setActiveBlogPost(post)}
                >
                  <div className="bg-black/90 backdrop-blur-xl rounded-xl p-8 h-full border border-white/5 group-hover:border-white/20 transition-all duration-500">
                    <motion.h2 
                      className="text-white text-2xl font-light mb-6 leading-tight group-hover:text-white/90 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {post.title}
                    </motion.h2>
                    
                    <motion.p 
                      className="text-gray-300 font-light mb-6 leading-relaxed line-clamp-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {post.preview}
                    </motion.p>
                    
                    <motion.div 
                      className="flex justify-between items-center mt-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white/40 rounded-full"></div>
                        <span className="text-gray-400 text-sm font-light tracking-wide">{post.date}</span>
                      </div>
                      <motion.div 
                        className="flex items-center space-x-2 text-white/80 group-hover:text-white transition-colors duration-300"
                        whileHover={{ 
                          x: 5,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        data-cursor-size="80px" 
                        data-cursor-exclusion
                      >
                        <span className="text-sm font-light">Read</span>
                        <motion.svg 
                          className="w-4 h-4" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          whileHover={{ x: 2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <AnimatePresence>
            <Suspense fallback={
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-black bg-opacity-70 rounded-xl px-8 py-6 flex flex-col items-center shadow-2xl animate-fade-in">
                  <svg className="animate-spin h-10 w-10 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  <span className="text-white text-2xl font-light">Loading...</span>
                </div>
              </div>
            }>
              {selectedProject && (
                <ProjectModal 
                  onClick={() => {
                    setSelectedProject(null);
                    setActiveCardId(null);
                  }} 
                  projectData={projectsData[selectedProject]} 
                />
              )}
              {activeBlogPost && (
                <BlogPost 
                  post={activeBlogPost} 
                  onClose={() => setActiveBlogPost(null)} 
                />
              )}
            </Suspense>
          </AnimatePresence>

          {/* Social links bar, hidden when a card is open */}
          <motion.div
            initial={{ opacity: 0, width: "60px", y: 200 }}
            animate={{
              opacity: selectedProject ? 0 : 1,
              y: 0,
              width: ["60px", "60px", "200px"],
            }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 1, delay: 2.5 },
              width: { delay: 3, duration: 2 },
              ease: "easeInOut",
            }}
            className={`h-[60px] fixed bg-white rounded-full backdrop-blur-md bg-opacity-20 top-[90%] flex items-center justify-center space-x-5 ${selectedProject ? 'pointer-events-none' : ''}`}
          >
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a 
                  key={index}
                  data-cursor-size="80px" data-cursor-exclusion
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 5 + index * 0.2,
                    duration: 0.5,
                  }}
                  target="_blank"
                  href={link.href}
                  className="text-white font-sans font-thin text-center text-2xl"
                >
                  <motion.div whileHover={{ scale: 1.3 }}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
      {/* Show custom cursor only on non-mobile devices and hide when a card or blog post is open */}
      {typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(pointer: coarse)').matches && !selectedProject && !activeBlogPost && (
        <Cursor isGelly={true} cursorInnerColor='#000000' cursorBackgrounColor='#ffffff' sizeAnimationEase='easeInOut' />
      )}
    </>
  );
}

export default App;