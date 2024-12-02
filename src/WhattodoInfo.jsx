import {motion} from 'framer-motion'
function WhattodoInfo({onClick}) {
    return (
        <motion.div onClick={onClick} className='w-full h-full bg-black bg-opacity-50 backdrop-blur-md absolute'>
        </motion.div>
    )
}

export default WhattodoInfo