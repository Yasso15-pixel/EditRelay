"use client";

import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Home() {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["home", "about", "services", "contact"];
  const words = ["editing", "repurposing", "management"];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

useEffect(() => {
  const fullText = words[loopNum % words.length];
  const updatedText = deleting
    ? fullText.substring(0, text.length - 1)
    : fullText.substring(0, text.length + 1);
  const typingDelay = deleting ? 50 : 120;

  const timeout = setTimeout(() => {
    setText(updatedText);
    if (!deleting && updatedText === fullText) {
      setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setLoopNum((prev) => prev + 1);
    }
  }, typingDelay);

  return () => clearTimeout(timeout);
}, [text, deleting, loopNum, words]);


  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
  if ((e.target as HTMLElement).id === "mobileMenuOverlay") {
    setMenuOpen(false);
  }
};


  return (
    <>
      <Head>
        <title>EditRelay – Video Editing & Content Agency</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="EditRelay helps creators grow with video editing, podcast production, account management, and content repurposing services."
        />
      </Head>

      <main className="bg-white text-black font-sans scroll-smooth">
<header className="w-full py-6 shadow-sm sticky top-0 z-50 bg-white flex justify-center px-6">
  <div className="max-w-7xl w-full flex items-center justify-between relative">
    {/* Logo */}
    <a href="#home" className="text-xl text-lime-400 font-bold">EditRelay</a>

    {/* Centered Nav (Desktop Only) */}
    <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-black text-white rounded-full px-8 py-3 space-x-8 text-md font-small">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="hover:text-lime-400 capitalize"
        >
          {item}
        </a>
      ))}
    </nav>

    {/* CTA (Desktop) */}
    <a
      href="#contact"
      className="hidden md:inline-block bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium"
    >
      Contact Us Today
    </a>

    {/* Hamburger (Mobile) */}
    <button
      className="md:hidden"
      onClick={() => setMenuOpen(true)}
      aria-label="Open menu"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    </button>
  </div>

  {/* Mobile Menu (Only one!) */}
  <div
    className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    <div className="flex flex-col px-6 py-8 space-y-6 h-full">
      {/* X Button */}
      <button
        className="self-end text-black text-2xl"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        ✕
      </button>

      {/* Links */}
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          className="text-lg capitalize hover:text-lime-400"
        >
          {item}
        </a>
      ))}

      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium"
      >
        Contact Us Today
      </a>
    </div>
  </div>
</header>



        
        <section
          id="home"
          className="text-center py-24 px-4 bg-gradient-to-b from-green-50 to-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Crafting Tomorrow's Brands<br />with Digital Creativity
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            At the forefront of innovation, we help creators scale through
            content <span className="text-lime-400 font-semibold">{text}</span>.
          </p>
          <a
            href="#contact"
            className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium"
          >
            Let’s Talk Now
          </a>
        </section>

        <section id="about" className="bg-gray-100 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">About EditRelay</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10">
            We help creators and brands thrive through premium video editing,
            content strategy, and digital production solutions.
          </p>
          <div className="flex justify-center gap-12 text-gray-700">
            {["50+ Clients", "5+ Years", "100% Satisfaction"].map((text, i) => (
              <div key={i}>
                <p className="text-4xl font-bold">{text.split(" ")[0]}</p>
                <p>{text.split(" ")[1]}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-20 text-center px-4">
          <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {["Video Editing", "Podcast Editing", "Account Management", "YouTube Growth", "Content Repurposing"].map(
              (service) => (
                <span
                  key={service}
                  className="bg-gray-200 px-5 py-2 rounded-full"
                >
                  {service}
                </span>
              )
            )}
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-20 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
              );
              emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
              ).then(() => form.reset());
            }}
            className="max-w-lg mx-auto space-y-4"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              rows={4}
              required
              placeholder="How can we help?"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-500 text-black py-3 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>
        </section>

        <footer className="bg-black text-gray-300 py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
            <div>
              <h3 className="text-white text-xl font-semibold mb-4">EditRelay</h3>
              <p className="text-gray-400">
                Helping creators scale with content, strategy, and design.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {["Video Editing", "Podcast Editing", "Account Management", "Brand Strategy"].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Subscribe</h4>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const email = (form.elements.namedItem("sub") as HTMLInputElement).value;
                  const res = await fetch("https://sheetdb.io/api/v1/41197uteml5jj", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ data: [{ Email: email }] }),
                  });
                  if (res.ok) form.reset();
                }}
              >
                <input
                  name="sub"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-md mb-2 text-lime-400"
                />
                <button
                  type="submit"
                  className="w-full bg-lime-400 hover:bg-lime-500 text-black py-2 rounded-md font-medium"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-10 text-xs">
            © {new Date().getFullYear()} EditRelay. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
