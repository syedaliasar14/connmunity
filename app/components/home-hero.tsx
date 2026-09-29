import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { creatives } from "@/lib/creatives";

export default function HomeHero() {
  return (
    <section className="relative grid grid-cols-[minmax(0,1.12fr)_minmax(320px,.88fr)] items-center gap-[38px] border-b border-ink py-[68px] pb-16 max-[760px]:grid-cols-1 max-[760px]:gap-1.5 max-[760px]:py-12 max-[760px]:pb-[38px]">
      <div className="relative z-[1]">
        <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase leading-[1.3]"><span className="inline-block size-2 rounded-full bg-poppy" />A tiny corner of the internet, CT</span>
        <h1 className="mb-5 mt-[19px] max-w-[690px] text-[clamp(56px,7.2vw,96px)] font-extrabold leading-[.89] tracking-[-5px] max-[760px]:max-w-[580px] max-[760px]:text-[clamp(56px,13vw,88px)] max-[760px]:tracking-[-4px] max-[480px]:text-[clamp(49px,13vw,64px)] max-[480px]:tracking-[-3.5px]">Your people<br />are <span className="relative z-0 whitespace-nowrap after:absolute after:-bottom-0.5 after:-left-[3px] after:-right-2 after:-z-10 after:h-[19px] after:-rotate-[1.7deg] after:bg-acid after:content-['']">out there.</span></h1>
        <p className="mb-[26px] max-w-[390px] text-[15px] leading-[1.7] text-[#44433e] max-[480px]:text-[13px]">A living directory of Connecticut creatives. Find your next collaborator, commission someone local, or just see what your neighbors are making.</p>
        <form className="flex min-h-[54px] w-full max-w-[440px] items-center gap-[10px] border border-ink bg-surface p-[5px] pl-[14px] shadow-print" action="/directory">
          <Search size={17} aria-hidden="true" />
          <input className="min-w-0 flex-1 border-0 bg-transparent font-mono text-xs outline-none" name="q" aria-label="Search creatives" placeholder="Try “illustrator” or “New Haven”" />
          <button className="grid size-[42px] shrink-0 place-items-center border-0 bg-ink text-white hover:bg-signal" aria-label="Search directory" type="submit"><ArrowRight size={19} /></button>
        </form>
        <div className="mt-5 flex flex-wrap gap-[10px]">
          <Link className="inline-flex min-h-[46px] items-center justify-center gap-[10px] border border-ink bg-ink px-[17px] font-mono text-[11px] font-bold text-white no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-[3px_3px_0_#171714] max-[480px]:px-[10px] max-[480px]:text-[10px]" href="/directory">Explore the directory <ArrowRight size={15} /></Link>
          <Link className="inline-flex min-h-[46px] items-center justify-center gap-[10px] border border-ink px-[17px] font-mono text-[11px] font-bold no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-surface hover:shadow-[3px_3px_0_#171714] max-[480px]:px-[10px] max-[480px]:text-[10px]" href="/join">Add your name +</Link>
        </div>
      </div>
      <div className="relative grid min-h-[400px] grid-cols-2 items-center gap-[13px] max-[760px]:mx-auto max-[760px]:min-h-[310px] max-[760px]:w-full max-[760px]:max-w-[460px] max-[480px]:min-h-[265px]" aria-label="A peek at Connecticut's creative community">
        <span className="absolute left-[47%] top-[23px] font-mono text-[35px] font-bold leading-none text-signal" aria-hidden="true">✳</span>
        <div className="relative h-[280px] -rotate-1 overflow-hidden border border-ink bg-[#deddd4] grayscale max-[760px]:h-[230px] max-[480px]:h-[195px]"><Image className="size-full object-cover contrast-[1.08]" src={creatives[0].photo} alt="Illustrator Mara James" width={600} height={760} unoptimized priority /></div>
        <div className="relative mt-[76px] h-[225px] rotate-1 overflow-hidden border border-ink bg-[#deddd4] grayscale max-[760px]:mt-[52px] max-[760px]:h-[190px] max-[480px]:mt-12 max-[480px]:h-40"><Image className="size-full object-cover contrast-[1.08]" src={creatives[1].photo} alt="Photographer Eli Rivera" width={600} height={760} unoptimized priority /></div>
        <span className="absolute bottom-5 left-[-5px] z-[2] -rotate-1 border border-ink bg-acid px-3 py-[10px] font-mono text-[10px] font-bold leading-[1.4] shadow-[3px_3px_0_#171714] max-[480px]:bottom-2">REAL PEOPLE.<br />REAL GOOD WORK.</span>
        <span className="absolute right-[-5px] top-[17px] grid size-[79px] rotate-[10deg] place-items-center rounded-full border border-ink bg-poppy p-[10px] text-center font-mono text-[9px] font-bold leading-[1.3] text-white max-[480px]:size-[66px] max-[480px]:text-[8px]">INDEPENDENT<br />BY NATURE<br />✳ CT MADE</span>
      </div>
    </section>
  );
}