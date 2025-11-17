import { useState, useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function StreamingMessage({ text, role = 'bot', timestamp, onComplete, isNewMessage = false, onRetry }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)

  useEffect(() => {
    if (!text) return

    // Show full text immediately for both user and bot messages.
    // This removes the typing/streaming animation so replies appear instantly.
    setDisplayedText(text)
    setIsStreaming(false)
    if (onComplete) onComplete()
  }, [text, role, onComplete, isNewMessage])

  const isUser = role === 'user'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedText || text || '')
    } catch (e) {
      console.warn('Copy failed', e)
    }
  }

  const handleRetry = () => {
    if (onRetry) onRetry()
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} w-full mb-1`}>
      <div
        className={`relative ${isUser ? 'user bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20' : 'bot bg-gradient-to-br from-white to-slate-50/80 dark:from-slate-800/90 dark:to-slate-900/90 text-slate-800 dark:text-slate-100 shadow-md shadow-slate-200/50 dark:shadow-black/20'} rounded-2xl sm:rounded-3xl px-5 sm:px-6 py-3.5 sm:py-4 max-w-[85%] sm:max-w-[75%] md:max-w-[70%] border ${isUser ? 'border-blue-400/30 ring-1 ring-blue-300/20' : 'border-slate-200/60 dark:border-slate-700/40 ring-1 ring-slate-100/50 dark:ring-slate-800/50'} break-words backdrop-blur-sm transition-all duration-200 hover:shadow-lg`}
      >
        {/* Action buttons: copy, retry */}
        <div className="absolute top-2 right-3 flex gap-2 z-10">
          <button onClick={handleCopy} title="Copy message" aria-label="Copy message" className="p-1 rounded-md bg-white/60 dark:bg-slate-800/60 hover:bg-white/80">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-600 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </button>
          {onRetry && (
            <button onClick={handleRetry} title="Regenerate / Retry" aria-label="Retry message" className="p-1 rounded-md bg-white/60 dark:bg-slate-800/60 hover:bg-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-slate-600 dark:text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 12a9 9 0 1 1-3.4-7.1" />
                <polyline points="21 3 21 9 15 9" />
              </svg>
            </button>
          )}
        </div>
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

