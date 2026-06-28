import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function BlogCard({ post }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <img
        src={post.image}
        alt={post.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-6">
        <div className="mb-3 flex items-center gap-3 text-xs font-medium text-slate-500">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-600">
            {post.category}
          </span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-xl font-bold leading-snug text-slate-900">
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
        >
          Read guide <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}

export default BlogCard