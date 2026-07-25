export const contactCopy = {
  ja: {
    title: 'お問い合わせ',
    description: '登壇、協賛、会場提供など、エンジニアニメへのご相談をメールで受け付けています。',
    intro: 'ご相談の内容が固まっていない段階でもお気軽にご連絡ください。内容を確認後、運営より返信します。',
    topics: [
      {
        icon: 'lucide:presentation',
        title: '登壇・執筆について',
        description:
          '勉強会での登壇や技術同人誌への執筆に興味はあるけれど、テーマの決め方や経験に不安がある方もお気軽にご相談ください。内容が固まっていなくても大丈夫です。',
      },
      {
        icon: 'lucide:handshake',
        title: '協賛・会場提供',
        description:
          '勉強会の会場を提供できる企業・団体の方や、開催費用、飲食物、物品などの協賛を検討されている方からのご相談。',
      },
      {
        icon: 'lucide:message-circle',
        title: 'その他',
        description:
          '他コミュニティとの合同イベントや共同企画のご提案、技術同人誌・グッズに関するお問い合わせなどを受け付けています。',
      },
    ],
    emailTitle: 'メールで問い合わせる',
    emailDescription: 'メールには、お名前とお問い合わせ内容をご記載ください。',
    button: 'メールを作成する',
    addressLabel: '送信先',
    subject: 'エンジニアニメへのお問い合わせ',
    note: '通常は数日以内の返信を心がけていますが、内容によってはお時間をいただく場合があります。',
    home: 'トップ',
  },
  en: {
    title: 'Contact',
    description: 'Contact EngineerAnime by email about speaking, sponsorship, venue support, and other collaborations.',
    intro:
      'You are welcome to contact us even if your idea is still taking shape. The organizing team will review your message and reply.',
    topics: [
      {
        icon: 'lucide:presentation',
        title: 'Speaking & Writing',
        description:
          'Interested in speaking at a meetup or writing for an anthology, but unsure about choosing a topic or trying it for the first time? Feel free to contact us even if your idea is not fully formed.',
      },
      {
        icon: 'lucide:handshake',
        title: 'Sponsorship & Venues',
        description:
          'For companies and organizations considering providing a meetup venue or sponsoring event costs, food, drinks, or other items.',
      },
      {
        icon: 'lucide:message-circle',
        title: 'Other Inquiries',
        description:
          'We also welcome proposals for joint events and projects with other communities, as well as questions about our anthology books and character goods.',
      },
    ],
    emailTitle: 'Contact Us by Email',
    emailDescription: 'Please include your name and a summary of your inquiry.',
    button: 'Compose an email',
    addressLabel: 'Email',
    subject: 'Inquiry for EngineerAnime',
    note: 'We aim to reply within a few days, although some inquiries may require additional time.',
    home: 'Home',
  },
} as const
