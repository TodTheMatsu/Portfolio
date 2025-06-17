import { motion } from 'framer-motion';

const BlogPost = ({ post, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white/10 backdrop-blur-md rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-white text-4xl font-thin">{post.title}</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={onClose}
            className="text-white text-2xl font-thin hover:text-gray-300"
          >
            ×
          </motion.button>
        </div>
        <div className="text-gray-300 font-thin mb-6">
          <span className="text-gray-400">{post.date}</span>
        </div>
        <div className="text-white font-thin text-lg leading-relaxed whitespace-pre-wrap">
          {post.content}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost; 