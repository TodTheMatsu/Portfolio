import { motion } from 'framer-motion';
import reactsvg from "./assets/react.svg"
function App() {
  const links = [
    {
      href: "https://github.com/TodTheMatsu",
      label: "Github",
    },
    {
      href: "https://www.instagram.com/sugarcoated_liess/",
      label: "Instagram",
    },
  ];

  return (
    <>
      <div className="bg-black h-[400vh] w-full absolute flex flex-col items-center">
        <div className="w-[1000px] h-[500px] mx-auto my-56 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.2 } }}
            className="text-white font-sans font-bold mx-auto text-center w-full text-6xl blur-2xl"
          >
            Hello my name is Lee.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, ease: "easeInOut" },
            }}
            className="text-white font-sans font-thin mx-auto text-center w-full text-6xl absolute"
          >
            Hello my name is Lee.
          </motion.h1>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-2">
          <div  className="w-[600px] h-[400px] bg-white shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] shadow-white rounded-md backdrop-blur-md bg-opacity-20">
            <h1 className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>About me</h1>
            <h1 className='text-white font-sans font-bold mx-auto text-center w-full text-4xl mt-5 blur-lg'>About me</h1>
            <p className='text-white font-sans px-5 font-thin mx-auto text-center w-full text-2xl mt-5'>I am an aspiring web developer with a strong passion for learning and growth.<br/>
             My journey began with over four years of experience in game development, where I honed my programming skills and creative problem-solving abilities.<br/> 
             Recently, I transitioned into web development, bringing with me a solid foundation in programming and a commitment to mastering this exciting field.
             </p>
          </div>
          <div  className="w-[1250px] h-[400px] bg-white rounded-md backdrop-blur-md shadow-white shadow-[inset_0_0px_20px_rgba(0,0,0,0.6)] bg-opacity-20">
            <h1 className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>My tech stack</h1>
            <h1 className='text-white font-sans font-bold mx-auto text-center w-full text-4xl mt-5 blur-lg'>My tech stack</h1>
            <reactsvg />
          </div>
          <div  className="w-1/2 h-[500px] bg-white rounded-md backdrop-blur-md shadow-white shadow-[inset_0_0px_20px_rgba(0,0,0,0.6)] bg-opacity-20">
            <h1 className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>Task managing tool</h1>
            <h1 className='text-white font-sans font-bold mx-auto text-center w-full text-4xl mt-5 blur-lg'>Task managing tool</h1>
          </div>
          <div  className="w-[900px] h-[500px] bg-white rounded-md backdrop-blur-md shadow-white shadow-[inset_0_0px_20px_rgba(0,0,0,0.6)] bg-opacity-20">
            <h1 className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>Weather app</h1>
            <h1 className='text-white font-sans font-bold mx-auto text-center w-full text-4xl mt-5 blur-lg'>Weather app</h1>
          </div>
        </div>
        <motion.div // The div that holds the links
          initial={{ opacity: 0, width: "60px", y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            width: ["60px", "60px", "300px"],
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 1, delay: 2.5 },
            width: { delay: 3, duration: 2 },
            ease: "easeInOut",
          }}
          className="h-[60px] fixed bg-white rounded-full backdrop-blur-md bg-opacity-20 top-[850px] flex items-center justify-center space-x-9"
        >
          {links.map((link, index) => (
            <motion.a
              key={index}
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
              <motion.h1 whileHover={{ scale: 1.5}}>{link.label}</motion.h1>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default App;
