'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-xl font-bold">
        <Link href="/">Broker Board</Link>
      </div>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/clients" className="hover:underline">Clients</Link>
        <Link href="/tasks" className="hover:underline">Tasks</Link>
      </div>
    </nav>
  )
}
