import { useState } from 'react'

import foto1 from '../assets/foto/foto-1.webp'
import foto2 from '../assets/foto/foto-2.webp'
import foto3 from '../assets/foto/foto-3.webp'
import foto4 from '../assets/foto/foto-4.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto6 from '../assets/foto/foto-6.webp'
import foto7 from '../assets/foto/foto-7.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto9 from '../assets/foto/foto-9.webp'

const images = [
  { src: foto9, alt: 'Esterno dello Chalet Savoia al Passo del Tonale', category: 'Lo Chalet' },
  { src: foto5, alt: 'Panorama invernale del Passo del Tonale con montagne e neve', category: 'Panorami' },
  { src: foto4, alt: 'Pizza con prosciutto crudo, rucola e scaglie di parmigiano', category: 'Pizza & Piatti' },
  { src: foto2, alt: 'Tagliere di salumi e formaggi locali sulla terrazza', category: 'Pizza & Piatti' },
  { src: foto6, alt: 'Interni dello Chalet con travi in legno e bancone pizzeria', category: 'Lo Chalet' },
  { src: foto8, alt: 'Piste da sci con seggiovie e montagna innevata', category: 'Panorami' },
  { src: foto1, alt: 'Strudel con panna e bevande calde', category: 'Pizza & Piatti' },
  { src: foto7, alt: 'Bombardini con panna serviti al tavolo', category: 'Pizza & Piatti' },
  { src: foto3, alt: 'Caffè espresso sulla terrazza in legno', category: 'Lo Chalet' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="section-padding bg-wood-950">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-fire-400 font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Gallery
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Scatti dallo Chalet
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Un assaggio dell'atmosfera, dei piatti e dei panorami che ti aspettano.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setLightbox(index)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                index === 0 || index === 1 ? 'md:col-span-1 md:row-span-1' : ''
              } ${index === 1 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <svg className="w-8 h-8 text-white mx-auto mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                  <span className="text-white text-xs font-medium">{image.category}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 z-10"
            aria-label="Chiudi"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((lightbox - 1 + images.length) % images.length)
            }}
            className="absolute left-2 md:left-6 text-white/70 hover:text-white p-2"
            aria-label="Precedente"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox((lightbox + 1) % images.length)
            }}
            className="absolute right-2 md:right-6 text-white/70 hover:text-white p-2"
            aria-label="Successiva"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-full">
            {images[lightbox].category} — {lightbox + 1}/{images.length}
          </div>
        </div>
      )}
    </section>
  )
}
