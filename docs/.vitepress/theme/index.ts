import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    // можно добавить глобальные компоненты
  }
}
