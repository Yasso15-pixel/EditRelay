'use client'

import Head from 'next/head'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Home() {
  const [text, setText] = useState('')
  const [loopNum, setLoopNum] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const words = ['editing', 'repurposing', 'management']

  useEffect(() => {
    const handleType = () => {
      const fullText = words[loopNum % words.length]
      setText(deleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1))

      if (!deleting && text === fullText) {
        setTimeout(() => setDeleting(true), 1000)
      } else if (deleting && text === '') {
        setDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }
    const speed = deleting ? 50 : 120
    const timer = setTimeout(handleType, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, loopNum])

  const navItems = ['home', 'about', 'services', 'contact']

  return (
    <>
      <Head>
        <title>EditRelay – Expert Video Editing & Content Services</title>
        <meta name="description" content="EditRelay partners with creators to accelerate growth through professional video editing, podcast production, content repurposing, and strategic account management." />
        <meta name="keywords" content="video editing, podcast editing, content repurposing, YouTube growth, social media management, EditRelay, content agency" />
        <meta name="author" content="EditRelay Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://editrelay.com" />
        <meta property="og:title" content="EditRelay – Expert Video Editing & Content Services" />
        <meta property="og:description" content="Empowering creators with high-quality content editing, strategic repurposing, and digital management solutions." />
        <meta property="og:image" content="https://editrelay.com/og-image.png" />
        <meta property="og:url" content="https://editrelay.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EditRelay – Expert Video Editing & Content Services" />
        <meta name="twitter:description" content="Boost your brand with professional editing, content repurposing, and digital growth management." />
        <meta name="twitter:image" content="https://editrelay.com/og-image.png" />
      </Head>

      <main className="bg-white text-black font-sans max-w-7xl mx-auto">

        <header className="w-full py-6 shadow-sm flex justify-between items-center sticky top-0 z-50 px-6 bg-white">
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-xl text-lime-400 font-bold">EditRelay</span>
          </a>

          <button
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex flex-1 justify-center">
            <div className="bg-black text-white rounded-full px-8 py-3 flex space-x-8 text-md font-small">
              {navItems.map(item => (
                <a key={item} href={`#${item}`} className="hover:text-lime-400 transition capitalize">{item}</a>
              ))}
            </div>
          </nav>

          <a
            href="#contact"
            className="ml-4 bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium hidden md:inline-block"
          >
            Contact Us Today
          </a>
        </header>

{menuOpen && (
  <>
    {/* Overlay: fills the screen, semi-transparent, closes menu on click */}
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      onClick={() => setMenuOpen(false)}
    ></div>

    {/* Sliding menu from the right */}
    <nav
      className="
        fixed top-0 right-0 h-full w-64 bg-black bg-opacity-95 text-white
        flex flex-col items-center space-y-6 py-10 px-6
        z-50
        transform transition-transform duration-300
      "
      style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
      onClick={(e) => e.stopPropagation()} // Prevent clicks inside menu from closing it
    >
      {navItems.map(item => (
        <a
          key={item}
          href={`#${item}`}
          onClick={() => setMenuOpen(false)}
          className="hover:text-lime-400 transition text-lg capitalize"
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
    </nav>
  </>
)}


        <section id="home" className="text-center py-24 px-4 bg-gradient-to-b from-green-50 to-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Elevate Your Brand<br />with Expert Digital Content
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            We empower creators to scale through professional content <span className="text-lime-400 font-semibold">{text}</span> and creative strategy.
          </p>
          <a href="#contact" className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium">
            Get Started Today
          </a>
        </section>

        <section className="py-10 text-center">
          <p className="text-gray-500">Trusted by over 50 creators and innovative startups</p>
          <div className="flex justify-center gap-8 mt-4 text-sm text-gray-400">
            {['CreatorHub', 'VideoMax', 'PodSync', 'ReelBoost'].map(client => (
              <span key={client}>{client}</span>
            ))}
          </div>
        </section>

        <section id="about" className="bg-gray-100 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">About EditRelay</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-10">
            We’re a creative agency dedicated to helping creators and brands thrive with premium video editing, content strategy, and modern production tailored to grow your reach and engagement.
          </p>
          <div className="flex justify-center gap-12 text-gray-700 text-center">
            {[
              { num: '50+', label: 'Satisfied Clients' },
              { num: '5+ Years', label: 'Industry Experience' },
              { num: '100%', label: 'Client Satisfaction' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="text-4xl font-bold">{num}</p>
                <p>{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-20 text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {['Video Editing', 'Podcast Production', 'Account Management', 'YouTube Growth', 'Content Repurposing'].map(service => (
              <span key={service} className="bg-gray-200 px-5 py-2 rounded-full">{service}</span>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-gray-100 py-20 px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.target as HTMLFormElement
              emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
              )
              emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID!,
                form,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
              )
                .then(() => form.reset())
                .catch(console.error)
            }}
            className="max-w-lg mx-auto space-y-4"
          >
            <input
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-md"
            />
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us how we can help you"
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

        <section className="bg-black text-white text-center py-20 px-4">
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Your Success Story<br />Together
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Growth takes time. Let EditRelay guide your content journey with expertise and care.
          </p>
          <a href="#contact" className="bg-lime-400 hover:bg-lime-500 text-black px-6 py-3 rounded-full font-medium">
            Contact Us Today
          </a>
        </section>

<footer className="bg-black text-gray-300 py-16 px-6 text-center text-xs max-w-7xl mx-auto">
  <div className="grid md:grid-cols-4 gap-12 text-sm text-left">
    <div>
      <h3 className="text-white text-xl font-semibold mb-4">EditRelay</h3>
      <p className="text-gray-400">Helping creators scale with content, strategy, and design.</p>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-4">Services</h4>
      <ul className="space-y-2">
        {['Video Editing', 'Podcast Production', 'Account Management', 'Brand Strategy'].map(service => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="text-white font-semibold mb-4">Subscribe</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          const form = e.target as HTMLFormElement
          const email = (form.elements.namedItem('sub') as HTMLInputElement).value
          try {
            const res = await fetch('https://sheetdb.io/api/v1/41197uteml5jj', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ data: [{ Email: email }] }),
            })
            if (res.ok) form.reset()
            else {
              alert('Subscription failed.')
              console.error('SheetDB Error:', await res.text())
            }
          } catch (error) {
            console.error('Network error:', error)
          }
        }}
        className="max-w-sm"
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

    <div>
      <h4 className="text-white font-semibold mb-4">Contact</h4>
      <p className="text-gray-400">Reach out to start growing your brand with us.</p>
      <a href="#contact" className="inline-block mt-2 bg-lime-400 hover:bg-lime-500 text-black px-4 py-2 rounded-full font-medium">
        Contact Us Today
      </a>
    </div>
  </div>

  <div className="mt-10 text-center text-gray-500">
    © {new Date().getFullYear()} EditRelay. All rights reserved.
  </div>
</footer>

      </main>
    </>
  )
}
