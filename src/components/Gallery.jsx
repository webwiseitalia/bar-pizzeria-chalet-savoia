import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AnimatePresence, motion } from 'framer-motion'

import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: foto5, alt: 'Panorama invernale Tonale', span: 'col-span-2 row-span-2' },
  { src: foto9, alt: 'Esterno Chalet Savoia', span: 'col-span-1 row-span-1' },
  { src: foto4, alt: 'Pizza prosciutto rucola', span: 'col-span-1 row-span-2' },
  { src: foto2, alt: 'Tagliere salumi formaggi', span: 'col-span-1 row-span-1' },
  { src: foto6, alt: 'Interni Chalet legno', span: 'col-span-1 row-span-1' },
  { src: foto8, alt: 'Piste sci seggiovie', span: 'col-span-2 row-span-1' },
  { src: foto1, alt: 'Strudel panna', span: 'col-span-1 row-span-1' },
  { src: foto7, alt: 'Bombardini panna', span: 'col-span-1 row-span-1' },
  { src: foto3, alt: 'Espresso terrazza', span: 'col-span-1 row-span-1' },
]

export default function Gallery() {
  const [active, setActive] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.gal-item').forEach((item, i) => {
        gsap.fromTo(item, { clipPath: 'inset(100% 0 0 0)' }, {
          clipPath: 'inset(0% 0 0 0)', duration: 1.2 + (i % 3) * 0.2, ease: 'power4.inOut',
          scrollTrigger: { trigger: item, start: 'top 85%' },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="gallery" style={{ padding: 'var(--space-section) 0', background: 'var(--color-wood-900)' }}>
      <div style={{ padding: '0 var(--space-gutter)' }}>
        <div className="flex items-end justify-between mb-10 md:mb-16">
          <div>
            <span className="label-sm block mb-4" style={{ color: 'var(--color-fire)' }}>Gallery</span>
            <h2 className="display-lg text-white">Scatti dallo <em style={{ color: 'var(--color-wood-300)' }}>Chalet</em></h2>
          </div>
          <span className="hidden md:block text-white/20" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>{images.length} FOTO</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[clamp(150px,20vw,250px)]">
          {images.map((img, i) => (
            <button key={i} onClick={() => setActive(i)} className={`gal-item relative overflow-hidden group ${img.span}`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setActive(null)}>
            <button onClick={() => setActive(null)} className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors" aria-label="Chiudi">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length) }} className="absolute left-4 md:left-10 text-white/30 hover:text-white transition-colors" aria-label="Precedente">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length) }} className="absolute right-4 md:right-10 text-white/30 hover:text-white transition-colors" aria-label="Successiva">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
            <motion.img key={active} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }} src={images[active].src} alt={images[active].alt} className="max-w-full max-h-[85vh] object-contain" onClick={(e) => e.stopPropagation()} />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.15em' }}>{active + 1} / {images.length}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
