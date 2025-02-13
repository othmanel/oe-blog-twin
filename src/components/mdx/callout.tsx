interface CalloutProps {
  children?: React.ReactNode
}

export function Callout({ children }: CalloutProps) {
  return (
    <div className="my-6 flex items-start rounded-md border border-blue-200 bg-blue-100 p-4 dark:border-blue-200/30 dark:bg-blue-900/30">
      <div className="flex-1">{children}</div>
    </div>
  )
} 