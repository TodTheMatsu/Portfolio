// NavigationMenu.jsx
import { motion } from 'framer-motion';

const NavigationMenu = ({ sectionRefs, scrollToSection }) => (
  <motion.div className="xl:w-[200px] xl:right-[15%] xl:top-[20%] top-0 bg-white bg-opacity-50 xl:bg-opacity-20 rounded-3xl flex xl:flex-col flex-row px-5 gap-5 py-2 justify-center items-center fixed backdrop-blur-xl">
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

export default NavigationMenu;
