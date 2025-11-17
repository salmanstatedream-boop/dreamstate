import { motion } from 'framer-motion'
import QuickActions from './QuickActions'

export default function EmptyState({ onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-12"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="text-6xl mb-4"
      >
        🏠
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3"
      >
        Welcome to Property AI
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-slate-500 dark:text-slate-400 mb-6 text-lg"
      >
        Your smart assistant for property information, amenities, pricing, and more!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <QuickActions onSelect={onSelect} visible={true} />
      </motion.div>
    </motion.div>
  )
}

