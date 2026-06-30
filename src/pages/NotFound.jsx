import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="text-center pt-[180px] pb-[90px]">
      <div className="container max-w-[1200px] mx-auto px-6">
        <h1 className="text-[80px]">404</h1>
        <p className="mb-6">Page not found.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-orange text-white font-semibold text-sm hover:bg-orange-dark transition-colors">
          Back To Home →
        </Link>
      </div>
    </section>
  )
}
