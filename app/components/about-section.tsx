const reasons = [
  {
    number: "01",
    title: "Not another feed.",
    body: "No algorithms deciding who gets seen. Just a straightforward directory where everyone takes up the same amount of space.",
  },
  {
    number: "02",
    title: "Genuinely local.",
    body: "Everyone here is making things in Connecticut, from Hartford to New Haven to the quiet corners in between.",
  },
  {
    number: "03",
    title: "Open to everyone.",
    body: "No applications, no gatekeeping, no waiting list. If you make things around here, this is your directory too.",
  },
];

export default function AboutSection() {
  return (
    <section className="border-b border-ink py-15 max-mobile:py-12">
      <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase leading-[1.3]">
        <span className="inline-block size-2 rounded-full bg-poppy" />
        02 / what this is
      </span>
      <div className="mt-3.5 grid grid-cols-[minmax(0,1fr)_minmax(280px,.6fr)] gap-9.5 max-tablet:grid-cols-1 max-tablet:gap-4">
        <h2 className="m-0 max-w-[620px] text-[clamp(28px,4vw,42px)] font-bold leading-[1.05] tracking-[-2px]">
          A directory, <span className="text-signal">not</span> a feed.
        </h2>
        <p className="m-0 max-w-[340px] text-sm leading-[1.7] text-[#44433e]">
          Conn.munity is a living index of the people making Connecticut&apos;s creative scene. Built to be browsed slowly, bookmarked, and actually used.
        </p>
      </div>
      <div className="mt-9.5 grid grid-cols-3 gap-4 max-tablet:grid-cols-1 max-tablet:gap-3">
        {reasons.map((reason) => (
          <div className="border border-ink bg-surface p-5 transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-print" key={reason.number}>
            <span className="font-mono text-[10px] font-bold text-poppy">
              {reason.number} ✳
            </span>
            <h3 className="mb-2 mt-2.5 text-base font-bold leading-[1.2] tracking-[-.5px]">
              {reason.title}
            </h3>
            <p className="m-0 font-mono text-[10px] leading-[1.7] text-subtle">
              {reason.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
