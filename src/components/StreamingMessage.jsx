import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function StreamingMessage({ text, role = 'bot', timestamp, onComplete, isNewMessage = false }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isStreaming, setIsStreaming] = useState(true)
  const hasStreamedRef = useRef(false)

  useEffect(() => {
    if (!text) return

    // If it's a user message, show immediately
    if (role === 'user') {
      setDisplayedText(text)
      setIsStreaming(false)
      return
    }

    // Only stream if this is a new message and hasn't been streamed yet
    if (!isNewMessage || hasStreamedRef.current) {
      setDisplayedText(text)
      setIsStreaming(false)
      return
    }

    // For bot messages, stream the text only once
    setDisplayedText('')
    setIsStreaming(true)
    hasStreamedRef.current = true
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
  }, [text, role, onComplete, isNewMessage])

  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full`}>
      <div
        className={`relative ${isUser ? 'user bg-gradient-to-br from-blue-500 to-blue-600 text-white' : 'bot bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 text-slate-800 dark:text-slate-100'} rounded-2xl sm:rounded-3xl px-4 sm:px-5 py-3 sm:py-3.5 max-w-[85%] sm:max-w-[75%] md:max-w-[70%] shadow-sm border ${isUser ? 'border-blue-600/20' : 'border-slate-200/50 dark:border-slate-700/50'} break-words`}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1.5 prose-p:leading-relaxed prose-strong:font-semibold prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-xs prose-a:text-blue-500 prose-a:font-medium hover:prose-a:underline">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            skipHtml
            components={{
              p: ({ node, ...props }) => <p className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base" {...props} />,
              a: ({ node, ...props }) => (
                <a target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300" {...props} />
              ),
              code: ({ node, inline, className, children, ...props }) => (
                inline ?
                  <code className={`${className || ''} font-mono text-xs bg-slate-100 dark:bg-slate-700 px-1 py-0.5 rounded`} {...props}>{children}</code> :
                  <code className={`${className || ''} block font-mono text-xs`} {...props}>{children}</code>
              ),
            }}
          >
            {displayedText || ''}
          </ReactMarkdown>
        </div>

        {isStreaming && role === 'bot' && (
          <span className="inline-block w-1.5 h-4 ml-1.5 bg-blue-500 dark:bg-blue-400 animate-pulse rounded-sm" />
        )}

        {timestamp && (
          <div className={`mt-2 text-[10px] font-medium ${isUser ? 'text-white/60' : 'text-slate-400 dark:text-slate-500'}`}>
            {timestamp}
          </div>
        )}
      </div>
    </div>
  )
}

