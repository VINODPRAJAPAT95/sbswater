import { Link } from 'react-router-dom'
import { industries } from '../data/industries'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="relative bg-dark text-gray-400">
      <div className="container max-w-[1300px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1.1fr] gap-12 lg:gap-8">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2.5 text-white mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Placeholder_view_vector.svg"
                alt="SBS logo"
                className="w-11 h-11 rounded-full shrink-0"
              />
              <span className="flex flex-col leading-tight">
                <strong className="text-white text-xl font-heading">SBS</strong>
                <small className="text-[11px] text-gray-500 whitespace-nowrap">
                  Sustainable Business Solutions
                </small>
              </span>
            </div>
            <p className="mb-5 leading-relaxed">
              Plot No. 49, Opp. Bharat Weigh Bridge,<br />
              Dehu Alandi Road, Talawade,<br />
              Pune - 412 114.
            </p>
            <p className="mb-2.5">
              Mail: <a href="mailto:info@sbswater.in" className="text-orange hover:underline">info@sbswater.in</a>
            </p>
            <p className="text-white font-bold">
              <a href="tel:+918550904904" className="hover:text-orange">+91 85509 04904</a>
            </p>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white mb-5 text-base font-bold font-heading">Company</h4>
            <ul className="space-y-3.5">
              <li><Link to="/company" className="hover:text-orange transition-colors">About Us</Link></li>
              <li><Link to="/clientele" className="hover:text-orange transition-colors">Clientele</Link></li>
              <li><Link to="/news" className="hover:text-orange transition-colors">News &amp; Media</Link></li>
              <li><Link to="/contacts" className="hover:text-orange transition-colors">Contacts</Link></li>
              <li><Link to="/careers" className="hover:text-orange transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Industries links */}
          <div>
            <h4 className="text-white mb-5 text-base font-bold font-heading">Industries</h4>
            <ul className="space-y-3.5">
              {industries.slice(0, 6).map(ind => (
                <li key={ind.slug}>
                  <Link to={`/industries/${ind.slug}`} className="hover:text-orange transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-md p-7 sm:p-8 self-start">
            <h4 className="text-orange font-bold mb-3.5">Newsletter</h4>
            <p className="text-sm leading-relaxed mb-5">
              Sign up for industry alerts, our latest news, thoughts, and insights from SBS.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2.5 sm:gap-0"
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 min-w-0 px-4 py-3.5 border border-white/15 bg-transparent text-white rounded sm:rounded-l sm:rounded-r-none placeholder:text-gray-500 focus:outline-none focus:border-orange"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded sm:rounded-l-none sm:rounded-r bg-white/10 text-white font-semibold text-sm hover:bg-orange transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end mt-8">
          <p className="text-sm">
            Have a question?{' '}
            <Link to="/contacts" className="text-orange underline hover:no-underline">
              Click here
            </Link>
          </p>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollTop}
        aria-label="Back to top"
        className="absolute right-5 sm:right-6 bottom-[88px] sm:bottom-6 w-11 h-11 rounded bg-orange text-white flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
      >
        ↑
      </button>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container max-w-[1300px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-center sm:text-left">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>© {new Date().getFullYear()} SBS Water &amp; Infra Projects Pvt. Ltd.</span>
            <span className="hidden sm:inline">-</span>
            <Link to="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <span className="hidden sm:inline">-</span>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span className="hidden sm:inline">-</span>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 11.9 9c0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.6 1.8 3.4-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 0 1 2 19.6 11.7 11.7 0 0 0 8.3 21.5c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1Z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.7 0 3.1 0 4.1.1 1.1 0 1.8.2 2.3.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.5.4 1.2.4 2.3.1 1 .1 1.4.1 4.1s0 3.1-.1 4.1c0 1.1-.2 1.8-.4 2.3-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.5.2-1.2.4-2.3.4-1 .1-1.4.1-4.1.1s-3.1 0-4.1-.1c-1.1 0-1.8-.2-2.3-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.5-.4-1.2-.4-2.3C2 15.1 2 14.7 2 12s0-3.1.1-4.1c0-1.1.2-1.8.4-2.3.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .5-.2 1.2-.4 2.3-.4C8.9 2 9.3 2 12 2Zm0 1.8c-2.6 0-3 0-4 .1-.9 0-1.4.2-1.7.3-.4.2-.7.3-1 .6-.3.3-.4.6-.6 1-.1.3-.3.8-.3 1.7-.1 1-.1 1.4-.1 4s0 3 .1 4c0 .9.2 1.4.3 1.7.2.4.3.7.6 1 .3.3.6.4 1 .6.3.1.8.3 1.7.3 1 .1 1.4.1 4 .1s3 0 4-.1c.9 0 1.4-.2 1.7-.3.4-.2.7-.3 1-.6.3-.3.4-.6.6-1 .1-.3.3-.8.3-1.7.1-1 .1-1.4.1-4s0-3-.1-4c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.7-.6-1-.3-.3-.6-.4-1-.6-.3-.1-.8-.3-1.7-.3-1-.1-1.4-.1-4-.1Zm0 3.5a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5-2a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}