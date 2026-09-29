import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { creatives } from "@/lib/creatives";
import ProfileDetails from "../components/profile-details";
import ProfileGallery from "../components/profile-gallery";

type ProfilePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return creatives.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const creative = creatives.find((person) => person.slug === slug);
  return creative ? { title: creative.name, description: `${creative.discipline} in ${creative.location}.` } : {};
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { slug } = await params;
  const creative = creatives.find((person) => person.slug === slug);
  if (!creative) notFound();

  return (
    <>
      <div className="flex items-center justify-between gap-4 border-b border-ink py-6 pb-[19px]">
        <Link className="inline-flex min-h-[46px] items-center justify-center gap-[10px] border border-ink px-[17px] font-mono text-[11px] font-bold no-underline transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-surface hover:shadow-[3px_3px_0_#171714]" href="/directory"><ArrowLeft size={14} /> Back to the directory</Link>
        <span className="font-mono text-[10px] font-semibold uppercase">A CONN.MUNITY PROFILE / 00{creatives.indexOf(creative) + 1}</span>
      </div>
      <section className="grid grid-cols-[minmax(0,1.02fr)_minmax(330px,.98fr)] gap-12 py-[38px] pb-[60px] max-[760px]:grid-cols-1 max-[760px]:gap-[26px]">
        <ProfileGallery creative={creative} />
        <ProfileDetails creative={creative} />
      </section>
    </>
  );
}