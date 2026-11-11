export default function Home() {
  const issues = [
    {
      code: "0048",
      title: "Temperature Sensor Fault",
      trust: "Official Guidance",
    },
    {
      code: "0061",
      title: "Temperature Spread Too High",
      trust: "Official Guidance",
    },
    {
      code: "0052",
      title: "Pump Communication Failure",
      trust: "Official Guidance",
    },
    {
      code: "0032",
      title: "High Frequency Leakage",
      trust: "Official Guidance",
    },
    {
      code: "1207",
      title: "Location Reference Moved",
      trust: "Official Guidance",
    },
    {
      code: "N/A",
      title: "Magnetic Interference",
      trust: "Official Guidance",
    },
    {
      code: "N/A",
      title: "Loss of Communication",
      trust: "Official Guidance",
    },
    {
      code: "Field",
      title: "Ground Patches Not Turning Green",
      trust: "Field Validated",
    },
    {
      code: "Field",
      title: "Template Corruption",
      trust: "Emerging Pattern",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-slate-900">
          Affera Assist
        </h1>

        <p className="mt-2 text-slate-600">
          Internal troubleshooting and knowledge platform
        </p>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Describe Your Issue
          </h2>

          <textarea
            className="w-full rounded-lg border p-3"
            rows={5}
            placeholder="Example: Generator offline after startup. Rebooted CIU already. Running Prism 2.4."
          />

          <div className="mt-4 flex gap-4">
            <select className="rounded-lg border p-2">
              <option>Prism 2.4</option>
              <option>Prism 2.3</option>
              <option>Prism 1</option>
            </select>

            <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white">
              Ask Affera Assist
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold">
            Seeded Knowledge Base
          </h2>

          <div className="space-y-3">
            {issues.map((issue) => (
              <div
                key={issue.title}
                className="flex items-center justify-between rounded-lg border p-3"
              >
                <div>
                  <div className="font-semibold">
                    {issue.code} {issue.title}
                  </div>
                </div>

                <div
                  className={`rounded-full px-3 py-1 text-sm ${
                    issue.trust === "Official Guidance"
                      ? "bg-green-100 text-green-800"
                      : issue.trust === "Field Validated"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {issue.trust}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}