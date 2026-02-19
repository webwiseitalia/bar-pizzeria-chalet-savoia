import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import pizzaImg from '../assets/foto/foto-4.webp'
import tagliereImg from '../assets/foto/foto-2.webp'
import strudelImg from '../assets/foto/foto-1.webp'
import bombardinoImg from '../assets/foto/foto-7.webp'

gsap.registerPlugin(ScrollTrigger)

const items = [
  { title: 'Pizza al Forno a Legna', desc: 'Il punto forte. Impasto morbido e friabile, cottura su forno a legna. La "Pizza Tonale" è la più amata.', image: pizzaImg, alt: 'Pizza con prosciutto crudo rucola e parmigiano', title_attr: 'Pizza al forno a legna dello Chalet Savoia', tags: ['Impasto artigianale', 'Forno a legna', 'Pizza Tonale'] },
  { title: 'Taglieri & Piatti', desc: 'Salumi e formaggi locali, lasagna, polenta, zuppe calde, panini, bruschette. Il gusto della montagna.', image: tagliereImg, alt: 'Tagliere di salumi e formaggi', title_attr: 'Tagliere di prodotti locali', tags: ['Prodotti locali', 'Polenta', 'Zuppe'] },
  { title: 'Colazioni & Dolci', desc: 'Cappuccino cremoso, espresso, torte fatte in casa, cheesecake. La cioccolata calda è leggendaria.', image: strudelImg, alt: 'Strudel con panna e bevande calde', title_attr: 'Strudel e dolci fatti in casa', tags: ['Torte fatte in casa', 'Cioccolata calda', 'Brunch'] },
  { title: 'Après-ski', desc: 'Birre artigianali "First", bombardino, vin brulé, bevande calde. Birre fresche e cocktail in estate.', image: bombardinoImg, alt: 'Bombardini con panna sul tavolo', title_attr: 'Bombardino e birre artigianali', tags: ['Birre artigianali', 'Bombardino', 'Vin brulé'] },
]

export default function Menu() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.menu-title-word', { y: '100%' }, {
        y: '0%', duration: 1.2, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
      })

      document.querySelectorAll('.menu-item').forEach((item, i) => {
        const isEven = i % 2 === 0
        gsap.fromTo(item, { y: 100, opacity: 0, x: isEven ? -30 : 30 }, {
          y: 0, opacity: 1, x: 0, duration: 1.4, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 80%' },
        })
        const img = item.querySelector('.menu-item-img')
        if (img) {
          gsap.to(img, { y: -40, ease: 'none', scrollTrigger: { trigger: item, start: 'top bottom', end: 'bottom top', scrub: true } })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="menu" className="relative texture-noise-dark texture-woodgrain inner-shadow-dark" style={{ padding: 'var(--space-section) 0', background: 'var(--color-wood-900)' }}>
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[400px] opacity-[0.06] pointer-events-none blur-3xl" style={{ background: 'radial-gradient(ellipse, var(--color-fire), transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[40%] h-[300px] opacity-[0.04] pointer-events-none blur-3xl" style={{ background: 'radial-gradient(ellipse, var(--color-burgundy), transparent 70%)' }} />
      <div className="relative z-10" style={{ padding: '0 var(--space-gutter)' }}>
        <div className="mb-16 md:mb-24 text-center">
          <span className="label-sm block mb-6" style={{ color: 'var(--color-fire)' }}>Il Nostro Menu</span>
          <h2>
            <div className="overflow-hidden">
              <span className="menu-title-word display-lg text-white inline-block">Cosa&nbsp;</span>
              <span className="menu-title-word display-lg inline-block" style={{ color: 'var(--color-fire)', fontStyle: 'italic' }}>mangiare</span>
            </div>
            <div className="overflow-hidden">
              <span className="menu-title-word display-lg text-white/60 inline-block">e bere</span>
            </div>
          </h2>
          <p className="body-text mt-6 text-white/65 max-w-lg mx-auto">Dai sapori autentici della montagna alla nostra pizza al forno a legna — tutto il gusto del Tonale.</p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {items.map((item, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={i} className="menu-item grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                <div className={`relative overflow-hidden ${isEven ? 'md:col-span-7 md:col-start-1' : 'md:col-span-6 md:col-start-7'}`} style={{ height: i === 0 ? 'clamp(300px, 40vw, 500px)' : 'clamp(250px, 35vw, 420px)', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
                  <img src={item.image} alt={item.alt} title={item.title_attr} width={1200} height={800} className="menu-item-img w-full h-[120%] object-cover" loading="lazy" />
                  {/* Warm tint overlay */}
                  <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.08]" style={{ background: 'linear-gradient(160deg, rgba(251,146,60,0.5), transparent 50%)' }} />
                </div>
                <div className={`${isEven ? 'md:col-span-4 md:col-start-9' : 'md:col-span-5 md:col-start-1 md:row-start-1'} flex flex-col justify-center`}>
                  <span className="block mb-3 text-white/30" style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', lineHeight: 0.8 }}>0{i + 1}</span>
                  <h3 className="text-white mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', lineHeight: 1.05 }}>{item.title}</h3>
                  <p className="body-text text-white/75 mb-5">{item.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map((tag, j) => (
                      <span key={j} className="inline-block border border-white/15 text-white/60 px-3 py-1" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 md:ml-[15%]">
          <p className="text-white/40" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.1em' }}>Prezzi nella media per una località sciistica — circa 10-20€ a persona</p>
        </div>
      </div>
    </section>
  )
}
