import { motion } from 'framer-motion';

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
        <div className="w-[1000px] h-[500px] mx-auto mt-56 flex flex-col items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5 } }}
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
        <motion.div
          initial={{ opacity: 0, width: "60px", y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            width: ["60px", "60px", "600px"],
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 1, delay: 2.5 },
            width: { delay: 3, duration: 2 },
            ease: "easeInOut",
          }}
          className="w-[600px] h-[60px] fixed bg-white rounded-full backdrop-blur-md bg-opacity-20 top-[850px] flex items-center justify-center space-x-9"
        >
          {links.map((link, index) => (
        
            <motion.a
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 5 + index * 0.2, // Stagger the delays for each link
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
