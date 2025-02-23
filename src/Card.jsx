import { motion } from 'framer-motion';
import { useState } from 'react';

function Card({ image, info, onClick, index }) {
    const randomRotation = Math.random() < 0.5 ? -10 : 10;
    
    return (
        <motion.button  data-cursor-text="VIEW" data-cursor-size="130px"
            onClick={onClick} 
            initial={{ opacity: 0, rotate: randomRotation, x: '100%' }} 
            whileInView={{ rotate: randomRotation, x: 0, opacity: 1,
                transition: {
                    delay: index * 0.1,
                    duration: 1,
                    type: 'spring'
                }
            }} 
            exit={{ x: '-100%', opacity: 0 }}
            whileHover={{ rotate: 0, scale: 1.2, transition: { duration: 0.2 } }} 
            whileTap={{ 
                scale: 1.3, 
                transition: { 
                    type: 'tween', 
                    duration: 0.1
                } 
            }} 
            className='relative card  bg-white lg:w-[300px] lg:h-[400px] md:w-[250px] md:h-[350px] sm:w-[150px] sm:h-[200px] w-[100px] h-[150px] rounded-2xl pointer-events-auto cursor-pointer shadow-2xl overflow-hidden'>
            <motion.img src={image} className='object-cover w-full h-full object-center rounded-2xl' />
        </motion.button>
    );
}

export default Card;