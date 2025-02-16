// AnimatedText.jsx
import { motion } from 'framer-motion';

const AnimatedText = ({ text, textSize = 'text-xl' }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: index * 0.005, ease: 'easeOut', duration: 1 },
          }}
          viewport={{ once: true }}
          className={`text-white font-sans font-thin mx-auto text-center w-full ${textSize}`}
        >
          {char}
        </motion.span>
      ))}
    </>
  );
};

export default AnimatedText;
