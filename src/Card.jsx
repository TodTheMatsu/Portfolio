import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

function Card({ image, info, onClick, index }) {
    const [isHovered, setIsHovered] = useState(false);
    const randomRotation = (Math.random() - 0.5) * 20; // More varied rotation (-10 to 10)
    const randomDelay = Math.random() * 2; // Random floating delay
    
    // Spring configurations for different animations
    const springConfig = {
        type: "spring",
        damping: 20,
        stiffness: 100,
        mass: 0.8
    };

    const floatingAnimation = {
        y: [0, -8, 0],
        rotate: [randomRotation, randomRotation + 2, randomRotation],
        transition: {
            duration: 4 + randomDelay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: randomDelay
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            rotate: randomRotation * 2, 
            x: 200,
            scale: 0.8
        },
        visible: { 
            opacity: 1,
            rotate: randomRotation, 
            x: 0, 
            y: 0,
            scale: 1,
            transition: {
                ...springConfig,
                delay: index * 0.15,
                duration: 0.8
            }
        },
        hover: {
            rotate: 0,
            scale: 1.05,
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
            transition: {
                ...springConfig,
                duration: 0.3
            }
        },
        tap: {
            scale: 0.95,
            rotate: randomRotation * 0.5,
            transition: {
                type: "tween",
                duration: 0.1
            }
        }
    };

    const imageVariants = {
        initial: {
            scale: 1,
            filter: "brightness(1) saturate(1)"
        },
        hover: {
            scale: 1.1,
            filter: "brightness(1.1) saturate(1.2)",
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        hover: {
            opacity: 1,
            transition: {
                duration: 0.3
            }
        }
    };

return (
        <motion.button  
            data-cursor-text="VIEW" 
            data-cursor-size="130px" 
            onClick={onClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            animate={!isHovered ? floatingAnimation : "visible"}
            whileHover="hover"
            whileTap="tap"
            exit={{ 
                x: -200, 
                opacity: 0, 
                rotate: randomRotation - 20,
                scale: 0.8,
                transition: { duration: 0.4 }
            }}
            viewport={{ once: true, margin: "-50px" }}
            className='relative card bg-gradient-to-br from-white to-gray-50 lg:w-[300px] lg:h-[400px] md:w-[250px] md:h-[350px] sm:w-[150px] sm:h-[200px] w-[100px] h-[150px] rounded-2xl pointer-events-auto cursor-pointer shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100'>
            
            {/* Image with parallax effect */}
            <motion.img 
                src={image} 
                variants={imageVariants}
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                className='object-cover w-full h-full object-center rounded-2xl' 
            />
            
            {/* Hover overlay with subtle gradient */}
            <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "hidden"}
                className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-2xl"
            />
            
            {/* Subtle shine effect on hover */}
            <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={isHovered ? { x: "100%", opacity: [0, 1, 0] } : { x: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                style={{ width: "150%" }}
            />
        </motion.button>
    );
}

export default React.memo(Card);