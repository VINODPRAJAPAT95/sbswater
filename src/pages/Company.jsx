import { Link } from 'react-router-dom'

export default function Company() {
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
          <h1 className="text-white text-[30px] sm:text-[42px] font-bold">Company</h1>
          <p className="text-orange font-semibold mt-3.5 text-sm">
            <Link to="/">Home</Link> <span className="text-gray-300">/ Company</span>
          </p>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-[90px]">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">About Us</span>
            <h2 className="text-[26px] sm:text-[30px] my-2.5 mb-4">
              SBS Water &amp; Infra
            </h2>
            <p className="text-sm mb-3.5">
              SBS Water &amp; Infra team of engineers, scientists, and professionals passionate about changing the world of water through innovative, sustainable technologies. SBS stands for Sustainable Business Solutions.
            </p>
            <p className="text-sm mb-3.5">
              SBS specialize in providing plug-and-play, high quality, and cost-effective water and wastewater treatment solutions that can be quickly installed, automatically operated, and easily maintained so you get reliable clean water.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
              <li className="text-sm">✔ Plug-and-Play Systems</li>
              <li className="text-sm">✔ Highly Professional Staff</li>
              <li className="text-sm">✔ Cost-Effective Solutions</li>
              <li className="text-sm">✔ Reliable Clean Water</li>
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092919535-2c4d22a4f5b3?q=80&w=900&auto=format&fit=crop"
              alt="SBS Water Treatment"
              className="rounded-md w-full"
            />
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-[90px] bg-[#1aa3df] text-white">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=900&auto=format&fit=crop"
              alt="Vision - lens over a lake"
              className="rounded-md w-full border-4 border-white"
            />
          </div>
          <div>
            <span className="inline-block text-white font-bold uppercase tracking-wide text-[13px] mb-3">Vision</span>
            <h2 className="text-[26px] sm:text-[30px] my-2.5 mb-4 text-white">
              Our Vision
            </h2>
            <p className="text-sm leading-relaxed">
              SBS strive to be customer's most trusted supplier by solving problems with the right people, the right experience and the right technology. We're built to deliver value. Our innovative process and water treatment solutions drive sustainability by reducing water and energy use and raw material waste while improving operational efficiency, productivity and yields. Complete satisfaction of customer with zero liquid discharge and reduction of freshwater consumption.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-[90px] bg-orange text-white">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="w-full mb-10 -mt-[150px] hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1600&auto=format&fit=crop"
              alt="Water treatment plant pipes"
              className="rounded-md w-full h-[260px] object-cover"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=900&auto=format&fit=crop"
                alt="Team handshake"
                className="rounded-md w-full border-4 border-white"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="inline-block text-white font-bold uppercase tracking-wide text-[13px] mb-3">Mission</span>
              <h2 className="text-[26px] sm:text-[30px] my-2.5 mb-4 text-white">
                Our Mission
              </h2>
              <p className="text-sm mb-3.5 leading-relaxed">
                SBS's mission is to enable our customer's success through innovative water treatment solutions. We're proud to work toward a world where true operational efficiency and sustainability are delivered and documented more effectively than anyone could imagine.
              </p>
              <p className="text-sm leading-relaxed italic">
                "SBS exist to improve the quality of life in our communities, helping them to attain sustainable life by serving and delighting our customers, giving time and benefits to our community, growing employees and helping them realize their full potential, and leading others by inspiring them to give, serve and grow."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-[90px]">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-block text-orange font-bold uppercase tracking-wide text-[13px] mb-3">Our Team</span>
            <h2 className="text-[26px] sm:text-[30px]">Meet The Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { n: 'Martin Hope', r: 'Director', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop' },
              { n: 'John Peter', r: 'Engineer', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop' },
              { n: 'Sarah Lee', r: 'Operations', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400&auto=format&fit=crop' },
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div className="h-[220px] rounded-md bg-cover bg-center mb-3.5" style={{ backgroundImage: `url(${m.img})` }} />
                <h4 className="text-base">{m.n}</h4>
                <span className="text-[13px] text-orange">{m.r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}