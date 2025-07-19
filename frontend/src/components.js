import React from 'react';

// Header Component
export const Header = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'services', label: 'ПОСЛУГИ' },
    { id: 'about', label: 'ПРО НАС' },
    { id: 'contact', label: 'КОНТАКТИ' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => scrollToSection('hero')}
          >
            UAdmin
          </div>
          <nav className="flex space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

// Hero Component
export const Hero = ({ scrollToSection }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        {/* Network Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1920 1080">
            <defs>
              <pattern id="network" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#60a5fa" opacity="0.5"/>
                <line x1="50" y1="50" x2="100" y2="0" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3"/>
                <line x1="50" y1="50" x2="100" y2="100" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3"/>
                <line x1="50" y1="50" x2="0" y2="100" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network)"/>
          </svg>
        </div>
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 tracking-wider">
          UAdmin
        </h1>
        <p className="text-xl md:text-2xl text-blue-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Професійна IT підтримка та технічні рішення для бізнесу та дому по всій Україні
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transform hover:-translate-y-1"
          >
            Наші Послуги
          </button>
          <button
            onClick={() => window.open('https://t.me/uadmin_support_bot', '_blank')}
            className="px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            Замовити через Telegram
          </button>
        </div>
      </div>
    </section>
  );
};

// Services Component
export const Services = () => {
  const services = [
    {
      icon: '🖥️',
      title: 'Налаштування ПК і ноутбуків',
      description: 'Налаштування ПК, ноутбуків, Windows, програм'
    },
    {
      icon: '📶',
      title: 'Мережі та Wi-Fi',
      description: 'Підключення та налаштування Wi-Fi, роутерів, мереж'
    },
    {
      icon: '💾',
      title: 'Резервне копіювання',
      description: 'Резервне копіювання даних (1С, CRM, документи)'
    },
    {
      icon: '📹',
      title: 'Відеоспостереження',
      description: 'Встановлення камер відеоспостереження з доступом через смартфон'
    },
    {
      icon: '🖨️',
      title: 'Обслуговування техніки',
      description: 'Обслуговування принтерів, онлайн-кас, сканерів'
    },
    {
      icon: '🛒',
      title: 'Підбір техніки',
      description: 'Підбір техніки для бізнесу та дому'
    },
    {
      icon: '🔒',
      title: 'Кібербезпека',
      description: 'Консультації з кібербезпеки та стабільності'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Наші послуги</h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            Комплексні IT рішення для вашого бізнесу та дому
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:bg-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-blue-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={() => window.open('https://t.me/uadmin_support_bot', '_blank')}
            className="px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transform hover:-translate-y-1 text-lg"
          >
            Замовити через Telegram
          </button>
        </div>
      </div>
    </section>
  );
};

// About Component
export const About = () => {
  const advantages = [
    {
      icon: '🌍',
      title: 'Віддалена підтримка',
      description: 'По всій Україні'
    },
    {
      icon: '⏰',
      title: 'Без вихідних',
      description: 'Працюємо тоді, коли потрібно вам'
    },
    {
      icon: '💰',
      title: 'Доступні ціни',
      description: 'Чесність у кожному рішенні'
    },
    {
      icon: '✅',
      title: 'Реальні результати',
      description: 'Ніяких «розводів» — тільки результат'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Чому обирають нас</h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            Надійний партнер для вирішення всіх ваших IT потреб
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="text-center bg-gray-800/30 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 hover:bg-gray-700/40 hover:border-blue-500/40 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{advantage.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{advantage.title}</h3>
              <p className="text-blue-300">{advantage.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Довіряйте професіоналам</h3>
            <p className="text-lg text-blue-300 mb-8 leading-relaxed">
              Наша команда має багаторічний досвід роботи в сфері IT. Ми забезпечуємо швидке та якісне вирішення технічних проблем, 
              допомагаємо оптимізувати роботу вашої техніки та гарантуємо надійність наших рішень.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => window.open('https://t.me/+i2B3mRXRBfxkN2Ji', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/30"
              >
                Telegram канал
              </button>
              <button
                onClick={() => window.open('https://instagram.com/uadmin_it', '_blank')}
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-pink-600/30"
              >
                @uadmin_it
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Component
export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Контакти</h2>
          <p className="text-xl text-blue-300 max-w-3xl mx-auto">
            Зв'яжіться з нами для отримання професійної IT підтримки
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Зв'язок з нами</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm">Телефон</p>
                    <p className="text-white text-lg font-semibold">+38 (0__) ___-__-__</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm">Email</p>
                    <p className="text-white text-lg font-semibold">info@uadmin.com.ua</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-blue-300 text-sm">Локація</p>
                    <p className="text-white text-lg font-semibold">По всій Україні</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Соціальні мережі</h3>
              
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => window.open('https://t.me/uadmin_support_bot', '_blank')}
                  className="flex items-center space-x-4 w-full p-4 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg transition-all duration-300 border border-blue-500/30 hover:border-blue-500/60"
                >
                  <span className="text-2xl">💬</span>
                  <div className="text-left">
                    <p className="text-white font-semibold">Telegram Bot</p>
                    <p className="text-blue-300 text-sm">@uadmin_support_bot</p>
                  </div>
                </button>

                <button
                  onClick={() => window.open('https://t.me/+i2B3mRXRBfxkN2Ji', '_blank')}
                  className="flex items-center space-x-4 w-full p-4 bg-blue-600/20 hover:bg-blue-600/40 rounded-lg transition-all duration-300 border border-blue-500/30 hover:border-blue-500/60"
                >
                  <span className="text-2xl">📢</span>
                  <div className="text-left">
                    <p className="text-white font-semibold">Telegram канал</p>
                    <p className="text-blue-300 text-sm">Наші новини та оновлення</p>
                  </div>
                </button>

                <button
                  onClick={() => window.open('https://instagram.com/uadmin_it', '_blank')}
                  className="flex items-center space-x-4 w-full p-4 bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/40 hover:to-purple-600/40 rounded-lg transition-all duration-300 border border-pink-500/30 hover:border-pink-500/60"
                >
                  <span className="text-2xl">📷</span>
                  <div className="text-left">
                    <p className="text-white font-semibold">Instagram</p>
                    <p className="text-pink-300 text-sm">@uadmin_it</p>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Напишіть нам</h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Ім'я</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="Ваше ім'я"
                />
              </div>

              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Телефон</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
                  placeholder="+38 (0__) ___-__-__"
                />
              </div>

              <div>
                <label className="block text-blue-300 text-sm font-medium mb-2">Повідомлення</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400 resize-none"
                  placeholder="Опишіть вашу проблему або запит..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
              >
                Відправити повідомлення
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-black border-t border-blue-500/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">UAdmin</h3>
            <p className="text-blue-300 leading-relaxed">
              Професійна IT підтримка та технічні рішення для бізнесу та дому по всій Україні.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Послуги</h4>
            <ul className="space-y-2 text-blue-300">
              <li>Налаштування ПК і програм</li>
              <li>Мережі та Wi-Fi</li>
              <li>Резервне копіювання</li>
              <li>Відеоспостереження</li>
              <li>Кібербезпека</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Контакти</h4>
            <div className="space-y-2 text-blue-300">
              <p>📧 info@uadmin.com.ua</p>
              <p>📞 +38 (0__) ___-__-__</p>
              <p>📍 По всій Україні</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 mt-8 pt-8 text-center">
          <p className="text-blue-300">
            © 2024 UAdmin. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};