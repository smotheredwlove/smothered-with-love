import Link from "next/link";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/" className="text-sm text-white/70 hover:text-white">← Back home</Link>
      <h1 className="mt-4 text-4xl font-semibold">Gallery</h1>
      <p className="mt-3 max-w-2xl text-white/70">
        Add event photos, plating shots, and 5–8 second clips.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-3xl border border-white/10 bg-white/5" />
        ))}
      </div>
    </div>
  );
}
