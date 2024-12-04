import { motion } from 'framer-motion';
import vid1 from './assets/videos/whattodo/vid1.mp4'
function WhattodoInfo({ onClick }) {
  const handleClick = (e) => {if (e.target === e.currentTarget) { onClick(); } };
  const description = 'A dynamic and interactive task management system that allows users to manage tasks through boards. The app features drag-and-drop functionality to reorder boards and tasks, supports dark mode, and integrates with a backend for storing board data.'
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const container = {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2,
      },
    }
  }
  return (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
  className="w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md flex-col flex justify-center items-center fixed">
    <motion.div onClick={handleClick}  className="w-full h-full flex justify-center overflow-auto py-28 space-x-5 px-20 scroll-smooth">
      <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-1/2 py-5 h-[2000px] bg-white bg-opacity-20 rounded-2xl flex flex-col justify-start items-start backdrop-blur-md px-10 space-y-5">
      <motion.h1 variants={textVariants} className="text-white font-sans font-thin  mx-auto text-center w-full text-9xl outline-dashed rounded-3xl mb-10 pb-5">What to do?</motion.h1>
      <motion.hr variants={textVariants} className='w-full mx-auto border-dashed'></motion.hr>
        <motion.h1  variants={textVariants} className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 outline-dashed pb-2 text-4xl">Introduction</motion.h1>
        <motion.video variants={textVariants} autoPlay loop className='w-full h-auto rounded-2xl shadow-2xl'>
            <source src={vid1} type='video/mp4' />
        </motion.video>
        <motion.p variants={textVariants} className='text-white font-sans font-thin mx-auto text-center w-full'>
        {description.split("").map((word, index) => (  
                <motion.span
                key = {index} 
                initial={{ opacity: 0}} whileInView={{ opacity: 1, transition: { delay: index * 0.005, ease: "easeOut", duration: 1 } }} viewport={{ once: true }}
                className='text-white font-sans font-thin mx-auto text-center w-full text-2xl'>{word}</motion.span>
              ))}
        </motion.p>
        <motion.hr  variants={textVariants} className='w-full mx-auto border-dashed'></motion.hr>
        <motion.h1  variants={textVariants} className="text-white font-sans font-thin mx-auto text-center rounded-3xl px-2 outline-dashed pb-2 text-4xl">Features</motion.h1>
        <motion.h2 variants={textVariants} className="text-white font-sans font-thin mx-auto text-left rounded-3xl px-2 pb-2 text-2xl">1. Drag-and-Drop Interface</motion.h2>
        <motion.p variants={textVariants} className='text-white font-sans font-thin mx-auto text-center w-full'>    
           {"Seamlessly reorder tasks and boards using a smooth drag-and-drop system powered by react-beautiful-dnd.".split("").map((word, index) => (
          <motion.span
          key = {index} 
          initial={{ opacity: 0}} whileInView={{ opacity: 1, transition: { delay: index * 0.005, ease: "easeOut", duration: 1 } }} viewport={{ once: true }}
          className='text-white font-sans font-thin mx-auto text-center w-full text-xl'>{word}</motion.span>
        ))}</motion.p>

      </motion.div>
      <motion.div className="w-[200px] right-[15%] bg-white bg-opacity-20 rounded-3xl flex flex-col gap-5 py-5 justify-center items-center fixed backdrop-blur-md">
        <motion.h1 className="text-white font-sans font-thin mx-auto text-center w-full text-2xl cursor-pointer">Introduction</motion.h1>
        <motion.h1 className="text-white font-sans font-thin mx-auto text-center w-full text-2xl cursor-pointer">Features</motion.h1>
        <motion.h1 className="text-white font-sans font-thin mx-auto text-center w-full text-2xl cursor-pointer">Functions</motion.h1>
      </motion.div>
    </motion.div>
  </motion.div>)
}

export default WhattodoInfo;
