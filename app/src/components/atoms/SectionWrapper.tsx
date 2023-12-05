export default function SectionWrapper({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full w-full m-16">
      {children}
    </div>
  )
}
