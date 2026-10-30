export default function MyProject() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">My Project</h1>
      <p className="mb-6">A description of what the project is and what you did.</p>

      <img src="/projects/my-project/screenshot1.png" alt="Screenshot" className="rounded mb-6" />

      <h2 className="text-xl font-semibold mb-2">Documents</h2>
      <ul className="list-disc pl-6">
        <li>
          <a href="/projects/my-project/report.pdf" target="_blank" rel="noreferrer" className="underline">
            Project report (PDF)
          </a>
        </li>
      </ul>
    </div>
  );
}