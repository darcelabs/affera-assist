"use client";

import Link from "next/link";
import { useState } from "react";
import { issues } from "@/data/issues";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredIssues = issues.filter((issue) =>
    [
      issue.id,
      issue.title,
      issue.category,
      issue.summary,
      ...issue.symptoms,
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-4xl font-bold text-slate-900">
          Affera Assist
        </h1>

        <p className="mt-2 text-slate-600">
          Internal troubleshooting and knowledge platform
        </p>

        <div className="mt-4 flex gap-3">
          <Link
            href="/cases"
            className="rounded bg-slate-800 px-4 py-2 text-white hover:bg-slate-700"
          >
            Community Cases
          </Link>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Ask Affera Assist
          </h2>

          <textarea
            rows={5}
            className="w-full rounded-lg border border-slate-300 p-3"
            placeholder="Example: Generator offline after startup. Rebooted CIU already. Running Prism 2.4."
          />

          <div className="mt-4 flex gap-4">
            <select className="rounded-lg border border-slate-300 p-2">
              <option>Prism 2.4</option>
              <option>Prism 2.3</option>
              <option>Prism 1</option>
            </select>

            <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
              Ask Affera Assist
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Search Knowledge Base
          </h2>

          <input
            type="text"
            placeholder="Search issue, symptom, category, or error code..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-slate-300 p-3"
          />
        </div>

        <div className="mt-8">
          <h2 className="mb-4 text-xl font-semibold">
            Knowledge Base Issues ({filteredIssues.length})
          </h2>

          <div className="space-y-4">
            {filteredIssues.map((issue) => (
              <Link
                key={issue.id}
                href={`/issues/${issue.id}`}
                className="block rounded-xl border bg-white p-5 shadow transition hover:border-blue-500 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {issue.id} - {issue.title}
                    </h3>

                    <div className="mt-1 text-sm text-slate-500">
                      {issue.category}
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      issue.trust === "Official Guidance"
                        ? "bg-green-100 text-green-800"
                        : issue.trust === "Field Validated"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {issue.trust}
                  </span>
                </div>

                <p className="mt-3 text-slate-700">
                  {issue.summary}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {issue.versions.map((version) => (
                    <span
                      key={version}
                      className="rounded bg-slate-100 px-2 py-1 text-xs"
                    >
                      {version}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}