import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import AnimatedText from './AnimatedText';
import FeatureItem from './FeatureItem';
import TechStack from './TechStack';
import NavigationMenu from './NavigationMenu';

function ProjectModal({ onClick, projectData }) {
  const handleClick = (e) => {
    if (e.target === e.currentTarget) onClick();
  };

  // State for zoomed feature
  const [zoomedFeature, setZoomedFeature] = useState(null);

  // Refs for scrolling to sections
  const introRef = useRef(null);
  const featuresRef = useRef(null);
  const techStackRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Mapping section names to refs
  const sectionRefs = {
    Introduction: introRef,
    Features: featuresRef,
    'Technology Stack': techStackRef,
  };

  // Framer Motion variants for text and container animations
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const containerVariants = {
    visible: { transition: { delayChildren: 0.5, staggerChildren: 0.2 } },
  };

  // Render logo based on type
  const renderLogo = () => {
    console.log('Rendering logo:', projectData.logo?.type);
    if (projectData.logo?.type === 'svg') {
      return (
        <motion.div 
          className="flex items-center justify-center mb-8"
          variants={textVariants}
        >
          <div 
            className="w-16 h-16 mr-4"
            dangerouslySetInnerHTML={{ __html: projectData.logo.content }}
          />
          <motion.h1 
            variants={textVariants} 
            className="text-white text-6xl md:text-7xl font-light tracking-tight"
          >
            {projectData.title}
          </motion.h1>
        </motion.div>
      );
    }
    
    // Default to text logo
    return (
      <motion.div 
        className="flex items-center justify-center mb-8"
        variants={textVariants}
      >
        <motion.h1 
          variants={textVariants} 
          className="text-white text-6xl md:text-7xl font-light tracking-tight"
        >
          {projectData.title}
        </motion.h1>
      </motion.div>
    );
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
        className="w-full h-full flex justify-center  items-center overflow-hidden py-28 space-x-5 md:px-20 px-5 scroll-smooth"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="xl:max-w-[50%] max-w-full h-max flex-grow bg-black/30 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
        >
          {/* Fixed Header */}
          <motion.div 
            className="flex flex-col p-4 md:p-8 pb-4 md:pb-6 border-b border-white/10 relative"
            variants={containerVariants}
          >
            {/* Exit Button */}
            <motion.button
              onClick={onClick}
              className="absolute top-4 right-4 text-white/60 hover:text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-all duration-200 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={textVariants}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Logo and Title - Mobile Responsive */}
            <div className="flex flex-col items-center text-center pr-12 md:pr-4">
              {/* Mobile-optimized logo rendering */}
              {projectData.logo?.type === 'svg' ? (
                <motion.div 
                  className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-8"
                  variants={textVariants}
                >
                  <div 
                    className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-0 md:mr-4"
                    dangerouslySetInnerHTML={{ __html: projectData.logo.content }}
                  />
                  <motion.h1 
                    variants={textVariants} 
                    className="text-white text-3xl md:text-6xl lg:text-7xl font-light tracking-tight text-center"
                  >
                    {projectData.title}
                  </motion.h1>
                </motion.div>
              ) : (
                <motion.div 
                  className="flex items-center justify-center mb-4 md:mb-8"
                  variants={textVariants}
                >
                  <motion.h1 
                    variants={textVariants} 
                    className="text-white text-3xl md:text-6xl lg:text-7xl font-light tracking-tight text-center"
                  >
                    {projectData.title}
                  </motion.h1>
                </motion.div>
              )}

              <motion.p 
                variants={textVariants}
                className="text-gray-300 text-sm md:text-lg text-center max-w-2xl leading-relaxed"
              >
                {projectData.subtitle}
              </motion.p>
            </div>
          </motion.div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-160px)] md:max-h-[calc(90vh-200px)] px-4 md:px-8 lg:px-12 pb-8">
            {/* Divider */}
            <motion.div 
              className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"
              variants={textVariants}
            />

            {/* Introduction Section */}
            <motion.div 
              className="w-full max-w-4xl mx-auto text-center mb-5"
              variants={containerVariants}
            >
              <motion.h2 
                variants={textVariants} 
                ref={introRef} 
                className="text-white text-3xl font-light mb-5"
              >
                Introduction
              </motion.h2>

              <motion.div 
                variants={textVariants} 
                className="text-gray-300 text-lg my-5 leading-relaxed max-w-3xl mx-auto"
              >
                <AnimatedText text={projectData.description} />
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div 
              className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"
              variants={textVariants}
            />

            {/* Features Section */}
            <motion.div 
              className="w-full max-w-6xl mx-auto mb-16"
              variants={containerVariants}
            >
              <motion.h2 
                variants={textVariants} 
                ref={featuresRef} 
                className="text-white text-3xl font-light text-center mb-12"
              >
                Features
              </motion.h2>

              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5"
                variants={containerVariants}
              >
                {projectData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={textVariants}
                    className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setZoomedFeature(feature)}
                  >
                    <FeatureItem 
                      index={index} 
                      feature={feature} 
                      textVariants={textVariants} 
                    />
                    <motion.div 
                      className="mt-4 flex items-center justify-center text-white/60 group-hover:text-white/80 transition-colors text-sm"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                      Click to zoom
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Divider */}
            <motion.div 
              className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16"
              variants={textVariants}
            />

            {/* Technology Stack Section */}
            <motion.div 
              className="w-full max-w-4xl mx-auto mb-16"
              variants={containerVariants}
            >
              <TechStack ref={techStackRef} tech={projectData.tech} textVariants={textVariants} />
            </motion.div>

            {/* Final Divider */}
            <motion.div 
              className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"
              variants={textVariants}
            />

            {/* Source Code Link */}
            <motion.div 
              className="w-full max-w-md mx-auto"
              variants={containerVariants}
            >
              <motion.a 
                href={projectData.sourceCodeUrl}
                target="_blank"
                className="block w-full"
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                variants={textVariants}
              >
                <motion.div 
                  className="bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 mt-5 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 text-center group"
                  data-cursor-exclusion 
                  data-cursor-size='80px'
                >
                  <div className="flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6 text-white group-hover:text-gray-200 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-white text-xl font-light group-hover:text-gray-200 transition-colors">
                      View Source Code
                    </span>
                    <motion.svg 
                      className="w-5 h-5 text-white group-hover:text-gray-200 transition-colors" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </motion.svg>
                  </div>
                </motion.div>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Menu */}
        <NavigationMenu sectionRefs={sectionRefs} scrollToSection={scrollToSection} />
      </motion.div>

      {/* Feature Zoom Modal */}
      {zoomedFeature && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={() => setZoomedFeature(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/10 backdrop-blur-2xl rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start mb-6">
              <motion.h2 
                className="text-white text-3xl font-light"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {zoomedFeature.name}
              </motion.h2>
              <motion.button
                onClick={() => setZoomedFeature(null)}
                className="text-white/60 hover:text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Video Section */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <video 
                className="w-full rounded-xl border border-white/10" 
                controls 
                autoPlay 
                muted
                loop
              >
                <source src={zoomedFeature.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>

            {/* Description Section */}
            <motion.div 
              className="text-gray-300 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p>{zoomedFeature.description}</p>
            </motion.div>

            {/* Close Button */}
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={() => setZoomedFeature(null)}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl px-6 py-3 text-white font-light border border-white/20 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ProjectModal;
