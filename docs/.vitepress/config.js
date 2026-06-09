export default {
  title: "Моя Вики",
  description: "База знаний",
  base: '/', // Оставляем косую черту для своего домена
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Статьи', link: '/about' }
    ],
    sidebar: [
      {
        text: 'Начало работы',
        items: [
          { text: 'О компании', link: '/about' }
        ]
      }
    ]
  }
}
