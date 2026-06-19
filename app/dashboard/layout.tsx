export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-[1600px] rounded-[2.5rem] ring-1 ring-white/10 shadow-2xl bg-obsidian my-8 p-6 lg:p-8">
      {children}
    </div>
  )
}
