const content = {
  en: {
    name: 'Berke Altıparmak',
    role: 'Full-Stack Software Developer',
    location: 'İstanbul, Türkiye',
    email: 'berkealtiparmak@outlook.com',
    phone: '+90 505 285 67 97',
    links: {
      github: 'github.com/balpa',
      linkedin: 'linkedin.com/in/berkealtiparmak',
      website: 'berke-altiparmak.web.app',
    },
    about: [
      "Full-stack Software Developer at Insider One since January 2023 — the AI-native growth-management SaaS platform serving 2,000+ enterprise brands including Samsung, L'Oréal, Unilever and Singapore Airlines. Three+ years on the dedicated engineering team for Singapore Airlines (20M+ annual fliers); now on the Banner Management team.",
      'Co-founded a 3-developer team that launched the zero-to-one Banner Management product on a micro-frontend + micro-backend architecture, bootstrapping the full cloud delivery stack (Kubernetes on AWS EKS, Helm, Terraform, Docker, CI/CD) from scratch. 1st place, AWS Game Day 2026.',
      'Two years as a Technical Advisor in parallel (2024 — Mar 2026): 100+ customer meetings, coached dozens of developers, trained other advisors.',
      'Computer Engineer (BSc, Beykent) with an MSc in Information Technology from Yıldız Technical University. Also a working musician — performs at corporate and institutional events.',
    ],
    experience: [
      {
        company: 'Insider One',
        role: 'Software Developer — Banner Management Team',
        date: 'Mar 2026 — Present',
        place: 'İstanbul',
        bullets: [
          'Full-time member of the 3-developer founding team behind the greenfield Banner Management product (originally scoped for Singapore Airlines, later extended across the broader Insider One customer base).',
          'Architected on a micro-frontend + micro-backend pattern; contributing to management UI, Go (Golang) backend microservices, and client-side JavaScript scripts embedded on customer websites.',
          'Maintains the full cloud delivery stack — Kubernetes on AWS EKS, Helm, Terraform, Docker, CI/CD pipelines.',
        ],
      },
      {
        company: 'Insider One',
        role: 'Software Developer & Technical Advisor',
        date: 'Jan 2023 — Mar 2026',
        place: 'İstanbul',
        bullets: [
          'Three years on the dedicated engineering team for Singapore Airlines (20M+ annual fliers); shipped personalization campaigns and internal systems in JavaScript on the frontend and Go (Golang) / PHP on the backend.',
          'Technical Advisor for two years (2024 — Mar 2026), in parallel with core development: led 100+ enterprise customer meetings, coached dozens of developers, trained other engineers into the advisor role.',
          'Drove front-end performance improvements on Singapore Airlines\' web properties (preconnect, image preload, async script loading, caching). Sustained a "Success" rating every month across the full tenure.',
        ],
      },
      {
        company: 'Acıbadem University',
        role: 'Software Development Intern — Biodesign Center',
        date: 'Jun — Aug 2019',
        place: 'İstanbul',
        bullets: [
          "Built the front-end of the Biodesign Center's public website with HTML5, CSS3 and vanilla JavaScript.",
        ],
      },
    ],
    projects: [
      {
        name: 'maitrics',
        stack: 'Swift · SwiftUI · macOS',
        desc: 'Native macOS menu bar app that visualizes Claude Code CLI usage in real time — per-model token breakdowns, 5-hour session and 7-day rate-limit tracking, interactive 7/30-day usage charts.',
      },
      {
        name: 'God Tier Code Reviewer',
        stack: 'JavaScript · VS Code API · Gemini',
        desc: 'Open-source VS Code / Cursor extension that automates JS/TS code review — 30+ static rule fixes plus AI suggestions via Google Gemini, delivered through CodeLens, code actions and a custom webview.',
      },
      {
        name: 'movue',
        stack: 'Vue 3 · Vite · Tailwind · Firebase',
        desc: 'Responsive Vue 3 movie database — Composition API single-file components, Vite build, Tailwind utility CSS, deployed on Firebase Hosting.',
      },
      {
        name: 'Whichone',
        stack: 'React Native · Expo · Firebase',
        desc: 'Cross-platform iOS/Android social app — posts, comments, likes, DMs and authentication, powered by a real-time Firebase backend (Firestore, Auth, Storage).',
      },
      {
        name: 'Koma',
        stack: 'React Native · Expo · Audio',
        desc: 'Turkish classical music rhythm trainer. Practices traditional usul and makams via a metronome-style engine with configurable BPM, time signatures and audio-cue scheduling.',
      },
    ],
    skills: {
      Languages: ['JavaScript', 'Go', 'PHP', 'Python'],
      Frontend: ['Vue.js', 'React', 'React Native'],
      Backend: ['Go (Golang)', 'PHP / Laravel', 'Node.js', 'Microservices'],
      Cloud: ['AWS · EKS', 'Kubernetes', 'Terraform · Helm', 'Docker · CI/CD', 'Datadog'],
      Data: ['scikit-learn', 'NumPy · Pandas', 'NLP'],
    },
    education: [
      {
        school: 'Yıldız Technical University',
        degree: 'MSc, Information Technology',
        date: '2021 — 2022',
      },
      {
        school: 'Beykent University',
        degree: 'BSc, Computer Engineering',
        date: '2014 — 2019',
      },
    ],
    music: {
      tag: 'OFF THE CLOCK',
      lines: [
        'Professional musician performing at corporate and institutional events.',
        "Stages played: corporate halls (ABB, Siemens), Istanbul cultural centers (Kartal Bülent Ecevit, Akatlar, Cemal Reşit Rey, and others), and civic & social associations.",
        'Reads & follows: physics, cosmology, quantum computing — anything that puts a clock on the universe.',
      ],
    },
    certificates: [
      '2026 — 1st Place, AWS Game Day (Insider One × Amazon Web Services)',
      '2021 — Refik Anadol Studio: AI & Art Workshop',
      '2021 — Makine Hatıraları: Uzay (Global AI Hub)',
    ],
  },
  tr: {
    name: 'Berke Altıparmak',
    role: 'Full-Stack Yazılım Geliştirici',
    location: 'İstanbul, Türkiye',
    email: 'berkealtiparmak@outlook.com',
    phone: '+90 505 285 67 97',
    links: {
      github: 'github.com/balpa',
      linkedin: 'linkedin.com/in/berkealtiparmak',
      website: 'berke-altiparmak.web.app',
    },
    about: [
      "Ocak 2023'ten beri Insider One'da full-stack Yazılım Geliştirici; Samsung, L'Oréal, Unilever ve Singapore Airlines dahil 2.000+ kurumsal markaya hizmet veren AI-native growth management SaaS platformu. Singapore Airlines'a (yıllık 20M+ yolcu) adanmış mühendislik ekibinde 3+ yıl; şu anda Banner Management ekibinde.",
      "3 kişilik kurucu ekiple sıfırdan Banner Management ürününü micro-frontend + micro-backend mimaride kurduk; Kubernetes (AWS EKS), Helm, Terraform, Docker ve CI/CD'den oluşan tüm cloud delivery stack'ini sıfırdan inşa ettik. AWS Game Day 2026 birincisi.",
      'Paralelde 2 yıl Teknik Danışmanlık (2024 — Mart 2026): 100+ kurumsal müşteri toplantısı, düzinelerce geliştiriciye mentorluk, diğer danışmanlara eğitim.',
      "Bilgisayar Mühendisi (Lisans, Beykent), Yıldız Teknik Üniversitesi'nden Bilişim Teknolojileri Yüksek Lisansı. Ayrıca profesyonel müzisyenim — kurumsal ve resmi etkinliklerde sahne alıyorum.",
    ],
    experience: [
      {
        company: 'Insider One',
        role: 'Yazılım Geliştirici — Banner Management Ekibi',
        date: 'Mar 2026 — Şu an',
        place: 'İstanbul',
        bullets: [
          'Sıfırdan kurulan Banner Management ürününün 3 kişilik kurucu ekibinde tam zamanlı çalışıyor (önce Singapore Airlines için tasarlandı, sonra geniş Insider One müşteri tabanına yaygınlaştırıldı).',
          'Micro-frontend + micro-backend mimari; management UI, Go (Golang) backend microservice ve müşteri sitelerine gömülen client-side JavaScript script geliştiriyor.',
          'Tüm cloud delivery stack\'ini yönetiyor — Kubernetes (AWS EKS), Helm, Terraform, Docker, CI/CD pipeline\'ları.',
        ],
      },
      {
        company: 'Insider One',
        role: 'Yazılım Geliştirici & Teknik Danışman',
        date: 'Oca 2023 — Mar 2026',
        place: 'İstanbul',
        bullets: [
          "Singapore Airlines'a (yıllık 20M+ yolcu) adanmış mühendislik ekibinde üç yıl; frontend'de JavaScript, backend'de Go (Golang) / PHP ile personalization kampanyaları ve dahili sistemler.",
          "İki yıl Teknik Danışmanlık (2024 — Mar 2026), core development'ın paralelinde: 100+ kurumsal müşteri toplantısı, düzinelerce geliştiriciye mentorluk, diğer mühendisleri danışman rolüne hazırlama.",
          "Singapore Airlines web sayfalarında ön yüz performans iyileştirmeleri (preconnect, image preload, async script loading, caching). Tüm kıdem boyunca her ay \"Success\" performans değerlendirmesi.",
        ],
      },
      {
        company: 'Acıbadem Üniversitesi',
        role: 'Yazılım Geliştirme Stajyeri — Biodesign Center',
        date: 'Haz — Ağu 2019',
        place: 'İstanbul',
        bullets: [
          "Biodesign Center'ın public web sitesinin ön yüzünü HTML5, CSS3 ve vanilla JavaScript ile geliştirdim.",
        ],
      },
    ],
    projects: [
      {
        name: 'maitrics',
        stack: 'Swift · SwiftUI · macOS',
        desc: "Claude Code CLI kullanımını gerçek zamanlı görselleştiren native macOS menü çubuğu uygulaması — model bazlı token kırılımı, 5 saatlik oturum ve 7 günlük rate-limit takibi, 7/30 günlük interaktif kullanım grafikleri.",
      },
      {
        name: 'God Tier Code Reviewer',
        stack: 'JavaScript · VS Code API · Gemini',
        desc: "JS/TS code review'ını otomatize eden açık kaynak VS Code / Cursor uzantısı — 30+ statik kural ile birlikte Google Gemini API üzerinden AI önerileri; CodeLens, code action ve özel webview ile sunuluyor.",
      },
      {
        name: 'movue',
        stack: 'Vue 3 · Vite · Tailwind · Firebase',
        desc: 'Responsive Vue 3 film veritabanı — Composition API single-file componentler, Vite build, Tailwind utility CSS, Firebase Hosting üzerinde dağıtık.',
      },
      {
        name: 'Whichone',
        stack: 'React Native · Expo · Firebase',
        desc: 'Cross-platform iOS/Android sosyal uygulama — post, yorum, beğeni, DM ve kimlik doğrulama; gerçek zamanlı Firebase backend (Firestore, Auth, Storage).',
      },
      {
        name: 'Koma',
        stack: 'React Native · Expo · Audio',
        desc: 'Türk klasik müziği usul/makam çalıştırıcısı — konfigüre edilebilir BPM, ölçü ve audio-cue zamanlamasıyla metronom-vari özel bir tempo motoru.',
      },
    ],
    skills: {
      Diller: ['JavaScript', 'Go', 'PHP', 'Python'],
      Frontend: ['Vue.js', 'React', 'React Native'],
      Backend: ['Go (Golang)', 'PHP / Laravel', 'Node.js', 'Microservices'],
      Cloud: ['AWS · EKS', 'Kubernetes', 'Terraform · Helm', 'Docker · CI/CD', 'Datadog'],
      Data: ['scikit-learn', 'NumPy · Pandas', 'NLP'],
    },
    education: [
      {
        school: 'Yıldız Teknik Üniversitesi',
        degree: 'Yüksek Lisans, Bilişim Teknolojileri',
        date: '2021 — 2022',
      },
      {
        school: 'Beykent Üniversitesi',
        degree: 'Lisans, Bilgisayar Mühendisliği',
        date: '2014 — 2019',
      },
    ],
    music: {
      tag: 'MESAİ DIŞI',
      lines: [
        'Profesyonel müzisyen — kurumsal ve resmi etkinliklerde sahne alıyor.',
        "Sahne aldığı yerler: kurumsal salonlar (ABB, Siemens), İstanbul kültür merkezleri (Kartal Bülent Ecevit, Akatlar, Cemal Reşit Rey ve diğerleri), sivil ve sosyal dernekler.",
        'Takip ettikleri: fizik, kozmoloji, kuantum bilişim — evrene saat tutan her şey.',
      ],
    },
    certificates: [
      '2026 — Birincilik, AWS Game Day (Insider One × Amazon Web Services)',
      '2021 — Refik Anadol Studio: Yapay Zeka ve Sanat Atölyesi',
      '2021 — Makine Hatıraları: Uzay (Global AI Hub)',
    ],
  },
}

export default content
