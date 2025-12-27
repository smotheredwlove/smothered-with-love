import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/" className="text-sm text-white/70 hover:text-white">← Back home</Link>
      <h1 className="mt-4 text-4xl font-semibold">About</h1>

      <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-white/75 space-y-4">
        <p>
          <strong>Smothered with Love</strong> is a Delaware Valley-based catering brand serving soul food,
          seafood, healthy options, and vegan meals — always with premium presentation and warm hospitality.
        </p>
        <p>
          Pork-free by default (pork available upon request). We also accept travel and select nationwide
          catering requests based on date, location, and event size.
        </p>
      </div>
    </div>
  );
}
