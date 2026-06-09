---
layout: page
---

<style scoped>
/* Стили только для главной страницы */
.main-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* Hero секция */
.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, rgba(255,107,0,0.1), rgba(0,230,118,0.05));
  border-radius: 48px;
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,107,0,0.3);
}

.hero-section h1 {
  font-size: 3.5rem;
  background: linear-gradient(135deg, #ff6b00, #00e676);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
}

.badge {
  display: inline-block;
  background: rgba(255,107,0,0.2);
  padding: 0.3rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  color: #ff6b00;
  margin: 0.5rem;
}

/* Секция быстрых ссылок */
.quick-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.quick-card {
  background: rgba(10,10,10,0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,107,0,0.3);
  border-radius: 24px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: block;
}

.quick-card:hover {
  transform: translateY(-5px);
  border-color: #00e676;
  box-shadow: 0 0 30px rgba(0,230,118,0.2);
}

.quick-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.quick-card h3 {
  margin: 0 0 0.5rem 0;
  color: #ff6b00;
}

.quick-card p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Секция категорий */
.categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.category {
  background: rgba(0,0,0,0.4);
  border-radius: 32px;
  padding: 1.5rem;
  border: 1px solid rgba(255,107,0,0.2);
}

.category h2 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  border-left: 4px solid #ff6b00;
  padding-left: 1rem;
}

.category ul {
  list-style: none;
  padding: 0;
}

.category li {
  margin: 0.8rem 0;
}

.category a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 16px;
  transition: all 0.2s;
  text-decoration: none;
  color: inherit;
}

.category a:hover {
  background: rgba(255,107,0,0.15);
  transform: translateX(5px);
}

/* Статистика */
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
  text-align: center;
}

.stat-item {
  background: rgba(255,107,0,0.1);
  border-radius: 24px;
  padding: 1.5rem;
  backdrop-filter: blur(8px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(135deg, #ff6b00, #00e676);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* Баннер */
.cta-banner {
  background: linear-gradient(135deg, rgba(255,107,0,0.2), rgba(0,230,118,0.1));
  border-radius: 32px;
  padding: 2.5rem;
  text-align: center;
  margin-top: 2rem;
  border: 1px solid rgba(255,107,0,0.4);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.btn-primary {
  background: #ff6b00;
  color: black;
}

.btn-primary:hover {
  background: #00e676;
  transform: scale(1.05);
}

.btn-secondary {
  border: 2px solid #ff6b00;
  color: #ff6b00;
}

.btn-secondary:hover {
  border-color: #00e676;
  color: #00e676;
}
</style>

<div class="main-page">

  <!-- Hero секция -->
  <div class="hero-section">
    <div>
      <span class="badge">🚀 Современный хостинг</span>
      <span class="badge">🔐 Безопасность</span>
      <span class="badge">💚 Amnezia Ready</span>
    </div>
    <h1>🖤 Amnezia Hosting Wiki 🧡</h1>
    <p style="font-size: 1.2rem; opacity: 0.9;">
      Быстрый старт, гайды и лучшие практики для вашего проекта
    </p>
  </div>

  <!-- Быстрые ссылки (главные руководства) -->
  <div class="quick-links">
    <a href="/guides/quickstart" class="quick-card">
      <div class="icon">⚡</div>
      <h3>Быстрый старт</h3>
      <p>Настройте ваш сервер за 5 минут</p>
    </a>
    <a href="/guides/installation" class="quick-card">
      <div class="icon">🛠️</div>
      <h3>Установка</h3>
      <p>Пошаговая инструкция</p>
    </a>
    <a href="/guides/security" class="quick-card">
      <div class="icon">🔒</div>
      <h3>Безопасность</h3>
      <p>Защита вашего хостинга</p>
    </a>
    <a href="/guides/amnezia" class="quick-card">
      <div class="icon">💚</div>
      <h3>Amnezia VPN</h3>
      <p>Настройка с Amnezia протоколами</p>
    </a>
  </div>

  <!-- Категории руководств -->
  <div class="categories">
    <div class="category">
      <h2>🚀 Начало работы</h2>
      <ul>
        <li><a href="/guides/registration">📝 Регистрация аккаунта</a></li>
        <li><a href="/guides/domain">🌐 Подключение домена</a></li>
        <li><a href="/guides/ssl">🔐 Бесплатный SSL (Let's Encrypt)</a></li>
        <li><a href="/guides/backups">💾 Настройка бэкапов</a></li>
      </ul>
    </div>

    <div class="category">
      <h2>⚙️ Управление сервером</h2>
      <ul>
        <li><a href="/guides/panel">🖥️ Панель управления</a></li>
        <li><a href="/guides/database">🗄️ Базы данных</a></li>
        <li><a href="/guides/nginx">⚡ Настройка Nginx</a></li>
        <li><a href="/guides/php">🐘 PHP конфигурация</a></li>
      </ul>
    </div>

    <div class="category">
      <h2>💚 Amnezia Интеграция</h2>
      <ul>
        <li><a href="/guides/wireguard">🔷 Настройка WireGuard</a></li>
        <li><a href="/guides/amnezia-proto">🟢 Amnezia Protocol</a></li>
        <li><a href="/guides/vpn-site">🔗 Связка VPN + Сайт</a></li>
        <li><a href="/guides/dns">🌍 DNS через Amnezia</a></li>
      </ul>
    </div>

    <div class="category">
      <h2>🔧 Продвинутые гайды</h2>
      <ul>
        <li><a href="/guides/docker">🐳 Docker на хостинге</a></li>
        <li><a href="/guides/ci-cd">🔄 CI/CD пайплайны</a></li>
        <li><a href="/guides/monitoring">📊 Мониторинг и алерты</a></li>
        <li><a href="/guides/scale">📈 Масштабирование</a></li>
      </ul>
    </div>
  </div>

  <!-- Статистика/Факты -->
  <div class="stats">
    <div class="stat-item">
      <div class="stat-number">99.9%</div>
      <div>Аптайм</div>
      <small style="opacity: 0.7;">гарантируем стабильность</small>
    </div>
    <div class="stat-item">
      <div class="stat-number">24/7</div>
      <div>Поддержка</div>
      <small style="opacity: 0.7;">в Telegram и Discord</small>
    </div>
    <div class="stat-item">
      <div class="stat-number">🚀</div>
      <div>NVMe диски</div>
      <small style="opacity: 0.7;">молниеносная скорость</small>
    </div>
  </div>

  <!-- Баннер с действием -->
  <div class="cta-banner">
    <h2 style="margin: 0 0 1rem 0;">✨ Готовы начать?</h2>
    <p style="font-size: 1.1rem; opacity: 0.9;">
      Выберите руководство и настройте ваш идеальный хостинг
    </p>
    <div class="cta-buttons">
      <a href="/guides/quickstart" class="btn btn-primary">🚀 Начать сейчас</a>
      <a href="https://t.me/amnezia_hosting" class="btn btn-secondary">💬 Задать вопрос</a>
    </div>
  </div>

</div>
