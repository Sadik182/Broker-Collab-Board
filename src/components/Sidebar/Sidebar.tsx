'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className={`h-screen ${isOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300`}>
      <div className="flex items-center justify-between p-4">
        <span className="font-bold text-lg">Broker Board</span>
        <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>
      <nav className="flex flex-col p-2 space-y-2">
        <Link href="/dashboard" className="hover:bg-gray-700 rounded p-2">
          🏠 Dashboard
        </Link>
        <Link href="/clients" className="hover:bg-gray-700 rounded p-2">
          👥 Clients
        </Link>
        <Link href="/tasks" className="hover:bg-gray-700 rounded p-2">
          ✅ Tasks
        </Link>
      </nav>
    </div>
  )
}
