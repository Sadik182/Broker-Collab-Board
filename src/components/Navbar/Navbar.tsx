"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <div>
            <Link href="/" className="text-xl font-bold text-gray-800">
              Broker Board
            </Link>
          </div>

          {/* Right - Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Dashboard
            </Link>
            <Link
              href="/clients"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Clients
            </Link>
            <Link
              href="/tasks"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Tasks
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pb-3 space-y-1">
          <Link
            href="/dashboard"
            className="block px-3 py-2 hover:bg-gray-100 rounded"
          >
            Dashboard
          </Link>
          <Link
            href="/clients"
            className="block px-3 py-2 hover:bg-gray-100 rounded"
          >
            Clients
          </Link>
          <Link
            href="/tasks"
            className="block px-3 py-2 hover:bg-gray-100 rounded"
          >
            Tasks
          </Link>
          <Link
            href="/login"
            className="block px-3 py-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
