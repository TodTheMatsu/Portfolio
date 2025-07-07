// NavigationMenu.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavigationMenu = ({ sectionRefs, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile menu button (hamburger)
  const Hamburger = (
    <button
      className="xl:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
      aria-label="Open navigation menu"
      onClick={() => setMenuOpen((open) => !open)}
      data-cursor-exclusion
      data-cursor-size="80px"
    >
      <span className={`block w-8 h-1 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2 bg-black' : 'bg-white'}`}></span>
      <span className={`block w-8 h-1 rounded my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'bg-white'}`}></span>
      <span className={`block w-8 h-1 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2 bg-black' : 'bg-white'}`}></span>
    </button>
  );

  // Mobile menu overlay
  const MobileMenu = (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 right-0 w-3/4 h-full bg-white bg-opacity-90 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40 xl:hidden"
        >
          {Object.entries(sectionRefs).map(([section, ref]) => (
            <button
              key={section}
              onClick={() => {
                scrollToSection(ref);
                setMenuOpen(false);
              }}
              className="text-black font-sans font-thin text-center w-full text-2xl py-2"
              data-cursor-exclusion
              data-cursor-size="80px"
            >
              {section}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Desktop sidebar
  const DesktopMenu = (
    <motion.div className="xl:w-[200px] xl:right-[15%] xl:top-[20%] top-0 bg-white bg-opacity-50 xl:bg-opacity-20 rounded-3xl flex xl:flex-col flex-row px-5 gap-5 py-2 justify-center items-center fixed backdrop-blur-xl xl:flex xl:static xl:fixed z-30 hidden xl:flex">
      {Object.entries(sectionRefs).map(([section, ref]) => (
        <motion.button data-cursor-exclusion data-cursor-size='80px'
          key={section}
          onClick={() => scrollToSection(ref)}
          className="text-white font-sans font-thin text-center w-full text-2xl"
        >
          {section}
        </motion.button>
      ))}
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
