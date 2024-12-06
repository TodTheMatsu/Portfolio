import { motion } from 'framer-motion';

function Card({ image, info, onClick, index }) {
    const randomRotation = Math.random() < 0.5 ? -10 : 10;
    console.log(index)
    return (
        <>
            <motion.div  
            onClick={onClick} 
            initial={{ rotate: randomRotation, x: '-100%' }} 
            whileInView={{ rotate: randomRotation, x: 0 }} 
            transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: 'spring'
            }}
            whileHover={{ rotate: 0, scale: 1.2, transition: { duration: 0.2 } }} 
            whileTap={{ 
                scale: 1.3, 
                transition: { 
                    type: 'tween', 
                    duration: 0.1
                } 
            }} 
            className='bg-white w-[300px] h-[400px] rounded-2xl pointer-events-auto cursor-pointer shadow-2xl'>
            <motion.img src={image} className='object-cover w-full h-full object-center rounded-2xl'/>
    </motion.div>

        </>
    );
}

export default Card;
