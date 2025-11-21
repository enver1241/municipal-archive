import StatsCard from "../components/StatsCard.jsx";

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <h1 className="text-xl font-semibold text-slate-900">
        Dashboard
      </h1>
      <p className="mt-1 text-sm text-slate-600">
        Quick overview of archive activity.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <StatsCard label="Total Documents" value="1 245" />
        <StatsCard label="Uploads This Month" value="32" />
        <StatsCard label="Pending Reviews" value="5" />
      </div>
    </div>
  );
}
