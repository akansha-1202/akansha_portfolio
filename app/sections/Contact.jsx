"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import { profile, socialImgs } from "../constants";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full max-w-5xl md:px-10 px-0">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="Have questions or ideas? I'd love to hear from you."
        />

        <div className="grid-2-cols mt-7 sm:mt-9 items-start gap-4 sm:gap-5">
          <div className="flex flex-col gap-4">
            <div className="card-border rounded-2xl p-4 sm:p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  Let's talk
                </h3>
                <p className="text-white-50 mt-2 text-sm leading-relaxed">
                  Whether it's a project, collaboration, or just a hello — drop
                  me a message and I'll get back to you soon.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-3 rounded-xl border border-black-50 bg-black-100 px-4 py-3 transition-colors hover:border-white/15"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-black-200 text-base">
                    ✉
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm text-white-50">Email</p>
                    <p className="truncate text-white transition-colors group-hover:text-white-50">
                      {profile.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-black-50 bg-black-100 px-4 py-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-black-200 text-base">
                    📍
                  </span>
                  <div>
                    <p className="text-sm text-white-50">Location</p>
                    <p className="text-white">{profile.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-border rounded-2xl p-4 sm:p-6">
              <h3 className="text-base font-semibold text-white">
                Find me online
              </h3>
              <div className="mt-3 flex gap-3">
                {socialImgs.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-12 items-center justify-center rounded-full border border-black-50 bg-black-200 transition-all hover:border-white/15 hover:-translate-y-0.5"
                    aria-label={social.name}
                  >
                    <img
                      src={social.imgPath}
                      alt={social.name}
                      className="size-5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="card-border rounded-2xl p-4 sm:p-6 md:p-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-4"
            >
              <div>
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  rows={5}
                  required
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-green-400">
                  Message sent! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button type="submit" disabled={loading} className="disabled:opacity-60">
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="" />
                  </div>
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
