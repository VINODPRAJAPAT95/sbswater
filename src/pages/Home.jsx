import { Link } from 'react-router-dom'
import { industries } from '../data/industries'
import { useState, useEffect, useRef } from 'react'

// Koch Antiqua-style font — loaded once when the component module is first used
if (typeof document !== 'undefined' && !document.getElementById('koch-antiqua-font')) {
  const link = document.createElement('link')
  link.id = 'koch-antiqua-font'
  link.rel = 'stylesheet'
  link.href = 'https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&display=swap'
  document.head.appendChild(link)
}

const features = [
  { title: 'Environmental Sensitivity', text: 'The world of waste infrastructure and treatment involves a myriad of unknown risks and challenging regulations.' },
  { title: 'Transparent Pricing', text: 'The world of waste infrastructure and treatment involves a myriad of unknown risks and challenging regulations.' },
  { title: 'Professional & Qualified', text: 'The world of waste infrastructure and treatment involves a myriad of unknown risks and challenging regulations.' },
  { title: 'Personalised Solutions', text: 'The world of waste infrastructure and treatment involves a myriad of unknown risks and challenging regulations.' },
]

const coreValues = [
  {
    title: 'Protect Water',
    desc: "We are committed to protecting, preserving, and perpetuating water, one of the world's most important assets.",
    img: 'https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=300&auto=format&fit=crop',
    ring: '#1d3557',
  },
  {
    title: 'Accessibility',
    desc: 'We strive to make water and wastewater infrastructure affordable for all.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=300&auto=format&fit=crop',
    ring: '#1d7a82',
  },
  {
    title: 'Sustainability',
    desc: 'We seek to provide resilient eco-friendly energy-efficient solutions.',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=300&auto=format&fit=crop',
    ring: '#2bb5e0',
  },
  {
    title: 'Innovation',
    desc: 'We continuously innovate to deliver more for less.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=300&auto=format&fit=crop',
    ring: '#f5a623',
  },
  {
    title: 'Integrity',
    desc: 'We treat customers, employees and suppliers with honesty, integrity, and respect, building long-term relationships for mutual advantage.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=300&auto=format&fit=crop',
    ring: '#7cb342',
  },
]

const heroSlides = [
  {
    img: 'https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?q=80&w=1800&auto=format&fit=crop',
    heading: <>Effective<br />&amp; Reliable</>,
    subtext:
      'To further develop our corporate strengths we have established a corporate mandate to maintain strong core values that truly reflect SBS\'s philosophy.',
    badge: { icon: '🗑️', title: 'Our Mission', desc: 'Utilising the latest waste processing solutions, and decades of work experience.' },
  },
  {
    img: 'https://images.unsplash.com/photo-1763315156830-07870b159121?q=80&w=1800&auto=format&fit=crop',
    heading: <>Precision<br />&amp; Innovation</>,
    subtext:
      'We engineer world-class waste treatment and recycling solutions that bridge the gap between modern technology and industrial excellence — delivering value at every stage of the process.',
    badge: { icon: '♻️', title: 'Engineering', desc: 'Advanced treatment systems designed for the demands of tomorrow\'s waste infrastructure.' },
  },
  {
    img: 'https://images.unsplash.com/photo-1533077162801-86490c593afb?q=80&w=1800&auto=format&fit=crop',
    heading: <>Trusted<br />&amp; Proven</>,
    subtext:
      'With over 25 years in the field, our reputation is built on integrity, skilled craftsmanship, and an unwavering commitment to responsible waste management.',
    badge: { icon: '🌐', title: 'Global Reach', desc: 'Serving clients across 40+ countries with consistent treatment and compliance standards.' },
  },
]

