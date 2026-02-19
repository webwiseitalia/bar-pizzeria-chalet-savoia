import pisteImg from '../assets/foto/foto-8.webp'

export default function Posizione() {
  return (
    <section id="posizione" className="section-padding bg-snow-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-burgundy-700 font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            La Posizione
          </span>
          <h2 className="section-title mb-4">
            Direttamente{' '}
            <span className="text-burgundy-700 italic">sulle piste</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Il nostro vantaggio? La posizione. Di fronte alle piste da sci del comprensorio
            Pontedilegno-Tonale e a pochi passi dal Sacrario Militare della Grande Guerra.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left column - Image & info */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <img
                src={pisteImg}
                alt="Piste da sci del Passo del Tonale con seggiovie e montagna innevata"
                className="w-full h-[300px] md:h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-heading text-xl md:text-2xl font-bold">
                  Comprensorio Pontedilegno-Tonale
                </p>
                <p className="text-white/80 text-sm mt-1">
                  100 km di piste • Ghiacciaio Presena (3.000 m) • Adamello Ski
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-wood-100">
              <iframe
                title="Posizione Chalet Savoia al Passo del Tonale"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2746.5!2d10.5959!3d46.2589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47832e3f6f75f8f9%3A0xchalet!2sVia+Case+Sparse+del+Tonale%2C+106%2C+25056+Ponte+di+Legno+BS!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Right column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Ideal for */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-wood-100">
              <h3 className="font-heading text-lg font-bold text-wood-900 mb-4">
                Punto di sosta ideale per
              </h3>
              <div className="space-y-4">
                {[
                  {
                    emoji: '⛷️',
                    title: 'Sciatori & Snowboarder',
                    desc: 'A piedi dalle piste — si entra con gli scarponi!',
                  },
                  {
                    emoji: '🏍️',
                    title: 'Motociclisti',
                    desc: 'Punto di ritrovo classico sul Passo del Tonale',
                  },
                  {
                    emoji: '🚴',
                    title: 'Ciclisti',
                    desc: 'Il Tonale è tappa classica su strada',
                  },
                  {
                    emoji: '🥾',
                    title: 'Escursionisti',
                    desc: 'Base per il Ghiacciaio Presena e Sentiero della Pace',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-wood-900 text-sm">{item.title}</p>
                      <p className="text-wood-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How to get there */}
            <div className="bg-burgundy-700 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-heading text-lg font-bold mb-4">Come Arrivare</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-fire-300 font-bold min-w-[80px]">Da Brescia</span>
                  <span className="text-white/80">~2h via Valle Camonica (SS42)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fire-300 font-bold min-w-[80px]">Da Trento</span>
                  <span className="text-white/80">~1h30 via Val di Sole</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-fire-300 font-bold min-w-[80px]">Da Milano</span>
                  <span className="text-white/80">~2h30 via A4 + Valle Camonica</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-white/70 text-xs">
                  Sul Passo del Tonale, SS42 tra Ponte di Legno (BS) e Vermiglio (TN).
                  Parcheggio disponibile nella zona del Passo.
                </p>
              </div>
            </div>

            {/* Terrace highlight */}
            <div className="bg-gradient-to-br from-fire-50 to-fire-100 rounded-2xl p-6 border border-fire-200">
              <div className="flex items-start gap-3">
                <span className="text-3xl">☀️</span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-wood-900 mb-2">
                    Terrazza Panoramica
                  </h3>
                  <p className="text-wood-700 text-sm leading-relaxed">
                    Terrazza esterna soleggiata con panorama eccezionale sulle montagne.
                    Perfetta per pranzi al sole in inverno e relax estivo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
