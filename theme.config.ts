import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'エンジニアニメ',
  id: 'engineers-anime-portal',
  logo: logoImage,
  seo: {
    title: 'エンジニアニメ - エンジニアとアニメを繋ぐコミュニティ',
    description: 'エンジニアニメは、アニメ好きのエンジニアが集まり、技術と情熱を共有するポータルサイトです。',
    author: 'Engineers Anime Community',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
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
