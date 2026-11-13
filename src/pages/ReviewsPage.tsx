import { useTranslation } from 'react-i18next'
import reviews from '../data/reviews.json'

export default function ReviewsPage() {
  const { t, i18n } = useTranslation()
  const average = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 xl:px-12 xl:py-20">
      <header className="mx-auto max-w-[820px] text-center">
        <p className="mb-4 text-xs font-bold tracking-[.14em] text-clay">{t('reviews.kicker')}</p>
        <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.12] tracking-tight text-ink">{t('reviews.title')}</h1>
        <p className="mx-auto mt-5 max-w-[640px] text-base leading-relaxed text-muted sm:text-lg">{t('reviews.intro')}</p>
        <div className="mt-7 inline-flex items-center gap-4 rounded-2xl border border-line bg-white px-6 py-4 text-left shadow-sm">
          <strong className="font-serif text-4xl text-forest">{new Intl.NumberFormat(i18n.language, { minimumFractionDigits: 1 }).format(average)}</strong>
          <div><span className="block tracking-[3px] text-amber-500" aria-label={t('reviews.stars', { count: 5 })}>★★★★★</span><p className="mt-1 text-sm text-muted">{t('reviews.count', { count: reviews.length })}</p></div>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-muted">{t('reviews.note')}</p>
      </header>

      <section className="my-10 flex flex-wrap items-stretch gap-5 sm:my-14" aria-label={t('pages.reviews')}>
        {reviews.map(review => (
          <article key={review.author} className="flex min-w-0 basis-full flex-col rounded-3xl border border-line bg-white p-6 shadow-sm md:basis-[calc(50%-10px)] xl:basis-[calc(33.333333%-14px)] sm:p-8">
            <span className="text-lg tracking-[4px] text-amber-500" aria-label={t('reviews.stars', { count: review.rating })}>★★★★★</span>
            <blockquote lang="nl" className="mb-6 mt-5 grow whitespace-pre-line text-base leading-relaxed text-ink">{review.text}</blockquote>
            <div className="flex items-center gap-3 border-t border-line pt-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-peach font-bold text-forest" aria-hidden="true">{review.author.charAt(0).toUpperCase()}</span>
              <div className="min-w-0"><h2 className="break-words text-sm font-bold text-ink">{review.author}</h2><p className="mt-1 text-xs text-muted">{t(review.excerpt ? 'reviews.excerpt' : 'reviews.source')}</p></div>
            </div>
          </article>
        ))}
      </section>

      <aside className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-peach p-6 sm:flex-row sm:items-center sm:p-8">
        <div><h2 className="font-serif text-2xl font-semibold text-forest">{t('reviews.contactTitle')}</h2><p className="mt-2 max-w-[620px] text-base leading-relaxed text-muted">{t('reviews.contactText')}</p></div>
        <a className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-clay px-6 py-3 text-sm font-bold text-white transition hover:bg-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href="https://wa.me/31614314687" target="_blank" rel="noreferrer">{t('footer.whatsapp')} <span aria-hidden="true">↗</span></a>
      </aside>
    </main>
  )
}
