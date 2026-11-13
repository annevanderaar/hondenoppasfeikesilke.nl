import { useTranslation } from 'react-i18next'
import dayCarePhoto from '../assets/photos/zwarte-labrador-op-de-bank.jpg'
import boardingPhoto from '../assets/photos/ruwharige-teckel-in-hondenmand.jpg'
import walkingPhoto from '../assets/photos/twee-honden-samen-wandelen.jpg'
import catsPhoto from '../assets/photos/twee-katten-op-rode-deken.jpg'

const photos = [
  { src: dayCarePhoto, position: 'object-[center_53%]' },
  { src: boardingPhoto, position: 'object-[center_42%]' },
  { src: walkingPhoto, position: 'object-[center_65%]' },
  { src: catsPhoto, position: 'object-center' },
]

export default function ServicesPage() {
  const { t } = useTranslation()
  const services = t('care.services', { returnObjects: true }) as { id: string; title: string; category: string; description: string; features: string[]; alt: string; action: string; message: string }[]

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 xl:px-12 xl:py-20">
      <header className="mx-auto max-w-[820px] text-center">
        <p className="mb-4 text-xs font-bold tracking-[.14em] text-clay">{t('pages.services')}</p>
        <h1 className="font-serif text-[clamp(36px,5vw,60px)] font-semibold leading-[1.12] tracking-tight text-ink">{t('care.title')}</h1>
        <p className="mx-auto mt-5 max-w-[680px] text-base leading-relaxed text-muted sm:text-lg">{t('care.intro')}</p>
        <nav className="mt-7 flex flex-wrap justify-center gap-2" aria-label={t('care.chooseLabel')}>
          {services.map(service => <a key={service.id} className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-forest transition hover:border-clay hover:text-clay focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href={`#${service.id}`}>{service.title}</a>)}
        </nav>
      </header>

      <section className="my-10 flex flex-wrap gap-6 sm:my-14" aria-label={t('pages.services')}>
        {services.map((service, index) => (
          <article key={service.id} id={service.id} className="flex min-w-0 basis-full scroll-mt-40 flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:basis-[calc(50%-12px)]">
            <img className={`h-[260px] w-full object-cover sm:h-[320px] ${photos[index].position}`} src={photos[index].src} alt={service.alt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
            <div className="flex grow flex-col p-6 sm:p-8">
              <p className="mb-3 text-xs font-bold tracking-[.12em] text-clay">{service.category}</p>
              <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">{service.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{service.description}</p>
              <ul className="my-6 space-y-3">
                {service.features.map(feature => <li key={feature} className="flex items-start gap-3 text-sm leading-relaxed text-ink sm:text-base"><span className="font-bold text-clay" aria-hidden="true">✓</span><span>{feature}</span></li>)}
              </ul>
              <a className="mt-auto inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-clay px-5 py-3 text-sm font-bold text-white transition hover:bg-forest focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href={`https://wa.me/31614314687?text=${encodeURIComponent(service.message)}`} target="_blank" rel="noreferrer">{service.action} <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </section>

      <aside className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-peach p-6 sm:p-10 lg:flex-row lg:items-center">
        <div><h2 className="font-serif text-3xl font-semibold text-forest">{t('care.helpTitle')}</h2><p className="mt-3 max-w-[720px] text-base leading-relaxed text-muted">{t('care.helpText')}</p></div>
        <a className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-forest transition hover:bg-soft focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href="/onze-aanpak">{t('care.approachLink')} <span aria-hidden="true">↗</span></a>
      </aside>
      <p className="mt-6 text-center text-sm leading-relaxed text-muted">{t('care.questionsText')} <a className="font-semibold text-clay underline underline-offset-4" href="/veelgestelde-vragen">{t('pages.faq')}</a></p>
    </main>
  )
}
