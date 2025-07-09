// NavigationMenu.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationMenu = ({ sectionRefs, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Animation variants
  const menuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Improved hamburger menu with better animations
  const Hamburger = (
    <motion.button
      className="xl:hidden flex flex-col justify-center items-center w-12 h-12 z-50 bg-white/10 backdrop-blur-md rounded-xl border border-white/20"
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      onClick={() => setMenuOpen((open) => !open)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-cursor-exclusion
      data-cursor-size="80px"
    >
      <motion.span 
        className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5 bg-white' : 'bg-white/80'}`}
        animate={{
          rotate: menuOpen ? 45 : 0,
          y: menuOpen ? 6 : 0,
          backgroundColor: menuOpen ? '#ffffff' : '#ffffff99'
        }}
      />
      <motion.span 
        className={`block w-6 h-0.5 rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'bg-white/80'}`}
        animate={{
          opacity: menuOpen ? 0 : 1,
          backgroundColor: menuOpen ? '#ffffff' : '#ffffff99'
        }}
      />
      <motion.span 
        className={`block w-6 h-0.5 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5 bg-white' : 'bg-white/80'}`}
        animate={{
          rotate: menuOpen ? -45 : 0,
          y: menuOpen ? -6 : 0,
          backgroundColor: menuOpen ? '#ffffff' : '#ffffff99'
        }}
      />
    </motion.button>
  );

  // Mobile menu with improved animations
  const MobileMenu = (
    <AnimatePresence>
      {menuOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 xl:hidden"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 30,
              staggerChildren: 0.1,
              delayChildren: 0.1
            }}
            className="fixed top-0 right-0 w-80 h-full bg-white/10 backdrop-blur-2xl flex flex-col items-start justify-center gap-6 z-40 xl:hidden border-l border-white/20 px-8"
          >
            {/* Close button */}
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Menu title */}
            <motion.h3 
              className="text-white/60 text-sm font-light mb-4 border-b border-white/10 pb-2 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Navigation
            </motion.h3>

            {Object.entries(sectionRefs).map(([section, ref], index) => (
              <motion.button
                key={section}
                onClick={() => {
                  scrollToSection(ref);
                  setMenuOpen(false);
                }}
                className="w-full text-left py-4 px-4 rounded-xl font-light transition-all duration-300 text-white/70 hover:text-white hover:bg-white/10"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
                whileHover={{ x: 4 }}
                data-cursor-exclusion
                data-cursor-size="80px"
              >
                <span className="text-xl font-light">
                  {section}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  // Desktop sidebar with improved styling and animations
  const DesktopMenu = (
    <motion.div 
      className="hidden xl:flex xl:w-[220px] xl:right-[5%] xl:top-[25%] bg-white/5 rounded-2xl flex-col px-4 gap-2 py-4 justify-center items-center fixed backdrop-blur-2xl z-30 border border-white/10 shadow-2xl"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Navigation Title */}
      <motion.div 
        className="hidden xl:block text-white/60 text-sm font-light mb-2 text-center border-b border-white/10 pb-2 w-full"
        variants={itemVariants}
      >
        Navigation
      </motion.div>
      
      {Object.entries(sectionRefs).map(([section, ref], index) => (
        <motion.button 
          key={section}
          onClick={() => scrollToSection(ref)}
          className="relative group w-full py-3 px-4 rounded-xl font-light text-left transition-all duration-300 ease-out text-white/70 hover:text-white hover:bg-white/10"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
          data-cursor-exclusion 
          data-cursor-size='80px'
        >
          {/* Section name */}
          <span className="text-lg font-light">
            {section}
          </span>
          
          {/* Hover effect background */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </motion.button>
      ))}
      
      {/* Progress indicator */}
      <motion.div 
        className="hidden xl:block w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2"
        variants={itemVariants}
      />
    </motion.div>
  );

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="fixed top-4 right-4 xl:hidden z-50">
        {Hamburger}
      </div>
      {/* Mobile overlay menu */}
      {MobileMenu}
      {/* Desktop sidebar */}
      {DesktopMenu}
    </>
  );
};

export default NavigationMenu;
