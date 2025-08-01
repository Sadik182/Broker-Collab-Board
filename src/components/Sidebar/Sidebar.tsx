"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  LayoutDashboard,
  Users,
  CheckSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const sidebarItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Clients", href: "/clients", icon: Users },
  { label: "Tasks", href: "/tasks", icon: CheckSquare },
];

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed border-t-[3px] border-gray-200 top-16 left-0 h-screen bg-gray-800 text-white shadow-lg transition-all duration-200 z-50
        ${isOpen ? "w-64" : "w-20"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4">
        {isOpen && <span className="text-lg font-bold">Broker Board</span>}
        <button onClick={toggleSidebar} className="text-white">
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-4 flex flex-col space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Tooltip.Provider key={item.href} delayDuration={0}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Link
                    href={item.href}
                    className={`group flex items-center px-4 py-2 rounded transition-all
                    hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""}`}
                  >
                    <Icon className="h-5 w-5" />
                    {isOpen && (
                      <span className="ml-3 text-sm">{item.label}</span>
                    )}
                  </Link>
                </Tooltip.Trigger>

                {!isOpen && (
                  <Tooltip.Portal>
                    <Tooltip.Content
                      className="bg-black text-white text-xs px-2 py-1 rounded shadow-md"
                      side="right"
                      align="center"
                    >
                      {item.label}
                      <Tooltip.Arrow className="fill-black" />
                    </Tooltip.Content>
                  </Tooltip.Portal>
                )}
              </Tooltip.Root>
            </Tooltip.Provider>
          );
        })}
      </nav>
    </div>
  );
}
