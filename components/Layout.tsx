import { Link, NavLink } from "react-router-dom";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold text-indigo-700">
            Interactive Data Illusions
          </Link>
          <nav className="text-sm flex gap-4">
            <NavLink
              to="/simpson"
              className={({ isActive }) =>
                isActive ? "font-semibold text-indigo-700" : "hover:underline"
              }
            >
              Simpson’s Paradox
            </NavLink>
            <NavLink
              to="/lln"
              className={({ isActive }) =>
                isActive ? "font-semibold text-indigo-700" : "hover:underline"
              }
            >
              Law of Large Numbers
            </NavLink>
            <NavLink
              to="/spurious"
              className={({ isActive }) =>
                isActive ? "font-semibold text-indigo-700" : "hover:underline"
              }
            >
              Spurious Correlations
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "font-semibold text-indigo-700" : "hover:underline"
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>

      <footer className="border-t mt-10 text-xs text-gray-500 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-3">
          Built with React, D3, and Tailwind. Learn by poking holes in bad stats.
        </div>
      </footer>
    </div>
  );
}
