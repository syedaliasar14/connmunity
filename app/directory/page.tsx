import DirectoryBrowser from "./directory-browser";

type DirectoryPageProps = {
  searchParams: Promise<{ q?: string; category?: string; location?: string }>;
};

export default async function DirectoryPage({ searchParams }: DirectoryPageProps) {
  const filters = await searchParams;
  return (
    <>
      <section className="border-b border-ink pb-[30px] pt-[49px]">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase leading-[1.3]"><span className="inline-block size-2 rounded-full bg-poppy" />The people index / 001—∞</span>
        <h1 className="mb-[10px] mt-[14px] text-[clamp(44px,7vw,74px)] font-bold leading-[.96] tracking-[-4px]">Find your people.</h1>
        <p className="m-0 max-w-[550px] text-sm leading-[1.7] text-[#55544e]">Artists, makers, and creative pals doing their thing all across Connecticut. The good stuff is right here.</p>
      </section>
      <DirectoryBrowser initialQuery={filters.q ?? ""} initialCategory={filters.category ?? "All work"} initialLocation={filters.location ?? "Everywhere"} />
    </>
  );
}