const projects = [
  { title: 'City Waste Transfer Station', tag: 'Municipal Waste Collection', img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=900&auto=format&fit=crop' },
  { title: 'Regional Recycling & Material Recovery Facility', tag: 'Recycling Engineering', img: 'https://images.unsplash.com/photo-1591193686104-fddba4d0e4d8?q=80&w=900&auto=format&fit=crop' },
  { title: 'Industrial Scrap Recovery Plant', tag: 'Waste Management Engineering', img: 'https://images.unsplash.com/photo-1770068512276-cf8c2275f766?q=80&w=900&auto=format&fit=crop' },
]

const articles = [
  { title: 'How modern recycling facilities are reducing landfill waste.', date: 'Jul 16, 2018', img: 'https://images.unsplash.com/photo-1717667745934-53091623e8ee?q=80&w=900&auto=format&fit=crop' },
  { title: 'Understanding new regulations on industrial waste disposal.', date: 'Jul 16, 2018', img: 'https://images.unsplash.com/photo-1722482445685-91a6b17d5d02?q=80&w=900&auto=format&fit=crop' },
  { title: 'The growing role of waste-to-energy in sustainable infrastructure?', date: 'Jul 16, 2018', img: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=900&auto=format&fit=crop' },
]

// ─── Hero Carousel ──────────────────────────────────────────────────────────
function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)

  const SLIDE_DURATION = 5000   // ms between auto-advances
  const FADE_DURATION  = 700    // must match CSS transition duration

  const goTo = (idx) => {
    if (animating || idx === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(idx)
      setAnimating(false)
    }, FADE_DURATION)
  }

  const next = () => goTo((current + 1) % heroSlides.length)
  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length)

  // Auto-advance
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroSlides.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timerRef.current)
  }, [])

  // Restart timer on manual navigation
  const manualGoTo = (idx) => {
    clearInterval(timerRef.current)
    goTo(idx)
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroSlides.length)
    }, SLIDE_DURATION)
  }

  const slide = heroSlides[current]

  return (
    <section
      className="pt-[220px] pb-[140px] text-white relative bg-cover bg-center overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      {/* Background slides */}
      {heroSlides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(120deg, rgba(15,18,24,0.88), rgba(15,18,24,0.55)), url('${s.img}')`,
            opacity: i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease-in-out`,
            zIndex: 0,
          }}
        />
      ))}

      {/* Content */}
      <div
        className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-10 items-center relative"
        style={{ zIndex: 1 }}
      >
        <div
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(18px)' : 'translateY(0)',
            transition: `opacity ${FADE_DURATION}ms ease, transform ${FADE_DURATION}ms ease`,
          }}
        >
          <h1
            className="text-white text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.1]"
            style={{ fontFamily: "'IM Fell English', Georgia, serif", fontWeight: 400, letterSpacing: '0.01em' }}
          >
            {slide.heading}
          </h1>
          <p className="max-w-[520px] mt-6 mb-7 text-gray-300 text-base">
            {slide.subtext}
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/contacts"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-dark text-white font-semibold text-sm hover:bg-black transition-colors"
            >
              Our Services
            </Link>
            <button className="w-11 h-11 rounded-full border-2 border-orange bg-orange text-white">▶</button>
            <span className="font-semibold">Our Video!</span>
          </div>
        </div>

        {/* Badge card */}
        <div
          className="bg-white p-9 rounded-md text-center shadow-2xl"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(18px)' : 'translateY(0)',
            transition: `opacity ${FADE_DURATION}ms ease ${FADE_DURATION * 0.15}ms, transform ${FADE_DURATION}ms ease ${FADE_DURATION * 0.15}ms`,
          }}
        >
          <div className="text-4xl mb-3">{slide.badge.icon}</div>
          <h3 className="text-xl text-dark">{slide.badge.title}</h3>
          <p className="text-gray-600 text-sm my-3">{slide.badge.desc}</p>
          <Link to="/company" className="text-orange font-semibold">Explore →</Link>
        </div>
      </div>

      {/* Controls */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-5"
        style={{ zIndex: 2 }}
      >
        {/* Prev arrow */}
        <button
          onClick={() => manualGoTo((current - 1 + heroSlides.length) % heroSlides.length)}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white text-lg flex items-center justify-center transition-colors border border-white/30"
          aria-label="Previous slide"
        >
          ‹
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => manualGoTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width:  i === current ? '28px' : '10px',
                height: '10px',
                background: i === current ? '#e05a14' : 'rgba(255,255,255,0.45)',
              }}
            />
          ))}
        </div>

        {/* Next arrow */}
        <button
          onClick={() => manualGoTo((current + 1) % heroSlides.length)}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white text-lg flex items-center justify-center transition-colors border border-white/30"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      {/* HERO — auto-scroll carousel */}
      <HeroCarousel />

      {/* FEATURES STRIP */}
      <section className="bg-white border-b border-gray-100">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="group p-5 -m-5 rounded-md transition-colors duration-300 hover:bg-orange cursor-default"
            >
              <h4 className="text-[17px] mb-2.5 relative pb-3 text-dark group-hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-7 after:h-[3px] after:bg-orange group-hover:after:bg-white after:transition-colors after:duration-300">
                {f.title}
              </h4>
              <p className="text-sm text-gray-400 group-hover:text-white/90 transition-colors duration-300">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-[90px]">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          <div>
            <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">
              Delivering Safe, Compliant Waste Treatment Solutions
            </span>
            <h2 className="text-[26px] sm:text-[30px] my-2.5 mb-4">A Leading Waste Infrastructure &amp; Treatment Company, Serving Since 1997.</h2>
            <p className="text-sm mb-3.5">SBS Group is a representative waste infrastructure company providing a full range of services in the sphere of waste collection, treatment and recycling worldwide for any type of solution.</p>
            <p className="text-sm mb-3.5">The world is changing faster than ever before, and waste management is no exception. SBS Industries continues to adapt to new technology, evolving regulations and rising environmental standards.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?q=80&w=900&auto=format&fit=crop" alt="Waste collection crew at work" className="rounded-md w-full h-full object-cover" />
          </div>
          <div className="md:col-span-2 lg:col-span-1 flex flex-col md:flex-row lg:flex-col gap-5">
            {[
              { t: 'Quality', d: 'Following the quality of our service flow having gained the trust of so many municipal and industrial clients.' },
              { t: 'Reliability', d: 'We have established a corporate mandate to maintain strong core values and reflect them in every site we operate.' },
              { t: 'Innovation', d: 'Our company develops unique treatment technologies and keeps in step with evolving environmental standards.' },
            ].map((p, i) => (
              <div key={i} className="border-l-[3px] border-orange pl-4 mb-7">
                <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px]">{p.t}</span>
                <p className="text-sm mt-1.5">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="py-[90px] bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 text-center sm:text-left">
            <span className="text-dark font-bold uppercase tracking-wide text-[15px]">Our Core Values</span>
            <div className="flex items-center gap-3">
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-[#1d3557] via-[#2bb5e0] to-[#f5a623] flex items-center justify-center text-white font-extrabold text-xl">
                SBS
              </div>
              <span className="text-[#1d7a82] text-2xl leading-tight font-medium" style={{ fontFamily: "'IM Fell English', Georgia, serif" }}>
                Sustainable<br />Business<br />Solutions
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14 max-w-[900px] mx-auto place-items-center">
            {coreValues.map((v, i) => (
              <div key={i} className="flex flex-col items-center text-center max-w-[230px]">
                <div
                  className="w-[110px] h-[110px] rounded-full overflow-hidden mb-5 border-4"
                  style={{ borderColor: v.ring }}
                >
                  <img src={v.img} alt={v.title} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-base font-bold text-dark mb-2.5">{v.title}</h4>
                <p className="text-[13px] text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-[90px] bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-10 items-end mb-12">
            <h2 className="text-[26px] sm:text-[30px] max-w-[600px]">Provides High Performance Waste Treatment Services For Multiple Sectors!</h2>
            <p className="max-w-[380px] text-sm">SBS Engineering has been built on operational excellence crafted through unrelenting dedication to compliance, innovation and a constant objective to serve municipalities, industries and decade-long client partnerships.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.slice(0, 4).map(ind => (
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

      {/* SOLUTIONS */}
      <section className="py-[90px] bg-orange text-white">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-dark font-bold uppercase tracking-wide text-[13px] mb-3">Leading Waste Management &amp; Treatment Provider!</span>
            <h2 className="text-white text-[28px] sm:text-[32px] my-2.5 mb-4">Providing Innovative and Sustainable Solutions</h2>
            <p className="text-white/90">As a diversified waste infrastructure and treatment firm, SBS Group has been building relationships and facilities that last. Serving an impressive list of long-term municipal and industrial clients with experience and expertise across the waste management sector.</p>
            <div className="flex gap-6 mt-7 flex-wrap">
              {[
                { i: '🌎', t: 'Environmental Sensitivity' },
                { i: '🧩', t: 'Personalised Solutions' },
                { i: '📈', t: 'Performance Measures' },
              ].map((p, idx) => (
                <div key={idx} className="text-center text-[13px]">
                  <span className="text-2xl block mb-2">{p.i}</span>
                  <p>{p.t}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1763315156830-07870b159121?q=80&w=900&auto=format&fit=crop" alt="Recycling facility workers" className="rounded-md w-full" />
            <div className="absolute -bottom-5 -right-5 bg-dark text-white px-7 py-6 rounded-md">
              <strong className="block text-3xl">6,154</strong>
              <span className="text-[13px] text-gray-400">Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-[90px]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">Explore Recent Works</span>
            <h2 className="text-[26px] sm:text-[30px] max-w-[600px]">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i}>
                <div className="h-[220px] rounded-md bg-cover bg-center mb-4" style={{ backgroundImage: `url(${p.img})` }} />
                <h4 className="text-[17px] mb-1.5">{p.title}</h4>
                <span className="text-orange text-[13px] font-semibold">{p.tag}</span>
                <p className="text-[13px] my-2.5 text-gray-400">We understand that data is the greatest asset when it comes to optimizing collection routes and treatment schedules.</p>
                <Link to="/contacts" className="text-orange font-semibold text-[13px]">Explore Case Study →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK BAND */}
      <section className="py-[90px] bg-dark text-white">
        <div className="container max-w-[1200px] mx-auto px-6">
          <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">Building The Future, Honoring The Past</span>
          <h2 className="text-white text-[26px] sm:text-[30px] my-2.5 mb-4 max-w-[600px]">Reliable, Effective &amp; Technically Advanced Treatment Systems!</h2>
          <p className="max-w-[600px] text-gray-400 mb-6">SBS Engineering has been built on engineering excellence crafted through unrelenting dedication to compliance and a consistent objective to serve the global market &amp; decade-long industry leaders.</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[600px]">
            <li className="text-gray-200 text-sm">✔ Regulatory Compliance Systems</li>
            <li className="text-gray-200 text-sm">✔ Highly Professional Staff</li>
            <li className="text-gray-200 text-sm">✔ 100% Environmental Compliance</li>
            <li className="text-gray-200 text-sm">✔ Accurate Waste Testing Processes</li>
          </ul>
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="bg-white">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr]">
          <div className="bg-orange text-white p-10 lg:p-[60px] flex flex-col justify-center">
            <h3 className="text-white text-2xl mb-3.5">Dedicated Customer Teams &amp; An Agile Services</h3>
            <p>Our worldwide presence ensures the timeliness, cost efficiency and consistent adherence required to meet your production timelines and cost.</p>
          </div>
          <form className="bg-gray-50 p-10 lg:p-[60px]" onSubmit={e => e.preventDefault()}>
            <h3 className="text-2xl mb-2.5">Request A Quote</h3>
            <p className="text-sm mb-5">Complete and submit your products allows us to ensure our customers receive the best quality, price and service.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <input placeholder="First Name" className="px-3.5 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange" />
              <input placeholder="Last Name" className="px-3.5 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange" />
              <input placeholder="Email" className="px-3.5 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange" />
              <input placeholder="Email or Company" className="px-3.5 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange" />
            </div>
            <input placeholder="Additional Details" className="w-full px-3.5 py-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-orange" />
            <button type="submit" className="px-7 py-3.5 rounded bg-dark text-white font-semibold text-sm hover:bg-black transition-colors">Submit Request</button>
            <small className="block mt-3.5 text-gray-400">We will get back to you within 24 hours, or call us +55 654 541 17</small>
          </form>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-[90px] bg-gray-50">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">Insights and Trends</span>
            <h2 className="text-[26px] sm:text-[30px] max-w-[600px]">Recent Articles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <Link to="/news" key={i} className="block bg-white rounded-md overflow-hidden shadow-sm">
                <div className="h-[180px] bg-cover bg-center" style={{ backgroundImage: `url(${a.img})` }} />
                <span className="block text-xs text-gray-400 px-4 pt-3.5">{a.date}</span>
                <h4 className="text-[15px] px-4 pt-1 pb-1">{a.title}</h4>
                <span className="block px-4 pb-4 text-orange font-semibold text-[13px]">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}