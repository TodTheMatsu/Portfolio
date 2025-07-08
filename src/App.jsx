// External dependencies
import { AnimatePresence, motion } from 'framer-motion';
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
// React icons for tech stack
import { FaReact, FaNodeJs } from 'react-icons/fa';
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
      svg: 'M4.0744 2.9938c.05823-1.03009.30429-1.47803 1.00992-1.83774.75925-.387161 1.95674-.206988 3.36582.50655.60692.30748.66872.31374 1.73236.17737 1.4138-.18133 3.2339-.18069 4.5388.00166.9868.1379 1.0516.13101 1.66-.17711 2.0001-1.012851 3.5792-.94658 4.151.17417.2854.55942.3384 2.01101.1171 3.20825-.1227.66374-.1097.74661.1859 1.18217 2.0797 3.06473.5812 8.03248-2.9825 9.88638-.2727.1419-.5025.2297-.6898.3012-.5751.2196-.7497.2863-.5383 1.2971.1018.4862.2244 1.695.2726 2.6864.0871 1.792.0858 1.8045-.2285 2.1701-.4278.4973-1.0444.5057-1.4622.0199-.2725-.3168-.2991-.4664-.2991-1.6887 0-1.8063-.198-3.0069-.6658-4.0357-.5563-1.2243-.1439-1.6808 1.1283-1.9544 1.7683-.3804 3.1494-1.4717 3.9192-3.0968.7319-1.5448.8422-3.67959-.481-4.97792-.3763-.44718-.4025-.85222-.1338-2.07359.1004-.45649.1846-1.04541.1871-1.30884.0038-.41602-.0341-.47884-.2896-.47884-.1617 0-.7795.23521-1.3727.52264l-.9468.4589c-.0861.04171-.1824.05775-.2774.04685-2.4075-.27634-4.6951-.28061-7.11438.00108-.09536.0111-.19209-.00494-.27847-.04686l-.9463-.4592c-.59326-.28795-1.21103-.52341-1.37268-.52341-.37376 0-.37938.27594-.0387 1.91537.20811 1.00125.34815 1.22435-.25346 2.02494-.90176 1.20004-1.12701 2.6902-.64344 4.25588.60947 1.973 2.10193 3.3059 4.20016 3.7506 1.26487.2681 1.59547.6179 1.11247 2.0683-.3802 1.1414-.6206 1.4356-1.17313 1.4356-.74342 0-1.20911-.644-.95283-1.3179.11288-.297.0793-.3287-.61713-.5827-2.12594-.7751-3.75197-2.5124-4.49539-4.8032-.57461-1.77046-.32178-4.07491.60003-5.46777.31386-.47425.31872-.51447.17225-1.42236-.08287-.51395-.12769-1.34114-.0996-1.83837Zm-.74237 12.9516c-.30635-.4595-.92722-.5837-1.38675-.2773-.45952.3063-.5837.9272-.27735 1.3867.22617.3393.49674.618.72651.8477.04236.0424.08352.0833.12371.1232.19247.1912.36241.36.53309.5604.37751.4431.75412 1.0399.96816 2.1101.09534.4767.43799.7335.62785.8457.2059.1216.43087.1933.616.24.37871.0955.83844.1451 1.27474.174.47896.0318.99793.0421 1.462.0449.00034.5519.44792.9993.99999.9993.55229 0 1-.4477 1-1v-1c0-.5523-.44771-1-1-1-.09427 0-.19626.0003-.30429.0007-.58686.0018-1.35181.0041-2.02551-.0405-.32487-.0215-.59193-.052-.78777-.0893-.30158-1.1839-.78879-1.9716-1.30868-2.5819-.22982-.2697-.4678-.5057-.66137-.6977-.03624-.0359-.07092-.0703-.10371-.1031-.22335-.2233-.36945-.3821-.47662-.5429Z',
    },
    {
      href: 'https://www.linkedin.com/in/ph%C3%BAc-l%C3%AA-4591ab323/',
      label: 'Linkedin',
      svg: 'M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z',
    },
    {
      href: 'https://x.com/LeeLeembp',
      label: 'Twitter',
      svg: 'M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958   C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013   L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z',
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

            <motion.h1 className="relative z-10 text-4xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-2 break-words leading-tight">
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
            <motion.h1 className='absolute z-10 text-4xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-2 break-words leading-tight'>
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
          </div>
          <motion.div variants={bentoContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-4 pointer-events-none w-full flex flex-wrap items-center justify-center gap-2">
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
            initial={{ opacity: 0, width: "60px", y: 100 }}
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
            {links.map((link, index) => (
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
                <motion.svg  whileHover={{ scale: 1.3 }} className="h-auto w-10 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d={link.svg}/>
                </motion.svg>
              </motion.a>
            ))}
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