"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "uz" | "ru"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: any
}

const translations = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      portfolio: "Portfolio",
      testimonials: "Mijozlar fikri",
      about: "Biz haqimizda",
      contact: "Aloqa",
    },
    hero: {
      badge: "🚀 Professional Web Yechimlar",
      title: "Biznesingiz uchun Mukammal Veb-sayt",
      subtitle:
        "Zamonaviy dizayn va yuqori sifatli dasturlash bilan biznesingizni raqamli olamda muvaffaqiyatga olib chiqamiz. Professional jamoa va individual yondashuv bilan har bir loyihani mukammal darajada amalga oshiramiz.",
      features: ["Tez ishlaydigan saytlar", "Mobil moslashuvchan", "SEO optimizatsiya", "24/7 texnik yordam"],
      stats: {
        clients: "Mijozlar",
        satisfaction: "Mamnunlik",
        support: "Yordam",
      },
    },
    form: {
      title: "Bepul Maslahat Oling",
      subtitle: "Ma'lumotlaringizni qoldiring, biz siz bilan 24 soat ichida bog'lanamiz",
      name: "Ismingiz",
      namePlaceholder: "To'liq ismingizni kiriting",
      phone: "Telefon raqamingiz",
      phonePlaceholder: "+998 95 005 15 45",
      submit: "Bepul Maslahat Olish",
      sending: "Yuborilmoqda...",
      success: "Muvaffaqiyatli yuborildi!",
      successMessage: "Ma'lumotlaringiz qabul qilindi. Tez orada mutaxassislarimiz siz bilan bog'lanadi!",
      responseTime: "24 soat ichida javob beramiz",
      privacy: "Ma'lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi",
      contactInfo: "Yoki to'g'ridan-to'g'ri bog'laning",
    },
    services: {
      title: "Bizning Xizmatlarimiz",
      subtitle: "Biznesingiz uchun to'liq raqamli yechimlar taklif etamiz",
      learnMore: "Batafsil",
      items: [
        {
          icon: "web",
          title: "Veb-sayt Yaratish",
          description: "Zamonaviy va professional veb-saytlar yaratamiz. Responsive dizayn va SEO optimizatsiya bilan.",
        },
        {
          icon: "mobile",
          title: "Mobil Ilovalar",
          description: "iOS va Android uchun mobil ilovalar ishlab chiqamiz. Native va cross-platform yechimlar.",
        },
        {
          icon: "ecommerce",
          title: "Onlayn Do'kon",
          description: "E-commerce platformalar va onlayn do'konlar yaratamiz. To'lov tizimlari integratsiyasi bilan.",
        },
        {
          icon: "speed",
          title: "Tez Yuklash",
          description: "Saytlaringiz tez yuklanishi va optimal ishlashini ta'minlaymiz. Performance optimizatsiya.",
        },
        {
          icon: "security",
          title: "Xavfsizlik",
          description: "Yuqori darajadagi xavfsizlik va ma'lumotlar himoyasi. SSL sertifikatlar va backup.",
        },
        {
          icon: "support",
          title: "Texnik Yordam",
          description: "24/7 texnik yordam va saytni yangilash xizmatlari. Doimiy monitoring va qo'llab-quvvatlash.",
        },
      ],
    },
    portfolio: {
      title: "Bizning Ishlarimiz",
      subtitle: "Muvaffaqiyatli amalga oshirilgan loyihalarimiz bilan tanishing",
      view: "Ko'rish",
      code: "Kod",
      projects: {
        ecommerce: "Zamonaviy onlayn do'kon platformasi to'lov integratsiyasi bilan",
        corporate: "Korporativ veb-sayt va professional brending yechimi",
        mobile: "Cross-platform mobil ilova iOS va Android uchun",
        dashboard: "Admin panel va analitika tizimi biznes boshqaruvi uchun",
        landing: "Yuqori konversiyali landing page marketing uchun",
        webapp: "To'liq funksional veb-ilova murakkab biznes jarayonlari uchun",
      },
    },
    testimonials: {
      title: "Mijozlarimiz Fikri",
      subtitle: "Bizning ishimiz haqida mijozlarimizning fikrlari va baholari",
      clients: {
        akmal: {
          position: "Bosh direktor",
          content:
            "Ismoiloff jamoasi bizning veb-saytimizni mukammal darajada yaratdi. Professional yondashuv, sifatli xizmat va o'z vaqtida topshirish. Tavsiya qilaman!",
        },
        dilnoza: {
          position: "Marketing menejeri",
          content:
            "Ajoyib dizayn va tez ishlash. Sayt juda chiroyli va funksional bo'lib chiqdi. Mijozlarimiz saytdan juda mamnun. Rahmat katta jamoa!",
        },
        bobur: {
          position: "IT rahbari",
          content:
            "Texnik jihatdan mukammal yechim. Barcha talablarimiz to'liq bajarildi. Kod sifati yuqori va xavfsizlik ta'minlangan.",
        },
      },
    },
    about: {
      title: "Biz Haqimizda",
      description:
        "Ismoiloff.ru - bu professional veb-dasturlash va dizayn xizmatlarini taklif etuvchi kompaniya. Biz har bir loyihaga individual yondashuvni qo'llaymiz va mijozlarimizning muvaffaqiyati uchun ishlaymiz.",
      mission: {
        title: "Bizning Missiyamiz",
        description:
          "Bizning asosiy maqsadimiz - mijozlarimizning biznesini raqamli olamda muvaffaqiyatga olib chiqish va ularning onlayn mavjudligini kuchaytirish.",
        vision:
          "Biz zamonaviy texnologiyalar va kreativ yechimlar orqali har bir loyihani noyob va samarali qilamiz. Mijozlarimizning ehtiyojlarini tushunib, ularning kutganidan ham yaxshi natija berishga intilamiz.",
      },
      stats: {
        clients: "Mijozlar",
        projects: "Loyihalar",
        experience: "Yillik tajriba",
        rating: "Reyting",
      },
      values: {
        quality: {
          title: "Yuqori Sifat",
          description:
            "Har bir loyihada eng yuqori sifat standartlarini qo'llaymiz va mijozlarimizning kutganidan ham yaxshi natija berishga intilamiz.",
        },
        passion: {
          title: "Ishtiyoq",
          description:
            "Ishimizni sevib qilamiz va har bir loyihaga ishtiyoq bilan yondashامiz. Bu bizning muvaffaqiyatimizning asosi.",
        },
        team: {
          title: "Kuchli Jamoa",
          description:
            "Tajribali mutaxassislardan iborat professional jamoa. Har bir a'zo o'z sohasida ekspert va doimiy rivojlanadi.",
        },
      },
      team: {
        title: "Bizning Jamoa",
        members: [
          {
            name: "Hayotbek Ismoilov",
            position: "Bosh dasturchi",
            description: "Full-stack dasturlash bo'yicha 2+ yillik tajriba. React, Node.js, Python mutaxassisi.",
          },
          {
            name: "Mirzaahmedova Shoxzoda",
            position: "UI/UX Dizayner",
            description:
              "Kreativ dizayn va foydalanuvchi tajribasi mutaxassisi. Adobe Creative Suite va Figma eksperti. Hamda foront-end dasturlash bo'yicha ham bilimga ega.",
          },
          {
            name: "Sardor Rahimov",
            position: "Frontend dasturchi",
            description: "Zamonaviy frontend texnologiyalar bo'yicha ekspert. React, Vue.js, Angular mutaxassisi.",
          },
        ],
      },
    },
    faq: {
      title: "Tez-tez So'raladigan Savollar",
      subtitle: "Eng ko'p so'raladigan savollarga batafsil javoblar",
      items: [
        {
          question: "Veb-sayt yaratish qancha vaqt oladi?",
          answer:
            "Loyihaning murakkabligiga qarab, oddiy sayt 1-2 hafta, o'rta murakkablikdagi sayt 3-4 hafta, murakkab loyihalar esa 1-3 oy vaqt olishi mumkin. Aniq muddat loyihani muhokama qilgandan keyin belgilanadi.",
        },
        {
          question: "Narxlar qanday belgilanadi?",
          answer:
            "Narx loyihaning hajmi, funksionalligi, dizayn murakkabligi va qo'shimcha xizmatlar (SEO, hosting, qo'llab-quvvatlash)ga qarab individual hisoblanadi. Bepul maslahat uchun biz bilan bog'laning va aniq narxni bilib oling.",
        },
        {
          question: "Texnik yordam xizmati bormi?",
          answer:
            "Ha, biz barcha mijozlarimizga 24/7 texnik yordam, saytni yangilash, xavfsizlik monitoring va backup xizmatlarini taklif etamiz. Turli xil qo'llab-quvvatlash paketlari mavjud.",
        },
        {
          question: "Mobil versiya ham yaratiladi?",
          answer:
            "Albatta! Barcha saytlarimiz responsive dizayn bilan yaratiladi va barcha qurilmalarda (telefon, planshet, kompyuter) mukammal ishlaydi. Mobile-first yondashuvni qo'llaymiz.",
        },
        {
          question: "SEO optimizatsiya qilinadi?",
          answer:
            "Ha, barcha saytlarimiz SEO optimizatsiya bilan yaratiladi: tez yuklash, to'g'ri struktura, meta teglar, sitemap va qidiruv tizimlarida yaxshi ko'rinish ta'minlanadi.",
        },
        {
          question: "To'lov qanday amalga oshiriladi?",
          answer:
            "To'lovni bosqichma-bosqich qilish mumkin: 50% oldindan to'lov, qolgan 50% ish tugagandan keyin. Naqd, bank o'tkazmasi yoki onlayn to'lov usullari mavjud.",
        },
      ],
    },
    contact: {
      title: "Biz Bilan Bog'laning",
      subtitle: "Loyihangizni muhokama qilish uchun biz bilan bog'laning. Bepul maslahat va taklif olish uchun",
      phone: "Telefon",
      email: "Email",
      address: "Manzil",
      addressValue: "Toshkent, O'zbekiston",
      hours: "Ish vaqti",
      hoursValue: "Dush-Juma: 9:00-18:00, +998 95 005 15 45",
      cta: {
        title: "Loyihangizni boshlashga tayyormisiz?",
        description:
          "Bepul maslahat olish uchun bizga qo'ng'iroq qiling yoki email yuboring. Mutaxassislarimiz sizga yordam beradi.",
        call: "Qo'ng'iroq qilish",
        email: "Email yuborish",
      },
    },
    footer: {
      description:
        "Professional veb-dasturlash va dizayn xizmatlarini taklif etamiz. Biznesingizni raqamli olamda muvaffaqiyatga olib chiqamiz.",
      madeWith: "Muhabbat bilan yaratildi",
      by: "tomonidan",
      backToTop: "Yuqoriga",
      rights: "Barcha huquqlar himoyalangan.",
    },
    cta: {
      getStarted: "Boshlash",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      portfolio: "Портфолио",
      testimonials: "Отзывы",
      about: "О нас",
      contact: "Контакты",
    },
    hero: {
      badge: "🚀 Профессиональные Веб-решения",
      title: "Идеальный Веб-сайт для Вашего Бизнеса",
      subtitle:
        "Современный дизайн и высококачественное программирование приведут ваш бизнес к успеху в цифровом мире. Профессиональная команда и индивидуальный подход к каждому проекту на превосходном уровне.",
      features: ["Быстрые сайты", "Адаптивный дизайн", "SEO оптимизация", "Техподдержка 24/7"],
      stats: {
        clients: "Клиентов",
        satisfaction: "Удовлетворенность",
        support: "Поддержка",
      },
    },
    form: {
      title: "Получите Бесплатную Консультацию",
      subtitle: "Оставьте свои данные, мы свяжемся с вами в течение 24 часов",
      name: "Ваше имя",
      namePlaceholder: "Введите ваше полное имя",
      phone: "Номер телефона",
      phonePlaceholder: "+998 95 005 15 45",
      submit: "Получить Консультацию",
      sending: "Отправляется...",
      success: "Успешно отправлено!",
      successMessage: "Ваши данные получены. Наши специалисты скоро свяжутся с вами!",
      responseTime: "Ответим в течение 24 часов",
      privacy: "Ваши данные надежно защищены и не передаются третьим лицам",
      contactInfo: "Или свяжитесь напрямую",
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Предлагаем полные цифровые решения для вашего бизнеса",
      learnMore: "Подробнее",
      items: [
        {
          icon: "web",
          title: "Создание Веб-сайтов",
          description: "Создаем современные и профессиональные веб-сайты. Адаптивный дизайн и SEO оптимизация.",
        },
        {
          icon: "mobile",
          title: "Мобильные Приложения",
          description: "Разрабатываем мобильные приложения для iOS и Android. Нативные и кроссплатформенные решения.",
        },
        {
          icon: "ecommerce",
          title: "Интернет-магазин",
          description: "Создаем e-commerce платформы и интернет-магазины. Интеграция платежных систем.",
        },
        {
          icon: "speed",
          title: "Быстрая Загрузка",
          description: "Обеспечиваем быструю загрузку и оптимальную работу сайтов. Оптимизация производительности.",
        },
        {
          icon: "security",
          title: "Безопасность",
          description: "Высокий уровень безопасности и защиты данных. SSL сертификаты и резервное копирование.",
        },
        {
          icon: "support",
          title: "Техподдержка",
          description: "Техподдержка 24/7 и услуги обновления сайта. Постоянный мониторинг и поддержка.",
        },
      ],
    },
    portfolio: {
      title: "Наши Работы",
      subtitle: "Ознакомьтесь с нашими успешно реализованными проектами",
      view: "Просмотр",
      code: "Код",
      projects: {
        ecommerce: "Современная платформа интернет-магазина с интеграцией платежей",
        corporate: "Корпоративный веб-сайт и профессиональное брендинговое решение",
        mobile: "Кроссплатформенное мобильное приложение для iOS и Android",
        dashboard: "Админ-панель и система аналитики для управления бизнесом",
        landing: "Landing page с высокой конверсией для маркетинга",
        webapp: "Полнофункциональное веб-приложение для сложных бизнес-процессов",
      },
    },
    testimonials: {
      title: "Отзывы Клиентов",
      subtitle: "Мнения наших клиентов о нашей работе и оценки",
      clients: {
        akmal: {
          position: "Генеральный директор",
          content:
            "Команда Ismoiloff создала наш веб-сайт на превосходном уровне. Профессиональный подход, качественный сервис и своевременная сдача. Рекомендую!",
        },
        dilnoza: {
          position: "Менеджер по маркетингу",
          content:
            "Отличный дизайн и быстрая работа. Сайт получился очень красивым и функциональным. Наши клиенты очень довольны сайтом. Спасибо большой команде!",
        },
        bobur: {
          position: "IT-руководитель",
          content:
            "Технически совершенное решение. Все наши требования были полностью выполнены. Качество кода высокое и безопасность обеспечена.",
        },
      },
    },
    about: {
      title: "О Нас",
      description:
        "Ismoiloff.ru - это компания, предлагающая профессиональные услуги веб-программирования и дизайна. Мы применяем индивидуальный подход к каждому проекту и работаем для успеха наших клиентов.",
      mission: {
        title: "Наша Миссия",
        description:
          "Наша основная цель - привести бизнес наших клиентов к успеху в цифровом мире и усилить их онлайн-присутствие.",
        vision:
          "Мы делаем каждый проект уникальным и эффективным через современные технологии и креативные решения. Стремимся понять потребности клиентов и дать результат лучше ожидаемого.",
      },
      stats: {
        clients: "Клиентов",
        projects: "Проектов",
        experience: "Лет опыта",
        rating: "Рейтинг",
      },
      values: {
        quality: {
          title: "Высокое Качество",
          description:
            "Применяем высочайшие стандарты качества в каждом проекте и стремимся дать результат лучше ожидаемого клиентами.",
        },
        passion: {
          title: "Страсть",
          description: "Любим свою работу и подходим к каждому проекту со страстью. Это основа нашего успеха.",
        },
        team: {
          title: "Сильная Команда",
          description:
            "Профессиональная команда из опытных специалистов. Каждый член команды - эксперт в своей области и постоянно развивается.",
        },
      },
      team: {
        title: "Наша Команда",
        members: [
          {
            name: "Исмоил Исмоилов",
            position: "Ведущий разработчик",
            description: "5+ лет опыта в full-stack разработке. Специалист по React, Node.js, Python.",
          },
          {
            name: "Малика Каримова",
            position: "UI/UX Дизайнер",
            description:
              "Специалист по креативному дизайну и пользовательскому опыту. Эксперт Adobe Creative Suite и Figma.",
          },
          {
            name: "Сардор Рахимов",
            position: "Frontend разработчик",
            description: "Эксперт по современным frontend технологиям. Специалист по React, Vue.js, Angular.",
          },
        ],
      },
    },
    faq: {
      title: "Часто Задаваемые Вопросы",
      subtitle: "Подробные ответы на самые популярные вопросы",
      items: [
        {
          question: "Сколько времени занимает создание веб-сайта?",
          answer:
            "В зависимости от сложности проекта, простой сайт занимает 1-2 недели, средней сложности 3-4 недели, сложные проекты могут занять 1-3 месяца. Точные сроки определяются после обсуждения проекта.",
        },
        {
          question: "Как определяются цены?",
          answer:
            "Цена рассчитывается индивидуально в зависимости от объема, функциональности, сложности дизайна и дополнительных услуг (SEO, хостинг, поддержка). Свяжитесь с нами для бесплатной консультации и узнайте точную цену.",
        },
        {
          question: "Есть ли служба технической поддержки?",
          answer:
            "Да, мы предлагаем всем нашим клиентам техподдержку 24/7, обновление сайта, мониторинг безопасности и резервное копирование. Доступны различные пакеты поддержки.",
        },
        {
          question: "Создается ли мобильная версия?",
          answer:
            "Конечно! Все наши сайты создаются с адаптивным дизайном и отлично работают на всех устройствах (телефон, планшет, компьютер). Применяем подход mobile-first.",
        },
        {
          question: "Выполняется ли SEO оптимизация?",
          answer:
            "Да, все наши сайты создаются с SEO оптимизацией: быстрая загрузка, правильная структура, мета теги, sitemap и хорошая видимость в поисковых системах.",
        },
        {
          question: "Как происходит оплата?",
          answer:
            "Оплату можно производить поэтапно: 50% предоплата, остальные 50% после завершения работы. Доступны наличный расчет, банковский перевод или онлайн платежи.",
        },
      ],
    },
    contact: {
      title: "Свяжитесь с Нами",
      subtitle: "Свяжитесь с нами для обсуждения вашего проекта. Для получения бесплатной консультации и предложения",
      phone: "Телефон",
      email: "Email",
      address: "Адрес",
      addressValue: "Ташкент, Узбекистан",
      hours: "Рабочие часы",
      hoursValue: "Пн-Пт: 9:00-18:00, +998 95 005 15 45",
      cta: {
        title: "Готовы начать свой проект?",
        description:
          "Позвоните нам или отправьте email для получения бесплатной консультации. Наши специалисты помогут вам.",
        call: "Позвонить",
        email: "Отправить email",
      },
    },
    footer: {
      description:
        "Предлагаем профессиональные услуги веб-программирования и дизайна. Приводим ваш бизнес к успеху в цифровом мире.",
      madeWith: "Создано с любовью",
      by: "командой",
      backToTop: "Наверх",
      rights: "Все права защищены.",
    },
    cta: {
      getStarted: "Начать",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz")

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "uz" || savedLanguage === "ru")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const value = {
    language,
    setLanguage,
    t: translations[language],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
