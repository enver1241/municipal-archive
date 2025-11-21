import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkBase =
    "rounded-md px-3 py-2 text-sm font-medium hover:bg-blue-50";

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 rounded bg-blue-600" />
          <span className="text-sm font-semibold text-slate-800">
            Municipal Archive System
          </span>
        </div>
        <nav className="flex gap-2">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-blue-100 text-blue-700" : "text-slate-700"
              }`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-blue-100 text-blue-700" : "text-slate-700"
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) =>
              `${linkBase} ${
                isActive ? "bg-blue-100 text-blue-700" : "text-slate-700"
              }`
            }
          >
            Search
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
