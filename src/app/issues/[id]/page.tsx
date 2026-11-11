import { issues } from "@/data/issues";
import Link from "next/link";

export default async function IssuePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const issue = issues.find((i) => i.id === id);

  if (!issue) {
    return (
      <main className="p-8">
        <h1>Issue Not Found</h1>

        <Link
          href="/"
          className="text-blue-600"
        >
          Return Home
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow">

        <Link
          href="/"
          className="text-blue-600"
        >
          ← Back
        </Link>

        <h1 className="mt-4 text-3xl font-bold">
          {issue.id} - {issue.title}
        </h1>

        <div className="mt-2">
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm">
            {issue.trust}
          </span>
        </div>

        <p className="mt-6">
          {issue.summary}
        </p>

        <h2 className="mt-8 text-xl font-semibold">
          Symptoms
        </h2>

        <ul className="mt-2 list-disc pl-6">
          {issue.symptoms.map((symptom) => (
            <li key={symptom}>{symptom}</li>
          ))}
        </ul>

        <h2 className="mt-8 text-xl font-semibold">
          Recommended Actions
        </h2>

        <ol className="mt-2 list-decimal pl-6">
          {issue.actions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ol>
      </div>
    </main>
  );
}