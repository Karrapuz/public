import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '🚀 Amnezia Hosting Wiki',
  description: 'Современный хостинг с душой | 🌿 Безопасность · 🔥 Скорость · 💚 Поддержка',
  
  // РАЗРЕШАЕМ HTML в Markdown
  markdown: {
    html: true
  },
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#ff6b00' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '🏠 Главная', link: '/' },
      { text: '📘 Документация', link: '/docs/getting-started' },
      { text: '💚 Amnezia', link: 'https://amnezia.org' }
    ],
    sidebar: [
      {
        text: '✨ Начало',
        items: [
          { text: '🚀 Быстрый старт', link: '/docs/quickstart' },
          { text: '🛠️ Установка', link: '/docs/installation' }
        ]
      },
      {
        text: '⚙️ Конфигурация',
        items: [
          { text: '🔧 Настройки сервера', link: '/docs/server' },
          { text: '🔐 Безопасность', link: '/docs/security' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/amnezia-hosting' },
      { icon: 'discord', link: 'https://discord.gg/amnezia' }
    ],
    footer: {
      message: '💛🧡💚 Сделано с любовью для Amnezia Community',
      copyright: '© 2025 Amnezia Hosting'
    }
  }
})
