"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import JoinProfileFields from "./components/join-profile-fields";

export default function JoinForm() {
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/waitlist-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.get("name"), email: formData.get("email") }),
      });
      const data = await response.json();
      if (!response.ok) {
        setStatus({ type: "error", message: data.error ?? "Something went wrong. Please try again." });
        return;
      }
      setStatus({ type: "success", message: data.message });
      form.reset();
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="border border-ink rounded-md bg-surface p-5.75 shadow-[5px_5px_0_#171714] max-mobile:p-4.25" onSubmit={handleSubmit}>
      {/* <div className="flex items-center justify-between gap-3 border-b border-dashed border-line pb-3.75 font-mono text-[11px]">
        <span>JOIN THE WAITLIST</span>
        <span className="text-[9px] text-subtle">ALL FIELDS REQUIRED *</span>
      </div> */}
      <JoinProfileFields />
      <button disabled={submitting} className="inline-flex rounded-full min-h-11.5 w-full items-center justify-center gap-2.5 border border-ink bg-ink px-4.25 font-mono text-[11px] font-bold text-white transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-acid hover:text-ink hover:shadow-[3px_3px_0_#171714] disabled:opacity-60" type="submit">
        {submitting ? "Joining..." : "Join the waitlist"} <ArrowRight size={15} />
      </button>
      {status && (
        <p className={`mt-3.5 border border-ink rounded-md p-3 font-mono text-[11px] leading-[1.6] ${status.type === "success" ? "bg-acid" : "bg-surface"}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
