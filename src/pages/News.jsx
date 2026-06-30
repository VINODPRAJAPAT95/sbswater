import { Link } from 'react-router-dom'

const services = [
  'Distillery Condensate Polishing Units',
  'Sugar Condensate Polishing Units',
  'Distillery Water Treatment Plants',
  'Sugar Water Treatment Plants',
  'Distillery Effluent Treatment Plants',
  'Sugar Effluent Treatment Plants',
  'Water Treatment Plants',
  'Effluent Treatment Plants',
  'Sewage Treatment Plants',
]

export default function News() {
  return (
    <>
      {/* ── Page Header ── */}
      <section
        className="pt-[140px] pb-[70px] text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(20,24,31,0.92), rgba(20,24,31,0.75)), url('https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="container max-w-[1200px] mx-auto px-6">
          <h1 className="text-white text-[30px] sm:text-[42px] font-bold">Services</h1>
          <p className="text-orange font-semibold mt-3.5 text-sm">
            <Link to="/">Home</Link> <span className="text-gray-300">/ Services</span>
          </p>
        </div>
      </section>

      {/* ── Services Panel (matches reference image) ── */}
      <section className="py-[90px]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div
            className="rounded-md overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 p-6 sm:p-10 lg:p-14 items-center"
            style={{ backgroundColor: '#1d7a82' }}
          >
            {/* Left: Image */}
            <div className="rounded-md overflow-hidden h-[320px] sm:h-[400px] lg:h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1581091012184-7e0cdfbb6797?q=80&w=1200&auto=format&fit=crop"
                alt="Water treatment plant equipment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Heading + Bullet List */}
            <div>
              <h2 className="text-white text-[26px] sm:text-[32px] font-bold mb-6 tracking-wide">
                SERVICES
              </h2>
              <ul className="space-y-3">
                {services.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-[9px] w-[7px] h-[7px] rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#ffffff' }}
                    />
                    <span className="text-white text-[16px] sm:text-[18px] font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}