// File: app/login/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Login failed");

      // Example redirect to dashboard/board
      window.location.href = "/";
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className=" min-h-[calc(100vh-120px)] bg-gradient-to-b from-white to-gray-100 px-6 py-16 dark:from-gray-900 dark:to-gray-950">
      <div className=" items-center justify-center flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Welcome back
          </h1>
          <p className="mt-3 max-w-md text-gray-600 dark:text-gray-300">
            Sign in to access your Broker Collaboration Board. Manage clients,
            track tasks and collaborate securely.
          </p>
        </div>
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-xl font-semibold">Sign in</h2>

          {error && (
            <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-300 placeholder:text-gray-400 focus:ring-2 dark:border-gray-700 dark:bg-gray-950"
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>

            <div>
              <label
                className="mb-1 block text-sm font-medium"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPwd ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pr-10 text-sm outline-none ring-indigo-300 placeholder:text-gray-400 focus:ring-2 dark:border-gray-700 dark:bg-gray-950"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute inset-y-0 right-2 my-auto rounded px-2 text-xs text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label={showPwd ? "Hide password" : "Show password"}
                >
                  {showPwd ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-indigo-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-2xl bg-indigo-600 px-4 py-2 text-white shadow-lg shadow-indigo-600/20 transition hover:brightness-110 disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            New here?{" "}
            <Link
              href="/register"
              className="font-medium text-indigo-600 hover:underline"
            >
              Create an account
            </Link>
          </p>

          {/* Optional: Socials (wire up later) */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="rounded-xl border border-gray-300 px-4 py-2 text-sm dark:border-gray-700 cursor-pointer">
              Google
            </button>
            <button className="rounded-xl border border-gray-300 px-4 py-2 text-sm dark:border-gray-700">
              Microsoft
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

// --------------------------------------------------------------
// Notes:
// 1) Add env vars in .env.local
//    MONGODB_URI=mongodb+srv://user:pass@cluster/dbname
//    MONGODB_DB_NAME=your_db_name
// 2) Ensure your users collection stores { email, passwordHash } where passwordHash is bcrypt-hashed.
//    To create a user hash: const hash = await bcrypt.hash(password, 10)
// 3) Replace the TODO with a proper auth/session approach (e.g., next-auth, lucia, or custom JWT + secure cookies).
