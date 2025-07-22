'use client'

import { useState } from 'react'
import Link from 'next/link'

const clientsMock = [
  { id: 1, name: 'ACME Corp' },
  { id: 2, name: 'Global Finance' },
  { id: 3, name: 'Bright Solutions' },
]

const tasksMock = [
  { id: 1, title: 'Prepare Loan Docs', status: 'To Do', broker: 'Alice', dueDate: '2025-07-25' },
  { id: 2, title: 'Review Application', status: 'In Progress', broker: 'Bob', dueDate: '2025-07-28' },
  { id: 3, title: 'Follow-up with Client', status: 'Done', broker: 'Charlie', dueDate: '2025-07-20' },
]

const statuses = ['To Do', 'In Progress', 'Done']

export default function DashboardPage() {
  const [activeClient, setActiveClient] = useState<number | null>(null)

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-100 border-r p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Clients</h2>
          <button className="bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700">
            + Add Client
          </button>
        </div>
        <ul className="space-y-2">
          {clientsMock.map(client => (
            <li
              key={client.id}
              onClick={() => setActiveClient(client.id)}
              className={`cursor-pointer p-2 rounded ${
                activeClient === client.id ? 'bg-blue-200' : 'hover:bg-gray-200'
              }`}
            >
              {client.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Task Board */}
      <div className="flex-1 p-4 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Task Board</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statuses.map(status => (
            <div key={status} className="bg-gray-100 rounded p-2">
              <h3 className="font-semibold text-center">{status}</h3>
              <div className="space-y-2 mt-2">
                {tasksMock
                  .filter(task => task.status === status)
                  .map(task => (
                    <div key={task.id} className="bg-white p-2 rounded shadow text-sm space-y-1">
                      <div className="font-bold">{task.title}</div>
                      <div className="text-gray-600">Broker: {task.broker}</div>
                      <div className="text-gray-500 text-xs">Due: {task.dueDate}</div>
                      <div className="flex space-x-2 mt-2 text-xs text-blue-600">
                        <button>View</button>
                        <button>Edit</button>
                        <button className="text-red-500">Delete</button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
