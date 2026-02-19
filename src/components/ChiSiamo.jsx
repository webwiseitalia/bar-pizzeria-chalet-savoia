import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import interniImg from '../assets/foto/foto-6.webp'
import chaletImg from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ChiSiamo() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.chi-text-block', { y: 80, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.2, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })

      gsap.fromTo('.chi-img-main', { clipPath: 'inset(0 100% 0 0)' }, {
        clipPath: 'inset(0 0% 0 0)', duration: 1.6, ease: 'power4.inOut',
        scrollTrigger: { trigger: '.chi-img-main', start: 'top 75%' },
      })

      gsap.fromTo('.chi-img-float', { y: 60, opacity: 0, rotate: 3 }, {
        y: 0, opacity: 1, rotate: -2, duration: 1.4, ease: 'power3.out',
        scrollTrigger: { trigger: '.chi-img-float', start: 'top 85%' },
      })

      gsap.to('.chi-img-inner', {
        y: -50, ease: 'none',
        scrollTrigger: { trigger: '.chi-img-main', start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="chi-siamo" className="relative texture-noise texture-paper" style={{ padding: 'var(--space-section) 0', background: 'var(--color-cream)' }}>
      {/* Warm decorative blob */}
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full opacity-[0.07] pointer-events-none blur-3xl" style={{ background: 'var(--color-burgundy)' }} />
      <div className="absolute bottom-32 left-[5%] w-48 h-48 rounded-full opacity-[0.05] pointer-events-none blur-3xl" style={{ background: 'var(--color-fire)' }} />
      <div className="relative z-10" style={{ padding: '0 var(--space-gutter)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
          <div className="lg:col-span-5 lg:col-start-1">
            <div className="chi-text-block">
              <span className="label-sm block mb-6" style={{ color: 'var(--color-burgundy)' }}>Chi Siamo</span>
              <div className="rule-accent mb-8" />
            </div>

            <h2 className="chi-text-block display-lg" style={{ color: 'var(--color-wood-900)' }}>
              Un punto di <em style={{ color: 'var(--color-burgundy)' }}>riferimento</em><br />al Passo
            </h2>

            <div className="chi-text-block mt-8 md:mt-12 space-y-5 body-text" style={{ color: 'var(--color-wood-700)', maxWidth: '480px' }}>
              <p>Lo Chalet Savoia è un locale in stile baita — legno, atmosfera rustica montana, calore — dove fermarsi prima, durante o dopo una giornata sulle piste.</p>
              <p>Di fronte alla ski area Pontedilegno-Tonale e al Sacrario Militare. Conosciuto per essere <strong style={{ color: 'var(--color-wood-900)' }}>"sempre aperto"</strong> quando si arriva al Passo: una certezza.</p>
              <p>Il team — <span style={{ color: 'var(--color-burgundy)' }}>Alessandra, Alessio, Max</span> e lo staff — accoglie ogni ospite con cordialità, in un ambiente che molte recensioni descrivono come <em>"sentirsi a casa"</em>.</p>
            </div>

            <div className="chi-text-block mt-10 flex flex-wrap gap-x-6 gap-y-3">
              {['Stile baita alpina', 'Atmosfera calda', 'Di fronte alle piste', 'Accoglienza familiare'].map((tag, i) => (
                <span key={i} className="inline-block" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-wood-600)', borderBottom: '1px solid var(--color-wood-200)', paddingBottom: '4px' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 relative mt-8 lg:mt-20">
            {/* Diagonal accent line behind image */}
            <div className="absolute -top-8 -right-8 w-[110%] h-[110%] pointer-events-none opacity-[0.08]" style={{ border: '1px solid var(--color-burgundy)', transform: 'rotate(-3deg)' }} />
            <div className="chi-img-main relative overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5', maxHeight: '600px' }}>
              <img src={interniImg} alt="Interni dello Chalet Savoia con travi in legno" title="Interni in legno dello Chalet Savoia" width={800} height={1000} loading="lazy" className="chi-img-inner w-full h-[120%] object-cover" />
              {/* Warm tint overlay */}
              <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.06]" style={{ background: 'linear-gradient(135deg, var(--color-fire), transparent 60%)' }} />
            </div>

            <div className="chi-img-float absolute -bottom-10 -left-8 md:-left-20 w-40 md:w-56 shadow-2xl" style={{ zIndex: 2 }}>
              <img src={chaletImg} alt="Esterno Chalet Savoia" title="Vista esterna dello Chalet Savoia" width={400} height={300} loading="lazy" className="w-full h-auto" />
            </div>

            <div className="absolute -top-4 -right-2 md:right-8 z-10">
              <div className="flex flex-col items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full" style={{ background: 'var(--color-burgundy)' }}>
                <span className="text-white" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1 }}>1884</span>
                <span className="text-white/70 mt-0.5" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>m s.l.m.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
