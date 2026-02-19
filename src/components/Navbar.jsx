import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#chi-siamo', label: 'Chi Siamo' },
  { href: '#menu', label: 'Menu' },
  { href: '#posizione', label: 'Posizione' },
  { href: '#stagioni', label: 'Stagioni' },
  { href: '#recensioni', label: 'Voci' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contatti', label: 'Contatti' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'py-3' : 'py-5 md:py-8'
        }`}
        style={{
          background: scrolled ? 'rgba(45, 26, 18, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(45, 26, 18, 0.3)' : 'none',
        }}
      >
        <div className="flex items-center justify-between" style={{ padding: '0 var(--space-gutter)' }}>
          <a href="#" className="relative z-10">
            <span className="block text-white tracking-tight" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 2vw, 1.8rem)', lineHeight: 1 }}>
              Chalet Savoia
            </span>
            <span className="block text-white/50 mt-0.5" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              Passo del Tonale — 1884m
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors duration-500"
                style={{ fontFamily: 'var(--font-accent)', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginRight: i === 2 ? '2rem' : '0' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+393397166992"
              className="ml-4 text-white/90 border border-white/20 px-5 py-2 hover:bg-white/10 transition-all duration-500"
              style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}
            >
              Chiama
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden relative z-10 text-white w-10 h-10 flex flex-col items-end justify-center gap-1.5" aria-label="Menu">
            <motion.span animate={open ? { rotate: 45, y: 6, width: 24 } : { rotate: 0, y: 0, width: 24 }} className="block h-[1.5px] bg-white origin-center" transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }} />
            <motion.span animate={open ? { opacity: 0, width: 0 } : { opacity: 1, width: 16 }} className="block h-[1.5px] bg-white" transition={{ duration: 0.3 }} />
            <motion.span animate={open ? { rotate: -45, y: -6, width: 24 } : { rotate: 0, y: 0, width: 20 }} className="block h-[1.5px] bg-white origin-center" transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2rem) 2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-end pb-20 texture-noise-dark texture-woodgrain"
            style={{ background: 'var(--color-wood-900)' }}
          >
            {/* Warm ambient glow */}
            <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] rounded-full opacity-[0.06] pointer-events-none blur-3xl" style={{ background: 'var(--color-burgundy)' }} />
            <div className="relative z-10 px-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="block text-white/90 hover:text-white transition-colors border-b border-white/5 py-4"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', lineHeight: 1.1 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="relative z-10 px-8 mt-10 flex gap-4">
              <a href="tel:+393397166992" className="text-white/80 border border-white/25 px-5 py-3" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Chiama</a>
              <a href="https://wa.me/393397166992" target="_blank" rel="noopener noreferrer" className="text-white/80 border border-white/25 px-5 py-3" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>WhatsApp</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
