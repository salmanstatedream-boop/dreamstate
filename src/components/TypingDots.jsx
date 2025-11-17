export default function TypingDots() {
return (
<div className="flex items-center gap-3 mb-4">
<div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-700/60 px-4 py-3 inline-flex items-center gap-3 shadow-md">
<span className="text-xs text-slate-500 dark:text-slate-400 font-medium">AI is thinking...</span>
<div className="flex gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 animate-bounce [animation-delay:-0.2s]"></span>
<span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 animate-bounce [animation-delay:0s]"></span>
<span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 dark:from-blue-500 dark:to-blue-600 animate-bounce [animation-delay:0.2s]"></span>
</div>
</div>
</div>
)
}