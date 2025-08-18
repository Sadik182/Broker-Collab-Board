"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/30 via-sky-400/20 to-purple-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-rose-400/20 to-orange-400/20 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="px-6 pt-20 pb-12 md:px-10 md:pt-24 lg:pt-28">
        <div className="mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Broker Collaboration Board
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Manage clients, coordinate tasks, and close deals faster — all in
            one clean, collaborative workspace.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/board"
              className="rounded-2xl bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Open Board
            </Link>
            <Link
              href="/clients"
              className="rounded-2xl border border-gray-300 bg-white/70 px-5 py-3 text-gray-900 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-100"
            >
              View Clients
            </Link>
          </motion.div>

          {/* Trust bar / logos (placeholder) */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 opacity-80">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Trusted by teams like
            </span>
            <div className="flex items-center gap-6 grayscale">
              <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-12 md:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Active Clients", value: "128" },
            { label: "Open Tasks", value: "342" },
            { label: "Avg. Cycle Time", value: "2.3d" },
            { label: "Close Rate", value: "68%" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-gray-200 bg-white/70 p-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60"
            >
              <div className="text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature grid */}
      <section className="px-6 pb-16 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Kanban for Brokers",
              desc: "Drag tasks across stages with due dates, assignees, and quick actions.",
            },
            {
              title: "Client 360°",
              desc: "See conversations, documents, and recent activity in one profile.",
            },
            {
              title: "Smart Reminders",
              desc: "Never miss a follow‑up with timezone‑aware alerts and SLA nudges.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm transition hover:shadow-lg dark:border-gray-800 dark:bg-gray-900/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                {/* Simple sparkle icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-indigo-600"
                >
                  <path d="M12 2l2.2 5.6L20 10l-5.8 2.4L12 18l-2.2-5.6L4 10l5.8-2.4L12 2z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {f.desc}
              </p>
              <div className="mt-4 h-1 w-0 rounded bg-indigo-600 transition-all group-hover:w-16" />
            </div>
          ))}
        </div>
      </section>

      {/* Live preview: board + clients */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {/* Clients preview */}
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-semibold">Clients</h4>
              <Link
                href="/clients"
                className="rounded-xl bg-gray-900 px-3 py-1 text-xs text-white transition hover:opacity-90 dark:bg-white dark:text-gray-900"
              >
                + Add Client
              </Link>
            </div>
            <ul className="space-y-2 text-sm">
              {[
                "Acme Realty",
                "Blue Sky Homes",
                "Crescent Brokers",
                "Delta Estates",
              ].map((c) => (
                <li
                  key={c}
                  className="flex items-center justify-between rounded-xl border border-gray-200 bg-white px-3 py-2 dark:border-gray-800 dark:bg-gray-800"
                >
                  <span>{c}</span>
                  <span className="text-xs text-gray-500">4 tasks</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kanban preview */}
          <div className="md:col-span-2 rounded-2xl border border-gray-200 bg-white/70 p-4 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
            <div className="grid grid-cols-3 gap-3 text-sm">
              {["To Do", "In Progress", "Done"].map((col, i) => (
                <div
                  key={col}
                  className="rounded-xl bg-gray-50 p-3 dark:bg-gray-800/60"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-semibold">{col}</span>
                    <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs dark:bg-gray-700">
                      {i === 0 ? 3 : i === 1 ? 2 : 1}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {[1, 2].map((idx) => (
                      <div
                        key={`${col}-${idx}`}
                        className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900"
                      >
                        <div className="font-medium">Follow up with lead</div>
                        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                          <span>Broker: Jane</span>
                          <span>Due: Fri</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent activity */}
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur dark:border-gray-800 dark:bg-gray-900/60">
            <h4 className="text-base font-semibold">Recent Activity</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "You assigned ‘Inspection – 12 King St’ to Alex.",
                "Blue Sky Homes moved ‘Contract Review’ to In Progress.",
                "Reminder set for ‘Follow-up: Acme Realty’.",
              ].map((a, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-indigo-500" />
                  <span className="text-gray-700 dark:text-gray-300">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Banner */}
          <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-indigo-600 to-violet-600 p-6 text-white shadow-lg">
            <h4 className="text-xl font-semibold">
              Ready to streamline your deals?
            </h4>
            <p className="mt-2 text-sm opacity-90">
              Create your first workflow, invite your team, and start tracking
              progress in minutes.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="/board"
                className="rounded-2xl bg-white/95 px-4 py-2 text-sm font-medium text-indigo-700 shadow transition hover:bg-white"
              >
                Create a Board
              </Link>
              <Link
                href="/settings/onboarding"
                className="rounded-2xl bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/20"
              >
                Quick Setup
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-12 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400 md:flex-row">
          <p>© {new Date().getFullYear()} Broker Collaboration Board</p>
          <nav className="flex gap-4">
            <Link href="/privacy" className="hover:underline">
              Privacy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms
            </Link>
            <Link href="/support" className="hover:underline">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}
