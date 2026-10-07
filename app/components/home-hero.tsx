import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { creatives } from "@/lib/creatives";

export default function HomeHero() {
  return (
    <section className="relative grid grid-cols-[minmax(0,1.12fr)_minmax(320px,.88fr)] items-center gap-9.5 border-b border-ink py-17 pb-16 max-tablet:grid-cols-1 max-tablet:gap-1.5 max-tablet:py-12 max-tablet:pb-9.5">
      <div className="relative z-1">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase leading-[1.3]">
          <span className="inline-block size-2 rounded-full bg-poppy" />
          A tiny corner of the internet, CT
        </span>
        <h1 className="mb-5 mt-4.75 max-w-[690px] text-[clamp(56px,7.2vw,96px)] font-extrabold leading-[.89] tracking-[-5px] max-tablet:max-w-[580px] max-tablet:text-[clamp(56px,13vw,88px)] max-tablet:tracking-[-4px] max-mobile:text-[clamp(49px,13vw,64px)] max-mobile:tracking-[-3.5px]">
          Your people<br />are <span className="relative z-0 whitespace-nowrap after:absolute after:-bottom-0.5 after:-left-0.75 after:-right-2 after:-z-10 after:h-4.75 after:-rotate-[1.7deg] after:bg-acid after:content-['']">out there.</span>
        </h1>
        <p className="mb-6.5 max-w-[390px] text-[15px] leading-[1.7] text-[#44433e] max-mobile:text-[13px]">
          A living directory of Connecticut creatives. Find your next collaborator, commission someone local, or just see what your neighbors are making.
        </p>
        <form className="flex min-h-13.5 w-full max-w-[440px] items-center gap-2.5 border border-ink bg-surface p-1.25 pl-3.5 shadow-print" action="/directory">
          <Search size={17} aria-hidden="true" />
          <input className="min-w-0 flex-1 border-0 bg-transparent font-mono text-xs outline-none" name="q" aria-label="Search creatives" placeholder="Try “illustrator” or “New Haven”" />
          <button className="grid size-10.5 shrink-0 place-items-center border-0 bg-ink text-white hover:bg-signal" aria-label="Search directory" type="submit">
            <ArrowRight size={19} />
          </button>
        </form>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <Link className="inline-flex min-h-11.5 items-center justify-center gap-2.5 border border-ink bg-ink px-4.25 font-mono text-[11px] font-bold text-white no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-[3px_3px_0_#171714] max-mobile:px-2.5 max-mobile:text-[10px]" href="/directory">
            Explore the directory <ArrowRight size={15} />
          </Link>
          <Link className="inline-flex min-h-11.5 items-center justify-center gap-2.5 border border-ink px-4.25 font-mono text-[11px] font-bold no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-surface hover:shadow-[3px_3px_0_#171714] max-mobile:px-2.5 max-mobile:text-[10px]" href="/join">
            Add your name +
          </Link>
        </div>
      </div>
      
      <div className="relative grid min-h-[400px] grid-cols-2 items-center gap-3.25 max-tablet:mx-auto max-tablet:min-h-[310px] max-tablet:w-full max-tablet:max-w-[460px] max-mobile:min-h-[265px]" aria-label="A peek at Connecticut's creative community">
        <span className="absolute left-[47%] top-5.75 font-mono text-[35px] font-bold leading-none text-signal" aria-hidden="true">✳</span>
        <div className="relative h-[280px] -rotate-1 overflow-hidden border border-ink bg-[#deddd4] grayscale max-tablet:h-[230px] max-mobile:h-[195px]">
          <Image className="size-full object-cover contrast-108"
            src={creatives[0].photo} alt="Illustrator Mara James"
            width={600} height={760} unoptimized priority
          />
        </div>
        <div className="relative mt-19 h-[225px] rotate-1 overflow-hidden border border-ink bg-[#deddd4] grayscale max-tablet:mt-13 max-tablet:h-[190px] max-mobile:mt-12 max-mobile:h-40">
          <Image className="size-full object-cover contrast-108"
            src={creatives[1].photo} alt="Photographer Eli Rivera"
            width={600} height={760} unoptimized priority
          />
        </div>
        <span className="absolute bottom-5 -left-1.25 z-2 -rotate-1 border border-ink bg-acid px-3 py-2.5 font-mono text-[10px] font-bold leading-[1.4] shadow-[3px_3px_0_#171714] max-mobile:bottom-2">
          REAL PEOPLE.<br />REAL GOOD WORK.
        </span>
        <span className="absolute -right-1.25 top-4.25 grid size-19.75 rotate-10 place-items-center rounded-full border border-ink bg-poppy p-2.5 text-center font-mono text-[9px] font-bold leading-[1.3] text-white max-mobile:size-16.5 max-mobile:text-[8px]">
          INDEPENDENT<br />BY NATURE<br />✳ CT MADE
        </span>
      </div>
    </section>
  );
}