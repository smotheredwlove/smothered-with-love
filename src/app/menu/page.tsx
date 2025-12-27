import Link from "next/link";
import MenuExplorer from "@/components/MenuExplorer";

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link href="/" className="text-sm text-white/70 hover:text-white">← Back home</Link>
      <h1 className="mt-4 text-4xl font-semibold">Menus</h1>
      <p className="mt-3 max-w-2xl text-white/70">
        Filter by category. Pork-free by default; pork available upon request.
      </p>

      <MenuExplorer />
    </div>
  );
}
