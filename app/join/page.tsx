import JoinForm from "./join-form";
import JoinIntro from "./components/join-intro";

export default function JoinPage() {
  return (
    <section className="grid grid-cols-[minmax(0,.8fr)_minmax(360px,1.2fr)] gap-14 py-12.5 pb-17 max-tablet:grid-cols-1 max-tablet:gap-7.5">
      <JoinIntro />
      <JoinForm />
    </section>
  );
}