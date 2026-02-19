import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImg from '../assets/foto/foto-5.webp'
import chaletImg from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.fromTo(imgRef.current, { scale: 1.3, filter: 'brightness(0.3)' }, { scale: 1, filter: 'brightness(0.65)', duration: 2.4 })
        .fromTo('.hero-label', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.6)
        .fromTo('.hero-line', { y: '110%' }, { y: '0%', duration: 1.4, stagger: 0.12, ease: 'power3.out' }, 0.8)
        .fromTo('.hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 }, 1.6)
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.15 }, 1.9)
        .fromTo('.hero-badge', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, 2.1)
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 1 }, 2.6)

      gsap.to(imgRef.current, {
        y: 150,
        ease: 'none',
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen overflow-hidden">
      <img ref={imgRef} src={heroImg} alt="Panorama invernale del Passo del Tonale" className="absolute inset-0 w-full h-full object-cover will-change-transform" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#2d1a12]" />
      {/* Film grain overlay */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-20 mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px' }} />
      {/* Vignette */}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)' }} />

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24" style={{ padding: '0 var(--space-gutter)', paddingBottom: 'clamp(4rem, 8vh, 6rem)' }}>
        <div className="hero-label mb-6 md:mb-8">
          <span className="inline-block text-white/70 border-b border-white/30 pb-1" style={{ fontFamily: 'var(--font-accent)', fontSize: 'clamp(0.6rem, 0.8vw, 0.75rem)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Bar & Pizzeria a Legna — 1.884m s.l.m.
          </span>
        </div>

        <h1 className="max-w-[90vw] md:max-w-[70vw] lg:max-w-[55vw]">
          <div className="overflow-hidden"><div className="hero-line display-xl text-white">La tua</div></div>
          <div className="overflow-hidden"><div className="hero-line display-xl text-white" style={{ fontStyle: 'italic' }}>baita al Passo</div></div>
          <div className="overflow-hidden mt-2">
            <div className="hero-line text-white/80" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 2vw, 1.6rem)', fontWeight: 400, letterSpacing: '0.05em' }}>
              direttamente sulle piste da sci
            </div>
          </div>
        </h1>

        <p className="hero-sub mt-6 md:mt-8 max-w-md text-white/70" style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1vw, 1.05rem)', lineHeight: 1.8, fontWeight: 400 }}>
          Pizza cotta nel forno a legna, taglieri, bevande calde e après-ski con vista sulle montagne dell'Adamello.
        </p>

        <div className="flex flex-wrap gap-4 mt-8 md:mt-10">
          <a href="#menu" className="hero-cta text-white border border-white/30 px-7 py-3 hover:bg-white hover:text-[#2d1a12] transition-all duration-500" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', boxShadow: '0 0 30px rgba(255,255,255,0.05)' }}>
            Scopri il Menu
          </a>
          <a href="#posizione" className="hero-cta text-white/70 px-7 py-3 hover:text-white transition-colors duration-500" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Come Raggiungerci →
          </a>
        </div>
      </div>

      <div className="hero-badge absolute top-1/3 right-4 md:right-12 z-10 hidden md:block">
        <div className="w-28 h-28 rounded-full border border-white/15 flex flex-col items-center justify-center" style={{ background: 'rgba(169, 35, 71, 0.85)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(169,35,71,0.4), 0 0 60px rgba(169,35,71,0.15)' }}>
          <span className="text-white/90" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', lineHeight: 1 }}>4.1</span>
          <span className="text-white/70 mt-0.5" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Google</span>
          <div className="flex gap-0.5 mt-1">
            {[1,2,3,4].map(i => <span key={i} className="text-[8px]" style={{ color: 'var(--color-fire)' }}>★</span>)}
            <span className="text-white/30 text-[8px]">★</span>
          </div>
        </div>
      </div>

      <div className="hero-badge absolute bottom-8 right-6 md:right-16 z-10 hidden lg:block">
        <div className="relative w-36 h-24 overflow-hidden" style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}>
          <img src={chaletImg} alt="Chalet Savoia esterno" className="w-full h-full object-cover" />
        </div>
        <span className="block text-white/50 mt-2 text-right" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.55rem', letterSpacing: '0.1em' }}>EST. TONALE</span>
      </div>

      <div className="hero-scroll absolute bottom-6 left-[var(--space-gutter)] z-10 flex items-center gap-3">
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden"><div className="w-full h-4 bg-white/60 animate-bounce" /></div>
        <span className="text-white/50" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
      </div>
    </section>
  )
}
