import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

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
          <button
            onClick={onClose}
            className="text-white text-7xl font-bold hover:text-red-400 w-12 h-12 flex items-center justify-center"
            aria-label="Close post"
          >
            ×
          </button>
        </div>
        <div className="text-gray-300 font-thin mb-6">
          <span className="text-gray-400">{post.date}</span>
        </div>
        <div className="text-white font-thin text-lg leading-relaxed prose prose-invert prose-headings:text-white prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;