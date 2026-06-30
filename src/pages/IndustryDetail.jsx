import { Link, useParams, Navigate } from 'react-router-dom'
import { industries } from '../data/industries'

export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = industries.find(i => i.slug === slug)
  if (!industry) return <Navigate to="/industries" replace />

  const others = industries.filter(i => i.slug !== slug).slice(0, 3)

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
          <h1 className="text-white text-[30px] sm:text-[42px] font-bold">{industry.title}</h1>
          <p className="text-orange font-semibold mt-3.5 text-sm">
            <Link to="/">Home</Link> <span className="text-gray-300">/</span>{' '}
            <Link to="/industries">Industries</Link> <span className="text-gray-300">/ {industry.title}</span>
          </p>
        </div>
      </section>

      <section className="py-[90px]">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src={industry.image} alt={industry.title} className="rounded-md w-full" />
          </div>
          <div>
            <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">{industry.icon} Industry Focus</span>
            <h2 className="text-[26px] sm:text-[30px] my-2.5 mb-4">{industry.title}</h2>
            <p className="text-sm mb-5">{industry.description}</p>
            <Link to="/contacts" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-orange text-white font-semibold text-sm hover:bg-orange-dark transition-colors">
              Request A Quote →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[90px] bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">Explore More</span>
            <h2 className="text-[26px] sm:text-[30px]">Other Industries We Serve</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(ind => (
              <Link to={`/industries/${ind.slug}`} key={ind.slug} className="block bg-white p-8 rounded-md transition-all hover:-translate-y-1.5 hover:shadow-xl">
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
