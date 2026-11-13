import { useTranslation } from 'react-i18next'

const phone = '+31614314687'
const displayPhone = '+31 6 1431 4687'
const whatsapp = `https://wa.me/${phone.replace('+', '')}`

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="bg-[linear-gradient(110deg,#54283b_0%,#d92d68_100%)] text-white">
      <div className="mx-auto grid max-w-[1550px] gap-x-10 gap-y-9 px-5 py-10 sm:grid-cols-2 sm:px-8 sm:py-12 min-[1000px]:grid-cols-3 min-[1000px]:gap-8 min-[1000px]:px-[5vw] min-[1000px]:py-14 xl:gap-12">
        <section>
          <div className="flex items-center gap-4 rounded-2xl bg-black/10 p-4 text-white sm:p-5">
            <img className="size-11 shrink-0 object-contain sm:size-[54px]" src="/feike-silke-logo.png" alt="" />
            <div>
              <h2 className="font-serif text-lg font-bold leading-tight sm:text-[21px]">Hondenoppas Dokkum</h2>
              <p className="mt-1 max-w-[260px] text-xs leading-relaxed text-white/85 sm:text-sm">{t('footer.description')}</p>
            </div>
          </div>
          <h3 className="mb-4 mt-6 text-base font-bold text-white">{t('footer.contact')}</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-3">
              <svg className="size-[17px] shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg>
              <span>{t('footer.address')}</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="size-[17px] shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.4 11.4 0 0 0 3.5.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17.9 17.9 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .6 3.5 1 1 0 0 1-.2 1Z" /></svg>
              <a className="text-white/85 no-underline hover:text-white" href={`tel:${phone}`}>{displayPhone}</a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-5 text-xl font-bold text-white">{t('footer.hoursTitle')}</h2>
          <div className="flex items-start gap-3 text-sm leading-6 text-white/85">
            <svg className="mt-1 size-[17px] shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 5v4.6l3.2 1.9-1 1.7-4.2-2.6V7Z" /></svg>
            <div><p>{t('footer.hoursDays')}</p><p>{t('footer.hoursTime')}</p></div>
          </div>
        </section>

        <section className="sm:col-span-2 sm:flex sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-5 sm:gap-y-3 min-[1000px]:col-span-1 min-[1000px]:block">
          <h2 className="mb-5 text-xl font-bold text-white sm:mb-0 min-[1000px]:mb-5">{t('footer.serviceAreaTitle')}</h2>
          <p className="flex items-center gap-3 text-sm text-white/85">
            <svg className="size-[17px] shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 7h11v10H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>
            {t('footer.serviceArea')}
          </p>
          <a className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/75 px-4 text-sm font-semibold text-white no-underline transition hover:bg-white hover:text-clay sm:mt-0 min-[1000px]:mt-5" href={whatsapp} target="_blank" rel="noreferrer">
            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M20.5 11.6a8.6 8.6 0 0 1-12.7 7.5L3 20l.9-4.6a8.6 8.6 0 1 1 16.6-3.8Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M8 8.2c.3-.5.6-.5.9-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4-.1.6.6 1.1 1.5 2 2.7 2.5.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.7.8c.2.1.3.3.3.5 0 .4-.2 1.1-.7 1.5-.5.5-1.3.7-2 .5-1.1-.2-2.5-.8-4-2.2-1.2-1.1-2-2.5-2.2-3.5-.2-.8 0-1.6.3-2.1Z"/></svg>
            {t('footer.whatsapp')}
          </a>
        </section>
      </div>

      <div className="text-white">
        <div className="mx-auto flex max-w-[1550px] flex-col items-start justify-between gap-2 px-5 py-4 text-xs sm:flex-row sm:items-center sm:px-8 xl:px-[5vw]">
          <span>{t('footer.copyright')}</span>
          <span>{t('footer.madeBy')} <a className="font-bold text-white underline decoration-white/50 underline-offset-2 hover:decoration-white" href="https://everlastingwild.nl/" target="_blank" rel="noreferrer">Everlasting Wild</a></span>
        </div>
      </div>
    </footer>
  )
}
