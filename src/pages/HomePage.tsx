import { useTranslation } from 'react-i18next'

const whatsapp = 'https://wa.me/31614314687'

const buttonBase = 'inline-flex min-h-[50px] items-center justify-center gap-3 rounded-full px-5 text-sm font-bold no-underline transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-clay'

export default function HomePage() {
  const { t } = useTranslation()
  const trustPoints = t('home.trust', { returnObjects: true }) as { icon: string; color: string; title: string; text: string }[]
  const services = t('home.services', { returnObjects: true }) as { category: string; title: string; description: string; detail: string; meta: string; alt: string }[]
  const serviceImages = [
    'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=85',
    'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1000&q=85',
  ]

  return (
    <main id="home">
      <section className="mx-auto grid max-w-[1440px] items-center gap-9 px-[21px] py-11 sm:px-8 sm:py-16 lg:grid-cols-[1.2fr_1fr] lg:gap-[4vw] lg:py-[76px] xl:px-12 xl:pb-24">
        <div className="min-w-0 max-w-[680px]">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-sage px-3.5 py-2 text-[11px] font-semibold tracking-wide text-forest sm:text-[13px]"><span className="size-2 shrink-0 rounded-full bg-forest" />{t('home.badge')}</div>
          <h1 className="mb-4 mt-[22px] font-serif text-[clamp(46px,13vw,66px)] font-semibold leading-[1.04] tracking-[-1.6px] text-ink sm:mb-5 sm:mt-[27px] sm:text-[clamp(48px,6.3vw,82px)] sm:tracking-[-1.8px]">{t('home.titleStart')}<em className="text-clay">{t('home.titleAccent')}</em>.</h1>
          <p className="max-w-[510px] text-[15px] leading-[1.7] text-muted sm:text-lg sm:leading-[1.75]">{t('home.intro')}</p>
          <div className="mt-6 grid gap-2.5 sm:mt-[30px] sm:flex sm:flex-wrap sm:gap-3">
            <a className={`${buttonBase} bg-clay text-white`} href="#contact">{t('home.request')} <span className="text-xl" aria-hidden="true">↗</span></a>
            <a className={`${buttonBase} border border-line bg-white text-ink`} href={whatsapp}><span className="text-xl text-emerald-700" aria-hidden="true">◉</span>{t('home.askWhatsapp')}</a>
          </div>
          <div className="mt-[18px] flex items-center gap-2 text-[10px] font-medium leading-relaxed text-muted sm:mt-6 sm:text-xs"><span className="size-2 shrink-0 rounded-full bg-emerald-600" />{t('home.location')}</div>
        </div>
        <div className="relative mx-auto w-[calc(100%-14px)] max-w-[530px] rotate-[1.5deg] rounded-[48%_48%_24px_24px] border border-[#f0e8e1] bg-white p-2 shadow-[0_24px_70px_#3d291b19] lg:justify-self-end lg:rounded-[48%_48%_30px_30px] lg:p-3">
          <img className="block h-[min(112vw,440px)] w-full rounded-[48%_48%_18px_18px] object-cover sm:h-[460px] lg:h-[540px] lg:rounded-[48%_48%_23px_23px] xl:h-[610px]" src="https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1200&q=85" alt={t('home.heroAlt')} />
          <div className="absolute bottom-[22px] left-[18px] flex flex-col rounded-[14px] bg-cream/95 px-3 py-2.5 text-xs text-ink shadow-md sm:bottom-[30px] sm:left-[29px] sm:px-[17px] sm:py-[13px]">{t('home.photoCaption')}<strong className="text-[13px] sm:text-[15px]">{t('home.photoCaptionStrong')}</strong></div>
          <div className="absolute right-[-10px] top-[34px] w-[174px] -rotate-[1.5deg] rounded-2xl border border-line bg-cream p-3.5 shadow-xl sm:right-[-12px] sm:top-[54px] sm:w-[195px] sm:p-[18px] lg:right-[-26px] lg:w-[220px]">
            <div className="text-sm tracking-[3px] text-amber-500 sm:text-[17px]" aria-label={t('home.stars')}>★★★★★</div>
            <p className="my-1.5 font-serif text-xs italic leading-relaxed text-[#514841] sm:my-2 sm:text-sm">{t('home.quote')}</p>
            <strong className="text-[10px] text-muted sm:text-xs">{t('home.reviewAuthor')}</strong>
          </div>
        </div>
      </section>

      <section className="mx-4 mb-[55px] grid gap-0 rounded-[19px] border border-line bg-white px-[17px] py-2.5 shadow-sm sm:mx-auto sm:w-[calc(100%-64px)] sm:max-w-[1344px] sm:mb-[88px] xl:w-[calc(100%-96px)] sm:grid-cols-3 sm:gap-2 sm:rounded-[23px] sm:px-7 sm:py-6" id="aanpak">
        {trustPoints.map((point, index) => <article key={point.title} className={`flex items-center gap-3 py-3 sm:items-start sm:px-2.5 sm:py-1 ${index > 0 ? 'border-t border-line sm:border-t-0' : ''}`}>
          <span className={`grid size-[35px] shrink-0 place-items-center rounded-xl text-lg font-bold sm:size-[38px] sm:rounded-[13px] ${point.color}`}>{point.icon}</span>
          <div><h2 className="mb-1 mt-0.5 text-[13px] font-bold leading-tight text-ink sm:text-sm">{point.title}</h2><p className="text-[11px] leading-relaxed text-muted sm:text-xs">{point.text}</p></div>
        </article>)}
      </section>

      <section className="bg-sand px-[17px] py-[55px] sm:px-8 sm:py-[86px] xl:px-12 lg:pb-[100px]" id="diensten">
        <div className="mx-auto mb-[25px] max-w-[1344px] sm:mb-[35px] sm:flex sm:items-end sm:justify-between sm:gap-9">
          <div><p className="mb-2.5 text-[11px] font-bold tracking-[.12em] text-clay">{t('home.sectionKicker')}</p><h2 className="max-w-[620px] font-serif text-[39px] font-semibold leading-[1.05] tracking-[-1.2px] text-ink sm:text-[clamp(38px,4.8vw,58px)]">{t('home.servicesTitle')}<em className="text-clay">{t('home.servicesAccent')}</em></h2></div>
          <p className="mt-3 max-w-[300px] text-[13px] leading-[1.7] text-muted sm:mb-1 sm:mt-0 sm:text-sm">{t('home.servicesIntro')}</p>
        </div>
        <div className="mx-auto grid max-w-[1344px] gap-[15px] sm:grid-cols-2 sm:gap-[19px] lg:grid-cols-3">
          {services.map((service, index) => <article key={service.title} className="overflow-hidden rounded-[22px] border border-[#ece5df] bg-white shadow-sm">
            <img className="block h-[220px] w-full object-cover sm:h-[225px]" src={serviceImages[index]} alt={service.alt} />
            <div className="p-5 sm:px-[22px] sm:pb-[18px] sm:pt-[22px]">
              <p className="mb-2 text-[9px] font-bold tracking-[.12em] text-clay">{service.category}</p>
              <h3 className="mb-2.5 font-serif text-2xl font-semibold leading-tight text-ink">{service.title}</h3>
              <p className="text-[13px] leading-[1.65] text-muted">{service.description}</p>
              <div className="mt-4 flex items-center justify-between gap-2 border-t border-line pt-[13px] text-[10px] font-semibold text-[#9f1747] sm:text-[11px]"><span>{service.detail}</span><span>{service.meta}</span></div>
            </div>
          </article>)}
        </div>
      </section>

      <section className="mx-4 my-[55px] rounded-[21px] bg-forest px-[23px] py-[30px] text-white sm:mx-auto sm:w-[calc(100%-64px)] xl:w-[calc(100%-96px)] sm:my-[85px] sm:flex sm:max-w-[1344px] sm:items-center sm:justify-between sm:gap-10 sm:rounded-[26px] sm:px-[52px] sm:py-12" id="ervaringen">
        <div><p className="mb-2.5 text-[11px] font-bold tracking-[.12em] text-sage">{t('home.ctaKicker')}</p><h2 className="mb-3 max-w-[620px] font-serif text-[35px] font-semibold leading-tight tracking-tight text-white sm:text-[clamp(34px,4vw,49px)]">{t('home.ctaTitle')}</h2><p className="text-[13px] text-white/80 sm:text-sm">{t('home.ctaText')}</p></div>
        <a className={`${buttonBase} mt-[22px] w-full bg-[#fffaf2] text-ink sm:mt-0 sm:w-auto sm:whitespace-nowrap`} href={whatsapp}>{t('home.askWhatsapp')} <span className="text-xl" aria-hidden="true">↗</span></a>
      </section>
    </main>
  )
}
