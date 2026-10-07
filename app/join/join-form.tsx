"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import JoinProfileFields from "./components/join-profile-fields";

export default function JoinForm() {
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmittedName(String(formData.get("name")));
    event.currentTarget.reset();
  }

  return (
    <form className="border border-ink bg-surface p-5.75 shadow-[5px_5px_0_#171714] max-mobile:p-4.25" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between gap-3 border-b border-dashed border-line pb-3.75 font-mono text-[11px]">
        <span>NEW PROFILE / LET&apos;S GO</span>
        <span className="text-[9px] text-subtle">ALL FIELDS REQUIRED *</span>
      </div>
      <JoinProfileFields />
      <button className="inline-flex min-h-11.5 w-full items-center justify-center gap-2.5 border border-ink bg-ink px-4.25 font-mono text-[11px] font-bold text-white transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-[3px_3px_0_#171714]" type="submit">
        Put me in the directory <ArrowRight size={15} />
      </button>
      {submittedName && (
        <p className="mt-3.5 border border-ink bg-acid p-3 font-mono text-[11px] leading-[1.6]" role="status">
          Thanks, {submittedName}! This preview form is ready, but profile publishing isn&apos;t connected yet.
        </p>
      )}
      <p className="mb-0 mt-3 text-center font-mono text-[9px] leading-[1.5] text-subtle">
        By joining, you agree to be a good neighbor. This is a demo form; your info is not saved.
      </p>
    </form>
  );
}