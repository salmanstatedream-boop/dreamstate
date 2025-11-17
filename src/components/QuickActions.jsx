import { motion } from 'framer-motion'

const DEFAULT_QUESTIONS = [
  "Which properties have pools?",
  "Show me properties under $200",
  "Which property is a mansion?",
  "What's the highest-rated property?",
  "Properties with 3 bedrooms?",
  "Which properties sleep 8+ guests?",
]

export default function QuickActions({ onSelect, visible = true, suggestions = null }) {
  if (!visible) return null

  const questions = suggestions || DEFAULT_QUESTIONS

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mb-6"
    >
      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3 px-1 whitespace-nowrap">
        {suggestions ? "You might also want to know:" : "Try asking:"}
      </p>
      <div className="flex flex-wrap gap-2">
        {questions.slice(0, 6).map((question, idx) => (
          <motion.button
            key={idx}
            onClick={() => onSelect(question)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm font-medium bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all shadow-sm hover:shadow-md break-words max-w-full"
            style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
          >
            <span className="block">{question}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

