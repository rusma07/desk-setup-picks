import { ExternalLink } from 'lucide-react'

function ProductCard({ title, description, tag }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
        {tag}
      </span>

      <h3 className="mt-4 text-xl font-bold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
        View pick <ExternalLink size={16} />
      </button>
    </div>
  )
}

export default ProductCard