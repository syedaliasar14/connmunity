import Image from "next/image";
import type { Creative } from "@/lib/creatives";

export default function ProfileGallery({ creative }: { creative: Creative }) {
  return (
    <div className="min-w-0">
      <div className="h-[430px] overflow-hidden border border-ink bg-[#d7d6cf] max-tablet:h-[min(110vw,480px)] max-mobile:h-[105vw]">
        <Image className="size-full object-cover grayscale contrast-107"
          src={creative.photo} alt={`Portrait of ${creative.name}`}
          width={1000} height={1100} unoptimized priority
        />
      </div>
      <p className="mb-0 mt-2.25 font-mono text-[9px] text-subtle">
        FIG. 01 — {creative.label} / {creative.location.toUpperCase()}
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {creative.work.map((image, index) => (
          <div className="h-[150px] overflow-hidden border border-ink bg-[#d7d6cf] max-mobile:h-[125px]" key={image}>
            <Image className="size-full object-cover grayscale contrast-107"
              src={image} alt={`${creative.name}'s creative work, image ${index + 1}`}
              width={700} height={500} unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}