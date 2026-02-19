import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contatti() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title', { y: '100%' }, { y: '0%', duration: 1.3, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } })
      gsap.fromTo('.contact-block', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.12, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.contact-block', start: 'top 80%' } })
      gsap.fromTo('.contact-map', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 1.4, ease: 'power4.inOut', scrollTrigger: { trigger: '.contact-map', start: 'top 80%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contatti" className="relative overflow-hidden texture-noise texture-paper" style={{ padding: 'var(--space-section) 0', background: 'var(--color-cream)' }}>
      {/* Warm ambient blob */}
      <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full opacity-[0.06] pointer-events-none blur-3xl" style={{ background: 'var(--color-burgundy)' }} />
      <div className="relative z-10" style={{ padding: '0 var(--space-gutter)' }}>
        <div className="mb-16 md:mb-24 md:ml-auto md:text-right" style={{ maxWidth: '500px' }}>
          <span className="label-sm block mb-5" style={{ color: 'var(--color-burgundy)' }}>Contatti</span>
          <h2>
            <div className="overflow-hidden"><span className="contact-title display-lg inline-block" style={{ color: 'var(--color-wood-900)' }}>Dove</span></div>
            <div className="overflow-hidden"><em className="contact-title display-lg inline-block" style={{ color: 'var(--color-burgundy)' }}>trovarci</em></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5 lg:col-start-1 space-y-10">
            <div className="contact-block">
              <span className="label-sm block mb-3" style={{ color: 'var(--color-wood-600)' }}>Indirizzo</span>
              <p className="body-text" style={{ color: 'var(--color-wood-800)' }}>Via Case Sparse del Tonale, 106<br />25056 Passo del Tonale (BS)</p>
              <p className="mt-2" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--color-wood-600)' }}>1.884 M S.L.M. — SS42 TRA PONTE DI LEGNO E VERMIGLIO</p>
            </div>

            <div className="contact-block">
              <span className="label-sm block mb-3" style={{ color: 'var(--color-wood-600)' }}>Telefono</span>
              <a href="tel:+393397166992" className="block text-2xl md:text-3xl hover:opacity-70 transition-opacity" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-wood-900)' }}>+39 339 716 6992</a>
            </div>

            <div className="contact-block">
              <span className="label-sm block mb-4" style={{ color: 'var(--color-wood-600)' }}>Scrivici</span>
              <a href="https://wa.me/393397166992" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 border px-6 py-3 hover:border-green-600 transition-colors duration-500" style={{ borderColor: 'var(--color-wood-200)', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-wood-800)' }}>
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:-mt-8">
            <div className="contact-block">
              <span className="label-sm block mb-5" style={{ color: 'var(--color-wood-600)' }}>Apertura Stagionale</span>
              <div className="space-y-4">
                <div className="p-6 border transition-shadow duration-300 hover:shadow-md" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)', boxShadow: '0 2px 12px rgba(74,49,34,0.04)' }}>
                  <div className="flex items-baseline justify-between">
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-wood-900)' }}>Inverno</span>
                    <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-wood-600)' }}>Dic — Apr</span>
                  </div>
                </div>
                <div className="p-6 border transition-shadow duration-300 hover:shadow-md" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)', boxShadow: '0 2px 12px rgba(74,49,34,0.04)' }}>
                  <div className="flex items-baseline justify-between">
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--color-wood-900)' }}>Estate</span>
                    <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-wood-600)' }}>Giu — Set</span>
                  </div>
                </div>
              </div>
              <p className="mt-4 body-text" style={{ color: 'var(--color-wood-600)', fontStyle: 'italic', fontSize: '0.85rem' }}>Chiuso nelle stagioni intermedie. Contattaci per date e orari esatti.</p>
            </div>

            <div className="contact-block mt-12 space-y-3">
              <a href="tel:+393397166992" className="block text-center py-4 transition-all duration-500 hover:opacity-80" style={{ background: 'var(--color-burgundy)', color: 'white', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', boxShadow: '0 6px 24px rgba(169,35,71,0.25)' }}>Chiamaci Ora</a>
              <a href="#posizione" className="block text-center py-4 border transition-all duration-500 hover:opacity-70" style={{ borderColor: 'var(--color-wood-200)', color: 'var(--color-wood-800)', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase' }}>Come Raggiungerci →</a>
            </div>
          </div>
        </div>

        {/* Mappa interattiva */}
        <div className="contact-block mt-16 md:mt-24">
          <div className="flex items-center justify-between mb-6">
            <span className="label-sm" style={{ color: 'var(--color-wood-600)' }}>Trovaci sulla Mappa</span>
            <a
              href="https://www.google.com/maps/dir//Via+Case+Sparse+del+Tonale,+106,+25056+Ponte+di+Legno+BS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-burgundy)' }}
            >
              <span>Apri in Google Maps</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>
          <div className="contact-map relative overflow-hidden" style={{ boxShadow: '0 8px 40px rgba(74,49,34,0.1)' }}>
            <iframe
              title="Posizione Chalet Savoia - Passo del Tonale"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.5!2d10.5959!3d46.2589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47832e3f6f75f8f9%3A0xchalet!2sVia+Case+Sparse+del+Tonale%2C+106%2C+25056+Ponte+di+Legno+BS!5e0!3m2!1sit!2sit!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Warm overlay tint on edges */}
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 60px rgba(74,49,34,0.12)' }} />
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-wood-600)' }}>
              📍 Via Case Sparse del Tonale, 106 — Passo del Tonale (BS)
            </span>
            <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-wood-400)' }}>
              SS42 — Parcheggio disponibile
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
