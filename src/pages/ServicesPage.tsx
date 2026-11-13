import { useTranslation } from 'react-i18next'

export default function ServicesPage() {
  const { t } = useTranslation()
  return <main className="mx-auto min-h-[55vh] max-w-6xl px-6 py-20 sm:py-28"><h1 className="font-serif text-4xl font-semibold text-ink sm:text-6xl">{t('pages.services')}</h1></main>
}
