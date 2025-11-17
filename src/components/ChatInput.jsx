import { useState } from 'react'

export default function ChatInput({ onSend, isDark = false }) {
const [value, setValue] = useState('')
const [sending, setSending] = useState(false)

const handleSend = async () => {
const message = value.trim()
if (!message || sending) return
setSending(true)
setValue('')
try {
await onSend(message)
} finally {
setSending(false)
}
}

const handleKeyDown = (e) => {
if (e.key === 'Enter' && !e.shiftKey) {
e.preventDefault()
handleSend()
}
}

return (
<div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-white/95 dark:from-slate-900/95 via-white/90 dark:via-slate-900/90 to-transparent pt-5 pb-4 sm:pb-5 md:pb-6 border-t border-slate-200/60 dark:border-slate-700/40 backdrop-blur-xl">
<div className="mx-auto w-full max-w-4xl px-3 sm:px-4 lg:px-6">
<div className="flex items-end gap-3 bg-white/80 dark:bg-slate-800/80 rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/30 transition-all duration-300 p-3 sm:p-4 border border-slate-200/60 dark:border-slate-700/50 backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/5"
>
<textarea
className="flex-1 resize-none outline-none p-3 sm:p-4 rounded-xl h-12 sm:h-14 max-h-32 sm:max-h-40 text-sm sm:text-base bg-slate-50/80 dark:bg-slate-700/40 hover:bg-slate-100/80 dark:hover:bg-slate-600/50 focus:bg-white dark:focus:bg-slate-700/80 transition-all duration-200 placeholder-slate-400 dark:placeholder-slate-400 text-slate-900 dark:text-slate-100 border border-slate-200/50 dark:border-slate-600/30 focus:border-blue-400/50 dark:focus:border-blue-500/50 focus:ring-2 focus:ring-blue-400/20 dark:focus:ring-blue-500/20"
placeholder="Ask about properties, pricing, amenities..."
value={value}
onChange={(e) => setValue(e.target.value)}
onKeyDown={handleKeyDown}
rows={1}
/>
<button
onClick={handleSend}
disabled={sending || !value.trim()}
className="shrink-0 inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 text-white px-4 sm:px-5 h-12 sm:h-14 text-sm font-bold hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 disabled:from-slate-300 disabled:via-slate-400 disabled:to-slate-400 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 ring-2 ring-blue-400/20 disabled:ring-0"
aria-label="Send message"
>
{sending ? (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 sm:w-5 sm:h-5 animate-spin">
<circle cx="12" cy="12" r="10"/>
</svg>
) : (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
<path d="M2.94 2.94a.75.75 0 0 1 .82-.17l13.5 5.4a.75.75 0 0 1 0 1.38l-13.5 5.4a.75.75 0 0 1-1.03-.87l1.33-4.67a.75.75 0 0 1 .52-.52l7.11-2.1-7.11-2.1a.75.75 0 0 1-.52-.52L2.73 3.1a.75.75 0 0 1 .21-.16z"/>
</svg>
)}
</button>
</div>
</div>
</div>
)
}