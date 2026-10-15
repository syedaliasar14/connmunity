const reasons = [
  {
    number: "01",
    title: "Connecting your community",
    body: "The members of your Conn.munity are dedicated and diligent artists and creatives who are ready to finally have a place to come together and connect with one another.",
  },
  {
    number: "02",
    title: "Not another feed.",
    body: "Conn.munity is your living rolodex for creatives who are collaborating in Connecticut. Built to be browsed, bookmarked, and actually used.",
  },
  {
    number: "03",
    title: "Genuinely local.",
    body: "From tip to tail, everyone in conn.munity is creating work from right here in Connecticut.",
  },
];

export default function AboutSection() {
  return (
    <section className="border-b border-ink py-15 max-mobile:py-12" id="about">
      {/* <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase leading-[1.3]">
        <span className="inline-block size-2 rounded-full bg-poppy" />
        02 / what this is
      </span> */}
      <div className="mt-3.5 grid grid-cols-[minmax(0,1fr)_minmax(280px,.6fr)] gap-9.5 max-tablet:grid-cols-1 max-tablet:gap-4">
        <h2 className="m-0 max-w-[620px] text-[42px] italic font-bold leading-[1.05] tracking-[-2px]">
          not just a collection, a <span className="bg-acid px-1 text-ink rounded-full rotate-[1.7deg]">conn.munity</span>
        </h2>
        <p className="m-0 max-w-[340px] text-sm leading-[1.7] text-[#44433e] font-mono">
          <span className="bg-acid px-1 font-semibold text-ink rounded-full">Conn.munity</span> is your online resource common connection point for Connecticut Creatives. A place where clients and fellow creatives can find, contact, and collaborate with each other.
        </p>
      </div>
      <div className="mt-9.5 grid grid-cols-3 gap-4 max-tablet:grid-cols-1 max-tablet:gap-3">
        {reasons.map((reason) => (
          <div className="border border-ink rounded-md bg-surface p-5 transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-print" key={reason.number}>
            <span className="inline-block bg-acid px-1.5 py-0.5 font-mono text-[10px] font-bold text-ink">
              {reason.number}
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
