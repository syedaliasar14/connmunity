export default function JoinIntro() {
  return (
    <div>
      <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase leading-[1.3]">
        <span className="inline-block size-2 rounded-full bg-poppy" />
        YOUR CORNER OF THE INTERNET
      </span>
      <h1 className="mb-4 mt-3.5 text-[clamp(46px,6vw,74px)] font-bold leading-[.92] tracking-[-4px]">
        Make yourself at home.
      </h1>
      <p className="max-w-[370px] text-sm leading-[1.75] text-[#55544e]">
        Conn.munity is better with you in it. Put a little bit about your work out there and let good things find their way to you.
      </p>
      <div className="mt-10 max-w-[330px] -rotate-[1.5deg] border border-ink bg-acid px-3.75 py-3.5 font-mono text-[10px] leading-[1.7] shadow-[3px_3px_0_#171714] max-tablet:mt-5.5">
        ✳ NO APPLICATION. NO GATEKEEPING.<br />
        Just a place for creative people to find each other.
      </div>
    </div>
  );
}