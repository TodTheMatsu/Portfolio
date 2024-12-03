import {motion} from 'framer-motion'
function WhattodoInfo({onClick}) {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClick} className='w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md flex-col flex justify-center items-center fixed'>
            <motion.div className='w-full h-full flex justify-center overflow-auto py-28 space-x-5 px-20 scroll-smooth '>
                <motion.div className='w-1/2 h-[2000px] bg-white bg-opacity-20 rounded-2xl flex flex-col justify-center items-center backdrop-blur-md'>
                </motion.div>
                <motion.div className='w-[200px] right-[15%] bg-white bg-opacity-20 rounded-3xl flex flex-col gap-5 py-5 justify-center items-center fixed backdrop-blur-md '>
                    <motion.h1 className='text-white font-sans font-thin mx-auto text-center w-full text-2xl cursor-pointer'>Introduction</motion.h1>
                    <motion.h1 className='text-white font-sans font-thin mx-auto text-center w-full text-2xl cursor-pointer'>Usage</motion.h1>
                    <motion.h1 className='text-white font-sans font-thin mx-auto text-center w-full text-2xl cursor-pointer'>Functions</motion.h1>
                </motion.div>
            </motion.div>
        </motion.div>
        
    )
}

export default WhattodoInfo