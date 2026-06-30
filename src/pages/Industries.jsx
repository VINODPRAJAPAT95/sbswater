import { Link } from 'react-router-dom'
import { industries } from '../data/industries'

export default function Industries() {
  return (
    <>
      <section
        className="pt-[140px] pb-[70px] text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(20,24,31,0.92), rgba(20,24,31,0.75)), url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="container max-w-[1200px] mx-auto px-6">
          <h1 className="text-white text-[30px] sm:text-[42px] font-bold">Industries</h1>
          <p className="text-orange font-semibold mt-3.5 text-sm">
            <Link to="/">Home</Link> <span className="text-gray-300">/ Industries</span>
          </p>
        </div>
      </section>

      <section className="py-[90px]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">What We Serve</span>
            <h2 className="text-[26px] sm:text-[30px]">Multiple Industries And Technologies</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map(ind => (
              <Link to={`/industries/${ind.slug}`} key={ind.slug} className="block bg-white p-8 rounded-md transition-all hover:-translate-y-1.5 hover:shadow-xl border border-gray-100">
                <div className="text-3xl mb-4">{ind.icon}</div>
                <h4 className="text-base mb-2.5">{ind.title}</h4>
                <p className="text-[13px] text-gray-400 mb-3.5">{ind.short}</p>
                <span className="text-orange font-semibold text-[13px]">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
