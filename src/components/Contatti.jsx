export default function Contatti() {
  return (
    <section id="contatti" className="section-padding bg-snow-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-burgundy-700 font-body font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Contatti
          </span>
          <h2 className="section-title mb-4">
            Dove <span className="text-burgundy-700 italic">Trovarci</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Vieni a trovarci al Passo del Tonale! Siamo qui ad aspettarti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-wood-100">
            <div className="w-12 h-12 bg-burgundy-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-burgundy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-bold text-wood-900 mb-2">Indirizzo</h3>
            <p className="text-wood-700 text-sm leading-relaxed">
              Via Case Sparse del Tonale, 106<br />
              25056 Passo del Tonale (BS)<br />
              <span className="text-wood-500">1.884 m s.l.m.</span>
            </p>
            <p className="mt-3 text-wood-500 text-xs">
              Sul Passo del Tonale, SS42 tra Ponte di Legno (BS) e Vermiglio (TN).
              Di fronte alle piste e al Sacrario Militare.
            </p>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-wood-100">
            <div className="w-12 h-12 bg-burgundy-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-burgundy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-bold text-wood-900 mb-4">Telefono & WhatsApp</h3>
            <div className="space-y-3">
              <a
                href="tel:+393397166992"
                className="flex items-center gap-3 text-wood-700 hover:text-burgundy-700 transition-colors group"
              >
                <div className="w-10 h-10 bg-burgundy-50 group-hover:bg-burgundy-100 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-burgundy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">+39 339 716 6992</span>
              </a>
              <a
                href="https://wa.me/393397166992"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-wood-700 hover:text-green-600 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-50 group-hover:bg-green-100 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="font-medium text-sm">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Hours Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-wood-100 md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-burgundy-50 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-burgundy-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading text-lg font-bold text-wood-900 mb-4">Apertura Stagionale</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-blue-50 rounded-xl px-4 py-3">
                <span className="text-xl">❄️</span>
                <div>
                  <p className="font-semibold text-wood-900 text-sm">Stagione Invernale</p>
                  <p className="text-wood-600 text-xs">Dicembre — Aprile</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-amber-50 rounded-xl px-4 py-3">
                <span className="text-xl">☀️</span>
                <div>
                  <p className="font-semibold text-wood-900 text-sm">Stagione Estiva</p>
                  <p className="text-wood-600 text-xs">Giugno — Settembre</p>
                </div>
              </div>
              <p className="text-wood-400 text-xs mt-2 italic">
                Chiuso nelle stagioni intermedie. Contattaci per confermare date e orari esatti.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+393397166992"
              className="btn-primary text-base px-8 py-4"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Chiamaci Ora
            </a>
            <a
              href="https://wa.me/393397166992"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
