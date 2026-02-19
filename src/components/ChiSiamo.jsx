import interniImg from '../assets/foto/foto-6.webp'
import chaletImg from '../assets/foto/foto-9.webp'

export default function ChiSiamo() {
  return (
    <section id="chi-siamo" className="section-padding bg-snow-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <span className="inline-block text-burgundy-700 font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Chi Siamo
            </span>
            <h2 className="section-title mb-6">
              Un punto di riferimento{' '}
              <span className="text-burgundy-700 italic">al Passo</span>
            </h2>
            <div className="space-y-4 text-wood-700 font-body text-base md:text-lg leading-relaxed">
              <p>
                Lo Chalet Savoia è un punto di riferimento al Passo del Tonale. Un locale in stile baita —
                legno, atmosfera rustica montana, calore — dove fermarsi prima, durante o dopo una giornata
                sulle piste. Di fronte alla ski area Pontedilegno-Tonale e al Sacrario Militare del Passo del Tonale.
              </p>
              <p>
                Aperto sia in stagione invernale che estiva, lo Chalet è conosciuto per essere
                <strong className="text-wood-900"> "sempre aperto"</strong> quando si arriva al Passo:
                una certezza per sciatori, motociclisti, ciclisti ed escursionisti.
              </p>
              <p>
                Il team — <span className="text-burgundy-700 font-semibold">Alessandra, Alessio, Max</span> e
                lo staff — accoglie ogni ospite con cordialità e simpatia, in un ambiente che molte recensioni
                descrivono come <em>"sentirsi a casa"</em>.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '🏔️', text: 'Stile baita alpina' },
                { icon: '🔥', text: 'Atmosfera calda' },
                { icon: '⛷️', text: 'Di fronte alle piste' },
                { icon: '👨‍👩‍👦', text: 'Accoglienza familiare' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-wood-50 rounded-xl px-4 py-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-medium text-wood-800">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={interniImg}
                alt="Interni dello Chalet Savoia con travi in legno e bancone pizzeria"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating card with chalet image */}
            <div className="absolute -bottom-6 -left-6 md:-left-10 w-40 md:w-52 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src={chaletImg}
                alt="Esterno dello Chalet Savoia al Passo del Tonale"
                className="w-full h-28 md:h-36 object-cover"
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -top-4 -right-4 md:-right-6 bg-burgundy-700 text-white rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center shadow-lg">
              <span className="text-xl md:text-2xl font-bold font-heading leading-none">1884</span>
              <span className="text-[9px] md:text-[10px] uppercase tracking-wider mt-0.5">m s.l.m.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
