"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-4 text-center text-black bg-[#d4af37] font-bold">
  ✅ IF YOU SEE THIS, YOU’RE EDITING THE RIGHT PAGE.TSX
</div>

      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Brand */}
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

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-white/70 hover:text-white transition-colors" href="#menus">
              Menus
            </a>
            <a className="text-sm text-white/70 hover:text-white transition-colors" href="#services">
              Services
            </a>
            <a className="text-sm text-white/70 hover:text-white transition-colors" href="#gallery">
              Gallery
            </a>
            <a className="text-sm text-white/70 hover:text-white transition-colors" href="#quote">
              Get a Quote
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#quote"
              className="hidden sm:inline-flex rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-black hover:bg-[#b88a1e] transition-colors"
            >
              Book / Quote
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden rounded-xl border border-white/10 bg-white/5 p-2 text-white hover:bg-white/10 transition"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
              <a
                href="#menus"
                className="rounded-xl px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menus
              </a>
              <a
                href="#services"
                className="rounded-xl px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#gallery"
                className="rounded-xl px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#quote"
                className="rounded-xl px-3 py-2 text-white/70 hover:bg-white/5 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </a>

              <a
                href="#quote"
                className="mt-2 rounded-full bg-[#d4af37] px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-[#b88a1e]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book / Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
<section className="relative overflow-hidden">
  {/* background glows */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -top-24 left-1/2 h-64 w-[900px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl" />
    <div className="absolute -bottom-24 left-1/3 h-64 w-[700px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
  </div>

  <div className="mx-auto max-w-6xl px-4 pb-10 pt-10 md:pt-16">
    <div className="grid items-center gap-10 md:grid-cols-2">
      {/* LEFT */}
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
          From intimate dinners to large celebrations — we bring refined flavors, beautiful presentation,
          and calm execution across the Delaware Valley (and select travel dates).
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#quote"
            className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black hover:bg-[#b88a1e] transition-colors"
          >
            Request a Quote
          </a>

          <Link
            href="/menu"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View Menus
          </Link>

          <a
            href="#services"
            className="text-sm font-semibold text-white/60 hover:text-white transition-colors"
          >
            Explore services →
          </a>
        </div>

        {/* trust row */}
        <div className="mt-8 grid gap-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">Thoughtful Details</div>
            <div className="mt-1 text-sm text-white/60">Menus tailored to your event.</div>
          </div>
          <div>
            <div className="text-sm font-semibold">Beautiful Presentation</div>
            <div className="mt-1 text-sm text-white/60">Plating + spreads that wow.</div>
          </div>
          <div>
            <div className="text-sm font-semibold">Calm Execution</div>
            <div className="mt-1 text-sm text-white/60">On-time, organized, clean.</div>
          </div>
        </div>

        <p className="mt-4 text-xs text-white/50">
          Pork-free by default (pork available upon request).
        </p>
      </div>

      {/* RIGHT */}
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
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(212,175,55,0.22),transparent_55%)]" />
          </div>

          {/* “site-like” detail strip */}
          <div className="grid gap-3 border-t border-white/10 px-5 py-4 sm:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-wide text-white/50">Best for</div>
              <div className="text-sm font-semibold text-white/85">Weddings • Corporate • Milestones</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/50">Style</div>
              <div className="text-sm font-semibold text-white/85">Timeless cuisine, modern presentation</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-white/50">Diet-friendly</div>
              <div className="text-sm font-semibold text-white/85">Healthy & Plant-Based ready</div>
            </div>
          </div>
        </div>

        {/* floating badge */}
        <div className="pointer-events-none absolute -bottom-5 left-5 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-xs text-white/70 backdrop-blur">
          Now booking: weekends + select travel dates.
        </div>
      </div>
    </div>
  </div>

  {/* CTA BAND (feels like a real catering site) */}
  <div className="border-t border-white/10 bg-white/[0.02]">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 md:flex-row md:items-center md:justify-between">
      <div className="text-sm text-white/70">
        Planning an event? Tell us your date + guest count and we’ll send a menu + quote tailored to your vibe.
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="#quote"
          className="rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-black hover:bg-[#b88a1e]"
        >
          Start a Quote
        </a>
        <a
          href="#menus"
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
        >
          See Menu Styles
        </a>
      </div>
    </div>
  </div>
</section>

{/* MENUS */}
<section id="menus" className="mx-auto max-w-6xl px-4 pb-16 pt-10">
  <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start">
    {/* Left */}
    <div>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Menu Styles</h2>
      <p className="mt-3 max-w-2xl text-white/70">
        Pick the lane — we’ll tailor selections to your event, guest count, and dietary needs.
        (Pork-free by default; available upon request.)
      </p>

      <div className="mt-7 grid gap-5 md:grid-cols-2">
        {[
          {
            title: "Comfort Classics",
            desc: "Warm favorites with a refined finish — the ‘everybody’s happy’ menu.",
            tag: "Most requested",
          },
          {
            title: "Seafood",
            desc: "From buttery bites to elegant platters — fresh, savory, and elevated.",
            tag: "Signature",
          },
          {
            title: "Healthy",
            desc: "Clean options that still feel indulgent — balanced, flavorful, beautiful.",
            tag: "Light & satisfying",
          },
          {
            title: "Plant-Based",
            desc: "Bold flavor, vegan-friendly — not ‘diet food,’ just great food.",
            tag: "Vegan ready",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 transition hover:bg-white/[0.05]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-lg font-semibold text-white">{x.title}</div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
                {x.tag}
              </span>
            </div>
            <div className="mt-2 text-sm text-white/70">{x.desc}</div>
          </div>
        ))}
      </div>
    </div>

    {/* Right “Menu PDF / quick actions” */}
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30">
      <div className="text-xs uppercase tracking-wide text-white/50">Quick actions</div>
      <div className="mt-2 text-xl font-semibold">Want the full menu?</div>
      <p className="mt-2 text-sm text-white/70">
        We’ll send a curated menu based on your event type, headcount, and preferences.
      </p>

      <div className="mt-5 grid gap-3">
        <a
          href="#quote"
          className="rounded-full bg-[#d4af37] px-5 py-2.5 text-center text-sm font-semibold text-black hover:bg-[#b88a1e]"
        >
          Request a Menu + Quote
        </a>
        <Link
          href="/menu"
          className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/10"
        >
          View Menu Page
        </Link>
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/65">
        <div className="font-semibold text-white/85">Good to know</div>
        <ul className="mt-2 space-y-1">
          <li>• Dietary needs welcomed</li>
          <li>• Vegetarian & vegan friendly</li>
          <li>• Pork-free by default</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* SERVICES */}
