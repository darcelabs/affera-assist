import { cases } from "@/data/cases";

export default function CasesPage() {
  return (
    <main className="min-h-screen p-8 bg-slate-100">

      <h1 className="text-3xl font-bold">
        Community Cases
      </h1>

      <div className="mt-6 space-y-4">
        {cases.map((c) => (
          <div
            key={c.id}
            className="rounded-lg bg-white p-4 shadow"
          >
            <h2 className="font-semibold">
              {c.title}
            </h2>

            <p>
              Version: {c.version}
            </p>

            <p>
              Trust: {c.trust}
            </p>

            <p className="mt-2">
              {c.resolution}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}