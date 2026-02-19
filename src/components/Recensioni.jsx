import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const reviews = [
  { text: 'Pizza fantastica, cotta nel forno a legna come si deve. La Pizza Tonale è da provare assolutamente.', name: 'Marco R.', source: 'Google' },
  { text: 'Best hot chocolate on the slopes! Cozy wooden interior, friendly staff. Alessandra is lovely!', name: 'Sarah K.', source: 'Google' },
  { text: 'Tagliere ricco, bruschette ottime, bombardino perfetto dopo lo sci. Ambiente caldo e accogliente.', name: 'Giulia B.', source: 'Google' },
  { text: 'Great location right on the slopes. Wood-fired pizza was excellent. The terrace has an amazing view.', name: 'Thomas W.', source: 'TripAdvisor' },
  { text: 'Lo Chalet Savoia è il nostro punto fisso al Tonale. Max e Alessio simpaticissimi, ti senti a casa.', name: 'Luca P.', source: 'Google' },
  { text: 'Fermata obbligatoria per noi motociclisti. Birra fresca, panino super, vista pazzesca dalla terrazza.', name: 'Anna M.', source: 'Google' },
]

const badges = [
  { score: '4.1', label: 'Google', sub: '~450 recensioni' },
  { score: '4.0', label: 'TripAdvisor', sub: '' },
  { score: '4.5', label: 'Restaurant Guru', sub: '' },
]

export default function Recensioni() {
  const sectionRef = useRef(null)
  const [activeReview, setActiveReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview(prev => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.rec-title', { y: '100%' }, { y: '0%', duration: 1.2, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } })
      gsap.fromTo('.rec-fade', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: '.rec-fade', start: 'top 85%' } })
      gsap.fromTo('.rec-badge', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.rec-badge', start: 'top 85%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="recensioni" className="relative texture-noise-dark texture-woodgrain inner-shadow-dark" style={{ padding: 'var(--space-section) 0', background: 'var(--color-wood-900)' }}>
      {/* Warm ambient glows */}
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none blur-3xl" style={{ background: 'var(--color-burgundy)' }} />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none blur-3xl" style={{ background: 'var(--color-fire)' }} />

      <div className="relative z-10" style={{ padding: '0 var(--space-gutter)' }}>
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <span className="label-sm block mb-5" style={{ color: 'var(--color-fire)' }}>Le Voci</span>
          <h2>
            <div className="overflow-hidden"><span className="rec-title display-lg inline-block text-white">Cosa dicono</span></div>
            <div className="overflow-hidden"><em className="rec-title display-lg inline-block" style={{ color: 'var(--color-wood-300)' }}>i nostri ospiti</em></div>
          </h2>
        </div>

        {/* Main review showcase */}
        <div className="rec-fade max-w-4xl mx-auto mb-20 md:mb-28">
          {/* Large quote */}
          <div className="text-center">
            <span className="inline-block mb-8 opacity-20" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(4rem, 8vw, 7rem)', lineHeight: 0.5, color: 'var(--color-wood-300)' }}>&ldquo;</span>
            <div className="relative" style={{ minHeight: 'clamp(5rem, 12vw, 8rem)' }}>
              {reviews.map((review, i) => (
                <p
                  key={i}
                  className="absolute inset-0 flex items-center justify-center transition-all duration-700 px-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                    lineHeight: 1.4,
                    fontStyle: 'italic',
                    color: 'white',
                    opacity: activeReview === i ? 1 : 0,
                    transform: activeReview === i ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  {review.text}
                </p>
              ))}
            </div>
            <div className="mt-10 transition-all duration-700">
              <span className="block text-white/80" style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem' }}>{reviews[activeReview].name}</span>
              <span className="block mt-1" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wood-400)' }}>{reviews[activeReview].source}</span>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                className="transition-all duration-500"
                style={{
                  width: activeReview === i ? '28px' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  background: activeReview === i ? 'var(--color-fire)' : 'rgba(255,255,255,0.15)',
                }}
                aria-label={`Recensione ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scores section */}
        <div className="rec-fade border-t border-white/[0.08] pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-3xl mx-auto text-center">
            {badges.map((badge, i) => (
              <div key={i} className={`rec-badge ${i > 0 ? 'md:border-l md:border-white/[0.08]' : ''}`}>
                <span className="block text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 5vw, 4rem)', lineHeight: 1 }}>{badge.score}</span>
                <span className="block mt-2" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wood-400)' }}>{badge.label}</span>
                {badge.sub && <span className="block mt-1" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.55rem', color: 'var(--color-wood-600)' }}>{badge.sub}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Recurring themes */}
        <div className="rec-fade mt-14 md:mt-20 text-center">
          <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
            {['Pizza al forno a legna', 'Ambiente caldo e rustico', 'Terrazza panoramica', 'Staff simpatico', 'Cioccolata calda', 'Prezzi onesti', 'Pulito e curato'].map((theme, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-white/[0.08] text-white/50 transition-colors duration-500 hover:text-white/70 hover:border-white/15"
                style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
