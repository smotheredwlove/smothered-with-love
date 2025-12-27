import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/logo.png"
              alt="Smothered with Love Catering"
              width={46}
              height={46}
              className="rounded-full"
              priority
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">Smothered with Love</div>
              <div className="text-xs text-white/60">Catering • Delaware Valley</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-white/75 hover:text-white no-underline" href="#menus">
              Menus
            </a>
            <a className="text-sm text-white/75 hover:text-white no-underline" href="#services">
              Services
            </a>
            <a className="text-sm text-white/75 hover:text-white no-underline" href="#gallery">
              Gallery
            </a>
            <a className="text-sm text-white/75 hover:text-white no-underline" href="#quote">
              Get a Quote
            </a>
          </nav>

          <a
            href="#quote"
            className="no-underline rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/15 hover:bg-[#b88a1e]"
          >
            Book / Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-64 w-[900px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-[700px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:pt-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/80">
                <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                Comfort Classics • Seafood • Healthy • Vegan
                <span className="mx-2 hidden h-3 w-px bg-white/15 md:inline-block" />
                <span className="hidden md:inline">Delaware Valley + Select Travel</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Smothered with Love
                <span className="mt-3 block text-white/85">
                  Elevated comfort classics,
                  <span className="text-white"> served with a personal touch.</span>
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
                From intimate dinners to large celebrations — we bring refined flavors, beautiful
                presentation, and calm execution across the Delaware Valley (and select travel dates).
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#quote"
                  className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/15 hover:bg-[#b88a1e]"
                >
                  Request a Quote
                </a>

                <a
                  href="/menu"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View Menus
                </a>

                <a
                  href="#services"
                  className="text-sm font-semibold text-white/70 hover:text-white"
                >
                  Explore services →
                </a>
              </div>

              {/* trust / quick points */}
              <div className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-3">
                <div>
                  <div className="text-sm font-semibold text-white">Thoughtful Details</div>
                  <div className="mt-1 text-sm text-white/60">Menus tailored to your event.</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Beautiful Presentation</div>
                  <div className="mt-1 text-sm text-white/60">Plating + spreads that wow.</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Calm Execution</div>
                  <div className="mt-1 text-sm text-white/60">On-time, organized, clean.</div>
                </div>
              </div>

              <p className="mt-4 text-xs text-white/55">
                Pork-free by default (pork available upon request).
              </p>
            </div>

            {/* Right */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/40">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/hero.webp"
                    alt="Smothered with Love Catering hero spread"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/55 via-black/10 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(212,175,55,0.20),transparent_55%)]" />
                </div>

                {/* caption bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
                  <div className="text-sm font-semibold text-white">
                    Timeless cuisine, modern presentation
                  </div>
                  <div className="text-xs text-white/60">Refined flavors • Served with love</div>
                </div>
              </div>

              {/* small floating badge */}
              <div className="pointer-events-none absolute -bottom-5 left-5 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white/70 backdrop-blur">
                Ideal for weddings, corporate events, milestones & celebrations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENUS */}
      <section id="menus" className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Explore the Flavor</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A quick look at the range — menus are tailored to your event, guest count, and preferences.
            </p>
          </div>

          <a
            href="/menu"
            className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            See full menus →
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[
            { title: "Comfort Classics", desc: "Warm, familiar favorites with a refined finish." },
            { title: "Seafood", desc: "Fresh, savory, and beautifully presented." },
            { title: "Healthy", desc: "Clean options that still feel indulgent." },
            { title: "Plant-Based", desc: "Bold flavor, fully vegan-friendly." },
          ].map((x) => (
            <div
              key={x.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 transition hover:bg-white/[0.05]"
            >
              <div className="text-sm font-semibold text-[#d4af37]">{x.title}</div>
              <div className="mt-2 text-sm text-white/75">{x.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/55">
          Pork-free by default (pork available upon request).
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Services</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              Choose your service level — we’ll tailor the menu, staffing, and flow to your venue and guest count.
            </p>
          </div>
          <a
            href="#quote"
            className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
          >
            Tell us about your event →
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 transition hover:bg-white/[0.05]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Drop-Off Catering</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Simple + elegant
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Perfect for meetings, small gatherings, and casual celebrations.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>• Delivery + organized setup</li>
              <li>• Clear labeling + serving guidance</li>
              <li>• Add-ons available (warming, utensils, chafers)</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 transition hover:bg-white/[0.05]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Full-Service Buffet</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Most popular
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Staffed service with polished presentation and smooth guest flow.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>• Setup, service, and breakdown</li>
              <li>• Buffet styling + replenishment</li>
              <li>• Professional pace + clean finish</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 transition hover:bg-white/[0.05]">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Chef On-Site</h3>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                Premium
              </span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              A higher-touch experience for select events and elevated menus.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/65">
              <li>• Fresh finishing + on-site coordination</li>
              <li>• Enhanced plating + pacing</li>
              <li>• Ideal for intimate dinners and VIP moments</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h3 className="text-lg font-semibold">Travel / Nationwide Requests</h3>
            <div className="text-sm text-white/60">Based in the Delaware Valley • Select travel dates</div>
          </div>
          <p className="mt-2 text-sm text-white/70">
            Travel-based catering and curated partner support depend on event size, date, and location.
            Share your details and we’ll confirm what’s possible.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Gallery</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Add event photos, platters, plated dishes, and behind-the-scenes moments.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-black/20" />
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Get a Quote</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Share your event details and we’ll respond with a tailored proposal.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30">
          <form className="grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/25"
              placeholder="Name"
            />
            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/25"
              placeholder="Email"
            />
            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/25"
              placeholder="Phone"
            />
            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/25"
              placeholder="Event Type (Wedding, Corporate, Birthday...)"
            />
            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/25"
              placeholder="City"
            />
            <input
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/25"
              placeholder="State"
            />
            <textarea
              className="md:col-span-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-white/25"
              rows={5}
              placeholder="Tell us guest count, date, menu style, dietary needs, budget range, and any inspiration links."
            />
            <button
              type="button"
              className="md:col-span-2 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-[#d4af37]/15 hover:bg-[#b88a1e]"
            >
              Submit (wire to Supabase next)
            </button>
          </form>

          <p className="mt-4 text-xs text-white/55">
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
