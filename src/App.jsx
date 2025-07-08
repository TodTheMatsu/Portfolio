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
  'I am an aspiring web developer with a strong passion for learning and growth. My journey began with over four years of experience in game development, where I honed my programming skills and creative problem-solving abilities. Recently, I transitioned into web development, bringing with me a solid foundation in programming and a commitment to mastering this exciting field.';
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
    { key: 'web', label: 'Websites' },
    { key: 'game', label: 'Games' },
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

  const [activeTab, setActiveTab] = useState('web');
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
            <motion.button
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
              onClick={() => {
                const aboutSection = document.querySelector('[data-section="about"]');
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`z-20 flex flex-col p-10 items-center cursor-pointer group ${activeCardId || activeBlogPost ? 'pointer-events-none' : ''}`}
              data-cursor-size="80px" 
              data-cursor-exclusion
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
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
            </motion.button>
          </div>
          <motion.div variants={bentoContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-4 pointer-events-none w-full flex flex-wrap items-center justify-center gap-2" data-section="about">
            <motion.div 
              variants={bentosVar}  
              initial={{ opacity: 0, y: 80 }} 
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }} 
              viewport={{ once: true }}
              className="xl:w-[31.25%] lg:w-full h-[400px] backdrop-blur-md pb-2 flex-grow"
            >
              <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>About me</motion.h1>
              <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 blur-lg'>About me</motion.h1>
              <motion.p
                className='text-white font-sans px-2 sm:px-4 font-thin mx-auto text-center w-full text-lg xs:text-base sm:text-xl md:text-2xl mt-5 flex-grow break-words overflow-auto max-h-[320px]'
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.3, ease: 'easeOut' } }}
                viewport={{ once: true }}
              >
                {aboutMe.split("").map((word, index) => (  
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 200 }}
                    whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.005 + 1.5, ease: "easeOut", duration: 1 } }}
                    viewport={{ once: true }}
                    className='text-white font-sans font-thin mx-auto text-center'>{word}</motion.span>
                ))}
              </motion.p>
            </motion.div>
            <motion.div 
              variants={bentosVar} 
              initial={{ opacity: 0, y: 80 }} 
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.2, ease: 'easeOut' } }} 
              viewport={{ once: true }}
              className={`xl:max-w-[68%]  sm:w-full lg:max-w-[100%] h-[400px] flex-grow ${boxDesign}`}
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

          <motion.div variants={bentosVar} className={`h-auto flex-grow w-full ${boxDesign}`}>
            <div className="flex justify-center gap-6 mb-10 py-4 relative flex-wrap">
              {tabs.map(({ key, label }) => (
                <div data-cursor-size="80px" data-cursor-exclusion key={key} className="relative min-w-[120px] md:min-w-[120px]">
                  <motion.button 
                    variants={smallGlowingLabels}
                    onClick={() => setActiveTab(key)}
                    whileHover={{ scale: 1.1 }}
                    className={`pointer-events-auto absolute font-sans font-thin text-center text-4xl mt-5 ${
                      activeTab === key ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {label}
                  </motion.button>
                  <motion.div 
                    variants={smallGlowingLabels}
                    className={`pointer-events-none absolute font-sans font-thin text-center text-4xl mt-5 ${
                      activeTab === key ? 'text-white blur-md' : 'text-transparent'
                    }`}
                  >
                    {label}
                  </motion.div>
                </div>
              ))}
            </div>
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
          <motion.div variants={bentosVar} className={`h-auto flex-grow w-full ${boxDesign} mt-10`}>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>Blog</motion.h1>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 blur-lg'>Blog</motion.h1>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-8 mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              {sortedBlogPosts.map((post) => (
                <motion.div 
                  key={post.id}
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
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }
                    }
                  }}
                  className="p-[2px] bg-gradient-to-bl  hover:from-white hover:to-white hover:via-black rounded-lg transition-all duration-400"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                  }}
                >
                  <div className="bg-black backdrop-blur-md rounded-lg p-6 h-full">
                    <motion.h2 
                      className="text-white text-2xl font-thin mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {post.title}
                    </motion.h2>
                    <motion.p 
                      className="text-gray-300 font-thin mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {post.preview}
                    </motion.p>
                    <motion.div 
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <span className="text-gray-400 text-sm">{post.date}</span>
                      <motion.button 
                        whileHover={{ 
                          scale: 1.1,
                          x: 5,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        onClick={() => setActiveBlogPost(post)}
                        className="text-white font-thin hover:text-gray-300"
                        data-cursor-size="80px" 
                        data-cursor-exclusion
                      >
                        Read More →
                      </motion.button>
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