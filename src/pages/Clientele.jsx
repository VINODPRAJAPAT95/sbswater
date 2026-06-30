import { Link } from 'react-router-dom'

// ── Real data from the Clientele list ───────────────────────────────────────
const clients = [
  'Balrampur Chini Mills Group, Babhnan (UP)',
  'Gangakhed Sugar and Energy Limited, Parbhani (MH)',
  'Gangamai Sugar Limited, Ahmadnagar (MH)',
  'Venkateshwara Power Project Limited, Belgaum (KA)',
  'Jamkhandi Sugars Limited, Bagalkot (KA)',
  'Sangamner SSK, Sangamner (MH)',
  'Harsha Sugars, Belgaum (KA)',
  'Dharashiv Group, Pandharpur (MH)',
  'Satish Sugar group, Belgaum (KA)',
  'Jai Hind Sugar Limited, Solapur (MH)',
  'Mula SSK, Shirdi (MH)',
  'Shri Dutt India Limited, Satara (MH)',
]

const partners = [
  { name: 'MOJ Engineering Systems Ltd.', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Placeholder_view_vector.svg' },
  { name: 'BVG India', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Placeholder_view_vector.svg' },
  { name: 'ISGEC Heavy Engineering Ltd.', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Placeholder_view_vector.svg' },
  { name: 'Tata Consultancy Services', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Placeholder_view_vector.svg' },
  { name: 'Sahyadri', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Placeholder_view_vector.svg' },
  { name: 'KBK', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Placeholder_view_vector.svg' },
]

export default function Clientele() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="pt-[140px] pb-[70px] text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(20,24,31,0.92), rgba(20,24,31,0.75)), url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="container max-w-[1200px] mx-auto px-6">
          <h1 className="text-white text-[30px] sm:text-[42px] font-bold">Clientele</h1>
          <p className="text-orange font-semibold mt-3.5 text-sm">
            <Link to="/">Home</Link> <span className="text-gray-300">/ Clientele</span>
          </p>
        </div>
      </section>

      {/* ── Clientele list ── */}
      <section className="py-[90px] bg-white">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div
            className="flex items-center gap-4 mb-10 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
          >
            <div className="w-14 h-14 rounded-full bg-[#eaf2fb] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#13355e]" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="9" cy="8" r="2.6" />
                <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
                <circle cx="17" cy="9" r="2" />
                <path d="M15 19c0-2-1.4-3.6-3.2-4.3" />
              </svg>
            </div>
            <h2 className="text-[26px] sm:text-[30px] font-bold text-[#13355e] tracking-wide">
              CLIENTELE
            </h2>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {clients.map((c, i) => (
              <li
                key={c}
                className="flex items-start gap-3 text-[15px] text-gray-700 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards]"
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-700 shrink-0" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Partner / EPC logo grid ── */}
      <section className="pb-[90px] bg-white">
        <div className="container max-w-[1200px] mx-auto px-6">
          <h3 className="text-[#13355e] font-bold text-base mb-7 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
            For water and waste water treatment projects associated with
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className="h-[100px] rounded-md bg-gray-50 border border-gray-200 flex items-center justify-center px-6 opacity-0 animate-[fadeInUp_0.5s_ease-out_forwards] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-orange"
                style={{ animationDelay: `${300 + i * 90}ms` }}
              >
                <span className="text-gray-500 text-xs font-semibold text-center leading-snug">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-dark text-white py-[70px] text-center">
        <h2 className="text-2xl sm:text-[28px] font-bold mb-6">
          Want to become our next success story?
        </h2>
        <Link
          to="/contacts"
          className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded bg-orange text-white font-semibold text-sm hover:bg-orange-600 transition-colors"
        >
          Request A Quote →
        </Link>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}