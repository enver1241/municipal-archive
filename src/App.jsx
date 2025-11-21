import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Upload from "./pages/Upload.jsx";
import Search from "./pages/Search.jsx";
import Results from "./pages/Results.jsx";
import Preview from "./pages/Preview.jsx";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/search" element={<Search />} />
          <Route path="/results" element={<Results />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route
            path="*"
            element={
              <div className="px-4 py-8 text-center text-sm text-slate-600">
                Page not found.
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-3 text-xs text-slate-500">
          © Municipal IT Department — Demo UI for Web Systems Lab 3
        </div>
      </footer>
    </div>
  );
}
