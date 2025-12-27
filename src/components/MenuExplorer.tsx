"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { menuItems, MenuCategory } from "@/lib/menuData";

const categories: (MenuCategory | "All")[] = ["All", "Soul", "Seafood", "Healthy", "Vegan"];

export default function MenuExplorer() {
  const [active, setActive] = useState<(MenuCategory | "All")>("All");
  const [showPorkByRequest, setShowPorkByRequest] = useState(true);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = active === "All" ? true : item.category === active;
      const matchesPorkRule = showPorkByRequest ? true : !item.porkByRequest;
      return matchesCategory && matchesPorkRule;
    });
  }, [active, showPorkByRequest]);

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={[
              "rounded-full px-4 py-2 text-sm font-semibold transition",
              c === active
                ? "bg-[#d4af37] text-black"
                : "border border-white/15 bg-white/[0.03] text-white/80 hover:bg-white/10",
            ].join(" ")}
          >
            {c}
          </button>
        ))}

        <label className="ml-auto flex items-center gap-2 text-sm text-white/70">
          <input
            type="checkbox"
            checked={showPorkByRequest}
            onChange={(e) => setShowPorkByRequest(e.target.checked)}
            className="h-4 w-4 accent-[#d4af37]"
          />
          Show “pork by request” items
        </label>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <div
            key={`${item.section}-${item.name}`}

            className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(212,175,55,0.06)]"
          >
            <div className="flex gap-4">
              <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                {item.image ? (
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                ) : null}
              </div>

              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3 py-1 text-xs text-[#d4af37]">
                    {item.category}
                  </span>
                </div>

                <p className="mt-1 text-sm text-white/70">{item.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {item.porkByRequest ? (
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                      Pork available by request
                    </span>
                  ) : null}
                  {(item.tags || []).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs text-white/60">
        Note: Pork-free by default. Pork dishes can be prepared upon request.
      </p>
    </div>
  );
}
