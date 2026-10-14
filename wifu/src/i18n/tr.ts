// Türkçe metinler (ana dil). Yapısı en.ts ile aynı olmalı.
// "TODO" ile başlayan her metin sayfada kesikli çerçeveli bir yer tutucu olarak görünür.
import type { Dict } from './en';

const tr: Dict = {
  lang: 'tr',
  langName: 'Türkçe',
  ogLocale: 'tr_TR',

  meta: {
    home: {
      title: 'Wifu — düğün sitesi ve online davetiye',
      description:
        'Düğün sitenizi ve online davetiyelerinizi bir akşamda hazırlayın, bağlantıyla gönderin; katılım yanıtlarını, +1’leri ve menü tercihlerini tek yerde toplayın.',
    },
    demo: {
      title: 'Örnek düğün sitesi — Wifu',
      description: 'Wifu ile çiftlerin hazırladığı düğün sitesine bir örnek: hikâye, program, mekân, kıyafet kuralı, sorular ve LCV.',
    },
    invite: {
      title: 'Davetlisiniz — Mira & Daniel (örnek)',
      description: 'Wifu ile hazırlanmış örnek bir online davetiye. Zarfı açın, bir dakikada yanıt verin.',
    },
    pricing: {
      title: 'Fiyatlar — Wifu',
      description: 'Wifu’da neler ücretsiz, neler ücretli: düğün sitesi, davetiyeler, LCV ve misafir listesi.',
    },
    privacy: { title: 'Gizlilik politikası — Wifu', description: 'Wifu sizin ve misafirlerinizin verilerini nasıl işler.' },
    terms: { title: 'Kullanım koşulları — Wifu', description: 'Wifu hizmetinin kullanım koşulları.' },
    thanks: { title: 'Teşekkürler — Wifu', description: 'Mesajınız gönderildi.' },
    notFound: { title: 'Sayfa bulunamadı — Wifu', description: 'Böyle bir sayfa yok.' },
  },

  nav: {
    how: 'Nasıl çalışır',
    website: 'Düğün sitesi',
    invites: 'Davetiyeler',
    rsvp: 'LCV',
    pricing: 'Fiyatlar',
    faq: 'Sorular',
    demo: 'Örneği gör',
    create: 'Sitenizi oluşturun',
    menu: 'Menü',
    close: 'Menüyü kapat',
    skip: 'İçeriğe geç',
    home: 'Wifu ana sayfa',
    language: 'Dil',
  },

  todoLabel: 'doldurulacak',

  hero: {
    title: 'Düğün siteniz ve davetiyeleriniz',
    titleAccent: 'bir akşamda hazır',
    lead:
      'Misafirlerinizin bilmesi gereken her şey tek bir bağlantıda: program, mekân, kıyafet kuralı. Telefonlarından yanıt verirler; siz de kimin geldiğini, kimin +1 getirdiğini ve kimin et yemediğini görürsünüz.',
    ctaPrimary: 'Sitenizi oluşturun',
    ctaSecondary: 'Örneği gör',
    note: 'Misafirlerin uygulama indirmesine ya da üye olmasına gerek yok.',
    photoAlt: 'Dışarıda birlikte gülen bir çift',
    tag: 'Örnek: Mira ve Daniel’in sitesi',
  },

  how: {
    eyebrow: 'Nasıl çalışır',
    title: 'Boş sayfadan “geliyoruz!” yanıtına dört adımda',
    steps: [
      { title: 'Tasarım seçin', text: 'Size yakışan bir şablonla başlayın. Renkleri ve yazı tiplerini istediğiniz zaman değiştirebilirsiniz.' },
      { title: 'Detayları ekleyin', text: 'Tarih, mekân, program, sizden birkaç cümle. Bildiklerinizi şimdi, gerisini sonra yazın.' },
      { title: 'Davetiyeyi gönderin', text: 'WhatsApp, Telegram, e-posta ya da basılı davetiyedeki QR kod için tek bağlantı.' },
      { title: 'Yanıtları takip edin', text: 'Yanıtlar geldikçe tek listede toplanır. Tablo yok, grup sohbetinde kovalamaca yok.' },
    ],
  },

  website: {
    eyebrow: 'Düğün sitesi',
    title: 'Misafirlerin size sorduğu her şey tek sayfada',
    lead: '“Saat kaçta başlıyor?” sorusunu kırk kez yanıtlamak yerine bağlantıyı gönderin. Yalnızca ihtiyacınız olan bölümleri gösterin.',
    features: [
      { icon: 'heart', title: 'Hikâyeniz', text: 'Nasıl tanıştığınızı kendi sözlerinizle anlatın. İki satır ya da iki sayfa.' },
      { icon: 'clock', title: 'Günün programı', text: 'Nikâh, yemek, ilk dans, eve dönüş servisi.' },
      { icon: 'map-pin', title: 'Harita ve yol tarifi', text: 'Mekân haritada, otopark ve ulaşım bilgisiyle.' },
      { icon: 'bed', title: 'Nerede kalınır', text: 'Yakındaki oteller, bağlantıları ve varsa misafir indirimi.' },
      { icon: 'shirt', title: 'Kıyafet kuralı', text: 'Kısa bir not ve birkaç örnek; kimse tahmin etmek zorunda kalmasın.' },
      { icon: 'help', title: 'Misafir soruları', text: 'Çocuklar, hediyeler, törende fotoğraf. Herkese bir kez yanıt.' },
    ],
    link: 'Örnek siteye bakın',
    mockupAlt: 'Dizüstü bilgisayar ekranında bir düğün sitesi',
  },

  invites: {
    eyebrow: 'Davetiyeler ve Save the Date',
    title: 'Gerçekten açılan bir davetiye',
    lead: 'Bir tasarım seçin, isimlerinizi ve tarihi ekleyin, gönderin. Misafirler davetiyeyi bir zarf gibi açar ve hemen yanıt verir.',
    designs: [
      { name: 'Keten', alt: '“Keten” davetiye tasarımı: açık renk kâğıt, sade tırnaklı yazı' },
      { name: 'Bahçe', alt: '“Bahçe” davetiye tasarımı: adaçayı yeşili zemin ve yapraklar' },
      { name: 'Şehir', alt: '“Şehir” davetiye tasarımı: koyu lacivert zemin, iri yazı' },
      { name: 'Terakota', alt: '“Terakota” davetiye tasarımı: sıcak kil tonları' },
      { name: 'Save the Date', alt: 'Büyük tarihli Save the Date kartı' },
      { name: 'Kartpostal', alt: 'Kartpostal şeklinde davetiye' },
    ],
    designsNote: '',
    sendTitle: 'Misafirlerinizin mesaj okuduğu yere gönderin',
    channels: ['Herhangi bir mesajlaşma uygulamasında bağlantı', 'E-posta', 'Basılı davetiye için QR kod'],
    link: 'Örnek davetiyeyi açın',
  },

  rsvp: {
    eyebrow: 'Akıllı LCV',
    title: 'Misafir “evet”e dokunur. Siz tüm tabloyu görürsünüz.',
    guestTitle: 'Misafiriniz ne yapar',
    guestSteps: [
      'Bağlantıyı açar, üye olmaz',
      'Gelip gelmeyeceğini ve kiminle geleceğini yazar',
      'Menü seçer, alerjilerini belirtir',
      'Servis isteyip istemediğini işaretler',
    ],
    coupleTitle: 'Siz ne görürsünüz',
    coupleText:
      'Canlı bir özet: kim geliyor, kim gelmiyor, kim henüz yanıt vermedi. Catering için menü sayıları, şoför için servis listesi.',
    link: 'LCV formunu deneyin',
    phoneAlt: 'Telefonda LCV formu',
    dashboardAlt: 'Çift için LCV özeti',
  },

  guests: {
    eyebrow: 'Misafir listesi ve adresler',
    title: 'Adresleri özel mesajlarla toplamaya son',
    lead: 'Tek bir bağlantı gönderin. Misafirler adını, adresini ve telefonunu kendisi yazar. Hepsi misafir listenize düşer; basılı davetiye ya da teşekkür kartı için hazır.',
    points: ['Tüm aile grubu için tek bağlantı', 'Misafirler yazım hatalarını kendisi düzeltir', 'Listeyi istediğiniz zaman dışa aktarın'],
    formTitle: 'Davetiyenizi nereye gönderelim?',
    formFields: ['Ad soyad', 'Adres', 'Telefon'],
    formButton: 'Kaydet',
  },

  forGuests: {
    eyebrow: 'Misafirleriniz için',
    title: 'Babaanne için kolay, arkadaşlar için hızlı',
    items: [
      { title: 'Üyelik yok', text: 'Misafir bağlantıyı açar ve yanıt verir. Hesap yok, şifre yok.' },
      { title: 'Telefon için tasarlandı', text: 'Davetiyeler çoğunlukla yolda açılır. Sayfalar tam da bunun için hazırlandı.' },
      { title: 'Her şey tek yerde', text: 'Adres, saat, kıyafet kuralı. Düğünden bir gün önce aynı bağlantıyı yeniden açarlar.' },
    ],
  },

  pricingTeaser: {
    eyebrow: 'Fiyatlar',
    title: 'Ücretsiz başlayın, beğenince ödeyin',
    lead: 'Düğün sitesi, davetiye ve 50 misafire kadar LCV ücretsiz. Premium, düğün başına tek seferlik bir ödeme; abonelik yok.',
    link: 'Fiyatlara bakın',
  },

  faq: {
    eyebrow: 'Sorular',
    title: 'Çiftlerin bize sorduğu sorular',
    items: [
      { q: "Ücreti ne kadar?", a: "Düğün sitesi, online davetiye ve 50 misafire kadar LCV ücretsizdir. Sınırsız misafir, tüm tasarımlar ve kendi alan adınız için Premium paket düğün başına tek seferlik 1.499 ₺’dir." },
      { q: "Kendi alan adımı kullanabilir miyim?", a: "Evet, Premium pakette. mira-ve-daniel.com gibi kendi alan adınızı bağlayabilirsiniz; bağlantıyı birlikte kuruyoruz. Ücretsiz pakette siteniz wifupad.com altında yayınlanır." },
      { q: "Kaç misafir davet edebilirim?", a: "Ücretsiz pakette 50 misafire kadar, Premium’da sınırsız. +1’ler ayrı misafir olarak sayılmaz." },
      { q: "Davetiye hangi dillerde olabilir?", a: "Türkçe ve İngilizce. Bir site iki dilli olabilir: misafir tek dokunuşla dili değiştirir. Yurt dışından gelen misafirleriniz için kullanışlı." },
      { q: "Siteyi yabancılardan gizleyebilir miyim?", a: "Evet. Her site varsayılan olarak arama motorlarından gizlidir ve yalnızca bağlantıyı bilenler açabilir. Premium’da siteye şifre de koyabilirsiniz." },
      { q: "Düğünden sonra ne olur?", a: "Siteniz düğün tarihinden sonra 12 ay yayında kalır; isterseniz bir teşekkür sayfasına dönüştürebilirsiniz. Misafir listesini ve tüm yanıtları istediğiniz zaman Excel olarak indirebilirsiniz." },
    ],
  },

  cta: {
    title: 'Hadi bu akşam yapalım',
    lead: 'Önce sorularınız mı var? Bize yazın, gerçek bir insan yanıt verir.',
    primary: 'Sitenizi oluşturun',
    formTitle: 'Bize yazın',
    name: 'Adınız',
    email: 'E-posta',
    message: 'Mesaj',
    messagePlaceholder: 'Düğünümüz…',
    submit: 'Gönder',
    sending: 'Gönderiliyor…',
    success: 'Teşekkürler! En kısa sürede yanıt vereceğiz.',
    error: 'Bir şeyler ters gitti. Lütfen tekrar deneyin ya da bize e-posta gönderin.',
    privacyNote: 'E-posta adresinizi yalnızca size yanıt vermek için kullanırız.',
    mailtoSuccess: 'E-posta uygulamanız mesajınızla açıldı. Göndermek için Gönder’e basmanız yeterli.',
    mailSubject: 'Wifu web sitesinden mesaj',
    orEmail: 'E-postayı mı tercih edersiniz? Yazın:',
  },

  footer: {
    tagline: 'Düğün siteleri, online davetiyeler ve LCV.',
    product: 'Ürün',
    help: 'Yardım',
    contact: 'İletişim',
    legal: 'Yasal',
    privacy: 'Gizlilik politikası',
    terms: 'Kullanım koşulları',
    demoSite: 'Örnek site',
    demoInvite: 'Örnek davetiye',
    rights: 'Tüm hakları saklıdır.',
    follow: 'Bizi takip edin',
    owners: 'Şirket sahipleri',
  },

  mockups: {
    names: 'Mira & Daniel',
    date: '12 Haziran 2027',
    place: 'Eski Değirmen, Garda Gölü',
    nav: ['Hikâye', 'Program', 'Mekân', 'LCV'],
    countdown: '241 gün kaldı',
    rsvpButton: 'Yanıt ver',
    schedule: [
      ['16:00', 'Nikâh'],
      ['17:30', 'Bahçede kokteyl'],
      ['19:00', 'Yemek'],
    ],
    form: {
      title: 'Bize katılır mısınız?',
      yes: 'Seve seve',
      no: 'Maalesef hayır',
      plusOne: '+1',
      meal: 'Menü',
      meals: ['Balık', 'Vejetaryen'],
      shuttle: 'Otelden servis',
      send: 'Yanıtı gönder',
    },
    dashboard: {
      title: 'Yanıtlar',
      coming: 'Geliyor',
      notComing: 'Gelmiyor',
      waiting: 'Bekleniyor',
      meals: 'Menü',
      mealNames: ['Balık', 'Et', 'Vejetaryen'],
      plusOnes: '+1',
      shuttle: 'Servis',
      latest: 'Son yanıtlar',
      rows: [
        ['Ayşe K.', 'Geliyor +1'],
        ['Can ve Elif', 'Geliyor'],
        ['Ahmet amca', 'Bekleniyor'],
      ],
      sample: 'Örnek veri',
    },
  },

  demo: {
    badge: 'Örnek',
    banner: 'Bu bir örnek sitedir. Mira ve Daniel hayalî kişilerdir.',
    bannerCta: 'Kendinizinkini yapın',
    themeLabel: 'Tasarım',
    themes: { minimal: 'Minimal', garden: 'Bahçe', city: 'Şehir' },
    nav: { story: 'Hikâyemiz', schedule: 'Program', venue: 'Mekân', stay: 'Konaklama', dresscode: 'Kıyafet', faq: 'Sorular', rsvp: 'LCV' },
    cover: {
      kicker: 'Evleniyoruz',
      names: 'Mira & Daniel',
      date: '12 Haziran 2027, Cumartesi',
      place: 'Eski Değirmen · Garda Gölü, İtalya',
      photoAlt: 'Mira ve Daniel (örnek fotoğraf)',
    },
    countdown: { title: 'Büyük güne kalan', days: 'gün', hours: 'saat', minutes: 'dakika', done: 'Bugün o gün!' },
    story: {
      title: 'Hikâyemiz',
      paragraphs: [
        'Bir arkadaşımızın doğum gününde tanıştık; ikimiz de orada kimseyi tanımıyorduk. Daniel pastanın son dilimini Mira’ya verdi. Mira, her şeyin o an başladığını söylüyor.',
        'Altı yıl, iki şehir ve çok sabırlı bir kedi sonra, sevdiğimiz herkes için uzun bir akşam yemeği vermeye karar verdik. Siz de davetlisiniz.',
      ],
      photoAlt: 'Yürüyüşte Mira ve Daniel (örnek fotoğraf)',
    },
    schedule: {
      title: 'Günün programı',
      items: [
        { time: '15:30', title: 'Karşılama', text: 'Göl kenarında içecekler.' },
        { time: '16:00', title: 'Nikâh', text: 'Bahçede, kısa ve içten.' },
        { time: '17:00', title: 'Kokteyl', text: 'Fotoğraflar, müzik, limonata.' },
        { time: '19:00', title: 'Yemek', text: 'Ağaçların altında uzun masalar.' },
        { time: '21:30', title: 'Parti', text: '01:00’deki son servise kadar dans.' },
      ],
    },
    venue: {
      title: 'Mekân',
      name: 'Eski Değirmen',
      address: 'Via del Mulino 1, Garda Gölü (hayalî adres)',
      text: 'Değirmenin yanında ücretsiz otopark var. Trenle gelirseniz servis 15:00’te Desenzano istasyonundan kalkıyor.',
      mapLabel: 'Harita yer tutucusu. Gerçek sitede burada etkileşimli bir harita olur.',
      directions: 'Yol tarifi al',
      photoAlt: 'Düğün mekânı (örnek fotoğraf)',
    },
    stay: {
      title: 'Nerede kalınır',
      lead: 'Uygun fiyatlı birkaç oda ayırttık. Rezervasyon yaparken isimlerimizi söyleyin.',
      hotels: [
        { name: 'Hotel Riva', note: '5 dk yürüme · servis durağı' },
        { name: 'Casa Limone B&B', note: 'Arabayla 10 dk · sakin, bahçeli' },
        { name: 'Lakeview Apartments', note: 'Arabayla 15 dk · aileler için uygun' },
      ],
    },
    dresscode: {
      title: 'Kıyafet kuralı',
      text: 'Yaz bahçesi şıklığı. Hafif kumaşlar ve rahat ayakkabılar; nikâh çimlerin üzerinde. Göl kenarındaki akşam için yanınıza bir hırka alın.',
      palette: 'Sevdiğimiz renkler',
    },
    faq: {
      title: 'Sorular',
      items: [
        { q: 'Çocuklarımı getirebilir miyim?', a: 'Elbette. Çocuk masası olacak, yemekten sonra da bir bakıcı ilgilenecek.' },
        { q: 'Hediye konusunda ne yapmalıyım?', a: 'En güzel hediye sizin gelmeniz. Yine de isterseniz girişte kartlar için bir kutu olacak.' },
        { q: 'Törende fotoğraf çekebilir miyim?', a: 'Lütfen tören sırasında telefonları kaldırın. Fotoğrafçımız tüm kareleri paylaşacak.' },
      ],
    },
    rsvp: {
      title: 'Bize katılır mısınız?',
      lead: 'Lütfen 1 Mayıs 2027’ye kadar yanıt verin.',
    },
    footer: 'Wifu ile hazırlandı · bu bir örnektir',
  },

  rsvpForm: {
    name: 'Adınız',
    attending: 'Gelecek misiniz?',
    yes: 'Evet, orada olacağım',
    no: 'Maalesef gelemeyeceğim',
    plusOne: 'Yanımda biri gelecek (+1)',
    plusOneName: 'Eşlik eden kişinin adı',
    meal: 'Menü tercihi',
    meals: ['Balık', 'Et', 'Vejetaryen', 'Vegan'],
    allergies: 'Not ya da alerjiler',
    send: 'Yanıtı gönder',
    sending: 'Gönderiliyor…',
    demoNote: 'Bu bir örnek form; yanıtınız hiçbir yere gönderilmez.',
    thanksTitle: 'Teşekkürler!',
    thanksYes: 'Sizi görmek için sabırsızlanıyoruz.',
    thanksNo: 'Sizi özleyeceğiz. Haber verdiğiniz için teşekkürler.',
    again: 'Yanıtımı değiştir',
    error: 'Bir şeyler ters gitti. Lütfen tekrar deneyin.',
  },

  invite: {
    badge: 'Örnek davetiye',
    open: 'Davetiyeyi aç',
    tapHint: 'Zarfa dokunun',
    to: 'Size ve ailenize',
    kicker: 'Aileleriyle birlikte',
    names: 'Mira & Daniel',
    line: 'sizi düğünlerine davet ediyor',
    date: '12 Haziran 2027, Cumartesi',
    time: 'Nikâh saat 16:00’da',
    place: 'Eski Değirmen · Garda Gölü',
    rsvpBy: 'Lütfen 1 Mayıs 2027’ye kadar yanıt verin',
    rsvp: 'Yanıt ver',
    details: 'Düğün sitesi',
    calendar: 'Takvime ekle',
    rsvpTitle: 'Yanıtınız',
    themeLabel: 'Tasarım',
    madeWith: 'Bu bir örnektir. Kendi davetiyenizi Wifu ile hazırlayın.',
    makeYours: 'Kendinizinkini yapın',
  },

  pricingPage: {
    eyebrow: 'Fiyatlar',
    title: 'Sade fiyatlar',
    lead: 'Ücretsiz başlayın, beğenirseniz Premium’a geçin. Premium düğün başına tek seferlik ödemedir: abonelik ve gizli ücret yok.',
    popular: 'En çok tercih edilen',
    plans: [
      {
        name: 'Ücretsiz',
        price: '0 ₺',
        period: '',
        text: 'Sade bir düğün sitesi ve LCV isteyen çiftler için.',
        features: ['Düğün sitesi', 'Bağlantıyla online davetiye', 'Menü seçimli LCV', '50 misafire kadar'],
        cta: 'Ücretsiz başlayın',
      },
      {
        name: 'Premium',
        price: '1.499 ₺',
        period: 'düğün başına tek seferlik, KDV dahil',
        text: 'Sınırsız misafir, tüm tasarımlar ve kendi alan adını isteyen çiftler için.',
        features: ['Ücretsiz paketteki her şey', 'Sınırsız misafir', 'Tüm premium tasarımlar', 'Kendi alan adı', 'Şifre koruması', 'Save the Date ve adres toplama'],
        cta: 'Premium’u seçin',
      },
    ],
    compareTitle: 'Neler dahil',
    compareHead: ['', 'Ücretsiz', 'Premium'],
    compare: [
      ['Düğün sitesi', true, true],
      ['Online davetiye', true, true],
      ['Akıllı LCV (+1, menü, servis)', true, true],
      ['Misafir sayısı', '50', 'Sınırsız'],
      ['Misafir listesi ve adres toplama', true, true],
      ['Save the Date', false, true],
      ['Premium tasarımlar', false, true],
      ['Kendi alan adı', false, true],
      ['Şifre korumalı site', false, true],
      ['Wifu logosu olmadan', false, true],
    ],
    note: 'Fiyatlar Türk lirası cinsindendir ve KDV dahildir. Premium her düğün için bir kez ödenir.',
    faqTitle: 'Ödemeyle ilgili sorular',
    faq: [
      { q: "Ödemeden önce deneyebilir miyim?", a: "Evet. Ücretsiz paket süresiz; sitenizi hazırlayıp misafirlerinize gönderebilirsiniz. Premium’a geçtiğinizde hazırladığınız her şey olduğu gibi kalır." },
      { q: "Nasıl ödeme yaparım?", a: "Kredi veya banka kartıyla, güvenli ödeme altyapısı üzerinden Türk lirası olarak. Fiyatlara KDV dahildir, faturanız e-postanıza gelir." },
      { q: "Para iadesi alabilir miyim?", a: "Ödemeden sonraki 14 gün içinde, davetiyelerinizi henüz göndermediyseniz ücretin tamamını iade ediyoruz. info@wifupad.com adresine yazmanız yeterli." },
    ],
  },

  legal: {
    privacy: {
      title: 'Gizlilik politikası',
      body: [
        { h: "Veri sorumlusu", p: "Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında, veri sorumlusu sıfatıyla WIFU YAZILIM VE ORGANİZASYON HİZMETLERİ A.Ş. (“Wifu”) tarafından hazırlanmıştır. İletişim bilgilerimiz bu sayfanın altındadır." },
        { h: "Hangi verileri topluyoruz", p: "Çiftlerden: ad soyad, e-posta, telefon, düğün tarihi ve mekânı, siteye eklenen metin ve fotoğraflar. Misafirlerden: LCV formunda verdikleri ad, katılım durumu, +1 bilgisi, menü tercihi, alerji notları, servis talebi ve adres toplama formunda verdikleri adres ve telefon. Ayrıca sitenin çalışması için gerekli teknik veriler (IP adresi, tarayıcı bilgisi, çerezler)." },
        { h: "Verileri neden işliyoruz", p: "Hizmeti sunmak (düğün sitesi, davetiye ve LCV), çiftin misafir yanıtlarını görmesini sağlamak, ödeme ve faturalandırma, destek taleplerine yanıt vermek, güvenliği sağlamak ve yasal yükümlülükleri yerine getirmek için. Hukuki sebeplerimiz: sözleşmenin kurulması ve ifası, hukuki yükümlülük ve meşru menfaat (KVKK m. 5/2)." },
        { h: "Misafir verileri", p: "Misafirlerin LCV ve adres formlarında verdiği bilgiler yalnızca o düğünün çiftiyle paylaşılır. Bu verileri pazarlama amacıyla kullanmaz, satmaz ve kiralamayız." },
        { h: "Kimlerle paylaşıyoruz", p: "Yalnızca hizmeti sunmak için çalıştığımız hizmet sağlayıcılarla (barındırma, e-posta gönderimi, ödeme altyapısı) ve yasal olarak zorunlu olduğunda yetkili kurumlarla. Bazı sağlayıcıların sunucuları yurt dışında olabilir; bu durumda KVKK m. 9’daki şartlara uyarız." },
        { h: "Ne kadar saklıyoruz", p: "Site ve misafir verileri, düğün tarihinden sonra 12 ay saklanır, ardından silinir veya anonim hâle getirilir. Çift hesabını daha önce silerse veriler 30 gün içinde silinir. Fatura kayıtları yasal süre boyunca (10 yıl) saklanır." },
        { h: "Haklarınız", p: "KVKK m. 11 uyarınca verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme, itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz. Başvurularınızı info@wifupad.com adresine iletebilirsiniz; en geç 30 gün içinde yanıt veririz." },
        { h: "Çerezler", p: "Sitenin çalışması için zorunlu çerezler ve tercihlerinizi (ör. seçtiğiniz tasarım) hatırlamak için tarayıcı depolaması kullanırız. Reklam çerezi kullanmayız." },
      ],
    },
    terms: {
      title: 'Kullanım koşulları',
      body: [
        { h: "Taraflar ve kapsam", p: "Bu koşullar, WIFU YAZILIM VE ORGANİZASYON HİZMETLERİ A.Ş. (“Wifu”) ile wifupad.com üzerinden düğün sitesi, online davetiye ve LCV hizmetlerini kullanan kişiler (“Kullanıcı”) arasındaki ilişkiyi düzenler. Hizmeti kullanarak bu koşulları kabul etmiş olursunuz." },
        { h: "Hesap ve içerik", p: "Hesabınızın güvenliğinden siz sorumlusunuz. Sitenize eklediğiniz metin, fotoğraf ve misafir bilgileri size aittir; bunları yalnızca hizmeti sunmak için kullanırız. Eklediğiniz içeriğin üçüncü kişilerin haklarını ihlal etmediğinden ve misafir bilgilerini paylaşma izniniz olduğundan siz sorumlusunuz." },
        { h: "Yasak kullanım", p: "Hizmet; yasa dışı, yanıltıcı, hakaret içeren ya da başkalarının haklarını ihlal eden içerik yayınlamak, istenmeyen toplu mesaj göndermek veya sistemin güvenliğini bozmak için kullanılamaz. Bu durumda hesabı askıya alma hakkımız saklıdır." },
        { h: "Ücretler ve ödeme", p: "Ücretsiz paket ücretsizdir. Premium paket düğün başına tek seferlik ödemedir; güncel fiyat fiyatlar sayfasında yer alır ve KDV dahildir. Ödemeden sonraki 14 gün içinde, davetiyeler henüz gönderilmediyse ücretin tamamı iade edilir." },
        { h: "Hizmetin sürekliliği", p: "Hizmeti kesintisiz sunmak için çalışırız, ancak bakım veya teknik arızalar nedeniyle kısa süreli kesintiler olabilir. Önemli değişiklikleri önceden e-postayla bildiririz." },
        { h: "Sorumluluğun sınırı", p: "Wifu, kullanıcıların eklediği içerikten ve misafirlerin verdiği yanıtların doğruluğundan sorumlu değildir. Yasaların izin verdiği ölçüde sorumluluğumuz, ilgili düğün için ödenen ücretle sınırlıdır." },
        { h: "Değişiklikler ve uygulanacak hukuk", p: "Bu koşulları güncelleyebiliriz; güncel metin her zaman bu sayfadadır. Uyuşmazlıklarda Türk hukuku uygulanır ve İstanbul (Anadolu) mahkemeleri ile icra daireleri yetkilidir. Tüketiciler, tüketici hakem heyetlerine ve tüketici mahkemelerine başvurma hakkına sahiptir." },
      ],
    },
    company: 'Hizmet sağlayıcı',
    owners: 'Şirket sahipleri',
    address: 'Adres',
    email: 'E-posta',
    phone: 'Telefon',
    updated: 'Son güncelleme: 14 Ekim 2026',
  },

  thanks: {
    title: 'Teşekkürler!',
    text: 'Mesajınız yola çıktı. Genellikle 1 iş günü içinde yanıt veririz.',
    back: 'Ana sayfaya dön',
  },

  notFound: {
    title: 'Bu sayfa düğüne giderken yolda kayboldu',
    text: 'Bağlantı eski ya da hatalı yazılmış olabilir.',
    back: 'Ana sayfaya dön',
  },
};

export default tr;
