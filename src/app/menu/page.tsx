import Link from "next/link";

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/" className="text-sm text-white/70 hover:text-white">← Back home</Link>
      <h1 className="mt-4 text-4xl font-semibold">Menus</h1>
      <p className="mt-3 max-w-2xl text-white/70">
        Filter by category. Pork-free by default; pork available upon request.
      </p>

      <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
        <p className="text-white/70">
          Next step: we’ll drop in the dynamic Menu Explorer with filters (Soul / Seafood / Healthy / Vegan).
        </p>
      </div>
    </div>
  );
}
