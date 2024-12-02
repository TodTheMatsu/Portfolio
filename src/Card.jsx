import { motion } from 'framer-motion'
function Card({image}) {
    const randomRotation = Math.random() * 20 - 10
    return (
        <motion.div initial={{ rotate: randomRotation}} whileHover={{ rotate: 0, scale: 1.1}} whileTap={{scale:1.2}} className='bg-white w-[300px] h-[400px] rounded-2xl pointer-events-auto cursor-pointer'>
            <motion.img src={image} className=' object-cover w-full h-full object-center rounded-2xl'>

            </motion.img>
        </motion.div>
    )
}   
export default Card