import DirectoryBrowser from "./directory-browser";

type DirectoryPageProps = {
  searchParams: Promise<{ q?: string; category?: string; location?: string }>;
};

export default async function DirectoryPage({ searchParams }: DirectoryPageProps) {
  const filters = await searchParams;
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-4 p-8 text-center">
        <span className="text-6xl font-bold">Coming Soon</span>
        <p className="max-w-md text-neutral-500">
          We&apos;re in the early stages of building Connmunity, and the directory is on the way. Join the waitlist to be among the first to know when it launches.
        </p>
      </main>
      {/* 
      <section className="border- border-ink pb-7.5 pt-12.25">
        <h1 className="mb-2.5 mt-3.5 text-[clamp(44px,7vw,74px)] font-bold leading-[.96] tracking-[-4px]">
          Find your people.
        </h1>
        <p className="m-0 max-w-[550px] text-sm leading-[1.7] text-[#55544e]">
          Artists, makers, and creative peers doing their thing all across Connecticut. Find the people who are right for you.
        </p>
      </section>
      <DirectoryBrowser initialQuery={filters.q ?? ""}
        initialCategory={filters.category ?? "All work"}
        initialLocation={filters.location ?? "Everywhere"}
      /> */}
    </>
  );
}