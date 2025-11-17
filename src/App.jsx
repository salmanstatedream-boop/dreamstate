import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import StreamingMessage from './components/StreamingMessage'
import ChatInput from './components/ChatInput'
import TypingDots from './components/TypingDots'
import QuickActions from './components/QuickActions'
import PropertyCard from './components/PropertyCard'
import useChat from './hooks/useChat'
import useAutoScroll from './hooks/useAutoScroll'
import useDarkMode from './hooks/useDarkMode'
import useSmartSuggestions from './hooks/useSmartSuggestions'


export default function App() {
const { messages, sendMessage, isLoading, error } = useChat()
const listRef = useRef(null)
useAutoScroll(listRef, [messages, isLoading])
const [isDark, toggleDark] = useDarkMode()
const [currentIntent, setCurrentIntent] = useState(null)
const smartSuggestions = useSmartSuggestions(messages, currentIntent)


useEffect(() => {
// On first load, greet the user if there are no messages
if (!messages.length) {
sendMessage('', {
systemGreet: true,
})
}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


// Check if message contains property list (for PropertyCard)
const isPropertyList = (text) => {
  return text.includes('•') || text.includes('Unit') || text.match(/Unit\s+\d+/i)
}

return (
<div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors">
<Header isDark={isDark} onToggleDark={toggleDark} />

<main className="flex-1 mx-auto w-full max-w-4xl px-3 sm:px-6 lg:px-8 pb-32 sm:pb-40 md:pb-44">
<div
ref={listRef}
className="mt-4 sm:mt-8 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-3xl shadow-xl p-4 sm:p-8 h-[65vh] sm:h-[70vh] overflow-y-auto border border-slate-200/50 dark:border-slate-700/50 scroll-smooth"
>
<AnimatePresence initial={false}>
{messages.length === 0 && !isLoading && (
<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
className="text-center py-12"
>
<div className="text-5xl mb-3">🏠</div>
<h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Welcome to Property AI</h2>
<p className="text-slate-500 dark:text-slate-400">Ask me about properties, amenities, pricing, and more!</p>
<QuickActions onSelect={(question) => {
  sendMessage(question)
  setCurrentIntent('dataset_query')
}} visible={messages.length === 0} />
</motion.div>
)}
{messages.map((m) => {
  // Check if this is a property list response
  if (m.role === 'bot' && isPropertyList(m.text)) {
    // Split by bullet points or lines
    const propertyItems = m.text.split(/\n/).filter(line => line.trim().startsWith('•') || line.match(/Unit\s+\d+/i))
    
    if (propertyItems.length > 0) {
      return (
        <motion.div
          key={m.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.2 }}
        >
          {propertyItems.map((item, idx) => (
            <PropertyCard
              key={idx}
              property={item.replace(/^•\s*/, '')}
              onQuickAction={(action) => {
                sendMessage(action)
                setCurrentIntent('property_query')
              }}
            />
          ))}
        </motion.div>
      )
    }
  }
  
  return (
    <motion.div
      key={m.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <StreamingMessage 
        role={m.role} 
        text={m.text} 
        timestamp={m.timestamp}
        onComplete={() => {
          // Update intent based on response
          if (m.role === 'bot' && m.text) {
            if (m.text.includes('property') || m.text.includes('Unit')) {
              setCurrentIntent('property_query')
            } else if (m.text.includes('properties') || m.text.includes('Which')) {
              setCurrentIntent('dataset_query')
            }
          }
        }}
      />
    </motion.div>
  )
})}
</AnimatePresence>

{isLoading && (
<motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
>
<TypingDots />
</motion.div>
)}

{error && (
<motion.div
initial={{ opacity: 0, y: 10 }}
animate={{ opacity: 1, y: 0 }}
className="mt-4 text-sm text-red-700 dark:text-red-400 bg-red-50 dark:bg-red-900/30 border border-red-200/60 dark:border-red-800/60 rounded-xl p-4 shadow-sm"
>
<div className="flex items-start gap-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0 mt-0.5">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
</svg>
<span>{error}</span>
</div>
</motion.div>
)}

{!isLoading && messages.length > 0 && smartSuggestions.length > 0 && (
<QuickActions 
  onSelect={(question) => {
    sendMessage(question)
    if (question.includes('property') || question.includes('Unit')) {
      setCurrentIntent('property_query')
    } else {
      setCurrentIntent('dataset_query')
    }
  }} 
  visible={!isLoading}
  suggestions={smartSuggestions}
/>
)}
</div>
</main>

<ChatInput onSend={(message) => {
  sendMessage(message)
  // Try to detect intent from message
  if (message.toLowerCase().includes('unit') || message.toLowerCase().match(/unit\s+\d+/i)) {
    setCurrentIntent('property_query')
  } else if (message.toLowerCase().includes('which') || message.toLowerCase().includes('properties')) {
    setCurrentIntent('dataset_query')
  }
}} isDark={isDark} />
</div>
)
}