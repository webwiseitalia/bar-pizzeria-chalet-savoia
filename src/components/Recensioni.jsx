const reviews = [
  {
    name: 'Marco R.',
    rating: 5,
    text: '"Pizza fantastica, cotta nel forno a legna come si deve. La Pizza Tonale è da provare assolutamente. Torneremo sicuramente!"',
    source: 'Google',
    date: 'Febbraio 2025',
  },
  {
    name: 'Sarah K.',
    rating: 5,
    text: '"Best hot chocolate on the slopes! Cozy wooden interior, friendly staff. We stopped here every day during our ski holiday. Alessandra is lovely!"',
    source: 'Google',
    date: 'January 2025',
  },
  {
    name: 'Giulia B.',
    rating: 5,
    text: '"Ci siamo fermati per un pranzo veloce e siamo rimasti colpiti. Tagliere ricco, bruschette ottime, bombardino perfetto dopo lo sci. Ambiente caldo e accogliente."',
    source: 'Google',
    date: 'Dicembre 2024',
  },
  {
    name: 'Thomas W.',
    rating: 4,
    text: '"Great location right on the slopes. Wood-fired pizza was excellent. The terrace has an amazing view of the mountains. Reasonably priced for a ski resort."',
    source: 'TripAdvisor',
    date: 'March 2024',
  },
  {
    name: 'Luca P.',
    rating: 5,
    text: '"Siamo del posto e lo Chalet Savoia è il nostro punto fisso al Tonale. Max e Alessio sono simpaticissimi, ti senti a casa. La pizza è la migliore del Passo!"',
    source: 'Google',
    date: 'Gennaio 2025',
  },
  {
    name: 'Anna M.',
    rating: 5,
    text: '"Fermata obbligatoria per noi motociclisti. Birra fresca, panino super, vista pazzesca dalla terrazza. Sempre aperto e sempre con il sorriso!"',
    source: 'Google',
    date: 'Agosto 2024',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-fire-400' : 'text-wood-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Recensioni() {
  return (
    <section id="recensioni" className="section-padding bg-snow-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-burgundy-700 font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Le Recensioni
          </span>
          <h2 className="section-title mb-4">
            Cosa dicono <span className="text-burgundy-700 italic">i nostri ospiti</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Centinaia di persone hanno condiviso la loro esperienza allo Chalet Savoia.
          </p>
        </div>

        {/* Rating Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 md:mb-14">
          <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-wood-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">G</div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-wood-900 text-lg">4.1</span>
                <Stars count={4} />
              </div>
              <p className="text-wood-500 text-xs">~450 recensioni su Google</p>
            </div>
          </div>
          <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-wood-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">T</div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-wood-900 text-lg">4.0</span>
                <Stars count={4} />
              </div>
              <p className="text-wood-500 text-xs">TripAdvisor</p>
            </div>
          </div>
          <div className="bg-white rounded-xl px-6 py-4 shadow-lg border border-wood-100 flex items-center gap-3">
            <div className="w-10 h-10 bg-fire-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">R</div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-wood-900 text-lg">4.5</span>
                <Stars count={5} />
              </div>
              <p className="text-wood-500 text-xs">Restaurant Guru</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-wood-100 hover:shadow-xl transition-shadow duration-300"
            >
              <Stars count={review.rating} />
              <p className="mt-4 text-wood-700 text-sm leading-relaxed italic">
                {review.text}
              </p>
              <div className="mt-4 pt-4 border-t border-wood-100 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-wood-900 text-sm">{review.name}</p>
                  <p className="text-wood-400 text-xs">{review.date}</p>
                </div>
                <span className="text-xs font-medium text-wood-400 bg-wood-50 px-2 py-1 rounded-full">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recurring themes */}
        <div className="mt-12 bg-gradient-to-br from-wood-50 to-wood-100 rounded-2xl p-6 md:p-8 border border-wood-200">
          <h3 className="font-heading text-lg font-bold text-wood-900 mb-4 text-center">
            I temi più apprezzati nelle recensioni
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              '🍕 Pizza al forno a legna',
              '🏠 Ambiente caldo e rustico',
              '☀️ Terrazza panoramica',
              '😊 Staff simpatico e cordiale',
              '☕ Cioccolata calda buonissima',
              '✅ Sempre aperto e affidabile',
              '💰 Prezzi onesti',
              '🧹 Pulito e curato',
            ].map((theme) => (
              <span
                key={theme}
                className="bg-white text-wood-800 text-sm px-4 py-2 rounded-full shadow-sm border border-wood-200"
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
