import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold">Desk Setup Picks</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Helpful buying guides and workspace ideas for students, remote workers,
            creators, and anyone building a cleaner desk setup.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <Link to="/blog">Blog</Link>
            <Link to="/best-picks">Best Picks</Link>
            <Link to="/setup-ideas">Setup Ideas</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Site Info</h3>
          <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/affiliate-disclosure">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-5 py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Desk Setup Picks. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer