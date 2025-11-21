import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

export default function Search() {
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("idle");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      const params = new URLSearchParams();
      if (term) params.set("q", term);
      if (year) params.set("year", year);
      if (department) params.set("dept", department);
      navigate(`/results?${params.toString()}`);
    }, 500);
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <h1 className="text-xl font-semibold text-slate-900">
        Search Municipal Archive
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Public user flow: search and view public documents.
      </p>

      <form onSubmit={handleSearch} className="mt-6 space-y-4">
        <Input
          label="Search term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <Input
            label="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </div>
        <Button type="submit">
          {status === "loading" ? "Searching..." : "Search"}
        </Button>
      </form>
    </div>
  );
}
