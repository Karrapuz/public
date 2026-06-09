---
layout: page
---

<style>
/* ПАСТЕЛЬНЫЕ ЦВЕТА + ПРОЗРАЧНОСТЬ */
:root {
  --amnezia-pastel-orange: #ffb347;
  --amnezia-pastel-green: #a8e6cf;
  --amnezia-soft-green: #c8e6d9;
  --amnezia-dark: #1a1a1a;
  --amnezia-glass: rgba(26, 26, 26, 0.7);
}

* {
  box-sizing: border-box;
}

/* ОСНОВНОЙ КОНТЕЙНЕР */
.main-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

/* HERO СЕКЦИЯ */
.hero-pastel {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(168, 230, 207, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 32px;
  margin-bottom: 3rem;
  border: 1px solid rgba(168, 230, 207, 0.3);
}

.hero-pastel h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--amnezia-pastel-orange), var(--amnezia-pastel-green));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.badge-pastel {
  display: inline-block;
  background: rgba(168, 230, 207, 0.2);
  backdrop-filter: blur(4px);
  padding: 0.3rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  margin: 0.25rem;
  color: #a8e6cf;
  border: 1px solid rgba(168, 230, 207, 0.3);
}

/* СЕТКА КАРТОЧЕК */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;
}

.pastel-card {
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168, 230, 207, 0.3);
  border-radius: 20px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  display: block;
}

.pastel-card:hover {
  transform: translateY(-5px);
  border-color: var(--amnezia-pastel-green);
  box-shadow: 0 8px 25px rgba(168, 230, 207, 0.15);
  background: rgba(168, 230, 207, 0.1);
}

.card-icon {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.pastel-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--amnezia-pastel-orange);
  font-size: 1.3rem;
}

.pastel-card p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
  color: #ddd;
}

/* СЕТКА КАТЕГОРИЙ (4 колонки) */
.categories-four {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;
}

.category-pastel {
  background: rgba(26, 26, 26, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 1.5rem;
  border: 1px solid rgba(168, 230, 207, 0.2);
  transition: all 0.2s;
}

.category-pastel:hover {
  border-color: rgba(168, 230, 207, 0.5);
  background: rgba(168, 230, 207, 0.05);
}

.category-pastel h2 {
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  border-left: 3px solid var(--amnezia-pastel-green);
  padding-left: 0.8rem;
  color: var(--amnezia-pastel-orange);
}

.category-pastel ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-pastel li {
  margin: 0.8rem 0;
}

.category-pastel a {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem;
  border-radius: 12px;
  transition: all 0.2s;
  text-decoration: none;
  color: #e0e0e0;
  font-size: 0.9rem;
}

.category-pastel a:hover {
  background: rgba(168, 230, 207, 0.15);
  transform: translateX(5px);
  color: var(--amnezia-pastel-green);
}

/* СТАТИСТИКА */
.stats-four {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;
}

.stat-pastel {
  background: rgba(168, 230, 207, 0.08);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(168, 230, 207, 0.2);
}

.stat-number-pastel {
  font-size: 2rem;
  font-weight: bold;
  background: linear-gradient(135deg, var(--amnezia-pastel-orange), var(--amnezia-pastel-green));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #ccc;
}

.stat-sub {
  font-size: 0.75rem;
  opacity: 0.6;
  display: block;
  margin-top: 0.3rem;
}

/* CTA БАННЕР */
.cta-pastel {
  background: linear-gradient(135deg, rgba(168, 230, 207, 0.12), rgba(255, 179, 71, 0.08));
  backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 2rem;
  text-align: center;
  margin: 3rem 0;
  border: 1px solid rgba(168, 230, 207, 0.3);
}

.cta-pastel h3 {
  margin: 0 0 0.8rem 0;
  color: var(--amnezia-pastel-orange);
  font-size: 1.5rem;
}

.btn-pastel-primary {
  background: rgba(168, 230, 207, 0.2);
  backdrop-filter: blur(4px);
  border: 1px solid var(--amnezia-pastel-green);
  color: var(--amnezia-pastel-green);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  margin: 0.5rem;
  transition: all 0.3s;
}

.btn-pastel-primary:hover {
  background: rgba(168, 230, 207, 0.3);
  transform: scale(1.02);
  box-shadow: 0 4px 15px rgba(168, 230, 207, 0.2);
}

.btn-pastel-secondary {
  background: rgba(26, 26, 26, 0.6);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 179, 71, 0.5);
  color: var(--amnezia-pastel-orange);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  margin: 0.5rem;
  transition: all 0.3s;
}

.btn-pastel-secondary:hover {
  border-color: var(--amnezia-pastel-orange);
  background: rgba(255, 179, 71, 0.1);
}

