import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Laptop, Lightbulb, MousePointer2 } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import { posts } from '../data/posts'

function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              Desk setup guides for better workdays
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 md:text-6xl">
              Build a cleaner, smarter, and more comfortable desk setup.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Discover practical desk accessories, office setup ideas, and productivity gear
              for students, remote workers, creators, and home offices.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Read buying guides <ArrowRight size={18} />
              </Link>

              <Link
                to="/best-picks"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-800 transition hover:bg-white"
              >
                Explore best picks
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1200&q=80"
              alt="Clean desk setup"
              className="h-[420px] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <Laptop className="text-blue-600" />
            <h3 className="mt-4 text-xl font-bold">Workspace Gear</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Laptop stands, monitor arms, USB hubs, desk mats, and simple tools that improve your setup.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <Lightbulb className="text-blue-600" />
            <h3 className="mt-4 text-xl font-bold">Setup Ideas</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Clean desk ideas for small rooms, students, creators, and remote workers.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
            <MousePointer2 className="text-blue-600" />
            <h3 className="mt-4 text-xl font-bold">Buying Guides</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Practical guides that help readers choose useful products without wasting money.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="font-semibold text-blue-600">Latest guides</p>
            <h2 className="mt-2 text-3xl font-bold">Start with these articles</h2>
          </div>

          <Link to="/blog" className="hidden font-semibold text-blue-600 md:block">
            View all guides
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="font-semibold text-blue-300">Simple desk checklist</p>
              <h2 className="mt-3 text-3xl font-bold">
                A better setup usually starts with small upgrades.
              </h2>
            </div>

            <div className="space-y-4 text-slate-200">
              {[
                'Good lighting for reading and video calls',
                'Cable management for a cleaner desk',
                'Comfortable laptop or monitor height',
                'Useful storage for daily items',
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle className="mt-1 shrink-0 text-blue-300" size={20} />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8">
          <p className="font-semibold text-blue-600">Popular picks</p>
          <h2 className="mt-2 text-3xl font-bold">Useful desk upgrade categories</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ProductCard
            tag="Comfort"
            title="Laptop Stands"
            description="Raise your screen closer to eye level and make long work sessions feel more comfortable."
          />
          <ProductCard
            tag="Organization"
            title="Cable Management"
            description="Keep chargers, power strips, and daily cables organized for a cleaner workspace."
          />
          <ProductCard
            tag="Lighting"
            title="Desk Lamps"
            description="Improve focus, reading comfort, and video call lighting with a good desk lamp."
          />
        </div>
      </section>
    </>
  )
}

export default Home