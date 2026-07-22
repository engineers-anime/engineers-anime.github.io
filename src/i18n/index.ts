import en from './en'
import ja from './ja'

export type Locale = 'ja' | 'en'

export const getLocale = (pathname: string): Locale => (pathname.startsWith('/en') ? 'en' : 'ja')

export const getTranslations = (pathname: string) => (getLocale(pathname) === 'en' ? en : ja)
