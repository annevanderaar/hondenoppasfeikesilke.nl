import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const phone = '+31614314687'
const displayPhone = '+31 6 1431 4687'
const whatsapp = `https://wa.me/${phone.replace('+', '')}`

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage === 'en' ? 'en' : 'nl'
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'

  const changeLanguage = (language: 'nl' | 'en') => {
    void i18n.changeLanguage(language)
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }

  const navItems = [
    [t('nav.services'), '/diensten'],
    [t('nav.approach'), '/onze-aanpak'],
    [t('nav.reviews'), '/ervaringen'],
    [t('nav.photos'), '/fotos-sfeer'],
    [t('nav.faq'), '/veelgestelde-vragen'],
    [t('nav.reservation'), '/reserveren'],
  ]

  const linkClass = (href: string) => `whitespace-nowrap border-b-2 px-1 py-2 text-[11px] font-semibold no-underline transition xl:text-xs ${currentPath === href ? 'border-clay text-clay' : 'border-transparent text-ink hover:border-clay hover:text-clay'}`

  return (
    <header className="sticky top-0 z-20 bg-cream shadow-sm">
      <div className="bg-[linear-gradient(110deg,#54283b_0%,#d92d68_100%)] text-white">
        <div className="mx-auto flex max-w-[1550px] items-center justify-between gap-2 px-4 py-2.5 sm:px-6 lg:px-[5vw]">
          <div className="flex min-w-0 items-center gap-3 text-[11px] font-medium sm:gap-4 sm:text-sm">
            <a className="whitespace-nowrap text-white no-underline" href={`tel:${phone}`}><span className="hidden sm:inline">{t('nav.callUsAt')} </span><strong>{displayPhone}</strong></a>
            <span className="h-4 w-px shrink-0 bg-white/40" aria-hidden="true" />
            <a className="inline-flex items-center gap-1.5 whitespace-nowrap font-semibold text-white no-underline hover:underline" href={whatsapp} target="_blank" rel="noreferrer">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.5 11.6a8.6 8.6 0 0 1-12.7 7.5L3 20l.9-4.6a8.6 8.6 0 1 1 16.6-3.8Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 8.2c.3-.5.6-.5.9-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.6 1.1 1.5 2 2.7 2.5.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.3.3.5 0 .4-.2 1.1-.7 1.5-.5.5-1.3.7-2 .5-1.1-.2-2.5-.8-4-2.2-1.2-1.1-2-2.5-2.2-3.5-.2-.8 0-1.6.3-2.1Z"/></svg>
              {t('nav.whatsapp')}
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 p-1 text-[10px] font-bold sm:gap-2 sm:text-xs" aria-label={t('nav.language')}>
            <button className={`rounded-full px-2.5 py-1 transition sm:px-3 ${currentLanguage === 'nl' ? 'bg-white text-clay' : 'text-white hover:bg-white/15'}`} type="button" aria-pressed={currentLanguage === 'nl'} onClick={() => changeLanguage('nl')}>NL</button>
            <button className={`rounded-full px-2.5 py-1 transition sm:px-3 ${currentLanguage === 'en' ? 'bg-white text-clay' : 'text-white hover:bg-white/15'}`} type="button" aria-pressed={currentLanguage === 'en'} onClick={() => changeLanguage('en')}>EN</button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1550px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-[5vw] lg:py-4">
        <a className="flex min-w-0 items-center gap-2 text-ink no-underline sm:gap-3" href="/" aria-label={t('nav.brandAria')}>
          <img className="size-11 shrink-0 object-contain sm:size-[54px]" src="/feike-silke-logo.png" alt="" />
          <span className="flex min-w-0 flex-col gap-0.5">
            <strong className="whitespace-nowrap font-serif text-base font-bold leading-tight tracking-tight sm:text-[21px]">Hondenoppas Dokkum</strong>
            <small className="hidden whitespace-nowrap text-[10px] text-muted sm:block sm:text-[13px]">{t('nav.brandDescription')}</small>
          </span>
        </a>

        <nav className="hidden items-center justify-end gap-2 lg:flex xl:gap-4" aria-label={t('nav.label')}>
          {navItems.map(([label, href]) => <a key={href} className={linkClass(href)} href={href}>{label}</a>)}
        </nav>

        <button className="flex size-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border-0 bg-soft lg:hidden" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')} onClick={() => setMenuOpen(!menuOpen)}>
          <span className="h-0.5 w-[18px] rounded bg-ink" /><span className="h-0.5 w-[18px] rounded bg-ink" /><span className="h-0.5 w-[18px] rounded bg-ink" />
        </button>
      </div>

      {menuOpen && <nav className="absolute inset-x-0 top-full grid border-t border-line bg-cream px-5 py-2 shadow-lg lg:hidden" aria-label={t('nav.label')}>
        {navItems.map(([label, href]) => <a key={href} className="border-b border-line px-2 py-3 font-semibold text-ink no-underline last:border-0 hover:text-clay" href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>}
    </header>
  )
}
