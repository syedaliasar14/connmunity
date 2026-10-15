const fieldClass = "flex flex-col gap-1.75";
const labelClass = "font-mono text-[10px] font-bold";
const controlClass = "min-h-10.75 rounded-md w-full border border-line bg-transparent px-3 py-2.75 font-mono text-[11px] leading-[1.5] placeholder:text-[#96958e]";

function TextField({ id, label, name, placeholder, type = "text" }: { id: string; label: string; name: string; placeholder: string; type?: string }) {
  return (
    <div className={fieldClass}>
      <label className={labelClass} htmlFor={id}>{label}</label>
      <input className={controlClass} id={id} name={name} placeholder={placeholder} type={type} required />
    </div>
  );
}

export default function JoinProfileFields() {
  return (
    <div className="my-4.5 grid grid-cols-1 gap-3.75">
      <TextField id="join-name" label="YOUR NAME *" name="name" placeholder="your name" />
      <TextField id="join-email" label="EMAIL ADDRESS *" name="email" type="email" placeholder="you@somewhere.com" />
    </div>
  );
}
