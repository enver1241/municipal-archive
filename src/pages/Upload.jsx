import { useState } from "react";
import Input from "../components/Input.jsx";
import Button from "../components/Button.jsx";

export default function Upload() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [department, setDepartment] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    if (!title) newErrors.title = "Title is required.";
    if (!year) newErrors.year = "Year is required.";
    if (!category) newErrors.category = "Category is required.";
    if (!department) newErrors.department = "Department is required.";
    if (!file) newErrors.file = "File is required.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setStatus("loading");
    setTimeout(() => {
      if (file.type.includes("pdf") || file.type.includes("image")) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 800);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <h1 className="text-xl font-semibold text-slate-900">
        Upload New Document
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Provide metadata and attach the file. This is the archivist core flow.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          error={errors.title}
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Year"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            error={errors.year}
          />
          <Input
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            error={errors.category}
          />
        </div>
        <Input
          label="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          error={errors.department}
        />
        <div className="space-y-1">
          <label className="block text-sm font-medium text-slate-700">
            File
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0] ?? null)}
            className="block w-full text-sm text-slate-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-3 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700"
          />
          {errors.file && (
            <p className="text-xs text-red-600">{errors.file}</p>
          )}
        </div>

        {status === "success" && (
          <p className="rounded-md bg-green-50 p-3 text-sm text-green-700">
            Document successfully uploaded and indexed.
          </p>
        )}
        {status === "error" && (
          <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">
            Upload failed. Please provide a valid PDF or image file.
          </p>
        )}
        {status === "loading" && (
          <p className="text-sm text-slate-600">
            Uploading and processing document...
          </p>
        )}

        <div className="flex gap-3">
          <Button type="submit">
            {status === "loading" ? "Uploading..." : "Upload Document"}
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setTitle("");
              setYear("");
              setCategory("");
              setDepartment("");
              setFile(null);
              setErrors({});
              setStatus("idle");
            }}
          >
            Clear
          </Button>
        </div>
      </form>
    </div>
  );
}
