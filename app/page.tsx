'use client'

import Head from 'next/head'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

// ...rest of your code remains unchanged

export default function Home() {
  const [text, setText] = useState('')
  const [loopNum, setLoopNum] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(120)
  const [menuOpen, setMenuOpen] = useState(false)
  const words = ['editing', 'repurposing', 'management']
  
  useEffect(() => {
    const handleType = () => {
      const fullText = words[loopNum % words.length]
      setText(deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))
      setTypingSpeed(deleting ? 50 : 120)

      if (!deleting && text === fullText) {
        setTimeout(() => setDeleting(true), 1000)
      } else if (deleting && text === '') {
        setDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }
    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, deleting])

  return (
    <>
          <Head>
        <title>EditRelay – Video Editing & Content Agency</title>
        <meta name="description" content="EditRelay helps creators grow with video editing, podcast production, account management, and content repurposing services." />
        <meta name="keywords" content="video editing, podcast editing, content repurposing, YouTube growth, social media management, EditRelay, content agency" />
        <meta name="author" content="EditRelay Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://editrelay.com" />

        {/* Open Graph */}
        <meta property="og:title" content="EditRelay – Video Editing & Content Agency" />
        <meta property="og:description" content="Helping creators scale with content editing, strategy, and digital management." />
        <meta property="og:image" content="https://editrelay.com/og-image.png" />
        <meta property="og:url" content="https://editrelay.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EditRelay – Video Editing & Content Agency" />
        <meta name="twitter:description" content="Helping creators scale with editing, repurposing, and management." />
        <meta name="twitter:image" content="https://editrelay.com/og-image.png" />
      </Head>
    <main className="bg-white text-black font-sans">

        <header className="w-full py-6 shadow-sm justify-center items-center bg-white sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-6">

            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl text-lime-400 font-bold">EditRelay</span>
            </a>

            {/* Hamburger button - visible on mobile only */}
            <button
              className="md:hidden text-black focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {/* Simple hamburger icon */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" /> // X icon when open
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger lines when closed
                )}
              </svg>
            </button>

            {/* Nav - hidden on mobile, show on md+ */}
            <nav className="hidden md:flex flex-1 justify-center">
              <div className="bg-black text-white rounded-full px-8 py-3 flex space-x-8 text-md font-small relative">
                <a href="#home" className="hover:text-lime-400 transition">Home</a>
                <a href="#about" className="hover:text-lime-400 transition">About</a>
                <a href="#work" className="hover:text-lime-400 transition">Work</a>
                <a href="#services" className="hover:text-lime-400 transition">Services</a>
                <a href="#contact" className="hover:text-lime-400 transition">Contact</a>
              </div>
            </nav>

            {/* Call to action button - hidden on mobile */}
            <a
              href="#contact"
              className="ml-4 bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium hidden md:inline-block"
            >
              Let’s Talk Now
            </a>
          </div>

          {/* Mobile menu dropdown - visible only if menuOpen */}
          {menuOpen && (
            <nav className="md:hidden bg-black bg-opacity-95 text-white flex flex-col items-center space-y-4 py-4 rounded-b-lg mt-2 mx-6">
              <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-lime-400 transition text-lg">Home</a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-lime-400 transition text-lg">About</a>
              <a href="#work" onClick={() => setMenuOpen(false)} className="hover:text-lime-400 transition text-lg">Work</a>
              <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-lime-400 transition text-lg">Services</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-lime-400 transition text-lg">Contact</a>

              {/* Optional: CTA button in mobile menu */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium"
              >
                Let’s Talk Now
              </a>
            </nav>
          )}
        </header>

      {/* Hero */}
      <section id="home" className="text-center py-24 px-4 bg-gradient-to-b from-green-50 to-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Crafting Tomorrow's Brands<br />with Digital Creativity</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          At the forefront of innovation, we help creators scale through content <span className="text-lime-400 font-semibold">{text}</span>.
        </p>
        <a href="#contact" className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium">
          Let’s Talk Now
        </a>
        
      </section>

      {/* Clients */}
      <section className="py-10 text-center">
        <p className="text-gray-500">Trusted by 50+ content creators & startups</p>
        <div className="flex justify-center gap-8 mt-4 text-sm text-gray-400">
          <span>CreatorHub</span>
          <span>VideoMax</span>
          <span>PodSync</span>
          <span>ReelBoost</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-100 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">About EditRelay</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          We're a digital agency helping creators and brands thrive through premium video editing, content strategy,
          and modern production solutions tailored to grow your presence and maximize engagement.
        </p>
        <div className="flex justify-center gap-12 text-gray-700 text-center">
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p>Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold">5+</p>
            <p>Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold">100%</p>
            <p>Satisfaction</p>
          </div>
        </div>
      </section>

      
      {/* Services */}
      <section id="services" className="py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <span className="bg-gray-200 px-5 py-2 rounded-full">Video Editing</span>
          <span className="bg-gray-200 px-5 py-2 rounded-full">Podcast Editing</span>
          <span className="bg-gray-200 px-5 py-2 rounded-full">Account Management</span>
          <span className="bg-gray-200 px-5 py-2 rounded-full">YouTube Growth</span>
          <span className="bg-gray-200 px-5 py-2 rounded-full">Content Repurposing</span>
        </div>
      </section>

<section id="contact" className="bg-gray-100 py-20 px-4 text-center">
  <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

 <form
  onSubmit={(e) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    // Send to YOU
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    // Auto-reply to user
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
      .then(() => {
        
        form.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        
      });
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
  ></textarea>
  <button
    type="submit"
    className="w-full bg-lime-400 hover:bg-lime-500 text-black py-3 rounded-md font-medium"
  >
    Send Message
  </button>
</form>

</section>



      {/* Final CTA */}
      <section className="bg-black text-white text-center py-20 px-4">
        <h2 className="text-4xl font-bold mb-4">Let’s Create a Success Story<br />for Your Business Now</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">This isn't a quick fix, but a real journey. Let us guide the way forward and elevate your content professionally.</p>
        <a href="#contact" className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium">
          Let’s Talk Now
        </a>
      </section>

<footer className="bg-black text-gray-300 py-16 px-6">
  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 text-sm">
    
    <div>
      <h3 className="text-white text-xl font-semibold mb-4">EditRelay</h3>
      <p className="text-gray-400">Helping creators scale with content, strategy, and design.</p>
    </div>



    <div>
      <h4 className="text-white font-semibold mb-4">Services</h4>
      <ul className="space-y-2">
        <li>Video Editing</li>
        <li>Podcast Editing</li>
        <li>Account Management</li>
        <li>Brand Strategy</li>
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-4">Subscribe</h4>
<form
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('sub') as HTMLInputElement).value;

    try {
      const res = await fetch('https://sheetdb.io/api/v1/41197uteml5jj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [
            {
              Email: email, // ✅ This must match the column in your sheet!
            },
          ],
        }),
      });

      if (res.ok) {
        
        form.reset();
      } else {
        alert('Subscription failed.');
        const errorText = await res.text();
        console.error('SheetDB Error:', errorText);
      }
    } catch (error) {
      console.error('Network error:', error);
      
    }
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
  )
}
