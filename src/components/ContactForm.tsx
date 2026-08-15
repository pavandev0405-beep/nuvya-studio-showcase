import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { ActionButton } from "@/components/ui/action";

type Fields = Record<string, string>;

const initial: Fields = {
  name: "",
  email: "",
  phone: "",
  city: "",
  propertyType: "",
  bedrooms: "",
  area: "",
  budget: "",
  style: "",
  timeline: "",
  message: "",
};

const fieldClass =
  "w-full border-0 border-b border-border bg-transparent pb-3 pt-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-clay";

const labelClass = "eyebrow block mb-2";

function validate(values: Fields) {
  const errors: Fields = {};
  if (!values['name']?.trim()) errors['name'] = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values['email'] ?? ""))
    errors['email'] = "Enter a valid email address.";
  if ((values['phone'] ?? "").replace(/\D/g, "").length < 8)
    errors['phone'] = "Enter a reachable phone number.";
  if (!values['city']?.trim()) errors['city'] = "Which city is the home in?";
  if ((values['message'] ?? "").trim().length < 10)
    errors['message'] = "A sentence or two about the space helps us prepare.";
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Fields>({});
  const [sent, setSent] = useState(false);

  const set = (key: string) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSent(true);
      setValues(initial);
    }
  };

  if (sent) {
    return (
      <div className="hairline flex flex-col items-start gap-5 py-16">
        <Check className="h-6 w-6 stroke-[1.2] text-clay" aria-hidden />
        <h3 className="text-3xl">Thank you — your enquiry is with us.</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          One of the three of us will read it personally and reply within two working
          days to schedule a consultation.
        </p>
        <ActionButton variant="outline" onClick={() => setSent(false)}>
          Send another enquiry
        </ActionButton>
      </div>
    );
  }

  const field = (
    key: string,
    label: string,
    props: { type?: string; placeholder?: string } = {},
  ) => (
    <div>
      <label className={labelClass} htmlFor={key}>
        {label}
      </label>
      <input
        id={key}
        name={key}
        type={props.type ?? "text"}
        placeholder={props.placeholder ?? ""}
        value={values[key] ?? ""}
        onChange={set(key)}
        aria-invalid={Boolean(errors[key])}
        className={fieldClass}
      />
      {errors[key] ? (
        <p className="mt-2 text-xs text-destructive">{errors[key]}</p>
      ) : null}
    </div>
  );

  const select = (key: string, label: string, options: string[]) => (
    <div>
      <label className={labelClass} htmlFor={key}>
        {label}
      </label>
      <select
        id={key}
        name={key}
        value={values[key] ?? ""}
        onChange={set(key)}
        className={`${fieldClass} appearance-none`}
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
      {field("name", "Name", { placeholder: "Your full name" })}
      {field("email", "Email", { type: "email", placeholder: "you@email.com" })}
      {field("phone", "Phone", { type: "tel", placeholder: "+91" })}
      {field("city", "City", { placeholder: "Hyderabad" })}
      {select("propertyType", "Property Type", [
        "Apartment",
        "Villa",
        "Independent House",
        "Duplex / Penthouse",
      ])}
      {select("bedrooms", "Number of Bedrooms", ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"])}
      {field("area", "Approximate Area", { placeholder: "e.g. 1,450 sq ft" })}
      {select("budget", "Budget Range", [
        "Under ₹10 L",
        "₹10 L – ₹25 L",
        "₹25 L – ₹50 L",
        "₹50 L +",
      ])}
      {select("style", "Preferred Design Style", [
        "Warm Minimalism",
        "Contemporary",
        "Organic Modern",
        "Modern Luxury",
        "Not sure yet",
      ])}
      {select("timeline", "Project Timeline", [
        "Immediately",
        "1 – 3 months",
        "3 – 6 months",
        "Just exploring",
      ])}

      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values['message'] ?? ""}
          onChange={set("message")}
          placeholder="Tell us about your space and how you'd like to live in it."
          aria-invalid={Boolean(errors['message'])}
          className={`${fieldClass} resize-none`}
        />
        {errors['message'] ? (
          <p className="mt-2 text-xs text-destructive">{errors['message']}</p>
        ) : null}
      </div>

      <div className="sm:col-span-2">
        <ActionButton type="submit" variant="solid" className="w-full sm:w-auto">
          Start My Project
        </ActionButton>
      </div>
    </form>
  );
}
