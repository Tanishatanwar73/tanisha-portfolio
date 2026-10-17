import { useState } from "react";

const email = "tanishatanwar24@navgurukul.org";
const formEndpoint = `https://formsubmit.co/ajax/${email}`;

function Contact() {
  const [form, setForm] = useState({ name: "", visitorEmail: "", message: "" });
  const [status, setStatus] = useState("idle");
  const updateField = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  const sendMessage = async (event) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, email: form.visitorEmail, message: form.message, _subject: `Portfolio enquiry from ${form.name}`, _template: "table", _honey: "" }),
      });
      if (!response.ok) throw new Error("Message could not be sent");
      setForm({ name: "", visitorEmail: "", message: "" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return <section id="contact" className="portfolio-section contact-section py-20 lg:py-28"><div className="max-w-7xl mx-auto px-6 lg:px-10"><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start"><div><p className="section-kicker font-medium mb-4">Let’s connect</p><h2 className="text-4xl sm:text-5xl font-bold leading-tight">Have a project in mind?</h2><p className="mt-6 text-lg leading-relaxed max-w-lg">I’m always happy to discuss an opportunity, a project, or an idea. Send me a message and I’ll get back to you.</p><div className="mt-9 space-y-4"><a href={`mailto:${email}`} className="contact-detail"><span>EMAIL</span><strong>{email}</strong><b aria-hidden="true">↗</b></a><a href="tel:+918586882758" className="contact-detail"><span>PHONE</span><strong>+91 85868 82758</strong><b aria-hidden="true">↗</b></a><a href="https://www.linkedin.com/in/tanisha73/" target="_blank" rel="noreferrer" className="contact-detail"><span>LINKEDIN</span><strong>Connect with me</strong><b aria-hidden="true">↗</b></a></div></div><form onSubmit={sendMessage} className="portfolio-card contact-form rounded-2xl p-6 sm:p-8 border"><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" required value={form.name} onChange={updateField} placeholder="Your name" /><label htmlFor="contact-email">Your email</label><input id="contact-email" name="visitorEmail" type="email" required value={form.visitorEmail} onChange={updateField} placeholder="you@example.com" /><label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" required rows="5" value={form.message} onChange={updateField} placeholder="Tell me a little about your project or opportunity..." /><input className="contact-honeypot" type="text" name="_honey" tabIndex="-1" autoComplete="off" aria-hidden="true" /><button type="submit" disabled={status === "sending"} className="primary-cta mt-2 w-full rounded-xl px-6 py-3.5 text-white font-bold transition hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70">{status === "sending" ? "Sending…" : "Send message"} <span aria-hidden="true">↗</span></button>{status === "success" && <p className="contact-status success" role="status">Thanks — your message has been sent.</p>}{status === "error" && <p className="contact-status error" role="alert">Something went wrong. Please email me directly instead.</p>}{status === "idle" && <p className="mt-4 text-sm">Your message will be sent directly to my inbox.</p>}</form></div></div></section>;
}

export default Contact;
