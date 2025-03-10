// External dependencies
import { AnimatePresence, delay, motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';

// Local components
import Assistant from './Assistant';
import Card from './Card';
import Howistheweather from './Howistheweather';
import WhattodoInfo from './WhattodoInfo';
import Empirehound from './Empirehound';
import ProjectRTS from './ProjectRTS';

// Assets
import assistant from './assets/assistant.png';
import howistheweather from './assets/howistheweather.png';
import whattodo from './assets/whattodo.png';
import empirehounds from './assets/empirehounds.png';
import projectrts from './assets/projectrts.png';

function App() {
  const links = [
    {
      href: "https://github.com/TodTheMatsu",
      label: "Github",
      svg: "M4.0744 2.9938c.05823-1.03009.30429-1.47803 1.00992-1.83774.75925-.387161 1.95674-.206988 3.36582.50655.60692.30748.66872.31374 1.73236.17737 1.4138-.18133 3.2339-.18069 4.5388.00166.9868.1379 1.0516.13101 1.66-.17711 2.0001-1.012851 3.5792-.94658 4.151.17417.2854.55942.3384 2.01101.1171 3.20825-.1227.66374-.1097.74661.1859 1.18217 2.0797 3.06473.5812 8.03248-2.9825 9.88638-.2727.1419-.5025.2297-.6898.3012-.5751.2196-.7497.2863-.5383 1.2971.1018.4862.2244 1.695.2726 2.6864.0871 1.792.0858 1.8045-.2285 2.1701-.4278.4973-1.0444.5057-1.4622.0199-.2725-.3168-.2991-.4664-.2991-1.6887 0-1.8063-.198-3.0069-.6658-4.0357-.5563-1.2243-.1439-1.6808 1.1283-1.9544 1.7683-.3804 3.1494-1.4717 3.9192-3.0968.7319-1.5448.8422-3.67959-.481-4.97792-.3763-.44718-.4025-.85222-.1338-2.07359.1004-.45649.1846-1.04541.1871-1.30884.0038-.41602-.0341-.47884-.2896-.47884-.1617 0-.7795.23521-1.3727.52264l-.9468.4589c-.0861.04171-.1824.05775-.2774.04685-2.4075-.27634-4.6951-.28061-7.11438.00108-.09536.0111-.19209-.00494-.27847-.04686l-.9463-.4592c-.59326-.28795-1.21103-.52341-1.37268-.52341-.37376 0-.37938.27594-.0387 1.91537.20811 1.00125.34815 1.22435-.25346 2.02494-.90176 1.20004-1.12701 2.6902-.64344 4.25588.60947 1.973 2.10193 3.3059 4.20016 3.7506 1.26487.2681 1.59547.6179 1.11247 2.0683-.3802 1.1414-.6206 1.4356-1.17313 1.4356-.74342 0-1.20911-.644-.95283-1.3179.11288-.297.0793-.3287-.61713-.5827-2.12594-.7751-3.75197-2.5124-4.49539-4.8032-.57461-1.77046-.32178-4.07491.60003-5.46777.31386-.47425.31872-.51447.17225-1.42236-.08287-.51395-.12769-1.34114-.0996-1.83837Zm-.74237 12.9516c-.30635-.4595-.92722-.5837-1.38675-.2773-.45952.3063-.5837.9272-.27735 1.3867.22617.3393.49674.618.72651.8477.04236.0424.08352.0833.12371.1232.19247.1912.36241.36.53309.5604.37751.4431.75412 1.0399.96816 2.1101.09534.4767.43799.7335.62785.8457.2059.1216.43087.1933.616.24.37871.0955.83844.1451 1.27474.174.47896.0318.99793.0421 1.462.0449.00034.5519.44792.9993.99999.9993.55229 0 1-.4477 1-1v-1c0-.5523-.44771-1-1-1-.09427 0-.19626.0003-.30429.0007-.58686.0018-1.35181.0041-2.02551-.0405-.32487-.0215-.59193-.052-.78777-.0893-.30158-1.1839-.78879-1.9716-1.30868-2.5819-.22982-.2697-.4678-.5057-.66137-.6977-.03624-.0359-.07092-.0703-.10371-.1031-.22335-.2233-.36945-.3821-.47662-.5429Z",
    },
    {
      href: "https://www.linkedin.com/in/ph%C3%BAc-l%C3%AA-4591ab323/",
      label: "Linkedin",
      svg: "M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z",
    },
    {
      href: "https://x.com/LeeLeembp",
      label: "Twitter",
      svg: "M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958   C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013   L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z",
    }
  ];

  const boxDesign = 'backdrop-blur-md'
  const aboutMe = "I am an aspiring web developer with a strong passion for learning and growth. My journey began with over four years of experience in game development, where I honed my programming skills and creative problem-solving abilities. Recently, I transitioned into web development, bringing with me a solid foundation in programming and a commitment to mastering this exciting field."

  const greetText = "Hello my name is Lee."

  const ImgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
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
        ease: "easeOut",
      },
    },
  };

  const bentoContainer = {
    hidden: { transition: { when: "afterChildren" } },
    visible: { transition: {
      when: "beforeChildren",
      delayChildren: .1,
      staggerChildren: .3,
      },
    },
  };

  const bentosVar = {
    hidden: {x:1500 },
    visible: {
      x:0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }
  
  const imgParentVariants = {
    hidden: {
     },
    visible: {
      transition: {
        when: "beforeChildren",
        delayChildren: 1.5,
        staggerChildren: .2,
      },
    }
  }
  const webProjects = [
    {id:1, image: whattodo, info: <WhattodoInfo onClick={() => handleCardClick(1)} />},
    {id:2, image: howistheweather, info: <Howistheweather onClick={() => handleCardClick(2)} />},
    {id:3, image: assistant, info: <Assistant onClick={() => handleCardClick(3)} />}
  ]
  const gameProjects = [
    {id:4, image: empirehounds, info: <Empirehound onClick={() => handleCardClick(4)} />},
    {id:5, image: projectrts, info: <ProjectRTS onClick={() => handleCardClick(5)} />},
  ]
  const allProjects = [...webProjects, ...gameProjects];
  const [activeTab, setActiveTab] = useState('web');
  const [activeCardId, setActiveCardId] = useState(null);

  const handleCardClick = (id) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  const tabs = [
    { key: 'web', label: 'Websites' },
    { key: 'game', label: 'Games' }
  ];

  return (
    <>
      <div 
       className={`bg-gray-950 h-screen w-full absolute flex flex-col items-center overflow-x-hidden  ${activeCardId ? "overflow-hidden" : ""}`}>
        
      <div className={`pb-20 flex-grow w-full absolute flex flex-col items-center overflow-x-hidden ${activeCardId ? "overflow-hidden" : ""}`}>
        <div className="w-full h-[105vh] mx-auto flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
          className='w-[50vw] h-[5vh] bg-white absolute rounded-full blur-[25vh]' />

          <motion.h1>
            {greetText.split("").map((char, index) => (
              <motion.span className="text-white font-sans font-thin mx-auto text-center w-full text-6xl blur-lg" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1, transition: { delay: index * 0.05 + 1.5, duration: 1 } }} key={index}>{char}</motion.span>
            ))}
          </motion.h1>
          <motion.h1 className='absolute'>
            {greetText.split("").map((char, index) => (
              <motion.span  className="text-white font-sans font-thin mx-auto text-center w-full text-6xl"
              initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.05 + 1.5, duration: 1 } }} key={index}>{char}</motion.span>
            ))}
          </motion.h1>
        </div>
        <motion.div variants={bentoContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-4 pointer-events-none w-full flex flex-wrap items-center justify-center gap-2">
          <motion.div variants={bentosVar}  className="xl:w-[31.25%] lg:w-full h-[400px] backdrop-blur-md pb-2 flex-grow">
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>About me</motion.h1>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 blur-lg'>About me</motion.h1>
            <p className='text-white font-sans px-5 font-thin mx-auto text-center w-full text-2xl mt-5 flex-grow'>
              {aboutMe.split("").map((word, index) => (  
                <motion.span
                key = {index}
                initial={{ opacity: 0, y:200 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.005+1.5, ease: "easeOut", duration: 1 } }}
                viewport={{ once: true }}
                className='text-white font-sans font-thin mx-auto text-center 2xl:text-2xl xl:text-lg md:text-2xl xs:text-lg'>{word}</motion.span>
              ))}
             </p>
          </motion.div>
          <motion.div variants={bentosVar} className={`xl:max-w-[68%]  sm:w-full lg:max-w-[100%] h-[400px] flex-grow ${boxDesign}`}>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>My tech stack</motion.h1>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 blur-lg'>My tech stack</motion.h1>
            <motion.div variants={imgParentVariants} viewport={{ once: true }} initial="hidden" whileInView="visible" className='w-full flex-row justify-center items-center flex h-[300px]'>
              <motion.svg variants={ImgVariants}  className='w-[15%] h-auto fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 1 0 0-4.278zm-5.992 6.394-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zm12.675 7.305-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
              </motion.svg>
              <motion.svg variants={ImgVariants} className='w-[15%] h-auto fill-white' viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path d="m7.5.5.3685-.3379a.5.5 0 0 0-.7371 0L7.5.5Zm0 13-.3932.3089a.4998.4998 0 0 0 .7863 0L7.5 13.5ZM4.6229 9.8382l-.3932.3089.3932-.3089Zm.2458-6.4677L4.5 3.0326l.3686.3379Zm5.2626 0 .3685-.3379-.3685.3379Zm.2458 6.4677.3931.3089-.3931-.3089ZM8 15V.5H7V15h1Zm-.1069-1.8089-2.877-3.6618-.7864.6178 2.8771 3.6618.7863-.6178ZM5.2373 3.7084 7.8685.8379 7.1315.162 4.5001 3.0326l.7372.6758ZM7.1314.8379l2.6313 2.8705.7371-.6758L7.8685.1621 7.1315.838Zm2.8525 8.6914-2.877 3.6618.7862.6178 2.8771-3.6618-.7863-.6178Zm-.2212-5.821c1.489 1.6245 1.5827 4.0883.2212 5.821l.7863.6178c1.664-2.1178 1.5496-5.129-.2704-7.1145l-.7371.6758ZM5.016 9.5294c-1.3614-1.7327-1.2678-4.1965.2213-5.821L4.5 3.0327c-1.82 1.9854-1.9344 4.9967-.2704 7.1145l.7863-.6178Z"/>
              </motion.svg>
              <motion.svg variants={ImgVariants}  className='w-[15%] h-auto fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                <path d="M7.5 3C5.6333 3 4.4667 4 4 6c.7-1 1.5167-1.375 2.45-1.125.5325.1426.9131.5565 1.3344 1.0147C8.4707 6.6361 9.2651 7.5 11 7.5c1.8667 0 3.0333-1 3.5-3-.7 1-1.5167 1.375-2.45 1.125-.5325-.1426-.9131-.5566-1.3344-1.0148C10.0293 3.864 9.2349 3 7.5 3ZM4 7.5c-1.8667 0-3.0333 1-3.5 3 .7-1 1.5167-1.375 2.45-1.125.5325.1426.9131.5565 1.3344 1.0147C4.9707 11.1361 5.7651 12 7.5 12c1.8667 0 3.0333-1 3.5-3-.7 1-1.5167 1.375-2.45 1.125-.5325-.1427-.9131-.5566-1.3344-1.0148C6.5293 8.3638 5.7349 7.5 4 7.5Z" />
              </motion.svg>
              <motion.svg variants={ImgVariants} className='w-[15%] h-auto fill-white' viewBox="0 0 24 24">
                <path d="M14 11.25c0-.9665.7835-1.75 1.75-1.75h1.5c.4142 0 .75.33579.75.75 0 .4142-.3358.75-.75.75h-1.5c-.1381 0-.25.1119-.25.25v1.5c0 .1381.1119.25.25.25h.5c.9665 0 1.75.7835 1.75 1.75v1.5c0 .9665-.7835 1.75-1.75 1.75h-1.5c-.4142 0-.75-.3358-.75-.75s.3358-.75.75-.75h1.5c.1381 0 .25-.1119.25-.25v-1.5c0-.1381-.1119-.25-.25-.25h-.5c-.9665 0-1.75-.7835-1.75-1.75v-1.5ZM12.75 10.25c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v6c0 .1381-.1119.25-.25.25H9.75c-.41421 0-.75.3358-.75.75s.33579.75.75.75H11c.9665 0 1.75-.7835 1.75-1.75v-6Z"/>
                <path d="M3 6.25v11.5C3 19.5449 4.45507 21 6.25 21h11.5c1.7949 0 3.25-1.4551 3.25-3.25V6.25C21 4.45507 19.5449 3 17.75 3H6.25C4.45507 3 3 4.45507 3 6.25ZM6.25 4.5h11.5c.9665 0 1.75.7835 1.75 1.75v11.5c0 .9665-.7835 1.75-1.75 1.75H6.25c-.9665 0-1.75-.7835-1.75-1.75V6.25c0-.9665.7835-1.75 1.75-1.75Z" />
              </motion.svg>
              <motion.svg variants={ImgVariants} className='w-[15%] h-auto fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m.38 10.377-.272-.037c-.048.344-.082.695-.101 1.041l.275.016c.018-.34.051-.682.098-1.02zm3.756-7.088-.184-.205c-.258.232-.509.48-.746.734l.202.188c.231-.248.476-.49.728-.717zm1.633-1.23-.146-.235c-.296.186-.586.385-.863.594l.166.219c.27-.203.554-.399.843-.578zm-3.945 16.31c.185.297.384.586.593.863l.22-.164c-.205-.271-.399-.555-.58-.844l-.233.145zm-.697-1.967-.255.104c.129.318.274.635.431.943l.005.01.245-.125-.005-.01c-.153-.301-.295-.611-.421-.922zM.298 9.309l.269.063c.076-.332.168-.664.272-.986l-.261-.087c-.108.332-.202.672-.28 1.01zM.274 12.42l-.275.01c.012.348.04.699.083 1.043l.273-.033c-.042-.336-.069-.68-.081-1.02zm-.018 2.086c.073.34.162.682.264 1.014l.263-.08c-.1-.326-.187-.658-.258-.99l-.269.056zM11.573.275 11.563 0c-.348.012-.699.039-1.044.082l.034.273c.338-.041.68-.068 1.02-.08zm11.648 8.291c.1.326.186.66.256.992l.27-.059c-.072-.34-.16-.682-.262-1.014l-.264.081zm-5.6-7.177c-.309-.164-.627-.314-.947-.449l-.107.252c.314.133.625.281.926.439l.128-.242zM15.693.572c-.332-.105-.67-.199-1.01-.277l-.063.268c.332.076.664.168.988.273l.085-.264zm-9.019.973c.298-.15.606-.291.916-.418L7.486.873c-.317.127-.632.272-.937.428l-.015.008.125.244.015-.008zm17.053 10.043.275-.01a11.797 11.797 0 0 0-.082-1.045l-.273.033c.041.338.068.682.08 1.022zM13.654.105c-.346-.047-.696-.08-1.043-.098l-.014.273c.339.018.683.051 1.019.098l.038-.273zm-4.11.422-.058-.27c-.34.072-.681.16-1.014.264l.081.262c.325-.099.659-.185.991-.256zM1.921 5.469l.231.15c.185-.285.384-.566.592-.834l-.217-.17c-.213.276-.417.563-.606.854zM.943 7.318l.253.107c.132-.313.28-.625.439-.924l-.243-.128c-.163.307-.314.625-.449.945zm17.28 14.625.145.234c.295-.186.586-.385.863-.594l-.164-.219c-.272.204-.557.4-.844.579zm3.025-2.724.217.17c.215-.273.418-.561.607-.854l-.23-.148c-.186.285-.385.564-.594.832zm-1.393 1.496.184.203c.258-.23.51-.479.746-.732l-.201-.188c-.23.248-.477.488-.729.717zm2.504-3.211.244.129c.162-.307.314-.625.449-.945l-.254-.107a11.27 11.27 0 0 1-.439.923zm1.258-3.875.273.039c.049-.346.082-.695.102-1.043l-.275-.014c-.018.338-.051.682-.1 1.018zm-.461 1.992.264.086c.107-.332.201-.67.279-1.01l-.268-.063c-.077.333-.169.665-.275.987zm-.703-8.949c.154.303.297.617.424.932l.256-.104c-.131-.322-.277-.643-.436-.953l-.244.125zM8.296 23.418c.331.107.67.201 1.009.279l.062-.268c-.331-.076-.663-.168-.986-.273l-.085.262zm2.039.471c.345.049.696.082 1.043.102l.014-.275c-.339-.018-.682-.051-1.019-.098l-.038.271zm6.991-1.44c-.303.154-.613.297-.926.424l.104.256c.318-.131.639-.275.947-.434l.004-.002-.123-.246-.006.002zm-12.713-.982c.274.213.562.418.854.605l.149-.23c-.285-.184-.565-.385-.833-.592l-.17.217zm7.804 2.258.009.275c.348-.014.699-.041 1.045-.084l-.035-.271c-.336.041-.68.068-1.019.08zM6.37 22.604c.307.162.625.314.946.449l.107-.254c-.313-.133-.624-.279-.924-.439l-.129.244zm-3.287-2.563c.233.258.48.51.734.746l.188-.201c-.249-.23-.49-.477-.717-.729l-.205.184zm11.362 3.434.059.27c.34-.074.68-.162 1.014-.266l-.082-.262c-.325.099-.659.185-.991.258zM21.18.129a2.689 2.689 0 1 0 0 5.378 2.689 2.689 0 1 0 0-5.378zm-5.856 15.318c0 .471.314.66.852.66.67 0 1.297-.396 1.297-1.016v-.645c-.23.107-.379.141-1.107.24-.735.109-1.042.306-1.042.761zM12 2.818c-5.07 0-9.18 4.109-9.18 9.18 0 5.068 4.11 9.18 9.18 9.18 5.07 0 9.18-4.111 9.18-9.18 0-5.07-4.11-9.18-9.18-9.18zm-2.487 13.77H5.771v-6.023h.769v5.346h2.974v.677zm4.13 0h-.619v-.67c-.405.57-.811.793-1.446.793-.843 0-1.38-.463-1.38-1.182v-3.271h.686v3c0 .52.347.85.893.85.719 0 1.181-.578 1.181-1.461v-2.389h.686v4.33zm-.53-8.393c0-1.484 1.205-2.689 2.689-2.689s2.688 1.205 2.688 2.689-1.203 2.688-2.688 2.688-2.689-1.203-2.689-2.688zm5.567 7.856v.52c-.223.059-.33.074-.471.074-.34 0-.637-.238-.711-.57-.381.406-.918.637-1.471.637-.877 0-1.422-.463-1.422-1.248 0-.527.256-.916.76-1.123.266-.107.414-.141 1.389-.264.545-.066.719-.191.719-.48v-.182c0-.412-.348-.645-.967-.645-.645 0-.957.24-1.016.77h-.693c.041-1 .686-1.404 1.734-1.404 1.066 0 1.627.412 1.627 1.182v2.412c0 .215.133.338.373.338.041-.002.074-.002.149-.017z"/>
              </motion.svg>
              <motion.svg variants={ImgVariants} className='w-[15%] h-auto fill-white'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 490">
                <path d="M255.908 485.999c-6.116 0-12.323-1.642-17.708-4.746l-56.319-33.316c-8.397-4.747-4.29-6.389-1.551-7.303 11.226-3.925 13.508-4.745 25.465-11.592 1.279-.729 2.922-.457 4.199.366l43.266 25.648c1.552.912 3.741.912 5.202 0l168.592-97.304c1.553-.913 2.555-2.738 2.555-4.563V158.583c0-1.917-1.002-3.651-2.645-4.654L258.463 56.716c-1.551-.913-3.65-.913-5.202 0L84.852 154.019c-1.644.913-2.647 2.738-2.647 4.655v194.515c0 1.825 1.003 3.65 2.647 4.473l46.188 26.653c25.102 12.504 40.436-2.191 40.436-17.068V175.195c0-2.738 2.19-4.837 4.93-4.837h21.359c2.647 0 4.928 2.099 4.928 4.837v192.143c0 33.407-18.256 52.576-49.928 52.576-9.768 0-17.435 0-38.794-10.588l-44.179-25.467c-10.954-6.299-17.708-18.074-17.708-30.76V158.583c0-12.596 6.754-24.462 17.708-30.76L238.2 30.519c10.679-6.024 24.828-6.024 35.416 0l168.594 97.394c10.953 6.298 17.707 18.073 17.707 30.761v194.515c0 12.596-6.754 24.371-17.707 30.761l-168.594 97.303c-5.386 3.104-11.503 4.746-17.708 4.746zm136.098-191.775c0-36.421-24.646-46.096-76.4-52.941-52.396-6.938-57.689-10.498-57.689-22.729 0-10.131 4.473-23.641 43.266-23.641 34.596 0 47.375 7.485 52.668 30.853.457 2.19 2.467 3.833 4.746 3.833h21.91c1.367 0 2.645-.547 3.559-1.552.914-1.003 1.369-2.373 1.275-3.743-3.375-40.252-30.121-58.965-84.158-58.965-48.103 0-76.764 20.264-76.764 54.311 0 36.876 28.569 47.101 74.664 51.662 55.225 5.387 59.514 13.511 59.514 24.373 0 18.805-15.15 26.835-50.658 26.835-44.635 0-54.403-11.227-57.689-33.406-.365-2.373-2.374-4.107-4.837-4.107h-21.817c-2.738 0-4.836 2.191-4.836 4.836 0 28.39 15.426 62.254 89.271 62.254 53.305-.092 83.975-21.181 83.975-57.873z"/>
              </motion.svg>
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
        <motion.div className='w-full justify-center items-center  flex flex-grow h-auto py-20'>
          <div  className="flex flex-wrap justify-center gap-4 p-4">
            {activeTab === 'web' &&
              webProjects.map(({ id, image, info }, index) => (
                <Card key={id} image={image} info={info} onClick={() => handleCardClick(id)} index={index}/>))}
            {activeTab === 'game' &&
              gameProjects.map(({ id, image, info }, index)=> (
                <Card key={id} image={image} info={info} onClick={() => handleCardClick(id)} index={index}/>))}
          </div>
        </motion.div>
        </motion.div>
        </motion.div>
        <AnimatePresence>
        {activeCardId && allProjects.find(project => project.id === activeCardId)?.info}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, width: "60px", y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            width: ["60px", "60px", "200px"],
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 1, delay: 2.5 },
            width: { delay: 3, duration: 2 },
            ease: "easeInOut",
          }}
          className="h-[60px] fixed bg-white rounded-full backdrop-blur-md bg-opacity-20 top-[90%] flex items-center justify-center space-x-5"
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
      <Cursor isGelly={true}  cursorInnerColor='#000000' cursorBackgrounColor='#ffffff'  sizeAnimationEase='easeInOut'  />
    </>
  );
}

export default App;