/* АДАПТИВНОСТЬ */
@media (max-width: 1024px) {
  .cards-grid, .categories-four, .stats-four {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cards-grid, .categories-four, .stats-four {
    grid-template-columns: 1fr;
  }
  
  .hero-pastel h1 {
    font-size: 2rem;
  }
}
</style>

<div class="main-container">

  <!-- HERO БЛОК -->
  <div class="hero-pastel">
    <div>
      <span class="badge-pastel">🌿 Современный хостинг</span>
      <span class="badge-pastel">🔐 Безопасность</span>
      <span class="badge-pastel">💚 Amnezia Ready</span>
      <span class="badge-pastel">⚡ NVMe диски</span>
    </div>
    <h1>🖤 Amnezia Hosting Wiki 🧡</h1>
    <p style="font-size: 1.1rem; opacity: 0.85;">Быстрый старт, гайды и лучшие практики для вашего проекта</p>
  </div>

  <!-- БЫСТРЫЕ ССЫЛКИ (4 карточки) -->
  <div class="cards-grid">
    <a href="/docs/quickstart" class="pastel-card">
      <div class="card-icon">⚡</div>
      <h3>Быстрый старт</h3>
      <p>Настройте сервер за 5 минут</p>
    </a>
    <a href="/docs/installation" class="pastel-card">
      <div class="card-icon">🛠️</div>
      <h3>Установка</h3>
      <p>Пошаговая инструкция</p>
    </a>
    <a href="/docs/security" class="pastel-card">
      <div class="card-icon">🔒</div>
      <h3>Безопасность</h3>
      <p>Защита вашего хостинга</p>
    </a>
    <a href="/docs/server" class="pastel-card">
      <div class="card-icon">🔧</div>
      <h3>Настройки</h3>
      <p>Оптимальная конфигурация</p>
    </a>
  </div>

  <!-- КАТЕГОРИИ (4 колонки - ваш код) -->
  <div class="categories-four">
    
    <div class="category-pastel">
      <h2>⚙️ Управление сервером</h2>
      <ul>
        <li><a href="/guides/panel">🖥️ Панель управления</a></li>
        <li><a href="/guides/database">🗄️ Базы данных</a></li>
        <li><a href="/guides/nginx">⚡ Настройка Nginx</a></li>
        <li><a href="/guides/php">🐘 PHP конфигурация</a></li>
      </ul>
    </div>

    <div class="category-pastel">
      <h2>💚 Amnezia Интеграция</h2>
      <ul>
        <li><a href="/guides/wireguard">🔷 Настройка WireGuard</a></li>
        <li><a href="/guides/amnezia-proto">🟢 Amnezia Protocol</a></li>
        <li><a href="/guides/vpn-site">🔗 Связка VPN + Сайт</a></li>
        <li><a href="/guides/dns">🌍 DNS через Amnezia</a></li>
      </ul>
    </div>

    <div class="category-pastel">
      <h2>🔧 Продвинутые гайды</h2>
      <ul>
        <li><a href="/guides/docker">🐳 Docker на хостинге</a></li>
        <li><a href="/guides/ci-cd">🔄 CI/CD пайплайны</a></li>
        <li><a href="/guides/monitoring">📊 Мониторинг и алерты</a></li>
        <li><a href="/guides/scale">📈 Масштабирование</a></li>
      </ul>
    </div>

    <div class="category-pastel">
      <h2>🚀 Начало работы</h2>
      <ul>
        <li><a href="/guides/registration">📝 Регистрация</a></li>
        <li><a href="/guides/domain">🌐 Подключение домена</a></li>
        <li><a href="/guides/ssl">🔐 SSL сертификат</a></li>
        <li><a href="/guides/backups">💾 Настройка бэкапов</a></li>
      </ul>
    </div>

  </div>

  <!-- СТАТИСТИКА -->
  <div class="stats-four">
    <div class="stat-pastel">
      <div class="stat-number-pastel">99.9%</div>
      <div class="stat-label">Аптайм</div>
      <span class="stat-sub">гарантия стабильности</span>
    </div>
    <div class="stat-pastel">
      <div class="stat-number-pastel">24/7</div>
      <div class="stat-label">Поддержка</div>
      <span class="stat-sub">Telegram · Discord</span>
    </div>
    <div class="stat-pastel">
      <div class="stat-number-pastel">🚀</div>
      <div class="stat-label">NVMe диски</div>
      <span class="stat-sub">молниеносно</span>
    </div>
    <div class="stat-pastel">
      <div class="stat-number-pastel">🔐</div>
      <div class="stat-label">DDoS защита</div>
      <span class="stat-sub">круглосуточно</span>
    </div>
  </div>

  <!-- CTA БАННЕР -->
  <div class="cta-pastel">
    <h3>✨ Готовы начать?</h3>
    <p style="opacity: 0.85;">Выберите руководство и настройте идеальный хостинг</p>
    <div>
      <a href="/docs/quickstart" class="btn-pastel-primary">🚀 Начать сейчас</a>
      <a href="https://t.me/amnezia_hosting" class="btn-pastel-secondary">💬 Задать вопрос</a>
    </div>
  </div>

</div>
