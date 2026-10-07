"use client";

import { useState } from "react";
import CreativeGrid from "@/components/creative-grid";
import { creatives } from "@/lib/creatives";
import DirectoryFilters from "./components/directory-filters";

type DirectoryBrowserProps = {
  initialQuery: string;
  initialCategory: string;
  initialLocation: string;
};

export default function DirectoryBrowser({ initialQuery, initialCategory, initialLocation }: DirectoryBrowserProps) {
  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [location, setLocation] = useState(initialLocation);
  const filtered = creatives.filter((creative) => {
    const terms = `${creative.name} ${creative.discipline} ${creative.category} ${creative.location}`.toLowerCase();
    const matchesQuery = terms.includes(query.trim().toLowerCase());
    const matchesCategory = category === "All work" || creative.category === category;
    const matchesLocation = location === "Everywhere" || creative.location.startsWith(location);
    return matchesQuery && matchesCategory && matchesLocation;
  });

  return (
    <>
      <DirectoryFilters query={query} onQueryChange={setQuery} category={category} onCategoryChange={setCategory} location={location} onLocationChange={setLocation} />
      <div className="my-3.75 flex justify-between gap-3 font-mono text-[10px] text-subtle">
        <span>{filtered.length} {filtered.length === 1 ? "creative" : "creatives"} found</span>
        <span>ALL OVER CONNECTICUT ↘</span>
      </div>
      <CreativeGrid creatives={filtered} badgeFor={(creative) => creative.category} className="mb-15" />
    </>
  );
}