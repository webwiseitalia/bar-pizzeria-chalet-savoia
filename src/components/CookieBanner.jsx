import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LEGAL } from '../constants/siteData'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(LEGAL.cookieKey)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleConsent = (accepted) => {
    localStorage.setItem(LEGAL.cookieKey, accepted ? 'accepted' : 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      {/* Blur overlay */}
      <div className="fixed inset-0 z-[90] pointer-events-none" style={{ backdropFilter: 'blur(6px)', background: 'rgba(44,24,16,0.4)' }} />

      {/* Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[95] p-4 md:p-6" style={{ background: 'var(--color-wood-900)', borderTop: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 -8px 40px rgba(44,24,16,0.5)' }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="flex-1">
            <p className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
              Questo sito utilizza solo <strong className="text-white">cookie tecnici</strong> necessari al funzionamento. Non utilizziamo cookie di profilazione o tracciamento.
              <Link to="/cookie-policy" className="underline ml-1 transition-colors hover:text-white" style={{ color: 'var(--color-fire)' }}>Leggi la Cookie Policy</Link>
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={() => handleConsent(false)}
              className="flex-1 md:flex-none px-6 py-3 border border-white/20 text-white/80 hover:bg-white/5 transition-all duration-300"
              style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Rifiuta
            </button>
            <button
              onClick={() => handleConsent(true)}
              className="flex-1 md:flex-none px-6 py-3 border border-white/20 text-white/80 hover:bg-white/5 transition-all duration-300"
              style={{ fontFamily: 'var(--font-accent)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Accetta
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
