import { useTranslation } from 'react-i18next'

export default function FaqPage() {
  const { t } = useTranslation()
  const questions = t('faq.questions', { returnObjects: true }) as { question: string; answer: string }[]

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 xl:px-12 xl:py-20">
      <header className="mx-auto max-w-[780px] text-center">
        <p className="mb-4 text-xs font-bold tracking-[.14em] text-clay">{t('faq.kicker')}</p>
        <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.12] tracking-tight text-ink">{t('faq.title')}</h1>
        <p className="mx-auto mt-5 max-w-[640px] text-base leading-relaxed text-muted sm:text-lg">{t('faq.intro')}</p>
      </header>

      <section className="mx-auto my-10 max-w-[960px] space-y-4 sm:my-14" aria-label={t('pages.faq')}>
        {questions.map(({ question, answer }) => (
          <details key={question} className="group rounded-2xl border border-line bg-white shadow-sm open:border-sage sm:rounded-3xl">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 rounded-2xl px-5 py-6 text-base font-bold leading-relaxed text-ink transition hover:text-clay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay sm:px-8 sm:text-lg [&::-webkit-details-marker]:hidden">
              <span>{question}</span>
              <svg className="size-5 shrink-0 text-clay transition-transform group-open:rotate-180 motion-reduce:transition-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" /></svg>
            </summary>
            <div className="mx-5 border-t border-line pb-6 pt-5 text-base leading-relaxed text-muted sm:mx-8 sm:pb-8 sm:text-lg">{answer}</div>
          </details>
        ))}
      </section>

      <aside className="mx-auto flex max-w-[960px] flex-col items-start justify-between gap-6 rounded-3xl bg-peach p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-forest">{t('faq.contactTitle')}</h2>
          <p className="mt-2 max-w-[480px] text-sm leading-relaxed text-muted sm:text-base">{t('faq.contactText')}</p>
        </div>
        <a className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-clay px-6 py-3 text-sm font-bold text-white transition hover:bg-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href="https://wa.me/31614314687" target="_blank" rel="noreferrer">{t('footer.whatsapp')} <span aria-hidden="true">↗</span></a>
      </aside>
    </main>
  )
}
