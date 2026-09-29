import { Search } from "lucide-react";
import { categories, locations } from "@/lib/creatives";

type DirectoryFiltersProps = {
  query: string;
  onQueryChange: (query: string) => void;
  category: string;
  onCategoryChange: (category: string) => void;
  location: string;
  onLocationChange: (location: string) => void;
};

export default function DirectoryFilters({ query, onQueryChange, category, onCategoryChange, location, onLocationChange }: DirectoryFiltersProps) {
  return (
    <div className="grid grid-cols-[minmax(200px,1fr)_190px_190px] gap-[10px] border-b border-line py-5 max-[760px]:grid-cols-2 max-[480px]:grid-cols-1" role="search">
      <label className="flex min-h-[46px] w-full items-center gap-[9px] border border-ink bg-surface px-3 font-mono text-[11px] max-[760px]:col-span-2 max-[480px]:col-span-1">
        <Search size={16} aria-hidden="true" />
        <input className="w-full border-0 bg-transparent font-[inherit] outline-none" value={query} onChange={(event) => onQueryChange(event.target.value)} aria-label="Search by name, discipline, or city" placeholder="Search name, craft, or place..." />
      </label>
      <label><span className="sr-only">Filter by category</span><select className="min-h-[46px] w-full cursor-pointer border border-ink bg-surface px-3 font-mono text-[11px]" value={category} onChange={(event) => onCategoryChange(event.target.value)}><option>All work</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label><span className="sr-only">Filter by location</span><select className="min-h-[46px] w-full cursor-pointer border border-ink bg-surface px-3 font-mono text-[11px]" value={location} onChange={(event) => onLocationChange(event.target.value)}><option>Everywhere</option>{locations.map((item) => <option key={item}>{item}</option>)}</select></label>
    </div>
  );
}