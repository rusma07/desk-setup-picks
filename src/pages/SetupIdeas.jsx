function SetupIdeas() {
  const ideas = [
    'Small desk setup for students',
    'Minimal desk setup for remote workers',
    'Budget home office setup',
    'Clean creator desk setup',
    'Dual monitor productivity setup',
    'Simple study desk setup',
  ]

  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-semibold text-blue-600">Setup Ideas</p>
        <h1 className="mt-3 text-4xl font-extrabold">Workspace ideas for every desk</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Simple setup ideas for people who want a cleaner, more focused, and more comfortable workspace.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {ideas.map((idea) => (
          <div key={idea} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">{idea}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A practical guide for choosing the right accessories, layout, lighting,
              and storage for this type of desk setup.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SetupIdeas