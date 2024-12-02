import { delay, motion, useScroll} from 'framer-motion';
import { useEffect, useRef } from 'react';
import whattodo from './assets/whattodo.png';
import Card from './Card';
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
    }
      
    }
  }

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

  return (
    <>
      <div className="bg-black h-[400vh] w-full absolute flex flex-col items-center overflow-x-hidden">
      <motion.iframe initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1, delay:3.5 } }} viewport={{ once: true }} className='absolute' src='https://my.spline.design/untitled-6cc2c57f8acbfdc379efb69648446138/' frameBorder='0' width='100%' height='100%'></motion.iframe>
        <div className="w-[1000px] h-[500px] mx-auto my-56 flex flex-col items-center justify-center">
          <motion.h1>
            {greetText.split("").map((char, index) => (
              <motion.span className="text-white font-sans font-bold mx-auto text-center w-full text-6xl blur-2xl" 
              initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.05 + 1.5, duration: 1 } }} key={index}>{char}</motion.span>
            ))}
          </motion.h1>
          <motion.h1 className='absolute'>
            {greetText.split("").map((char, index) => (
              <motion.span  className="text-white font-sans font-thin mx-auto text-center w-full text-6xl"
              initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: index * 0.05 + 1.5, duration: 1 } }} key={index}>{char}</motion.span>
            ))}
          </motion.h1>
        </div>
        <motion.div variants={bentoContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-2 h-screen pointer-events-none w-full flex flex-wrap items-center justify-center gap-2">
          <motion.div variants={bentosVar}  className="w-[600px] h-[400px] bg-white  rounded-md backdrop-blur-md bg-opacity-20">
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>About me</motion.h1>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-bold mx-auto text-center w-full text-4xl mt-5 blur-lg'>About me</motion.h1>
            <p className='text-white font-sans px-5 font-thin mx-auto text-center w-full text-2xl mt-5'>
              {aboutMe.split("").map((word, index) => (  
                <motion.span
                key = {index}
                initial={{ opacity: 0, y:200 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.005+1.5, ease: "easeOut", duration: 1 } }}
                viewport={{ once: true }}
                className='text-white font-sans font-thin mx-auto text-center w-full text-2xl'>{word}</motion.span> // Wrap each word in a motion.span
              ))}
             </p>
          </motion.div>
          <motion.div variants={bentosVar} className="w-[1250px] h-[400px] flex-grow bg-white bg-gradient-to-r rounded-md backdrop-blur-md bg-opacity-20">
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>My tech stack</motion.h1>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-bold mx-auto text-center w-full text-4xl mt-5 blur-lg'>My tech stack</motion.h1>
            <motion.div variants={imgParentVariants} viewport={{ once: true }} initial="hidden" whileInView="visible" className='w-full flex-row justify-center items-center flex h-[300px]'>
              <motion.svg variants={ImgVariants}  className='w-[150px] h-[150px] fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9.861a2.139 2.139 0 1 0 0 4.278 2.139 2.139 0 1 0 0-4.278zm-5.992 6.394-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zm12.675 7.305-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zm9.589 20.362c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zm5.984.628c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
              </motion.svg>
              <motion.svg variants={ImgVariants} className='w-[150px] h-[150px] fill-white' viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path d="m7.5.5.3685-.3379a.5.5 0 0 0-.7371 0L7.5.5Zm0 13-.3932.3089a.4998.4998 0 0 0 .7863 0L7.5 13.5ZM4.6229 9.8382l-.3932.3089.3932-.3089Zm.2458-6.4677L4.5 3.0326l.3686.3379Zm5.2626 0 .3685-.3379-.3685.3379Zm.2458 6.4677.3931.3089-.3931-.3089ZM8 15V.5H7V15h1Zm-.1069-1.8089-2.877-3.6618-.7864.6178 2.8771 3.6618.7863-.6178ZM5.2373 3.7084 7.8685.8379 7.1315.162 4.5001 3.0326l.7372.6758ZM7.1314.8379l2.6313 2.8705.7371-.6758L7.8685.1621 7.1315.838Zm2.8525 8.6914-2.877 3.6618.7862.6178 2.8771-3.6618-.7863-.6178Zm-.2212-5.821c1.489 1.6245 1.5827 4.0883.2212 5.821l.7863.6178c1.664-2.1178 1.5496-5.129-.2704-7.1145l-.7371.6758ZM5.016 9.5294c-1.3614-1.7327-1.2678-4.1965.2213-5.821L4.5 3.0327c-1.82 1.9854-1.9344 4.9967-.2704 7.1145l.7863-.6178Z"/>
              </motion.svg>
              <motion.svg variants={ImgVariants}  className='w-[150px] h-[150px] fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                <path d="M7.5 3C5.6333 3 4.4667 4 4 6c.7-1 1.5167-1.375 2.45-1.125.5325.1426.9131.5565 1.3344 1.0147C8.4707 6.6361 9.2651 7.5 11 7.5c1.8667 0 3.0333-1 3.5-3-.7 1-1.5167 1.375-2.45 1.125-.5325-.1426-.9131-.5566-1.3344-1.0148C10.0293 3.864 9.2349 3 7.5 3ZM4 7.5c-1.8667 0-3.0333 1-3.5 3 .7-1 1.5167-1.375 2.45-1.125.5325.1426.9131.5565 1.3344 1.0147C4.9707 11.1361 5.7651 12 7.5 12c1.8667 0 3.0333-1 3.5-3-.7 1-1.5167 1.375-2.45 1.125-.5325-.1427-.9131-.5566-1.3344-1.0148C6.5293 8.3638 5.7349 7.5 4 7.5Z" />
              </motion.svg>
              <motion.svg variants={ImgVariants} className='w-[150px] h-[150px] fill-white' viewBox="0 0 24 24">
                <path d="M14 11.25c0-.9665.7835-1.75 1.75-1.75h1.5c.4142 0 .75.33579.75.75 0 .4142-.3358.75-.75.75h-1.5c-.1381 0-.25.1119-.25.25v1.5c0 .1381.1119.25.25.25h.5c.9665 0 1.75.7835 1.75 1.75v1.5c0 .9665-.7835 1.75-1.75 1.75h-1.5c-.4142 0-.75-.3358-.75-.75s.3358-.75.75-.75h1.5c.1381 0 .25-.1119.25-.25v-1.5c0-.1381-.1119-.25-.25-.25h-.5c-.9665 0-1.75-.7835-1.75-1.75v-1.5ZM12.75 10.25c0-.41421-.3358-.75-.75-.75s-.75.33579-.75.75v6c0 .1381-.1119.25-.25.25H9.75c-.41421 0-.75.3358-.75.75s.33579.75.75.75H11c.9665 0 1.75-.7835 1.75-1.75v-6Z"/>
                <path d="M3 6.25v11.5C3 19.5449 4.45507 21 6.25 21h11.5c1.7949 0 3.25-1.4551 3.25-3.25V6.25C21 4.45507 19.5449 3 17.75 3H6.25C4.45507 3 3 4.45507 3 6.25ZM6.25 4.5h11.5c.9665 0 1.75.7835 1.75 1.75v11.5c0 .9665-.7835 1.75-1.75 1.75H6.25c-.9665 0-1.75-.7835-1.75-1.75V6.25c0-.9665.7835-1.75 1.75-1.75Z" />
              </motion.svg>
              <motion.svg variants={ImgVariants} className='w-[150px] h-[150px] fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m.38 10.377-.272-.037c-.048.344-.082.695-.101 1.041l.275.016c.018-.34.051-.682.098-1.02zm3.756-7.088-.184-.205c-.258.232-.509.48-.746.734l.202.188c.231-.248.476-.49.728-.717zm1.633-1.23-.146-.235c-.296.186-.586.385-.863.594l.166.219c.27-.203.554-.399.843-.578zm-3.945 16.31c.185.297.384.586.593.863l.22-.164c-.205-.271-.399-.555-.58-.844l-.233.145zm-.697-1.967-.255.104c.129.318.274.635.431.943l.005.01.245-.125-.005-.01c-.153-.301-.295-.611-.421-.922zM.298 9.309l.269.063c.076-.332.168-.664.272-.986l-.261-.087c-.108.332-.202.672-.28 1.01zM.274 12.42l-.275.01c.012.348.04.699.083 1.043l.273-.033c-.042-.336-.069-.68-.081-1.02zm-.018 2.086c.073.34.162.682.264 1.014l.263-.08c-.1-.326-.187-.658-.258-.99l-.269.056zM11.573.275 11.563 0c-.348.012-.699.039-1.044.082l.034.273c.338-.041.68-.068 1.02-.08zm11.648 8.291c.1.326.186.66.256.992l.27-.059c-.072-.34-.16-.682-.262-1.014l-.264.081zm-5.6-7.177c-.309-.164-.627-.314-.947-.449l-.107.252c.314.133.625.281.926.439l.128-.242zM15.693.572c-.332-.105-.67-.199-1.01-.277l-.063.268c.332.076.664.168.988.273l.085-.264zm-9.019.973c.298-.15.606-.291.916-.418L7.486.873c-.317.127-.632.272-.937.428l-.015.008.125.244.015-.008zm17.053 10.043.275-.01a11.797 11.797 0 0 0-.082-1.045l-.273.033c.041.338.068.682.08 1.022zM13.654.105c-.346-.047-.696-.08-1.043-.098l-.014.273c.339.018.683.051 1.019.098l.038-.273zm-4.11.422-.058-.27c-.34.072-.681.16-1.014.264l.081.262c.325-.099.659-.185.991-.256zM1.921 5.469l.231.15c.185-.285.384-.566.592-.834l-.217-.17c-.213.276-.417.563-.606.854zM.943 7.318l.253.107c.132-.313.28-.625.439-.924l-.243-.128c-.163.307-.314.625-.449.945zm17.28 14.625.145.234c.295-.186.586-.385.863-.594l-.164-.219c-.272.204-.557.4-.844.579zm3.025-2.724.217.17c.215-.273.418-.561.607-.854l-.23-.148c-.186.285-.385.564-.594.832zm-1.393 1.496.184.203c.258-.23.51-.479.746-.732l-.201-.188c-.23.248-.477.488-.729.717zm2.504-3.211.244.129c.162-.307.314-.625.449-.945l-.254-.107a11.27 11.27 0 0 1-.439.923zm1.258-3.875.273.039c.049-.346.082-.695.102-1.043l-.275-.014c-.018.338-.051.682-.1 1.018zm-.461 1.992.264.086c.107-.332.201-.67.279-1.01l-.268-.063c-.077.333-.169.665-.275.987zm-.703-8.949c.154.303.297.617.424.932l.256-.104c-.131-.322-.277-.643-.436-.953l-.244.125zM8.296 23.418c.331.107.67.201 1.009.279l.062-.268c-.331-.076-.663-.168-.986-.273l-.085.262zm2.039.471c.345.049.696.082 1.043.102l.014-.275c-.339-.018-.682-.051-1.019-.098l-.038.271zm6.991-1.44c-.303.154-.613.297-.926.424l.104.256c.318-.131.639-.275.947-.434l.004-.002-.123-.246-.006.002zm-12.713-.982c.274.213.562.418.854.605l.149-.23c-.285-.184-.565-.385-.833-.592l-.17.217zm7.804 2.258.009.275c.348-.014.699-.041 1.045-.084l-.035-.271c-.336.041-.68.068-1.019.08zM6.37 22.604c.307.162.625.314.946.449l.107-.254c-.313-.133-.624-.279-.924-.439l-.129.244zm-3.287-2.563c.233.258.48.51.734.746l.188-.201c-.249-.23-.49-.477-.717-.729l-.205.184zm11.362 3.434.059.27c.34-.074.68-.162 1.014-.266l-.082-.262c-.325.099-.659.185-.991.258zM21.18.129a2.689 2.689 0 1 0 0 5.378 2.689 2.689 0 1 0 0-5.378zm-5.856 15.318c0 .471.314.66.852.66.67 0 1.297-.396 1.297-1.016v-.645c-.23.107-.379.141-1.107.24-.735.109-1.042.306-1.042.761zM12 2.818c-5.07 0-9.18 4.109-9.18 9.18 0 5.068 4.11 9.18 9.18 9.18 5.07 0 9.18-4.111 9.18-9.18 0-5.07-4.11-9.18-9.18-9.18zm-2.487 13.77H5.771v-6.023h.769v5.346h2.974v.677zm4.13 0h-.619v-.67c-.405.57-.811.793-1.446.793-.843 0-1.38-.463-1.38-1.182v-3.271h.686v3c0 .52.347.85.893.85.719 0 1.181-.578 1.181-1.461v-2.389h.686v4.33zm-.53-8.393c0-1.484 1.205-2.689 2.689-2.689s2.688 1.205 2.688 2.689-1.203 2.688-2.688 2.688-2.689-1.203-2.689-2.688zm5.567 7.856v.52c-.223.059-.33.074-.471.074-.34 0-.637-.238-.711-.57-.381.406-.918.637-1.471.637-.877 0-1.422-.463-1.422-1.248 0-.527.256-.916.76-1.123.266-.107.414-.141 1.389-.264.545-.066.719-.191.719-.48v-.182c0-.412-.348-.645-.967-.645-.645 0-.957.24-1.016.77h-.693c.041-1 .686-1.404 1.734-1.404 1.066 0 1.627.412 1.627 1.182v2.412c0 .215.133.338.373.338.041-.002.074-.002.149-.017z"/>
              </motion.svg>
              <motion.svg variants={ImgVariants} className='w-[150px] h-[150px] fill-white'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 490">
                <path d="M255.908 485.999c-6.116 0-12.323-1.642-17.708-4.746l-56.319-33.316c-8.397-4.747-4.29-6.389-1.551-7.303 11.226-3.925 13.508-4.745 25.465-11.592 1.279-.729 2.922-.457 4.199.366l43.266 25.648c1.552.912 3.741.912 5.202 0l168.592-97.304c1.553-.913 2.555-2.738 2.555-4.563V158.583c0-1.917-1.002-3.651-2.645-4.654L258.463 56.716c-1.551-.913-3.65-.913-5.202 0L84.852 154.019c-1.644.913-2.647 2.738-2.647 4.655v194.515c0 1.825 1.003 3.65 2.647 4.473l46.188 26.653c25.102 12.504 40.436-2.191 40.436-17.068V175.195c0-2.738 2.19-4.837 4.93-4.837h21.359c2.647 0 4.928 2.099 4.928 4.837v192.143c0 33.407-18.256 52.576-49.928 52.576-9.768 0-17.435 0-38.794-10.588l-44.179-25.467c-10.954-6.299-17.708-18.074-17.708-30.76V158.583c0-12.596 6.754-24.462 17.708-30.76L238.2 30.519c10.679-6.024 24.828-6.024 35.416 0l168.594 97.394c10.953 6.298 17.707 18.073 17.707 30.761v194.515c0 12.596-6.754 24.371-17.707 30.761l-168.594 97.303c-5.386 3.104-11.503 4.746-17.708 4.746zm136.098-191.775c0-36.421-24.646-46.096-76.4-52.941-52.396-6.938-57.689-10.498-57.689-22.729 0-10.131 4.473-23.641 43.266-23.641 34.596 0 47.375 7.485 52.668 30.853.457 2.19 2.467 3.833 4.746 3.833h21.91c1.367 0 2.645-.547 3.559-1.552.914-1.003 1.369-2.373 1.275-3.743-3.375-40.252-30.121-58.965-84.158-58.965-48.103 0-76.764 20.264-76.764 54.311 0 36.876 28.569 47.101 74.664 51.662 55.225 5.387 59.514 13.511 59.514 24.373 0 18.805-15.15 26.835-50.658 26.835-44.635 0-54.403-11.227-57.689-33.406-.365-2.373-2.374-4.107-4.837-4.107h-21.817c-2.738 0-4.836 2.191-4.836 4.836 0 28.39 15.426 62.254 89.271 62.254 53.305-.092 83.975-21.181 83.975-57.873z"/>
              </motion.svg>
            </motion.div>
          </motion.div>
          <motion.div variants={bentosVar} className="flex-grow h-full bg-white rounded-md backdrop-blur-md bg-opacity-20">
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-thin mx-auto text-center w-full text-4xl mt-5 absolute'>My projects</motion.h1>
            <motion.h1 variants={smallGlowingLabels} initial="hidden" whileInView="visible" viewport={{ once: true }} className='text-white font-sans font-bold mx-auto text-center w-full text-4xl mt-5 blur-lg'>My projects</motion.h1>
            <motion.div className='w-full justify-center items-center  flex flex-grow h-full'>
              <Card image={whattodo}/>
            </motion.div>
          </motion.div>
        </motion.div>
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
