// External dependencies
import { AnimatePresence, delay, motion } from 'framer-motion';
import { useMemo, useEffect, useRef, useState, Suspense, lazy } from 'react';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';
import Card from './Card';
import BlogPost from './BlogPost';
import { blogPosts } from './data/blogPosts';

// Local components
const WhattodoInfo = lazy(() => import('./WhattodoInfo'));
const Howistheweather = lazy(() => import('./Howistheweather'));
const Assistant = lazy(() => import('./Assistant'));
const Empirehound = lazy(() => import('./Empirehound'));
const ProjectRTS = lazy(() => import('./ProjectRTS'));

// Assets
import assistant from './assets/assistant.png';
import howistheweather from './assets/Howistheweather.png';
import whattodo from './assets/whattodo.png';
import empirehounds from './assets/empirehounds.png';
import projectrts from './assets/projectrts.png';
// React icons for tech stack and social links
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiLua, SiSupabase } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

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

  // Memoized tabs and projects
  const tabs = useMemo(() => [
    { key: 'journey', label: 'My Journey' },
    { key: 'projects', label: 'Projects' },
    { key: 'blog', label: 'Blog' },
  ], []);

  const webProjects = useMemo(() => [
    { id: 1, image: whattodo, info: <WhattodoInfo onClick={() => handleCardClick(1)} /> },
    { id: 2, image: howistheweather, info: <Howistheweather onClick={() => handleCardClick(2)} /> },
    { id: 3, image: assistant, info: <Assistant onClick={() => handleCardClick(3)} /> },
  ], []);

  const gameProjects = useMemo(() => [
    { id: 4, image: empirehounds, info: <Empirehound onClick={() => handleCardClick(4)} /> },
    { id: 5, image: projectrts, info: <ProjectRTS onClick={() => handleCardClick(5)} /> },
  ], []);

  const allProjects = useMemo(() => [...webProjects, ...gameProjects], [webProjects, gameProjects]);

  const [activeTab, setActiveTab] = useState('journey');
  const [activeProjectTab, setActiveProjectTab] = useState('web');
  const [activeCardId, setActiveCardId] = useState(null);
  const [activeBlogPost, setActiveBlogPost] = useState(null);

  // Use a stable callback for card click
  const handleCardClick = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  // Sort blog posts by date (newest first)
  const sortedBlogPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <div className={`bg-black h-screen w-full absolute flex flex-col items-center overflow-x-hidden ${activeCardId ? "overflow-hidden" : ""}`}>
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
        
        <div className={`pb-20 flex-grow w-full absolute flex flex-col items-center overflow-x-hidden ${activeCardId ? "overflow-hidden" : ""}`}>
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
                opacity: activeCardId || activeBlogPost ? 0 : 1,
                y: 0,
              }}
              transition={{ 
                delay: 3,
                duration: 1,
                opacity: { duration: 0.5, delay: 3 }
              }}
              className={`z-20 flex flex-col p-10 items-center group ${activeCardId || activeBlogPost ? 'pointer-events-none' : ''}`}
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
            <div className="flex justify-center gap-6 mb-10 py-4 relative flex-wrap">
              {tabs.map(({ key, label }) => (
                <div data-cursor-size="80px" data-cursor-exclusion key={key} className="relative min-w-[120px] md:min-w-[120px]">
                  <motion.button 
                    onClick={() => setActiveTab(key)}
                    whileHover={{ scale: 1.1 }}
                    className={`pointer-events-auto font-sans font-thin text-center text-4xl mt-5 transition-colors duration-300 ${
                      activeTab === key ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {label}
                  </motion.button>
                </div>
              ))}
            </div>

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
                <div className="flex justify-center gap-6 mb-10 py-4 relative flex-wrap">
                  {[
                    { key: 'web', label: 'Websites' },
                    { key: 'game', label: 'Games' }
                  ].map(({ key, label }) => (
                    <div data-cursor-size="80px" data-cursor-exclusion key={key} className="relative min-w-[120px] md:min-w-[120px]">
                      <motion.button 
                        onClick={() => setActiveProjectTab(key)}
                        whileHover={{ scale: 1.1 }}
                        className={`pointer-events-auto font-sans font-thin text-center text-2xl ${
                          activeProjectTab === key ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {label}
                      </motion.button>
                    </div>
                  ))}
                </div>
                <motion.div className='w-full justify-center items-center flex flex-grow h-auto py-20'>
                  <div className="flex flex-wrap justify-center gap-4 p-4">
                    {activeProjectTab === 'web' &&
                      webProjects.map(({ id, image, info }, index) => (
                        <Card key={id} image={image} info={info} onClick={() => handleCardClick(id)} index={index}/>))}
                    {activeProjectTab === 'game' &&
                      gameProjects.map(({ id, image, info }, index)=> (
                        <Card key={id} image={image} info={info} onClick={() => handleCardClick(id)} index={index}/>))}
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Blog Content */}
            {activeTab === 'blog' && (
              <motion.div 
                className="p-10 mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
              {activeCardId && allProjects.find(project => project.id === activeCardId)?.info}
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
              opacity: activeCardId ? 0 : 1,
              y: 0,
              width: ["60px", "60px", "200px"],
            }}
            transition={{
              opacity: { duration: 0.5 },
              y: { duration: 1, delay: 2.5 },
              width: { delay: 3, duration: 2 },
              ease: "easeInOut",
            }}
            className={`h-[60px] fixed bg-white rounded-full backdrop-blur-md bg-opacity-20 top-[90%] flex items-center justify-center space-x-5 ${activeCardId ? 'pointer-events-none' : ''}`}
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
      {typeof window !== 'undefined' && window.matchMedia && !window.matchMedia('(pointer: coarse)').matches && !activeCardId && !activeBlogPost && (
        <Cursor isGelly={true} cursorInnerColor='#000000' cursorBackgrounColor='#ffffff' sizeAnimationEase='easeInOut' />
      )}
    </>
  );
}

export default App;