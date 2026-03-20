import { defineThemeConfig } from '@utils/defineThemeConfig'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'エンジニアニメ',
  id: 'engineers-anime-portal',
  logo: logoImage,
  seo: {
    title: 'エンジニアニメ',
    description:
      'アニメから得た学びをエンジニア同士で語り合う、モチベーションと技術が交差するコミュニティ。定期的な勉強会や技術同人誌の制作を通じて、アニメの情熱をエンジニアの成長へと繋げます。',
    author: 'エンジニアニメ',
    image: '/social-preview-image.png',
    twitter: '@engineers_anime',
    siteName: 'エンジニアニメ',
    locale: 'ja_JP',
  },
  colors: {
    primary: '#ff8c00',
    secondary: '#ffd700',
    neutral: '#b9bec4',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Discord',
        href: 'https://discord.gg/dgPWe6rNWS',
        icon: 'simple-icons:discord',
        external: true,
        excludeFromLauncher: true,
      },
      {
        type: 'link',
        label: '公式Xをフォロー',
        href: 'https://twitter.com/intent/follow?screen_name=engineers_anime',
        icon: 'simple-icons:x',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'Discord',
      href: 'https://discord.gg/dgPWe6rNWS',
      icon: 'simple-icons:discord',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/engineers-anime',
      icon: 'simple-icons:github',
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/engineers_anime',
      icon: 'simple-icons:x',
    },
  ],
})
