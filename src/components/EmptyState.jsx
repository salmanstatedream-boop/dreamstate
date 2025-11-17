import QuickActions from './QuickActions'

export default function EmptyState({ onSelect }) {
  return (
    <div className="text-center py-8 sm:py-12 px-2">
      <div className="text-5xl sm:text-6xl mb-4">
        🏠
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3 px-4">
        Welcome to Property AI
      </h2>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-8 px-4 max-w-2xl mx-auto leading-relaxed">
        Your smart assistant for property information, amenities, pricing, and more!
      </p>
      <div className="px-2">
        <QuickActions onSelect={onSelect} visible={true} suggestions={null} />
      </div>
    </div>
  )
}

