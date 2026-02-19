import { useEffect, useRef } from 'react'
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

const positions = [
  'md:col-span-5 md:col-start-1',
  'md:col-span-4 md:col-start-7 md:mt-12',
  'md:col-span-5 md:col-start-2 md:-mt-4',
  'md:col-span-4 md:col-start-8 md:mt-8',
  'md:col-span-5 md:col-start-1 md:-mt-6',
  'md:col-span-4 md:col-start-6 md:mt-16',
]

export default function Recensioni() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.rec-title', { y: '100%' }, { y: '0%', duration: 1.2, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } })
      document.querySelectorAll('.rec-card').forEach((card, i) => {
        gsap.fromTo(card, { y: 60 + (i % 3) * 20, opacity: 0, rotate: (i % 2 === 0 ? -1 : 1) * (1 + Math.random()) }, {
          y: 0, opacity: 1, rotate: 0, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' },
        })
      })
      gsap.fromTo('.rec-badge', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'back.out(1.4)', scrollTrigger: { trigger: '.rec-badge', start: 'top 85%' } })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="recensioni" style={{ padding: 'var(--space-section) 0', background: 'var(--color-wood-50)' }}>
      <div style={{ padding: '0 var(--space-gutter)' }}>
        <div className="mb-14 md:mb-20 md:ml-auto md:text-right" style={{ maxWidth: '600px' }}>
          <span className="label-sm block mb-5" style={{ color: 'var(--color-burgundy)' }}>Le Voci</span>
          <h2>
            <div className="overflow-hidden"><span className="rec-title display-lg inline-block" style={{ color: 'var(--color-wood-900)' }}>Cosa dicono</span></div>
            <div className="overflow-hidden"><em className="rec-title display-lg inline-block" style={{ color: 'var(--color-burgundy)' }}>i nostri ospiti</em></div>
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-10 mb-14 md:mb-20 items-end">
          {[
            { score: '4.1', label: 'Google', sub: '~450 recensioni', color: '#4285f4' },
            { score: '4.0', label: 'TripAdvisor', sub: '', color: '#00a680' },
            { score: '4.5', label: 'Restaurant Guru', sub: '', color: 'var(--color-fire)' },
          ].map((badge, i) => (
            <div key={i} className={`rec-badge ${i === 1 ? 'md:mt-8' : ''}`}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', lineHeight: 1, color: badge.color }}>{badge.score}</span>
              <span className="block mt-1" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wood-300)' }}>{badge.label}</span>
              {badge.sub && <span className="block" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.55rem', color: 'var(--color-wood-200)' }}>{badge.sub}</span>}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-6">
          {reviews.map((review, i) => (
            <div key={i} className={`rec-card ${positions[i]} p-6 md:p-8 border`} style={{ borderColor: 'var(--color-wood-100)', background: 'white' }}>
              <span className="block mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', lineHeight: 0.5, color: 'var(--color-wood-200)' }}>&ldquo;</span>
              <p className="body-text" style={{ color: 'var(--color-wood-700)', fontStyle: 'italic' }}>{review.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm font-medium" style={{ color: 'var(--color-wood-900)' }}>{review.name}</span>
                <span style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-wood-300)' }}>{review.source}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 md:ml-[20%] max-w-2xl">
          <span className="label-sm block mb-5" style={{ color: 'var(--color-wood-300)' }}>Temi ricorrenti</span>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {['Pizza al forno a legna', 'Ambiente caldo e rustico', 'Terrazza panoramica', 'Staff simpatico', 'Cioccolata calda', 'Sempre aperto', 'Prezzi onesti', 'Pulito e curato'].map((theme, i) => (
              <span key={i} className="body-text" style={{ color: 'var(--color-wood-300)', borderBottom: i % 3 === 0 ? '1px solid var(--color-wood-200)' : 'none', paddingBottom: '2px' }}>
                {theme}{i < 7 ? ' ·' : ''}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
