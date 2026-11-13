import { useTranslation } from 'react-i18next'

export default function ApproachPage() {
  const { t } = useTranslation()
  return <main className="mx-auto min-h-[55vh] max-w-6xl px-6 py-20 sm:py-28"><h1 className="font-serif text-4xl font-semibold text-ink sm:text-6xl">{t('pages.approach')}</h1></main>
}
