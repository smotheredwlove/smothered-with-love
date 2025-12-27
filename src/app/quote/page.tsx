import Link from "next/link";

export default function QuotePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/" className="text-sm text-white/70 hover:text-white">← Back home</Link>
      <h1 className="mt-4 text-4xl font-semibold">Get a Quote</h1>
      <p className="mt-3 max-w-2xl text-white/70">
        Share details and we’ll respond with a tailored proposal.
      </p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <form className="grid gap-4 md:grid-cols-2">
          <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none" placeholder="Name" />
          <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none" placeholder="Email" />
          <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none" placeholder="Phone" />
          <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none" placeholder="Event Type" />
          <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none" placeholder="City" />
          <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none" placeholder="State" />
          <textarea className="md:col-span-2 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none" rows={6}
            placeholder="Guest count, service style, menu category, dietary needs, budget range, inspiration links..." />
          <button type="button" className="md:col-span-2 rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black hover:bg-[#b88a1e]">
            Submit (Supabase wiring next)
          </button>
        </form>
      </div>
    </div>
  );
}
