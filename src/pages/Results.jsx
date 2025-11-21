import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { documents } from "../mockData.js";
import DocumentTable from "../components/DocumentTable.jsx";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const term = params.get("q")?.toLowerCase() || "";
  const year = params.get("year") || "";
  const dept = params.get("dept")?.toLowerCase() || "";

  const filtered = useMemo(() => {
    return documents.filter((doc) => {
      const matchesTerm =
        !term ||
        doc.title.toLowerCase().includes(term) ||
        doc.category.toLowerCase().includes(term);
      const matchesYear = !year || String(doc.year) === year;
      const matchesDept =
        !dept || doc.department.toLowerCase().includes(dept);
      return matchesTerm && matchesYear && matchesDept;
    });
  }, [term, year, dept]);

  const emptyState =
    !filtered.length && (term || year || dept)
      ? "No documents match your search."
      : !filtered.length
      ? "No documents available yet."
      : "";

  return (
    <div className="mx-auto max-w-5xl px-4 py-6">
      <h1 className="text-xl font-semibold text-slate-900">
        Search Results
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Showing documents for your query.
      </p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <div>
          Term: <span className="font-medium">{term || "–"}</span> | Year:{" "}
          <span className="font-medium">{year || "–"}</span> | Department:{" "}
          <span className="font-medium">{dept || "–"}</span>
        </div>
        <button
          className="text-blue-600 hover:underline"
          onClick={() => navigate("/search")}
        >
          Modify search
        </button>
      </div>

      <div className="mt-4">
        {emptyState ? (
          <p className="rounded-md bg-yellow-50 p-3 text-sm text-yellow-800">
            {emptyState}
          </p>
        ) : (
          <DocumentTable
            documents={filtered}
            onPreview={(id) => navigate(`/preview/${id}`)}
          />
        )}
      </div>
    </div>
  );
}
