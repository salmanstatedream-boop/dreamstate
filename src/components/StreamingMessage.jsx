import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function StreamingMessage({ text, role = 'bot', timestamp, onComplete }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isStreaming, setIsStreaming] = useState(true)

  useEffect(() => {
    if (!text) return

    // If it's a user message, show immediately
    if (role === 'user') {
      setDisplayedText(text)
      setIsStreaming(false)
      return
    }

    // For bot messages, stream the text
    setDisplayedText('')
    setIsStreaming(true)
    let currentIndex = 0

    const streamInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(streamInterval)
        setIsStreaming(false)
        if (onComplete) onComplete()
      }
    }, 15) // Adjust speed here (lower = faster)

    return () => clearInterval(streamInterval)
  }, [text, role, onComplete])

  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className={`relative bubble ${isUser ? 'user bg-gradient-to-br from-blue-500 to-blue-600 text-white' : 'bot bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100'} rounded-3xl px-4 py-3 max-w-[85%] md:max-w-[70%] shadow-md hover:shadow-lg transition-shadow border ${isUser ? 'border-blue-600/30' : 'border-slate-200/60 dark:border-slate-700/60'}`}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-strong:font-semibold prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:font-mono prose-code:text-sm prose-a:text-blue-400 prose-a:font-semibold hover:prose-a:underline">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            skipHtml
            components={{
              p: ({ node, ...props }) => <p className="whitespace-pre-wrap leading-relaxed" {...props} />,
              a: ({ node, ...props }) => (
                <a target="_blank" rel="noopener noreferrer" {...props} />
              ),
              code: ({ node, inline, className, children, ...props }) => (
                inline ?
                  <code className={`${className || ''} font-mono text-sm`} {...props}>{children}</code> :
                  <code className={`${className || ''} block font-mono text-sm`} {...props}>{children}</code>
              ),
            }}
          >
            {displayedText || ''}
          </ReactMarkdown>
        </div>

        {isStreaming && role === 'bot' && (
          <span className="inline-block w-2 h-4 ml-1 bg-blue-500 dark:bg-blue-400 animate-pulse" />
        )}

        {timestamp && (
          <div className={`mt-2 text-[10px] font-medium ${isUser ? 'text-white/70' : 'text-slate-500 dark:text-slate-400'}`}>
            {timestamp}
          </div>
        )}
      </motion.div>
    </div>
  )
}

