import ProductCard from '../components/ProductCard'

function BestPicks() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-semibold text-blue-600">Best Picks</p>
        <h1 className="mt-3 text-4xl font-extrabold">Popular desk setup categories</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Start with these product categories when building a comfortable and organized workspace.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        <ProductCard
          tag="Comfort"
          title="Laptop Stands"
          description="Useful for improving screen height and reducing neck strain during work or study."
        />
        <ProductCard
          tag="Productivity"
          title="Monitor Arms"
          description="Great for freeing desk space and creating a more flexible monitor position."
        />
        <ProductCard
          tag="Organization"
          title="Cable Organizers"
          description="Simple tools that help control cable mess and make your desk look cleaner."
        />
        <ProductCard
          tag="Lighting"
          title="Desk Lamps"
          description="Helpful for reading, studying, writing, and improving your video call setup."
        />
        <ProductCard
          tag="Storage"
          title="Desk Organizers"
          description="Keep pens, notebooks, chargers, and small tools in one easy-to-reach place."
        />
        <ProductCard
          tag="Ergonomics"
          title="Footrests"
          description="A small comfort upgrade for people who sit at a desk for long hours."
        />
      </div>
    </section>
  )
}

export default BestPicks