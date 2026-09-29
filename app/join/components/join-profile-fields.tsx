import { categories, locations } from "@/lib/creatives";

const fieldClass = "flex flex-col gap-[7px]";
const labelClass = "font-mono text-[10px] font-bold";
const controlClass = "min-h-[43px] w-full border border-line bg-transparent px-3 py-[11px] font-mono text-[11px] leading-[1.5]";

function TextField({ id, label, name, placeholder, type = "text", required = true }: { id: string; label: string; name: string; placeholder: string; type?: string; required?: boolean }) {
  return (
    <div className={fieldClass}>
      <label className={labelClass} htmlFor={id}>{label}</label>
      <input className={`${controlClass} placeholder:text-[#96958e]`} id={id} name={name} placeholder={placeholder} type={type} required={required} />
    </div>
  );
}

function SelectField({ id, label, placeholder, options, extraOption }: { id: string; label: string; placeholder: string; options: string[]; extraOption: string }) {
  return (
    <div className={fieldClass}>
      <label className={labelClass} htmlFor={id}>{label}</label>
      <select className={controlClass} id={id} name={id === "join-location" ? "location" : "category"} required defaultValue="">
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => <option key={option}>{option}</option>)}
        <option>{extraOption}</option>
      </select>
    </div>
  );
}

export default function JoinProfileFields() {
  return (
    <div className="my-[18px] grid grid-cols-2 gap-[15px] max-[480px]:grid-cols-1">
      <TextField id="join-name" label="YOUR NAME *" name="name" placeholder="The name people know you by" />
      <TextField id="join-discipline" label="WHAT DO YOU DO? *" name="discipline" placeholder="Illustrator, maker, multi-hyphenate..." />
      <SelectField id="join-location" label="WHERE ARE YOU? *" placeholder="Pick your neck of the woods" options={locations} extraOption="Somewhere else in CT" />
      <SelectField id="join-category" label="YOUR KIND OF THING *" placeholder="Choose a category" options={categories} extraOption="Other / many things" />
      <TextField id="join-email" label="EMAIL ADDRESS *" name="email" type="email" placeholder="you@somewhere.com" />
      <TextField id="join-link" label="A LINK TO YOUR WORK" name="link" type="url" placeholder="https://" required={false} />
      <div className="col-span-full flex flex-col gap-[7px] max-[480px]:col-span-1">
        <label className={labelClass} htmlFor="join-bio">A FEW WORDS ABOUT YOU *</label>
        <textarea className={`${controlClass} min-h-[105px] resize-y placeholder:text-[#96958e]`} id="join-bio" name="bio" placeholder="What do you make? What are you excited about? Keep it you." required maxLength={500} />
      </div>
    </div>
  );
}