import { motion } from 'framer-motion'
function Card({ image, info, onClick }) {
    const randomRotation = Math.random() < 0.5 ? -10 : 10;

    return (
        <>
        <motion.div  onClick={onClick} initial={{ rotate: randomRotation}} whileHover={{ rotate: 0, scale: 1.1}} whileTap={{scale:1.4}} className='bg-white w-[300px] h-[400px] rounded-2xl pointer-events-auto cursor-pointer shadow-2xl'>
            <motion.img src={image} className=' object-cover w-full h-full object-center rounded-2xl'>
            </motion.img>
        </motion.div>

        </>
    )
}   
export default Card