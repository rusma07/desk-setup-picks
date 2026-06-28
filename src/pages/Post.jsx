import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { posts } from '../data/posts'

function Post() {
  const { slug } = useParams()
  const post = posts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-20 text-center">
        <h1 className="text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-blue-600 font-semibold">
          Back to blog
        </Link>
      </section>
    )
  }

  return (
    <article className="mx-auto max-w-4xl px-5 py-16">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
        <ArrowLeft size={16} /> Back to blog
      </Link>

      <div className="mt-8">
        <p className="text-sm font-semibold text-blue-600">{post.category}</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-slate-500">{post.readTime}</p>
      </div>

      <img
        src={post.image}
        alt={post.title}
        className="mt-8 h-[420px] w-full rounded-[2rem] object-cover"
      />

      <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-6 text-slate-700">
        <strong>Disclosure:</strong> As an Amazon Associate, we earn from qualifying purchases.
        This means we may earn a small commission if you buy through links on this site, at no extra cost to you.
      </div>

      <div className="prose prose-slate mt-10 max-w-none">
        <p className="text-lg leading-8 text-slate-700">{post.excerpt}</p>

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-10">
            <h2 className="text-2xl font-bold">{section.heading}</h2>
            <p className="mt-4 leading-8 text-slate-700">{section.body}</p>
          </section>
        ))}

        <section className="mt-10 rounded-3xl bg-white p-6 border border-slate-200">
          <h2 className="text-2xl font-bold">Final thoughts</h2>
          <p className="mt-4 leading-8 text-slate-700">
            A better desk setup does not need to be expensive. Start with the items
            that solve real problems first, such as comfort, lighting, cable mess,
            and storage. Then slowly improve the look of your workspace over time.
          </p>
        </section>
      </div>
    </article>
  )
}

export default Post