<section id="services" className="mx-auto max-w-6xl px-4 pb-16">
  <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
    <div>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Catering Services</h2>
      <p className="mt-2 max-w-2xl text-white/70">
        Built like a real catering company: clear service levels, polished execution, and options that scale.
      </p>
    </div>
    <a
      href="#quote"
      className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
    >
      Get availability → 
    </a>
  </div>

  <div className="mt-8 grid gap-5 md:grid-cols-3">
    {[
      {
        title: "Drop-Off Catering",
        badge: "Best for meetings + small events",
        desc: "Delivered on time with organized setup and clear serving guidance.",
        bullets: ["Delivery + setup", "Labeling + serving instructions", "Add-ons: chafers, utensils, warming"],
      },
      {
        title: "Full-Service Buffet",
        badge: "Most popular",
        desc: "Staffed service with buffet styling, replenishment, and clean breakdown.",
        bullets: ["Setup, service, breakdown", "Buffet styling + flow", "Professional pace + clean finish"],
        highlight: true,
      },
      {
        title: "Chef On-Site",
        badge: "Premium experience",
        desc: "A higher-touch, elevated service level for select menus and intimate VIP moments.",
        bullets: ["On-site finishing + timing", "Enhanced plating + presentation", "Ideal for intimate dinners"],
      },
    ].map((s) => (
      <div
        key={s.title}
        className={[
          "rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30 transition hover:bg-white/[0.05]",
          s.highlight ? "ring-1 ring-[#d4af37]/30" : "",
        ].join(" ")}
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <div className="mt-1 text-sm text-white/60">{s.badge}</div>
          </div>
          {s.highlight && (
            <span className="rounded-full bg-[#d4af37] px-3 py-1 text-xs font-semibold text-black">
              Most requested
            </span>
          )}
        </div>

        <p className="mt-3 text-sm text-white/70">{s.desc}</p>

        <ul className="mt-4 space-y-2 text-sm text-white/60">
          {s.bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>

        <a
          href="#quote"
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
        >
          Request pricing
        </a>
      </div>
    ))}
  </div>

  <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30">
    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <h3 className="text-lg font-semibold">Travel / Nationwide Requests</h3>
      <div className="text-sm text-white/60">Delaware Valley • Select travel dates</div>
    </div>
    <p className="mt-2 text-sm text-white/70">
      For larger events outside the region, travel-based catering and curated partner support depend on
      event size, date, and location. Send details and we’ll confirm what’s possible.
    </p>
    <div className="mt-4 flex flex-wrap gap-3">
      <a
        href="#quote"
        className="rounded-full bg-[#d4af37] px-5 py-2 text-sm font-semibold text-black hover:bg-[#b88a1e]"
      >
        Ask about travel
      </a>
      <a
        href="#quote"
        className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
      >
        Request a proposal
      </a>
    </div>
  </div>
</section>


      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Gallery</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Event photos, platters, plated dishes, and behind-the-scenes moments.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Link
              href="/gallery"
              key={i}
              className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm text-white/35">Gallery Image {i + 1}</span>
              </div>
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-black/20" />
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
          >
            View full gallery →
          </Link>
        </div>
      </section>

      {/* QUOTE */}
      <section id="quote" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Get a Quote</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Share your event details and we&apos;ll respond with a tailored proposal.
        </p>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg shadow-black/30">
          <form className="grid gap-4 md:grid-cols-2">
            {["Name", "Email", "Phone", "Event Type (Wedding, Corporate, Birthday...)", "City", "State"].map((ph) => (
              <input
                key={ph}
                className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25 transition-colors"
                placeholder={ph}
              />
            ))}

            <textarea
              className="md:col-span-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25 transition-colors resize-none"
              rows={5}
              placeholder="Tell us guest count, date, menu style, dietary needs, budget range, and any inspiration links."
            />

            <button
              type="button"
              className="md:col-span-2 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black hover:bg-[#b88a1e] transition-colors"
            >
              Submit Request
            </button>
          </form>

          <p className="mt-4 text-xs text-white/50">
            Pork-free by default (pork available upon request).
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Smothered with Love Catering" width={40} height={40} className="rounded-full" />
            <span className="text-sm text-white/60">Smothered with Love Catering</span>
          </div>
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Smothered with Love Catering • Delaware Valley
          </div>
        </div>
      </footer>
    </div>
  );
}
