import { motion } from 'framer-motion';

function Card({ image, info, onClick, index }) {
    const randomRotation = Math.random() < 0.5 ? -10 : 10;
    return (
        <>
            <motion.div  
            onClick={onClick} 
            initial={{ rotate: randomRotation}} 
            whileInView={{ rotate: randomRotation}} 
            transition={{ 
                delay: index * 0.1,
                duration: 0.2
            }}
            whileHover={{ rotate: 0, scale: 1.2, transition: { duration: 0.2 } }} 
            whileTap={{ 
                scale: 1.3, 
                transition: { 
                    duration: 0.1
                } 
            }} 
            className='bg-white lg:w-[300px] lg:h-[400px] md:w-[250px] md:h-[350px] sm:w-[150px] sm:h-[200px] w-[100px] h-[150px]   rounded-2xl pointer-events-auto cursor-pointer shadow-2xl'>
            <motion.img src={image} className='object-cover w-full h-full object-center rounded-2xl'/>
    </motion.div>

        </>
    );
}

export default Card;
