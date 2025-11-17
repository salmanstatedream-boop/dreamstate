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
<div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-white dark:from-slate-900 via-white/98 dark:via-slate-900/98 to-transparent pt-4 pb-3 sm:pb-4 md:pb-6 border-t border-slate-200/50 dark:border-slate-700/50">
<div className="mx-auto w-full max-w-4xl px-3 sm:px-4 lg:px-6">
<div className="flex items-end gap-2 bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-2 sm:p-3 border border-slate-200/80 dark:border-slate-700/80 backdrop-blur-sm"
>
<textarea
className="flex-1 resize-none outline-none p-2.5 sm:p-3 rounded-lg h-11 sm:h-12 max-h-32 sm:max-h-40 text-sm sm:text-base bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-600/50 focus:bg-white dark:focus:bg-slate-700 transition-colors placeholder-slate-400 dark:placeholder-slate-400 text-slate-900 dark:text-slate-100"
placeholder="Ask about properties, pricing, amenities..."
value={value}
onChange={(e) => setValue(e.target.value)}
onKeyDown={handleKeyDown}
rows={1}
/>
<button
onClick={handleSend}
disabled={sending || !value.trim()}
className="shrink-0 inline-flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 sm:px-4 h-11 sm:h-12 text-sm font-semibold hover:from-blue-600 hover:to-blue-700 disabled:from-slate-300 disabled:to-slate-400 disabled:cursor-not-allowed transition-all active:scale-95 shadow-sm hover:shadow-md"
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