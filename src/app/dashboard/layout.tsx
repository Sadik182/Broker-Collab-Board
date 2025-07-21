import Sidebar from '@/components/Sidebar/Sidebar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 min-h-screen p-4">{children}</main>
    </div>
  )
}
