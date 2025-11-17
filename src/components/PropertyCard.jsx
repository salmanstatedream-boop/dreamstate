import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'

export default function PropertyCard({ property, onQuickAction }) {
  // Extract property details from markdown or structured data
  const extractPropertyInfo = (text) => {
    const unitMatch = text.match(/Unit\s+(\d+)/i)
    const titleMatch = text.match(/–\s*(.+?)(?:\s*\(|$)/)
    const priceMatch = text.match(/\$(\d+)/)
    const ratingMatch = text.match(/(\d+\.?\d*)\s*(?:star|rating)/i)
    
    return {
      unit: unitMatch?.[1] || '',
      title: titleMatch?.[1]?.trim() || '',
      price: priceMatch?.[1] || '',
      rating: ratingMatch?.[1] || '',
    }
  }

  const info = extractPropertyInfo(property)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-4 p-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          {info.unit && (
            <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg mb-2">
              Unit {info.unit}
            </span>
          )}
          {info.title && (
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-2">
              {info.title}
            </h3>
          )}
        </div>
        {info.rating && (
          <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
            <span className="text-yellow-600 dark:text-yellow-400">⭐</span>
            <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
              {info.rating}
            </span>
          </div>
        )}
      </div>

      {info.price && (
        <div className="mb-3">
          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ${info.price}
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400 ml-1">/night</span>
        </div>
      )}

      <div className="prose prose-sm dark:prose-invert max-w-none mb-3">
        <ReactMarkdown>{property}</ReactMarkdown>
      </div>

      {onQuickAction && (
        <div className="flex gap-2 mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
          <button
            onClick={() => onQuickAction(`What's the WiFi password at ${info.unit ? `Unit ${info.unit}` : info.title}?`)}
            className="flex-1 px-3 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-colors"
          >
            📶 WiFi Info
          </button>
          <button
            onClick={() => onQuickAction(`Does ${info.unit ? `Unit ${info.unit}` : info.title} have parking?`)}
            className="flex-1 px-3 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-colors"
          >
            🚗 Parking
          </button>
          <button
            onClick={() => onQuickAction(`Tell me more about ${info.unit ? `Unit ${info.unit}` : info.title}`)}
            className="flex-1 px-3 py-2 text-xs font-medium bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-lg transition-colors"
          >
            ℹ️ Details
          </button>
        </div>
      )}
    </motion.div>
  )
}

