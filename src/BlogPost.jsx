import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const BlogPost = ({ post, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white/5 backdrop-blur-2xl rounded-2xl p-0 max-w-4xl w-full max-h-[90vh] overflow-hidden border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-start p-8 pb-6 border-b border-white/10">
          <div className="flex-1 pr-4">
            <h1 className="text-white text-4xl font-light leading-tight mb-3">{post.title}</h1>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white/40 rounded-full"></div>
              <span className="text-gray-300 font-light text-sm tracking-wide">{post.date}</span>
            </div>
          </div>
          <motion.button
            onClick={onClose}
            className="text-white/60 hover:text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 transition-all duration-200"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close post"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-8">
          <div className="text-white/90 font-light text-lg leading-relaxed prose prose-invert prose-headings:text-white prose-headings:font-light prose-h1:text-3xl prose-h1:mb-6 prose-h2:text-2xl prose-h2:mb-5 prose-h3:text-xl prose-h3:mb-4 prose-p:mb-6 prose-p:leading-relaxed prose-strong:text-white prose-strong:font-normal prose-code:text-green-300 prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg prose-blockquote:border-l-4 prose-blockquote:border-white/20 prose-blockquote:pl-6 prose-blockquote:italic prose-ul:space-y-2 prose-ol:space-y-2 prose-li:text-white/80 max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 bg-white/[0.02]">
          <motion.button
            onClick={onClose}
            className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-200"
            whileHover={{ x: -5 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-light">Back to Blog</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogPost;