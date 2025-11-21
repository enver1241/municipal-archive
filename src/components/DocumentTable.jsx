import Button from "./Button";

export default function DocumentTable({ documents = [], onPreview }) {
  if (!documents.length) {
    return (
      <p className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
        No documents to display.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              Title
            </th>
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              Year
            </th>
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              Category
            </th>
            <th className="px-4 py-2 text-left font-semibold text-slate-700">
              Department
            </th>
            <th className="px-4 py-2 text-right font-semibold text-slate-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td className="px-4 py-2">{doc.title}</td>
              <td className="px-4 py-2">{doc.year}</td>
              <td className="px-4 py-2">{doc.category}</td>
              <td className="px-4 py-2">{doc.department}</td>
              <td className="px-4 py-2 text-right">
                <Button
                  variant="secondary"
                  onClick={() => onPreview?.(doc.id)}
                >
                  Preview
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
