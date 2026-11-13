import { useTranslation } from 'react-i18next'
import sofaPhoto from '../assets/photos/bruine-puppy-op-de-bank.jpg'
import gardenPhoto from '../assets/photos/kleine-hond-op-tuinkussen.jpg'

export default function ApproachPage() {
  const { t } = useTranslation()
  const promises = t('approach.promises', { returnObjects: true }) as { title: string; text: string }[]
  const steps = t('approach.steps', { returnObjects: true }) as { title: string; text: string }[]

  return (
    <main className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 xl:px-12 xl:py-20">
      <section className="flex flex-col items-center gap-10 lg:flex-row lg:gap-14">
        <div className="min-w-0 flex-1">
          <p className="mb-4 text-xs font-bold tracking-[.14em] text-clay">{t('pages.approach')}</p>
          <h1 className="max-w-[760px] font-serif text-[clamp(36px,4.5vw,60px)] font-semibold leading-[1.12] tracking-tight text-ink">{t('approach.title')}</h1>
          <p className="mt-5 max-w-[680px] text-base leading-relaxed text-muted sm:text-lg">{t('approach.intro')}</p>
          <div className="mt-8 space-y-4">
            {promises.map((promise, index) => (
              <article key={promise.title} className="flex gap-4 rounded-2xl border border-line bg-white p-5 sm:p-6">
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-forest ${index === 1 ? 'bg-peach' : 'bg-soft'}`} aria-hidden="true">✓</span>
                <div><h2 className="text-base font-bold leading-relaxed text-ink sm:text-lg">{promise.title}</h2><p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">{promise.text}</p></div>
              </article>
            ))}
          </div>
        </div>
        <figure className="w-full max-w-[480px] shrink-0 lg:w-[36%]">
          <img className="aspect-[4/5] w-full rounded-[36px] object-cover object-[center_65%]" src={sofaPhoto} alt={t('approach.sofaAlt')} width="1152" height="2048" fetchPriority="high" />
          <figcaption className="mx-4 -mt-8 relative rounded-2xl border border-line bg-white px-5 py-4 text-center font-serif text-lg text-forest shadow-sm">{t('approach.photoCaption')}</figcaption>
        </figure>
      </section>

      <section className="my-14 flex flex-col items-center gap-8 rounded-3xl bg-peach p-6 sm:my-20 sm:p-10 lg:flex-row lg:gap-12">
        <img className="aspect-[4/3] w-full rounded-2xl object-cover object-[center_55%] lg:w-[40%]" src={gardenPhoto} alt={t('approach.gardenAlt')} width="1152" height="2048" loading="lazy" decoding="async" />
        <div className="min-w-0 flex-1">
          <p className="mb-3 text-xs font-bold tracking-[.14em] text-clay">{t('approach.rhythmKicker')}</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-forest sm:text-4xl">{t('approach.rhythmTitle')}</h2>
          <p className="mt-4 text-base leading-relaxed text-ink">{t('approach.rhythmText')}</p>
          <a className="mt-5 inline-flex min-h-11 items-center gap-3 font-bold text-clay underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay" href="/fotos-sfeer">{t('approach.photosLink')} <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section>
        <div className="mx-auto mb-8 max-w-[720px] text-center">
          <p className="mb-3 text-xs font-bold tracking-[.14em] text-clay">{t('approach.stepsKicker')}</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">{t('approach.stepsTitle')}</h2>
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          {steps.map((step, index) => (
            <article key={step.title} className="min-w-0 flex-1 rounded-3xl border border-line bg-white p-6 sm:p-8">
              <span className="mb-5 flex size-11 items-center justify-center rounded-full bg-soft font-bold text-clay" aria-hidden="true">0{index + 1}</span>
              <h3 className="text-lg font-bold text-ink">{step.title}</h3><p className="mt-3 text-base leading-relaxed text-muted">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-forest p-6 text-white sm:mt-20 sm:p-10 lg:flex-row lg:items-center">
        <div><h2 className="font-serif text-3xl font-semibold">{t('approach.contactTitle')}</h2><p className="mt-3 max-w-[650px] text-base leading-relaxed text-white/85">{t('approach.contactText')}</p></div>
        <a className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-cream px-6 py-3 text-sm font-bold text-forest transition hover:bg-peach focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" href="https://wa.me/31614314687" target="_blank" rel="noreferrer">{t('footer.whatsapp')} <span aria-hidden="true">↗</span></a>
      </aside>
    </main>
  )
}
