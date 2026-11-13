import { useTranslation } from 'react-i18next'

const email = 'hondenoppasfeikesilke@gmail.com'

export default function ContactPage() {
  const { t } = useTranslation()
  const contactOptions = [
    { title: t('contact.emailTitle'), text: t('contact.emailText'), label: email, href: `mailto:${email}`, icon: 'mail' },
    { title: t('contact.callTitle'), text: t('contact.callText'), label: '+31 6 1431 4687', href: 'tel:+31614314687', icon: 'phone' },
    { title: t('nav.whatsapp'), text: t('contact.whatsappText'), label: t('contact.whatsappAction'), href: 'https://wa.me/31614314687', icon: 'chat' },
  ]

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 xl:px-12 xl:py-20">
      <header className="mx-auto max-w-[780px] text-center">
        <p className="mb-4 text-xs font-bold tracking-[.14em] text-clay">{t('pages.contact')}</p>
        <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.12] tracking-tight text-ink">{t('contact.title')}</h1>
        <p className="mx-auto mt-5 max-w-[640px] text-base leading-relaxed text-muted sm:text-lg">{t('contact.intro')}</p>
      </header>

      <section className="my-10 flex flex-col gap-5 sm:my-14 lg:flex-row" aria-label={t('contact.optionsLabel')}>
        {contactOptions.map(option => (
          <article key={option.icon} className="flex min-w-0 flex-1 flex-col rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-soft text-clay" aria-hidden="true">
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                {option.icon === 'mail' ? <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></> : option.icon === 'phone' ? <path d="M7 3H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3l-5-2-2 2a13 13 0 0 1-7-7l2-2-2-5Z" /> : <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.4L3 21l1.5-5A8.5 8.5 0 1 1 21 11.5Z" />}
              </svg>
            </span>
            <h2 className="font-serif text-2xl font-semibold text-ink">{option.title}</h2>
            <p className="mb-6 mt-3 grow text-base leading-relaxed text-muted">{option.text}</p>
            <a className="inline-flex min-h-12 max-w-full items-center gap-2 self-start rounded-lg py-2 text-sm font-bold sm:text-base text-clay underline underline-offset-4 transition hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href={option.href} {...(option.icon === 'chat' ? { target: '_blank', rel: 'noreferrer' } : {})}><span className="min-w-0 break-words [overflow-wrap:anywhere]">{option.label}</span><span className="shrink-0" aria-hidden="true">↗</span></a>
          </article>
        ))}
      </section>

      <section className="flex flex-col gap-8 rounded-3xl bg-peach p-6 sm:p-10 md:flex-row md:gap-12">
        <div className="min-w-0 flex-1"><h2 className="font-serif text-2xl font-semibold text-forest">{t('contact.detailsTitle')}</h2><p className="mt-4 text-base leading-relaxed text-ink">{t('footer.address')}</p><p className="mt-2 text-base leading-relaxed text-muted">{t('contact.area')}</p></div>
        <div className="min-w-0 flex-1"><h2 className="font-serif text-2xl font-semibold text-forest">{t('footer.hoursTitle')}</h2><p className="mt-4 text-base leading-relaxed text-ink">{t('footer.hoursDays')} · {t('footer.hoursTime')}</p><p className="mt-2 text-base leading-relaxed text-muted">{t('contact.appointment')}</p></div>
      </section>
      <p className="mt-7 text-center text-sm leading-relaxed text-muted">{t('contact.questionsText')} <a className="font-semibold text-clay underline underline-offset-4" href="/veelgestelde-vragen">{t('pages.faq')}</a></p>
    </main>
  )
}
