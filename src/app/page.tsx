import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Smothered with Love Catering"
              width={46}
              height={46}
              className="rounded-full"
              priority
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Smothered with Love</div>
              <div className="text-xs text-white/60">Catering • Delaware Valley</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-white/75 hover:text-white" href="#menus">
              Menus
            </a>
            <a className="text-sm text-white/75 hover:text-white" href="#services">
              Services
            </a>
            <a className="text-sm text-white/75 hover:text-white" href="#gallery">
              Gallery
            </a>
            <a className="text-sm text-white/75 hover:text-white" href="#quote">
              Get a Quote
            </a>
          </nav>

          <a
            href="#quote"
            className="rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-black hover:bg-[#b88a1e]"
          >
            Book / Quote
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 md:pt-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
              Soul • Seafood • Healthy • Vegan
            </div>

            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              Smothered with Love.
              <span className="block text-white/90">Catering that feels like home —</span>
              <span className="block text-white/90">served with elegance.</span>
            </h1>

            <p className="mt-4 max-w-xl text-white/70">
              Based in the Delaware Valley. Available for select travel and nationwide catering requests.
              Pork-free by default (pork available upon request).
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#quote"
                className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black hover:bg-[#b88a1e]"
              >
                Get a Quote
              </a>
              <a
                href="#menus"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Explore Menus
              </a>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Weddings & Milestones</div>
                <div className="mt-1 text-white/60">Beautiful spreads + calm execution.</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-white font-semibold">Corporate & Events</div>
                <div className="mt-1 text-white/60">On-time. Organized. Professional.</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Placeholder */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-[4/3] w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
            <p className="mt-4 text-sm text-white/60">
              Replace this panel with a short plating video or a hero food image.
            </p>
          </div>
        </div>
      </section>

      {/* Menus */}
      <section id="menus" className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-semibold md:text-4xl">Explore the Flavor</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Clients can instantly see your range. Pork-free by default; pork dishes available upon request.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            { title: "Soul", desc: "Comfort classics with a luxury touch." },
            { title: "Seafood", desc: "Fresh, savory, and beautifully presented." },
            { title: "Healthy", desc: "Clean options that still feel indulgent." },
            { title: "Vegan", desc: "Bold flavor, fully plant-based." },
          ].map((x) => (
            <div key={x.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold text-[#d4af37]">{x.title}</div>
              <div className="mt-2 text-white/80">{x.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-semibold md:text-4xl">Services</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Choose the level of service that fits your event. We’ll tailor a proposal to match.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { t: "Drop-Off Catering", d: "Simple, elegant delivery and setup." },
            { t: "Full-Service Buffet", d: "Staffed service, buffet styling, breakdown." },
            { t: "Chef On-Site", d: "Premium experience for select events." },
          ].map((x) => (
            <div key={x.t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <p className="mt-2 text-sm text-white/70">{x.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold">Travel / Nationwide Requests</h3>
          <p className="mt-2 text-sm text-white/70">
            Available for select events outside the Delaware Valley. Travel-based catering and curated
            partner support depend on event size, date, and location.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 pb-14">
        <h2 className="text-3xl font-semibold md:text-4xl">Gallery</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Replace these placeholders with event photos and plating clips.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent"
            />
          ))}
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-semibold md:text-4xl">Get a Quote</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Share your event details and we’ll respond with a tailored proposal.
        </p>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <form className="grid gap-4 md:grid-cols-2">
            <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none"
              placeholder="Name" />
            <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none"
              placeholder="Email" />
            <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none"
              placeholder="Phone" />
            <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none"
              placeholder="Event Type (Birthday, Wedding, Corporate...)" />
            <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none"
              placeholder="City" />
            <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none"
              placeholder="State" />
            <textarea
              className="md:col-span-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none"
              rows={5}
              placeholder="Tell us about guest count, menu style, dietary needs, budget range, and any inspiration links."
            />
            <button
              type="button"
              className="md:col-span-2 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black hover:bg-[#b88a1e]"
            >
              Submit (wire to Supabase next)
            </button>
          </form>

          <p className="mt-4 text-xs text-white/60">
            Pork-free by default (pork available upon request).
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-white/60">
          © {new Date().getFullYear()} Smothered with Love Catering • Delaware Valley
        </div>
      </footer>
    </div>
  );
}
