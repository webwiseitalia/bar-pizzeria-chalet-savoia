import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pisteImg from '../assets/foto/foto-8.webp'

gsap.registerPlugin(ScrollTrigger)

const audiences = [
  { label: 'Sciatori & Snowboarder', note: 'A piedi dalle piste — si entra con gli scarponi' },
  { label: 'Motociclisti', note: 'Punto di ritrovo classico sul Passo del Tonale' },
  { label: 'Ciclisti', note: 'Il Tonale è tappa classica su strada' },
  { label: 'Escursionisti', note: 'Base per Ghiacciaio Presena e Sentiero della Pace' },
]

const directions = [
  { from: 'Brescia', time: '~2h', via: 'Valle Camonica (SS42)' },
  { from: 'Trento', time: '~1h30', via: 'Val di Sole' },
  { from: 'Milano', time: '~2h30', via: 'A4 + Valle Camonica' },
]

export default function Posizione() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pos-title', { y: '100%' }, { y: '0%', duration: 1.3, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' } })
      gsap.fromTo('.pos-img', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 1.6, ease: 'power4.inOut', scrollTrigger: { trigger: '.pos-img', start: 'top 75%' } })
      gsap.fromTo('.pos-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.pos-card', start: 'top 85%' } })
      gsap.to('.pos-marquee', { x: '-50%', ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1 } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="posizione" className="relative overflow-hidden texture-noise texture-paper inner-shadow-subtle" style={{ padding: 'var(--space-section) 0', background: 'var(--color-panna)' }}>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full overflow-hidden pointer-events-none opacity-[0.04]">
        <div className="pos-marquee whitespace-nowrap" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(8rem, 20vw, 18rem)', lineHeight: 1, color: 'var(--color-wood-900)' }}>
          PASSO DEL TONALE — 1884M — PASSO DEL TONALE — 1884M —&nbsp;
        </div>
      </div>

      <div className="relative z-10" style={{ padding: '0 var(--space-gutter)' }}>
        <div className="mb-14 md:mb-20 md:ml-auto md:text-right" style={{ maxWidth: '650px' }}>
          <span className="label-sm block mb-5" style={{ color: 'var(--color-burgundy)' }}>La Posizione</span>
          <h2>
            <div className="overflow-hidden"><span className="pos-title display-lg inline-block" style={{ color: 'var(--color-wood-900)' }}>Direttamente</span></div>
            <div className="overflow-hidden"><em className="pos-title display-lg inline-block" style={{ color: 'var(--color-burgundy)' }}>sulle piste</em></div>
          </h2>
          <p className="body-text mt-5 max-w-lg ml-auto" style={{ color: 'var(--color-wood-700)' }}>Di fronte alle piste da sci del comprensorio Pontedilegno-Tonale e a pochi passi dal Sacrario Militare della Grande Guerra.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 lg:col-start-1">
            <div className="pos-img relative overflow-hidden" style={{ aspectRatio: '16/9', boxShadow: '0 12px 40px rgba(45,26,18,0.15)' }}>
              <img src={pisteImg} alt="Piste da sci del Passo del Tonale" title="Comprensorio sciistico Pontedilegno-Tonale" width={1920} height={1080} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8" style={{ background: 'linear-gradient(to top, rgba(45,26,18,0.8), transparent)' }}>
                <span className="text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2vw, 1.8rem)' }}>Comprensorio Pontedilegno-Tonale</span>
                <span className="block text-white/70 mt-1" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>100 km di piste · Ghiacciaio Presena 3.000m · Adamello Ski</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:-mt-20 space-y-5 relative z-10">
            <div className="pos-card p-6 md:p-8" style={{ background: 'white', boxShadow: '0 8px 40px rgba(74,49,34,0.08), 0 2px 8px rgba(74,49,34,0.04)' }}>
              <h3 className="mb-5" style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--color-wood-900)' }}>Punto di sosta ideale per</h3>
              <div className="space-y-4">
                {audiences.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3" style={{ borderBottom: i < audiences.length - 1 ? '1px solid var(--color-wood-100)' : 'none' }}>
                    <span className="flex-shrink-0 mt-1 block w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-burgundy)' }} />
                    <div>
                      <span className="block font-medium text-sm" style={{ color: 'var(--color-wood-900)' }}>{a.label}</span>
                      <span className="block text-xs mt-0.5" style={{ color: 'var(--color-wood-600)' }}>{a.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pos-card p-6 md:p-8 relative overflow-hidden" style={{ background: 'var(--color-burgundy)', boxShadow: '0 8px 30px rgba(169,35,71,0.2)' }}>
              {/* Subtle noise on burgundy card */}
              <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '180px 180px' }} />
              <h3 className="mb-5 text-white" style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem' }}>Come Arrivare</h3>
              <div className="space-y-3">
                {directions.map((d, i) => (
                  <div key={i} className="flex items-baseline justify-between">
                    <span className="text-white/90 text-sm font-medium">{d.from}</span>
                    <span className="flex-1 mx-3 border-b border-white/10" />
                    <span className="text-white/70 text-xs">{d.time} · {d.via}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-white/50" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.08em' }}>SS42 tra Ponte di Legno (BS) e Vermiglio (TN). Parcheggio disponibile.</p>
            </div>

            <div className="pos-card p-6 md:p-8 border" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)' }}>
              <h3 className="mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-wood-900)' }}>Terrazza Panoramica</h3>
              <p className="body-text" style={{ color: 'var(--color-wood-700)' }}>Terrazza esterna soleggiata con panorama sulle montagne. Perfetta per pranzi al sole in inverno e relax estivo.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 overflow-hidden" style={{ maxWidth: '70%' }}>
          <iframe title="Posizione Chalet Savoia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.5!2d10.5959!3d46.2589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47832e3f6f75f8f9%3A0xchalet!2sVia+Case+Sparse+del+Tonale%2C+106%2C+25056+Ponte+di+Legno+BS!5e0!3m2!1sit!2sit!4v1" width="100%" height="280" style={{ border: 0, filter: 'grayscale(0.8) contrast(1.1)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
  )
}
