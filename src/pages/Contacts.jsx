import { Link } from 'react-router-dom'

export default function Contacts() {
  return (
    <>
      <section
        className="pt-[140px] pb-[70px] text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(20,24,31,0.92), rgba(20,24,31,0.75)), url('https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="container max-w-[1200px] mx-auto px-6">
          <h1 className="text-white text-[30px] sm:text-[42px] font-bold">Contacts</h1>
          <p className="text-orange font-semibold mt-3.5 text-sm">
            <Link to="/">Home</Link> <span className="text-gray-300">/ Contacts</span>
          </p>
        </div>
      </section>

      {/* ── Company contact strip (matches business-card layout) ── */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="container max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo + name */}
          <div className="flex items-center gap-3.5 shrink-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Placeholder_view_vector.svg"
              alt="SBS Sustainable Business Solutions logo"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="leading-tight">
              <span className="block text-xl font-bold text-[#13355e]">SBS</span>
              <span className="block text-[13px] text-[#1aa3df] font-medium">
                Sustainable Business Solutions
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h2 className="text-[#13355e] font-bold text-lg mb-3 tracking-wide">
              SBS WATER &amp; INFRA PROJECTS PVT. LTD.
            </h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="flex items-start gap-2.5">
                <span className="mt-0.5">📍</span>
                <span>Plot No. 49, Opp. Bharat Weigh Bridge, Dehu Alandi Road, Talawade, Pune - 412 114.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span>📞</span>
                <span>+91 85509 04904</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span>✉️</span>
                <span>info@sbswater.in</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span>🌐</span>
                <span>www.sbswater.in</span>
              </p>
            </div>
          </div>

          {/* QR code */}
          <div className="shrink-0 bg-white p-2 border border-gray-200 rounded-md">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.sbswater.in"
              alt="QR code to www.sbswater.in"
              className="w-[100px] h-[100px]"
            />
          </div>
        </div>
      </section>

      <section className="py-[90px]">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] rounded-md overflow-hidden">
          <div className="bg-orange text-white p-10 lg:p-[60px] flex flex-col justify-center">
            <h3 className="text-white text-2xl mb-3.5">Get In Touch</h3>
            <p className="mb-5">
              SBS specialize in plug-and-play, high quality, cost-effective water and
              wastewater treatment solutions — reach out and our team will get back to you promptly.
            </p>
            <div className="space-y-2">
              <p><strong>Address:</strong> Plot No. 49, Opp. Bharat Weigh Bridge, Dehu Alandi Road, Talawade, Pune - 412 114.</p>
              <p><strong>Phone:</strong> +91 85509 04904</p>
              <p><strong>Email:</strong> info@sbswater.in</p>
              <p><strong>Website:</strong> www.sbswater.in</p>
            </div>
          </div>
          <form className="bg-gray-50 p-10 lg:p-[60px]" onSubmit={e => e.preventDefault()}>
            <h3 className="text-2xl mb-2.5">Request A Quote</h3>
            <p className="text-sm mb-5">Complete and submit your details and our team will ensure you receive the best quality, price and service.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <input placeholder="First Name" className="px-3.5 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange" />
              <input placeholder="Last Name" className="px-3.5 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange" />
              <input placeholder="Email" className="px-3.5 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange" />
              <input placeholder="Phone" className="px-3.5 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange" />
            </div>
            <input placeholder="Additional Details" className="w-full px-3.5 py-3 border border-gray-300 rounded mb-4 focus:outline-none focus:border-orange" />
            <button type="submit" className="px-7 py-3.5 rounded bg-dark text-white font-semibold text-sm hover:bg-black transition-colors">Submit Request</button>
            <small className="block mt-3.5 text-gray-400">We will get back to you within 24 hours, or call us +91 85509 04904</small>
          </form>
        </div>
      </section>
    </>
  )
}
