"use client";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const sidebarWidth = isSidebarOpen ? "16rem" : "5rem"; // Open and closed widths

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      {/* Main Content Area */}
      <div
        className="flex-1 flex flex-col"
        style={{
          marginLeft: sidebarWidth, // Dynamically adjust margin based on sidebar state
        }}
      >
        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="p-4 flex-1 overflow-auto bg-gray-200 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
