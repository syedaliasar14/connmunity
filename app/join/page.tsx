import JoinForm from "./join-form";
import JoinIntro from "./components/join-intro";

export default function JoinPage() {
  return (
    <section className="grid grid-cols-[minmax(0,.8fr)_minmax(360px,1.2fr)] gap-14 py-[50px] pb-[68px] max-[760px]:grid-cols-1 max-[760px]:gap-[30px]">
      <JoinIntro />
      <JoinForm />
    </section>
  );
}