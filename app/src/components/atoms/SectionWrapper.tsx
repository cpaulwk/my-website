export default function SectionWrapper({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="relative h-full w-full p-16">
      {children}
    </div>
  )
}
