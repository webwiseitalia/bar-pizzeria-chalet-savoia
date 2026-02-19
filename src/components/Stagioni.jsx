import invernoImg from '../assets/foto/foto-5.webp'
import espressoImg from '../assets/foto/foto-3.webp'

export default function Stagioni() {
  return (
    <section id="stagioni" className="section-padding bg-wood-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-burgundy-700 font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Due Stagioni, un'Esperienza
          </span>
          <h2 className="section-title mb-4">
            Inverno <span className="text-fire-500">&</span> Estate
          </h2>
          <p className="section-subtitle mx-auto">
            Lo Chalet Savoia ti accoglie in inverno tra neve e sci, e in estate tra sole,
            escursioni e passi alpini.
          </p>
        </div>

        {/* Two Seasons Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Winter */}
          <div className="relative group rounded-2xl overflow-hidden shadow-xl">
            <img
              src={invernoImg}
              alt="Panorama invernale del Passo del Tonale con neve e montagne"
              className="w-full h-[450px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">❄️</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Inverno</h3>
              </div>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">
                Dicembre — Aprile
              </p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-5">
                Bar e pizzeria per sciatori. Colazione prima delle piste, pranzo veloce o completo,
                après-ski con bombardino e birra. Atmosfera baita con stufe, legno, calore.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Colazione', 'Pranzo sulle piste', 'Après-ski', 'Bombardino', 'Forno a legna'].map((tag) => (
                  <span key={tag} className="bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Summer */}
          <div className="relative group rounded-2xl overflow-hidden shadow-xl">
            <img
              src={espressoImg}
              alt="Caffè espresso sulla terrazza in legno dello Chalet"
              className="w-full h-[450px] md:h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-amber-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-3xl">☀️</span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white">Estate</h3>
              </div>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">
                Giugno — Settembre
              </p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-5">
                Sosta per motociclisti, ciclisti ed escursionisti. Terrazza al sole con panorama montano.
                Panini, birre fresche, gelato. Base per il Ghiacciaio Presena e i forti della Grande Guerra.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Terrazza al sole', 'Birre fresche', 'Motociclisti', 'Escursioni', 'Ghiacciaio Presena'].map((tag) => (
                  <span key={tag} className="bg-white/10 text-white/90 text-xs px-3 py-1 rounded-full border border-white/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ski Area Info */}
        <div className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-wood-100">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="text-4xl">🎿</span>
              <div>
                <h3 className="font-heading text-xl font-bold text-wood-900">Comprensorio Pontedilegno-Tonale</h3>
                <p className="text-wood-600 text-sm">Adamello Ski — Lo Chalet è nel cuore della ski area</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 md:ml-auto">
              <div className="text-center">
                <span className="block text-2xl font-bold text-burgundy-700 font-heading">100</span>
                <span className="text-xs text-wood-500 uppercase tracking-wider">km di piste</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-burgundy-700 font-heading">3.000</span>
                <span className="text-xs text-wood-500 uppercase tracking-wider">m Presena</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-burgundy-700 font-heading">1.884</span>
                <span className="text-xs text-wood-500 uppercase tracking-wider">m altitudine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
