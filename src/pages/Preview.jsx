import { useParams, useNavigate } from "react-router-dom";
import { documents } from "../mockData.js";
import Button from "../components/Button.jsx";
import Modal from "../components/Modal.jsx";
import { useState } from "react";

export default function Preview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const doc = documents.find((d) => String(d.id) === id);

  if (!doc) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-6">
        <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">
          Document not found.
        </p>
        <Button
          className="mt-3"
          variant="secondary"
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-6">
      <button
        className="mb-4 text-sm text-blue-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Back to results
      </button>

      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h1 className="text-lg font-semibold text-slate-900">
              {doc.title}
            </h1>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              Preview
            </span>
          </div>
          <div className="flex h-64 items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
            PDF preview placeholder
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm text-sm">
            <h2 className="mb-2 font-semibold text-slate-900">
              Metadata
            </h2>
            <dl className="space-y-1">
              <div className="flex justify-between">
                <dt className="text-slate-500">Year</dt>
                <dd className="font-medium">{doc.year}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Category</dt>
                <dd className="font-medium">{doc.category}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-slate-500">Department</dt>
                <dd className="font-medium">{doc.department}</dd>
              </div>
            </dl>
          </div>
          <div className="space-y-2">
            <Button
              className="w-full"
              onClick={() => setShowModal(true)}
            >
              Download document
            </Button>
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => navigate("/search")}
            >
              New search
            </Button>
          </div>
        </aside>
      </div>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Download confirmation"
      >
        <p className="text-sm text-slate-700">
          You are about to download a public document. Do you want to
          continue?
        </p>
      </Modal>
    </div>
  );
}
