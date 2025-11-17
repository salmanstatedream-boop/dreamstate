export default function TypingDots() {
  return (
    <div className="flex items-center">
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200/60 dark:border-slate-700/60 px-4 sm:px-5 py-3 sm:py-3.5 inline-flex items-center gap-3 shadow-sm">
        <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">AI is thinking...</span>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-bounce [animation-delay:-0.2s]"></span>
          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-bounce [animation-delay:0s]"></span>
          <span className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-bounce [animation-delay:0.2s]"></span>
        </div>
      </div>
    </div>
  )
}