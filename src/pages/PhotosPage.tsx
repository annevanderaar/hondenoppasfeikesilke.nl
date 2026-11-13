import { useTranslation } from 'react-i18next'

const photoFiles = import.meta.glob('../assets/photos/*.jpg', { eager: true, query: '?url', import: 'default' }) as Record<string, string>

export default function PhotosPage() {
  const { t } = useTranslation()
  const photos = t('photos.items', { returnObjects: true }) as { file: string; alt: string }[]

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 xl:px-12 xl:py-20">
      <header className="mx-auto mb-10 max-w-[780px] text-center sm:mb-14">
        <p className="mb-4 text-xs font-bold tracking-[.14em] text-clay">{t('photos.kicker')}</p>
        <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.12] tracking-tight text-ink">{t('pages.photos')}</h1>
        <p className="mx-auto mt-5 max-w-[640px] text-base leading-relaxed text-muted sm:text-lg">{t('photos.intro')}</p>
      </header>

      <section className="columns-1 gap-5 min-[480px]:columns-2 lg:columns-3 xl:columns-4" aria-label={t('photos.galleryLabel')}>
        {photos.map((photo, index) => (
          <figure key={photo.file} className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <img className="block h-auto w-full" src={photoFiles[`../assets/photos/${photo.file}.jpg`]} alt={photo.alt} loading={index < 4 ? 'eager' : 'lazy'} decoding="async" width="1152" height="2048" />
            <figcaption className="px-4 py-3 text-sm leading-relaxed text-muted">{photo.alt}</figcaption>
          </figure>
        ))}
      </section>

      <aside className="mt-10 flex flex-col items-start justify-between gap-6 rounded-3xl bg-peach p-6 sm:mt-14 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-forest">{t('photos.contactTitle')}</h2>
          <p className="mt-2 max-w-[620px] text-base leading-relaxed text-muted">{t('photos.contactText')}</p>
        </div>
        <a className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-clay px-6 py-3 text-sm font-bold text-white transition hover:bg-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href="https://wa.me/31614314687" target="_blank" rel="noreferrer">{t('footer.whatsapp')} <span aria-hidden="true">↗</span></a>
      </aside>
    </main>
  )
}
