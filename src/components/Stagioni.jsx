import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import invernoImg from '../assets/foto/foto-5.webp'
import espressoImg from '../assets/foto/foto-3.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Stagioni() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.season-img-winter', { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.8, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.season-img-winter', start: 'top 70%' },
      })
      gsap.fromTo('.season-img-summer', { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }, {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1.8, delay: 0.3, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.season-img-summer', start: 'top 70%' },
      })
      gsap.fromTo('.season-text', { y: 40, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.season-text', start: 'top 80%' } })
      gsap.fromTo('.season-stat', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: '.season-stat', start: 'top 90%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="stagioni" className="relative overflow-hidden" style={{ padding: 'var(--space-section) 0', background: 'var(--color-cream)' }}>
      <div style={{ padding: '0 var(--space-gutter)' }}>
        <div className="season-text mb-14 md:mb-20">
          <span className="label-sm block mb-5" style={{ color: 'var(--color-burgundy)' }}>Due Stagioni, un'Esperienza</span>
          <h2 className="display-lg" style={{ color: 'var(--color-wood-900)' }}>
            Inverno <span style={{ color: 'var(--color-fire)' }}>&</span> <em style={{ color: 'var(--color-wood-300)' }}>Estate</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0">
          <div className="lg:col-span-7 lg:col-start-1 relative z-10">
            <div className="season-img-winter relative overflow-hidden" style={{ height: 'clamp(350px, 50vw, 580px)' }}>
              <img src={invernoImg} alt="Panorama invernale Passo del Tonale" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(23,37,84,0.85) 0%, rgba(23,37,84,0.2) 50%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="text-white/40" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Dicembre — Aprile</span>
                <h3 className="text-white mt-2" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 0.95 }}>Inverno</h3>
                <p className="text-white/60 mt-3 max-w-md body-text">Colazione prima delle piste, pranzo veloce o completo, après-ski con bombardino e birra. Atmosfera baita con stufe, legno, calore.</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {['Colazione', 'Pranzo', 'Après-ski', 'Bombardino', 'Forno a legna'].map(tag => (
                    <span key={tag} className="text-white/40 border border-white/15 px-3 py-1" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:-mt-16 lg:pt-32 relative z-20">
            <div className="season-img-summer relative overflow-hidden" style={{ height: 'clamp(300px, 40vw, 480px)' }}>
              <img src={espressoImg} alt="Caffè sulla terrazza" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(120,53,15,0.85) 0%, rgba(120,53,15,0.2) 50%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="text-white/40" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Giugno — Settembre</span>
                <h3 className="text-white mt-2" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 0.95 }}>Estate</h3>
                <p className="text-white/60 mt-3 max-w-md body-text">Sosta per motociclisti, ciclisti ed escursionisti. Terrazza al sole, birre fresche. Base per il Ghiacciaio Presena e i forti della Grande Guerra.</p>
                <div className="flex flex-wrap gap-3 mt-5">
                  {['Terrazza', 'Birre fresche', 'Moto', 'Escursioni', 'Presena'].map(tag => (
                    <span key={tag} className="text-white/40 border border-white/15 px-3 py-1" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex flex-wrap gap-12 md:gap-20 md:ml-[8%]">
          {[
            { value: '100', unit: 'km', label: 'di piste' },
            { value: '3.000', unit: 'm', label: 'Ghiacciaio Presena' },
            { value: '1.884', unit: 'm', label: 'altitudine Chalet' },
          ].map((stat, i) => (
            <div key={i} className="season-stat">
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', lineHeight: 1, color: 'var(--color-burgundy)' }}>{stat.value}</span>
              <span className="text-sm ml-1" style={{ color: 'var(--color-wood-300)' }}>{stat.unit}</span>
              <span className="block mt-1" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wood-300)' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
