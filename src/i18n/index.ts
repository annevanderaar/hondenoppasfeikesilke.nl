import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import nl from './nl.json'

const savedLanguage = localStorage.getItem('language')
const initialLanguage = savedLanguage === 'en' ? 'en' : 'nl'

void i18n.use(initReactI18next).init({
  resources: {
    nl: { translation: nl },
    en: { translation: en },
  },
  lng: initialLanguage,
  fallbackLng: 'nl',
  supportedLngs: ['nl', 'en'],
  interpolation: { escapeValue: false },
})

document.documentElement.lang = initialLanguage

export default i18n
