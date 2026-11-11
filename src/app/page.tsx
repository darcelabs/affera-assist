"use client";

import { useState } from "react";
import { issues } from "@/data/issues";

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = issues.filter(
    (issue) =>
      issue.title.toLowerCase().includes(search.toLowerCase()) ||
      issue.id.toLowerCase().includes(search.toLowerCase()) ||
      issue.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">
          Affera Assist
        </h1>

        <p className="mb-6 mt-2 text-slate-600">
          Internal Troubleshooting Knowledge Platform
        </p>

        <input
          className="w-full rounded-lg border p-3"
          placeholder="Search issue, symptom, or error code..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="mt-6 space-y-3">
          {filtered.map((issue) => (
            <div
              key={issue.id}
              className="rounded-lg border bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">
                  {issue.id} - {issue.title}
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm">
                  {issue.trust}
                </span>
              </div>

              <div className="mt-2 text-sm text-slate-600">
                {issue.category}
              </div>

              <p className="mt-2">
                {issue.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}