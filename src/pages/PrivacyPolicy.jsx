import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE, CONTACT, LEGAL } from '../constants/siteData'

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-wood-900)' }}>
      {/* Header */}
      <header className="relative texture-noise-dark texture-woodgrain" style={{ background: 'var(--color-wood-900)', padding: 'clamp(2rem, 5vw, 3.5rem) var(--space-gutter)' }}>
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-6" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          Torna alla Home
        </Link>
        <div className="relative z-10">
          <h1 className="text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>Privacy Policy</h1>
          <p className="text-white/50 mt-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Informativa sul trattamento dei dati personali</p>
        </div>
      </header>

      {/* Content */}
      <main className="relative" style={{ background: 'var(--color-cream)', padding: 'clamp(3rem, 6vw, 5rem) var(--space-gutter)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="mb-10" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', color: 'var(--color-wood-400)', letterSpacing: '0.1em' }}>Ultimo aggiornamento: {LEGAL.lastUpdate}</p>

          {/* 1 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>1. Titolare del Trattamento</h2>
            <p className="body-text mb-4" style={{ color: 'var(--color-wood-700)' }}>Il Titolare del trattamento dei dati personali è:</p>
            <div className="p-5 border" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)' }}>
              <p className="font-medium mb-2" style={{ color: 'var(--color-wood-900)' }}>{SITE.name}</p>
              <p className="text-sm flex items-center gap-2" style={{ color: 'var(--color-wood-600)' }}>
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                {CONTACT.address.full}
              </p>
              <p className="text-sm flex items-center gap-2 mt-1" style={{ color: 'var(--color-wood-600)' }}>
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {CONTACT.phoneDisplay}
              </p>
              <p className="text-sm flex items-center gap-2 mt-1" style={{ color: 'var(--color-wood-600)' }}>
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {CONTACT.email}
              </p>
            </div>
          </section>

          {/* 2 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>2. Dati Raccolti e Finalità del Trattamento</h2>
            <h3 className="mb-3 font-medium" style={{ color: 'var(--color-wood-900)', fontSize: '1.1rem' }}>2.1 Dati forniti volontariamente dall'utente</h3>
            <p className="body-text mb-3" style={{ color: 'var(--color-wood-700)' }}>Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:</p>
            <ul className="list-disc pl-6 mb-5 space-y-1 body-text" style={{ color: 'var(--color-wood-700)' }}>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Nome e Cognome</strong> - per identificare l'interessato</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Indirizzo Email</strong> - per rispondere alle richieste</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Messaggio/Descrizione</strong> - per comprendere le esigenze</li>
            </ul>
            <div className="p-4 border-l-4" style={{ borderColor: 'var(--color-fire)', background: 'rgba(232,123,42,0.06)' }}>
              <p className="font-medium text-sm mb-2" style={{ color: 'var(--color-wood-900)' }}>Finalità: I dati vengono raccolti esclusivamente per:</p>
              <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: 'var(--color-wood-700)' }}>
                <li>Rispondere alle richieste di informazioni</li>
                <li>Fornire informazioni sui nostri servizi</li>
                <li>Gestire la relazione con il cliente</li>
              </ul>
            </div>
            <h3 className="mt-6 mb-3 font-medium" style={{ color: 'var(--color-wood-900)', fontSize: '1.1rem' }}>2.2 Base giuridica del trattamento</h3>
            <p className="body-text" style={{ color: 'var(--color-wood-700)' }}>Il trattamento è basato sul <strong style={{ color: 'var(--color-wood-900)' }}>consenso esplicito</strong> dell'interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l'invio del modulo di contatto, e sulla <strong style={{ color: 'var(--color-wood-900)' }}>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).</p>
          </section>

          {/* 3 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>3. Modalità di Trattamento</h2>
            <p className="body-text mb-3" style={{ color: 'var(--color-wood-700)' }}>I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.</p>
            <p className="body-text" style={{ color: 'var(--color-wood-700)' }}>Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.</p>
          </section>

          {/* 4 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>4. Conservazione dei Dati</h2>
            <p className="body-text mb-3" style={{ color: 'var(--color-wood-700)' }}>I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti.</p>
            <ul className="list-disc pl-6 space-y-1 body-text" style={{ color: 'var(--color-wood-700)' }}>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Richieste di preventivo:</strong> I dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Rapporti contrattuali:</strong> I dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Richieste di informazioni:</strong> I dati vengono conservati per 12 mesi dalla risposta</li>
            </ul>
          </section>

          {/* 5 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>5. Comunicazione e Diffusione dei Dati</h2>
            <p className="body-text mb-3" style={{ color: 'var(--color-wood-700)' }}>I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:</p>
            <ul className="list-disc pl-6 mb-5 space-y-1 body-text" style={{ color: 'var(--color-wood-700)' }}>
              <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
              <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
              <li>Autorità competenti in caso di richieste legittime previste per legge</li>
            </ul>
            <div className="p-4 border-l-4" style={{ borderColor: 'var(--color-burgundy)', background: 'rgba(155,27,60,0.04)' }}>
              <p className="font-medium text-sm mb-2" style={{ color: 'var(--color-burgundy)' }}>I tuoi dati NON verranno MAI:</p>
              <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: 'var(--color-wood-700)' }}>
                <li>Venduti a terze parti</li>
                <li>Condivisi con scopi di marketing</li>
                <li>Utilizzati per invio di newsletter non richieste</li>
                <li>Trasferiti fuori dall'Unione Europea</li>
              </ul>
            </div>
          </section>

          {/* 6 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>6. Diritti dell'Interessato</h2>
            <p className="body-text mb-3" style={{ color: 'var(--color-wood-700)' }}>In qualità di interessato, hai il diritto di:</p>
            <ul className="list-disc pl-6 mb-5 space-y-1 body-text" style={{ color: 'var(--color-wood-700)' }}>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell'esistenza dei tuoi dati e riceverne copia</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati ("diritto all'oblio")</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
              <li><strong style={{ color: 'var(--color-wood-900)' }}>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
            </ul>
            <div className="p-4 border-l-4" style={{ borderColor: 'var(--color-fire)', background: 'rgba(232,123,42,0.06)' }}>
              <p className="font-medium text-sm mb-2" style={{ color: 'var(--color-wood-900)' }}>Come esercitare i tuoi diritti:</p>
              <p className="text-sm" style={{ color: 'var(--color-wood-700)' }}>Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${CONTACT.email}`} className="underline" style={{ color: 'var(--color-burgundy)' }}>{CONTACT.email}</a>.</p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-wood-700)' }}>Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.</p>
            </div>
          </section>

          {/* 7 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>7. Diritto di Reclamo</h2>
            <p className="body-text mb-4" style={{ color: 'var(--color-wood-700)' }}>Hai il diritto di proporre reclamo all'Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.</p>
            <div className="p-4 border" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)' }}>
              <p className="font-medium text-sm mb-1" style={{ color: 'var(--color-wood-900)' }}>Garante per la protezione dei dati personali:</p>
              <p className="text-sm" style={{ color: 'var(--color-wood-600)' }}>Sito web: www.garanteprivacy.it</p>
              <p className="text-sm" style={{ color: 'var(--color-wood-600)' }}>Email: garante@gpdp.it</p>
              <p className="text-sm" style={{ color: 'var(--color-wood-600)' }}>PEC: protocollo@pec.gpdp.it</p>
            </div>
          </section>

          {/* 8 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>8. Cookie e Tecnologie di Tracciamento</h2>
            <p className="body-text" style={{ color: 'var(--color-wood-700)' }}>Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="underline" style={{ color: 'var(--color-burgundy)' }}>Cookie Policy</Link>.</p>
          </section>

          {/* 9 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>9. Modifiche alla Privacy Policy</h2>
            <p className="body-text" style={{ color: 'var(--color-wood-700)' }}>Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.</p>
          </section>

          {/* 10 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>10. Contatti</h2>
            <p className="body-text mb-4" style={{ color: 'var(--color-wood-700)' }}>Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:</p>
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 px-5 py-3 border transition-colors hover:border-[var(--color-burgundy)]" style={{ borderColor: 'var(--color-wood-200)', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--color-burgundy)' }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center gap-2 px-5 py-3 border transition-colors hover:border-[var(--color-burgundy)]" style={{ borderColor: 'var(--color-wood-200)', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--color-burgundy)' }}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </section>

          {/* Compliance note */}
          <div className="pt-8 mt-8 border-t text-center" style={{ borderColor: 'var(--color-wood-200)' }}>
            <p className="text-xs" style={{ color: 'var(--color-wood-400)' }}>Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.</p>
          </div>

          {/* Bottom navigation */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/" className="flex-1 text-center py-4 border transition-all duration-500 hover:opacity-80" style={{ borderColor: 'var(--color-wood-200)', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wood-800)' }}>Torna alla Home</Link>
            <Link to="/cookie-policy" className="flex-1 text-center py-4 border transition-all duration-500 hover:opacity-80" style={{ borderColor: 'var(--color-wood-200)', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wood-800)' }}>Leggi la Cookie Policy</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
