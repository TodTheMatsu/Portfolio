// FeatureItem.jsx
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const FeatureItem = ({ feature, index, textVariants }) => (
  <>
    <motion.h2
      variants={textVariants}
      className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 pb-2 text-2xl"
    >
      {index + 1}. {feature.name}
    </motion.h2>
    <motion.video
      variants={textVariants}
      autoPlay
      loop
      className="w-full h-auto rounded-2xl shadow-2xl"
    >
      <source src={feature.video} type="video/mp4" />
    </motion.video>
    <motion.p
      variants={textVariants}
      className="text-white font-sans font-thin mx-auto text-center w-full text-xl"
    >
      <AnimatedText text={feature.description} />
    </motion.p>
  </>
);

export default FeatureItem;
