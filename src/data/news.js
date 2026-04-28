const news = {
  en: {
    masthead: 'Berke Altıparmak',
    motto: '“All the Code That\'s Fit to Ship”',
    edition: 'ESTABLISHED 2014 · PRINTED IN ISTANBUL',
    vol: 'VOL. III · ISSUE 01',
    weather: { city: 'ISTANBUL', temp: '17°', cond: 'Cloudy with bright spots', sun: '06:48 / 19:42' },
    market: [
      ['INSIDER ONE', '↑ shipping'],
      ['MUSIC', '↑ on stage'],
      ['AWS', '↑ 1st place'],
      ['COFFEE', '↑ steady'],
    ],
    pages: [
      {
        title: 'FRONT PAGE',
        slug: 'A1',
        kind: 'front',
        headline: 'INSIDER ONE DEVELOPER WRITES CODE BY DAY, TAKES THE STAGE BY NIGHT',
        kicker: '★ FRONT PAGE ★',
        subhead:
          'Beykent University CompEng grad, Yildiz Technical University MSc — Software Developer at Insider One, three+ years on the Singapore Airlines dedicated team',
        byline: 'BY THE STAFF',
        lead:
          "ISTANBUL — Berke Altıparmak is a full-stack Software Developer at Insider One, the AI-native growth-management SaaS platform serving 2,000+ enterprise brands including Samsung, L'Oréal, Unilever and Singapore Airlines. He joined in January 2023 and spent three+ years on the dedicated engineering team for Singapore Airlines (20M+ annual fliers), shipping personalization campaigns and internal systems in JavaScript, Go and PHP. In March 2026 he moved to the Banner Management team — the zero-to-one product he had co-founded as a 3-developer team. From 2024 to early 2026 he served in parallel as a Technical Advisor, coaching dozens of developers and leading 100+ enterprise customer meetings.",
        lead2:
          "Off the clock, he is a professional musician with a stage career that ranges across corporate halls (ABB, Siemens), Istanbul cultural centers (Kartal Bülent Ecevit, Akatlar, Cemal Reşit Rey, among others), and various civic and social associations. The duality — code and notes — leaks into the work: Koma, a React Native app, teaches sense of rhythm with a custom tempo engine; God Tier Code Reviewer, an open-source VS Code extension, automates JavaScript code review against the Gemini API; and maitrics, a native macOS menu bar app, visualizes Claude Code CLI usage in real time.",
        pullquote: '“If you\'re going to make something, make it rhythmically — or don\'t.”',
        sidebar: [
          { label: 'NOW', value: 'Insider One · 2023→' },
          { label: 'CITY', value: 'Istanbul, TR' },
          { label: 'LANGS', value: 'JS · Go · PHP · Python' },
          { label: 'STACK', value: 'Vue · React · K8s' },
        ],
        secondary: {
          title: 'ENGINEER, AT WORK',
          body:
            "Three years on the dedicated engineering team for Singapore Airlines, shipping personalization to 20M+ annual fliers. Co-founded a 3-developer team that launched a zero-to-one Banner Management product on micro-frontend + micro-backend architecture; built the full delivery stack from scratch — Kubernetes on AWS EKS, Helm, Terraform, Docker, CI/CD. Backend microservices in Go and PHP/Laravel, backed by MySQL and Redis. Sustained a 'Success' rating every month across the full tenure.",
        },
      },
      {
        title: 'TECHNOLOGY',
        slug: 'B1',
        kind: 'tech',
        headline: 'FIVE PROJECTS, ONE THROUGH-LINE: BUILD IT, SHIP IT, MEASURE IT',
        kicker: 'TECH · DEV TOOLS · MOBILE',
        subhead:
          'From a native macOS menu bar app for Claude Code analytics to a Turkish music rhythm trainer — selected personal projects from the lab',
      },
      {
        title: 'ARTS & CULTURE',
        slug: 'C1',
        kind: 'arts',
        headline: "OFF THE CLOCK: AN ENGINEER'S STAGE LIFE",
        kicker: 'ARTS · MUSIC · CULTURE',
        subhead:
          "ABB, Siemens, civic associations — the developer's other career, in his own words",
      },
      {
        title: 'ACADEMIA & CLASSIFIEDS',
        slug: 'D1',
        kind: 'academia',
        headline: 'TWO UNIVERSITIES, ONE CURRICULUM VITAE',
        kicker: 'EDUCATION · SKILLS · CONTACT',
        subhead:
          'Engineering and IT, an AWS Game Day win, and the open job-board the world calls a contact page',
      },
    ],
  },
  tr: {
    masthead: 'Berke Altıparmak',
    motto: '“Yayımlanmaya Değer Tüm Kodlar”',
    edition: "1.YIL 2014 · İSTANBUL'DA BASILMIŞTIR",
    vol: 'CİLT III · SAYI 01',
    weather: { city: 'İSTANBUL', temp: '17°', cond: 'Parçalı bulutlu', sun: '06:48 / 19:42' },
    market: [
      ['INSIDER ONE', '↑ üretimde'],
      ['MÜZİK', '↑ sahnede'],
      ['AWS', '↑ birinci'],
      ['KAHVE', '↑ stabil'],
    ],
    pages: [
      {
        title: 'MANŞET',
        slug: 'A1',
        kind: 'front',
        headline: 'INSIDER ONE DEVELOPER GÜNDÜZ KOD YAZAR; AKŞAM SAHNEYE ÇIKAR',
        kicker: '★ MANŞET ★',
        subhead:
          "Beykent Üniversitesi Bilgisayar Mühendisi, Yıldız Teknik Üniversitesi MSc — Insider One'da Software Developer, Singapore Airlines dedike ekibinde 3+ yıl",
        byline: 'GAZETE EKİBİ',
        lead:
          "İSTANBUL — Berke Altıparmak, 2.000+ kurumsal markaya hizmet veren AI-native growth management SaaS platformu Insider One'da full-stack Yazılım Geliştirici. Ocak 2023'te Insider'a katıldı; Singapore Airlines'a (yıllık 20M+ yolcu) adanmış mühendislik ekibinde 3+ yıl geçirdi; JavaScript, Go ve PHP ile personalization kampanyaları ve dahili sistemler üretti. Mart 2026'da, 3 kişilik bir ekiple sıfırdan kurduğu Banner Management ürününün tam zamanlı ekibine geçti. 2024'ten 2026 başına kadar paralelde Teknik Danışmanlık yaptı; düzinelerce geliştiriciye mentorluk yaptı, 100+ kurumsal müşteri toplantısı yönetti.",
        lead2:
          "Mesleki yaşamı dışında profesyonel müzisyen olarak kurumsal salonlardan (ABB, Siemens) İstanbul kültür merkezlerine (Kartal Bülent Ecevit, Akatlar, Cemal Reşit Rey ve diğerleri), sivil ve sosyal derneklere uzanan bir sahne kariyeri var. Bu ikilik — kod ve nota — yaptığı her şeye sızıyor: Koma adlı React Native uygulaması özel tempo motoruyla ritim duygusu öğretiyor; açık kaynak VS Code uzantısı God Tier Code Reviewer, Gemini API ile JS code review'ı otomatize ediyor; native macOS menü çubuğu uygulaması maitrics ise Claude Code CLI kullanımını gerçek zamanlı görselleştiriyor.",
        pullquote: '“Bir şey yapacaksan, ya ritmiyle yap, ya hiç yapma.”',
        sidebar: [
          { label: 'ŞU AN', value: 'Insider One · 2023→' },
          { label: 'ŞEHİR', value: 'İstanbul, TR' },
          { label: 'DİLLER', value: 'JS · Go · PHP · Python' },
          { label: 'STACK', value: 'Vue · React · K8s' },
        ],
        secondary: {
          title: 'MÜHENDİS, İŞ BAŞINDA',
          body:
            "Singapore Airlines için kurulan dedike mühendislik ekibinde üç yıl; yıllık 20M+ yolcuya yönelik kişiselleştirme uygulamaları geliştirildi. 3 kişilik bir ekiple, micro-frontend ve micro-backend mimarisi üzerine sıfırdan inşa edilen Banner Management ürününün kurucu geliştiricilerinden. Tüm dağıtım altyapısı baştan kuruldu: Kubernetes (AWS EKS), Helm, Terraform, Docker, CI/CD. Backend servisleri Go ve PHP/Laravel ile yazıldı; arka uçta MySQL ve Redis. Görev süresi boyunca her ay \"Success\" performans notu.",
        },
      },
      {
        title: 'TEKNOLOJİ',
        slug: 'B1',
        kind: 'tech',
        headline: 'BEŞ PROJE, TEK İPLİK: YAP, ÇIKAR, ÖLÇ',
        kicker: 'TEKNOLOJİ · GELİŞTİRİCİ ARAÇLARI · MOBİL',
        subhead:
          "Claude Code analitiği için bir native macOS menü çubuğu uygulamasından Türk müziği ritim çalıştırıcısına — laboratuvardan seçme projeler",
      },
      {
        title: 'SANAT VE KÜLTÜR',
        slug: 'C1',
        kind: 'arts',
        headline: 'MESAİ DIŞI: BİR MÜHENDİSİN SAHNE HAYATI',
        kicker: 'SANAT · MÜZİK · KÜLTÜR',
        subhead: "ABB, Siemens, sivil dernekler — geliştiricinin diğer kariyeri, kendi sözcükleriyle",
      },
      {
        title: 'EĞİTİM VE İLANLAR',
        slug: 'D1',
        kind: 'academia',
        headline: 'İKİ ÜNİVERSİTE, TEK ÖZGEÇMİŞ',
        kicker: 'EĞİTİM · YETKİNLİK · İLETİŞİM',
        subhead:
          'Mühendislik ve bilişim, bir AWS Game Day birinciliği — ve dünyanın iletişim sayfası dediği o açık iş ilanı',
      },
    ],
  },
}

export default news
