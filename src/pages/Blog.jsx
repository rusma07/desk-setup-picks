import BlogCard from '../components/BlogCard'
import { posts } from '../data/posts'

function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-semibold text-blue-600">Blog</p>
        <h1 className="mt-3 text-4xl font-extrabold">Desk setup guides</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Helpful articles about desk accessories, home office setups, ergonomics,
          cable management, and productivity gear.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Blog