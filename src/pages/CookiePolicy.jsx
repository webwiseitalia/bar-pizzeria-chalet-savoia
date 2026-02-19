import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SITE, CONTACT, LEGAL } from '../constants/siteData'

export default function CookiePolicy() {
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
          <h1 className="text-white" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>Cookie Policy</h1>
          <p className="text-white/50 mt-2" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem' }}>Informativa sull'utilizzo dei cookie</p>
        </div>
      </header>

      {/* Content */}
      <main className="relative" style={{ background: 'var(--color-cream)', padding: 'clamp(3rem, 6vw, 5rem) var(--space-gutter)' }}>
        <div className="max-w-3xl mx-auto">
          <p className="mb-8" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.7rem', color: 'var(--color-wood-400)', letterSpacing: '0.1em' }}>Ultimo aggiornamento: {LEGAL.lastUpdate}</p>

          {/* Privacy friendly badge */}
          <div className="p-5 mb-10 border-l-4 flex items-start gap-4" style={{ borderColor: '#22c55e', background: 'rgba(34,197,94,0.06)' }}>
            <svg className="w-8 h-8 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <div>
              <p className="font-medium mb-1" style={{ color: 'var(--color-wood-900)' }}>Sito Privacy-Friendly</p>
              <p className="text-sm" style={{ color: 'var(--color-wood-700)' }}>Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta e non serve il tuo consenso per la navigazione.</p>
            </div>
          </div>

          {/* 1 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>1. Cosa sono i Cookie</h2>
            <p className="body-text" style={{ color: 'var(--color-wood-700)' }}>I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.</p>
          </section>

          {/* 2 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>2. Tipologie di Cookie</h2>

            <h3 className="mb-3 font-medium" style={{ color: 'var(--color-wood-900)', fontSize: '1.1rem' }}>2.1 Cookie Tecnici</h3>
            <p className="body-text mb-3" style={{ color: 'var(--color-wood-700)' }}>Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.</p>
            <div className="p-4 border-l-4 mb-6" style={{ borderColor: 'var(--color-fire)', background: 'rgba(232,123,42,0.06)' }}>
              <p className="font-medium text-sm mb-2" style={{ color: 'var(--color-wood-900)' }}>Cookie tecnici utilizzati su questo sito:</p>
              <ul className="list-disc pl-5 text-sm space-y-1" style={{ color: 'var(--color-wood-700)' }}>
                <li>Cookie di navigazione e di sessione</li>
                <li>Cookie per memorizzare le preferenze dell'interfaccia</li>
              </ul>
              <p className="text-xs mt-3" style={{ color: 'var(--color-wood-500)' }}>Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.</p>
            </div>

            <h3 className="mb-3 font-medium" style={{ color: 'var(--color-wood-900)', fontSize: '1.1rem' }}>2.2 Cookie Analitici</h3>
            <div className="flex items-center gap-3 p-4 mb-6 border" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)' }}>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
              <div>
                <p className="font-medium text-sm" style={{ color: 'var(--color-wood-900)' }}>NON UTILIZZATI</p>
                <p className="text-xs" style={{ color: 'var(--color-wood-600)' }}>Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.</p>
              </div>
            </div>

            <h3 className="mb-3 font-medium" style={{ color: 'var(--color-wood-900)', fontSize: '1.1rem' }}>2.3 Cookie di Profilazione</h3>
            <div className="flex items-center gap-3 p-4 mb-6 border" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)' }}>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
              <div>
                <p className="font-medium text-sm" style={{ color: 'var(--color-wood-900)' }}>NON UTILIZZATI</p>
                <p className="text-xs" style={{ color: 'var(--color-wood-600)' }}>Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.</p>
              </div>
            </div>

            <h3 className="mb-3 font-medium" style={{ color: 'var(--color-wood-900)', fontSize: '1.1rem' }}>2.4 Cookie di Terze Parti</h3>
            <div className="flex items-center gap-3 p-4 border" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)' }}>
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="#ef4444" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
              <div>
                <p className="font-medium text-sm" style={{ color: 'var(--color-wood-900)' }}>NON UTILIZZATI</p>
                <p className="text-xs" style={{ color: 'var(--color-wood-600)' }}>Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).</p>
              </div>
            </div>
          </section>

          {/* 3 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>3. Cookie Utilizzati su Questo Sito</h2>
            <p className="body-text mb-4" style={{ color: 'var(--color-wood-700)' }}>Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--color-wood-900)' }}>
                    <th className="text-left text-white px-4 py-3" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Nome Cookie</th>
                    <th className="text-left text-white px-4 py-3" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tipologia</th>
                    <th className="text-left text-white px-4 py-3" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Finalità</th>
                    <th className="text-left text-white px-4 py-3" style={{ fontFamily: 'var(--font-accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-wood-200)' }}>
                    <td className="px-4 py-3" style={{ color: 'var(--color-wood-900)', fontFamily: 'var(--font-body)' }}>sidebar-state</td>
                    <td className="px-4 py-3"><span className="px-2 py-0.5 text-xs rounded" style={{ background: 'rgba(232,123,42,0.15)', color: 'var(--color-fire)' }}>Tecnico</span></td>
                    <td className="px-4 py-3 text-xs" style={{ color: 'var(--color-wood-600)' }}>Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                    <td className="px-4 py-3 text-xs" style={{ color: 'var(--color-wood-600)' }}>7 giorni</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-4 mt-4 border-l-4" style={{ borderColor: 'var(--color-fire)', background: 'rgba(232,123,42,0.06)' }}>
              <p className="text-sm" style={{ color: 'var(--color-wood-700)' }}><strong>Nota importante:</strong> I cookie tecnici come "sidebar-state" sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.</p>
            </div>
          </section>

          {/* 4 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>4. Come Gestire i Cookie</h2>
            <p className="body-text mb-4" style={{ color: 'var(--color-wood-700)' }}>Anche se i cookie tecnici come "sidebar-state" sono essenziali per il funzionamento del sito e non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser.</p>
            <h3 className="mb-3 font-medium" style={{ color: 'var(--color-wood-900)', fontSize: '1rem' }}>Disabilitare i cookie tramite il browser:</h3>
            <ul className="list-disc pl-6 mb-5 space-y-2 text-sm" style={{ color: 'var(--color-wood-700)' }}>
              <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
              <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
            </ul>
            <div className="p-4 border-l-4" style={{ borderColor: 'var(--color-burgundy)', background: 'rgba(155,27,60,0.04)' }}>
              <p className="text-sm" style={{ color: 'var(--color-wood-700)' }}><strong style={{ color: 'var(--color-burgundy)' }}>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.</p>
            </div>
          </section>

          {/* 5 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>5. Link a Siti Esterni</h2>
            <p className="body-text" style={{ color: 'var(--color-wood-700)' }}>Il sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.</p>
          </section>

          {/* 6 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>6. Aggiornamenti della Cookie Policy</h2>
            <p className="body-text mb-3" style={{ color: 'var(--color-wood-700)' }}>Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.</p>
            <p className="body-text" style={{ color: 'var(--color-wood-700)' }}>Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.</p>
          </section>

          {/* 7 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>7. Base Normativa</h2>
            <p className="body-text mb-3" style={{ color: 'var(--color-wood-700)' }}>Questa Cookie Policy è redatta in conformità a:</p>
            <ul className="list-disc pl-6 space-y-1 body-text" style={{ color: 'var(--color-wood-700)' }}>
              <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
              <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
              <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
              <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
            </ul>
          </section>

          {/* 8 */}
          <section className="mb-12">
            <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--color-wood-900)' }}>8. Contatti</h2>
            <p className="body-text mb-4" style={{ color: 'var(--color-wood-700)' }}>Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:</p>
            <div className="p-5 border" style={{ borderColor: 'var(--color-wood-200)', background: 'var(--color-wood-50)' }}>
              <p className="font-medium mb-2" style={{ color: 'var(--color-wood-900)' }}>{SITE.name}</p>
              <p className="text-sm" style={{ color: 'var(--color-wood-600)' }}>{CONTACT.address.full}</p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-wood-600)' }}>Email: <a href={`mailto:${CONTACT.email}`} className="underline" style={{ color: 'var(--color-burgundy)' }}>{CONTACT.email}</a></p>
              <p className="text-sm mt-1" style={{ color: 'var(--color-wood-600)' }}>Tel: <a href={`tel:${CONTACT.phone}`} className="underline" style={{ color: 'var(--color-burgundy)' }}>{CONTACT.phoneDisplay}</a></p>
            </div>
          </section>

          {/* Zero tracking badge */}
          <div className="text-center py-10 my-10 border-t border-b" style={{ borderColor: 'var(--color-wood-200)' }}>
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <p className="font-medium" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--color-wood-900)' }}>Zero Tracciamento</p>
            <p className="text-sm mt-1" style={{ color: 'var(--color-wood-600)' }}>Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online.</p>
          </div>

          {/* Bottom navigation */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link to="/" className="flex-1 text-center py-4 border transition-all duration-500 hover:opacity-80" style={{ borderColor: 'var(--color-wood-200)', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wood-800)' }}>Torna alla Home</Link>
            <Link to="/privacy-policy" className="flex-1 text-center py-4 border transition-all duration-500 hover:opacity-80" style={{ borderColor: 'var(--color-wood-200)', fontFamily: 'var(--font-accent)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-wood-800)' }}>Leggi la Privacy Policy</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
