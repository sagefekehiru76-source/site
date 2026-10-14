// English copy (secondary language, served under /en/). Turkish lives in tr.ts and must have the same shape.
// Any string that starts with "TODO" shows on the page as a dashed placeholder chip.

const en = {
  lang: 'en',
  langName: 'English',
  ogLocale: 'en_US',

  meta: {
    home: {
      title: 'Wifu — wedding website and online invitations',
      description:
        'Make a wedding website and online invitations in an evening, send them by link and collect RSVPs, plus-ones and meal choices in one place.',
    },
    demo: {
      title: 'Demo wedding website — Wifu',
      description: 'An example of the wedding website a couple gets with Wifu: story, schedule, venue, dress code, FAQ and RSVP.',
    },
    invite: {
      title: 'You’re invited — Mira & Daniel (demo)',
      description: 'A demo online invitation made with Wifu. Open the envelope and reply in a minute.',
    },
    pricing: {
      title: 'Pricing — Wifu',
      description: 'What is free and what is paid in Wifu: wedding website, invitations, RSVP and guest list.',
    },
    privacy: { title: 'Privacy policy — Wifu', description: 'How Wifu handles your and your guests’ data.' },
    terms: { title: 'Terms of use — Wifu', description: 'Terms of use for the Wifu service.' },
    thanks: { title: 'Thank you — Wifu', description: 'Your message has been sent.' },
    notFound: { title: 'Page not found — Wifu', description: 'This page does not exist.' },
  },

  nav: {
    how: 'How it works',
    website: 'Website',
    invites: 'Invitations',
    rsvp: 'RSVP',
    pricing: 'Pricing',
    faq: 'FAQ',
    demo: 'See a demo',
    create: 'Create your website',
    menu: 'Menu',
    close: 'Close menu',
    skip: 'Skip to content',
    home: 'Wifu home',
    language: 'Language',
  },

  todoLabel: 'to fill in',

  hero: {
    title: 'Your wedding website and invitations',
    titleAccent: 'done in an evening',
    lead:
      'One link for everything your guests need to know: the day, the place, the dress code. They reply from their phone, you see who’s coming, who brings a plus-one and who doesn’t eat meat.',
    ctaPrimary: 'Create your website',
    ctaSecondary: 'See a demo',
    note: 'No app for guests to install, no sign-up for them either.',
    photoAlt: 'A couple laughing together outdoors',
    tag: 'Example: Mira & Daniel’s website',
  },

  how: {
    eyebrow: 'How it works',
    title: 'From blank page to “we’ll be there!” in four steps',
    steps: [
      { title: 'Pick a design', text: 'Start from a template that feels like you. Change colours and fonts later, nothing is locked.' },
      { title: 'Add the details', text: 'Date, venue, schedule, a few words about you two. Fill in what you know now and the rest later.' },
      { title: 'Send the invitation', text: 'One link for WhatsApp, Telegram, email or a QR code on paper cards.' },
      { title: 'Watch the replies', text: 'Answers land in one list as they come in. No spreadsheets, no chasing in group chats.' },
    ],
  },

  website: {
    eyebrow: 'Wedding website',
    title: 'Everything guests ask you about, on one page',
    lead: 'Instead of answering “what time does it start?” forty times, send the link. Show only the sections you need.',
    features: [
      { icon: 'heart', title: 'Your story', text: 'How you met, in your own words. Two lines or two pages.' },
      { icon: 'clock', title: 'Schedule of the day', text: 'Ceremony, dinner, first dance, last bus home.' },
      { icon: 'map-pin', title: 'Map and directions', text: 'The venue on a map, parking and how to get there.' },
      { icon: 'bed', title: 'Where to stay', text: 'Hotels nearby, with links and any group discount.' },
      { icon: 'shirt', title: 'Dress code', text: 'A short note and a couple of examples, so nobody guesses.' },
      { icon: 'help', title: 'Guest FAQ', text: 'Kids, gifts, photos during the ceremony. Answered once.' },
    ],
    link: 'Look at a demo website',
    mockupAlt: 'A wedding website shown on a laptop screen',
  },

  invites: {
    eyebrow: 'Invitations & Save the Date',
    title: 'An invitation people actually open',
    lead: 'Pick a design, add your names and the date, send. Guests open it like an envelope and reply right there.',
    designs: [
      { name: 'Linen', alt: 'Invitation design “Linen”: light paper, simple serif type' },
      { name: 'Garden', alt: 'Invitation design “Garden”: sage background with leaves' },
      { name: 'City', alt: 'Invitation design “City”: dark ink background, bold type' },
      { name: 'Terracotta', alt: 'Invitation design “Terracotta”: warm clay colours' },
      { name: 'Save the Date', alt: 'Save the Date card with a large date' },
      { name: 'Postcard', alt: 'Invitation designed as a travel postcard' },
    ],
    designsNote: '',
    sendTitle: 'Send it the way your guests read messages',
    channels: ['A link in any messenger', 'Email', 'QR code for paper cards'],
    link: 'Open the demo invitation',
  },

  rsvp: {
    eyebrow: 'Smart RSVP',
    title: 'They tap “yes”. You see the whole picture.',
    guestTitle: 'What your guest does',
    guestSteps: [
      'Opens the link, no sign-up',
      'Says if they’re coming and with whom',
      'Picks a meal, mentions allergies',
      'Asks for a seat on the shuttle',
    ],
    coupleTitle: 'What you see',
    coupleText:
      'A live summary: who’s coming, who isn’t, who hasn’t answered yet. Meal counts for the caterer, the shuttle list for the driver.',
    link: 'Try the RSVP form',
    phoneAlt: 'RSVP form on a phone',
    dashboardAlt: 'RSVP summary for the couple',
  },

  guests: {
    eyebrow: 'Guest list & addresses',
    title: 'Stop collecting addresses in direct messages',
    lead: 'Send one link. Guests fill in their own name, address and phone. Everything lands in your guest list, ready for paper invitations or a thank-you card.',
    points: ['One link for the whole family chat', 'Guests correct their own typos', 'Export the list when you need it'],
    formTitle: 'Where should we send your invitation?',
    formFields: ['Name', 'Address', 'Phone'],
    formButton: 'Save',
  },

  forGuests: {
    eyebrow: 'For your guests',
    title: 'Easy for grandma, quick for your friends',
    items: [
      { title: 'No sign-up', text: 'Guests open the link and reply. No account, no password.' },
      { title: 'Made for phones', text: 'Most people open invitations on the way somewhere. The pages are built for that.' },
      { title: 'Everything in one place', text: 'The address, the time, the dress code. They come back to the same link the day before.' },
    ],
  },

  pricingTeaser: {
    eyebrow: 'Pricing',
    title: 'Start free, pay when you know you like it',
    lead: 'The website, invitation and RSVP for up to 50 guests are free. Premium is a one-time payment per wedding, no subscription.',
    link: 'See pricing',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Questions couples ask us',
    items: [
      { q: "How much does it cost?", a: "The wedding website, online invitation and RSVP for up to 50 guests are free. Premium, with unlimited guests, all designs and your own domain, is a one-time ₺1,499 per wedding." },
      { q: "Can I use my own domain?", a: "Yes, on Premium. Connect a domain like mira-and-daniel.com and we’ll help you set it up. On the free plan your website lives under wifupad.com." },
      { q: "How many guests can I invite?", a: "Up to 50 guests on the free plan, unlimited on Premium. Plus-ones don’t count as separate guests." },
      { q: "What languages can the invitation be in?", a: "Turkish and English. One website can have both, and guests switch language with one tap. Handy when friends fly in from abroad." },
      { q: "Can I hide the website from strangers?", a: "Yes. Every website is hidden from search engines by default, so only people with the link can open it. On Premium you can also add a password." },
      { q: "What happens after the wedding?", a: "Your website stays online for 12 months after the date, and you can turn it into a thank-you page. Download the guest list and all replies as a spreadsheet any time." },
    ],
  },

  cta: {
    title: 'Let’s make it this evening',
    lead: 'Questions first? Write to us, a real person answers.',
    primary: 'Create your website',
    formTitle: 'Write to us',
    name: 'Your name',
    email: 'Email',
    message: 'Message',
    messagePlaceholder: 'Our wedding is in…',
    submit: 'Send',
    sending: 'Sending…',
    success: 'Thank you! We’ll write back soon.',
    error: 'Something went wrong. Please try again or email us.',
    privacyNote: 'We only use your email to reply to you.',
    mailtoSuccess: 'Your email app opened with the message ready. Just press Send.',
    mailSubject: 'Message from the Wifu website',
    orEmail: 'Prefer email? Write to',
  },

  footer: {
    tagline: 'Wedding websites, online invitations and RSVPs.',
    product: 'Product',
    help: 'Help',
    contact: 'Contact',
    legal: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    demoSite: 'Demo website',
    demoInvite: 'Demo invitation',
    rights: 'All rights reserved.',
    follow: 'Follow us',
    owners: 'Owners',
  },

  // Strings inside the drawn device mockups on the home page.
  mockups: {
    names: 'Mira & Daniel',
    date: '12 June 2027',
    place: 'Old Mill, Lake Garda',
    nav: ['Story', 'Schedule', 'Venue', 'RSVP'],
    countdown: '241 days to go',
    rsvpButton: 'RSVP',
    schedule: [
      ['16:00', 'Ceremony'],
      ['17:30', 'Drinks in the garden'],
      ['19:00', 'Dinner'],
    ],
    form: {
      title: 'Will you join us?',
      yes: 'Joyfully yes',
      no: 'Sadly no',
      plusOne: 'Plus-one',
      meal: 'Meal',
      meals: ['Fish', 'Vegetarian'],
      shuttle: 'Shuttle from the hotel',
      send: 'Send reply',
    },
    dashboard: {
      title: 'Replies',
      coming: 'Coming',
      notComing: 'Not coming',
      waiting: 'Waiting',
      meals: 'Meals',
      mealNames: ['Fish', 'Meat', 'Vegetarian'],
      plusOnes: 'Plus-ones',
      shuttle: 'Shuttle',
      latest: 'Latest',
      rows: [
        ['Anna K.', 'Coming +1'],
        ['Tom & Lisa', 'Coming'],
        ['Uncle Robert', 'Waiting'],
      ],
      sample: 'Sample data',
    },
  },

  demo: {
    badge: 'Demo',
    banner: 'This is an example website. Mira and Daniel are made up.',
    bannerCta: 'Make yours',
    themeLabel: 'Design',
    themes: { minimal: 'Minimal', garden: 'Garden', city: 'City' },
    nav: { story: 'Our story', schedule: 'Schedule', venue: 'Venue', stay: 'Stay', dresscode: 'Dress code', faq: 'FAQ', rsvp: 'RSVP' },
    cover: {
      kicker: 'We’re getting married',
      names: 'Mira & Daniel',
      date: 'Saturday, 12 June 2027',
      place: 'Old Mill · Lake Garda, Italy',
      photoAlt: 'Mira and Daniel (demo photo)',
    },
    countdown: { title: 'Until the big day', days: 'days', hours: 'hours', minutes: 'minutes', done: 'Today’s the day!' },
    story: {
      title: 'Our story',
      paragraphs: [
        'We met at a friend’s birthday where neither of us knew anyone else. Daniel offered Mira the last slice of cake. Mira says that was the moment.',
        'Six years, two cities and one very patient cat later, we decided to throw a long dinner for everyone we love. You’re invited.',
      ],
      photoAlt: 'Mira and Daniel on a walk (demo photo)',
    },
    schedule: {
      title: 'Schedule of the day',
      items: [
        { time: '15:30', title: 'Arrival', text: 'Welcome drinks by the water.' },
        { time: '16:00', title: 'Ceremony', text: 'Short and sweet, in the garden.' },
        { time: '17:00', title: 'Aperitivo', text: 'Photos, music, lemonade.' },
        { time: '19:00', title: 'Dinner', text: 'Long tables under the trees.' },
        { time: '21:30', title: 'Party', text: 'Dancing until the last shuttle at 01:00.' },
      ],
    },
    venue: {
      title: 'Venue',
      name: 'Old Mill',
      address: 'Via del Mulino 1, Lake Garda (fictional address)',
      text: 'Free parking next to the mill. If you come by train, the shuttle leaves Desenzano station at 15:00.',
      mapLabel: 'Map placeholder. A real website shows an interactive map here.',
      directions: 'Get directions',
      photoAlt: 'The venue (demo photo)',
    },
    stay: {
      title: 'Where to stay',
      lead: 'We booked a few rooms at friendly prices. Mention our names when you call.',
      hotels: [
        { name: 'Hotel Riva', note: '5 min walk · shuttle stop' },
        { name: 'Casa Limone B&B', note: '10 min by car · quiet, with a garden' },
        { name: 'Lakeview Apartments', note: '15 min by car · good for families' },
      ],
    },
    dresscode: {
      title: 'Dress code',
      text: 'Summer garden formal. Light fabrics, comfortable shoes, the ceremony is on grass. Bring a layer for the evening by the lake.',
      palette: 'Colours we love',
    },
    faq: {
      title: 'Questions',
      items: [
        { q: 'Can I bring my kids?', a: 'Of course. There will be a kids’ table and a babysitter after dinner.' },
        { q: 'What about gifts?', a: 'Your presence is the gift. If you insist, there’s a box for cards at the entrance.' },
        { q: 'Can I take photos during the ceremony?', a: 'Please keep phones away during the ceremony. Our photographer will share everything.' },
      ],
    },
    rsvp: {
      title: 'Will you join us?',
      lead: 'Please reply by 1 May 2027.',
    },
    footer: 'Made with Wifu · this is a demo',
  },

  rsvpForm: {
    name: 'Your name',
    attending: 'Will you come?',
    yes: 'Yes, I’ll be there',
    no: 'Sadly, I can’t',
    plusOne: 'I’m bringing a plus-one',
    plusOneName: 'Plus-one’s name',
    meal: 'Meal preference',
    meals: ['Fish', 'Meat', 'Vegetarian', 'Vegan'],
    allergies: 'Comment or allergies',
    send: 'Send reply',
    sending: 'Sending…',
    demoNote: 'This is a demo form; your reply isn’t sent anywhere.',
    thanksTitle: 'Thank you!',
    thanksYes: 'We can’t wait to see you.',
    thanksNo: 'We’ll miss you. Thank you for letting us know.',
    again: 'Change my answer',
    error: 'Something went wrong. Please try again.',
  },

  invite: {
    badge: 'Demo invitation',
    open: 'Open the invitation',
    tapHint: 'Tap the envelope',
    to: 'For you and your family',
    kicker: 'Together with their families',
    names: 'Mira & Daniel',
    line: 'invite you to celebrate their wedding',
    date: 'Saturday, 12 June 2027',
    time: 'Ceremony at 16:00',
    place: 'Old Mill · Lake Garda',
    rsvpBy: 'Kindly reply by 1 May 2027',
    rsvp: 'RSVP',
    details: 'Wedding website',
    calendar: 'Add to calendar',
    rsvpTitle: 'Your reply',
    themeLabel: 'Design',
    madeWith: 'This is a demo. Make your own invitation with Wifu.',
    makeYours: 'Make yours',
  },

  pricingPage: {
    eyebrow: 'Pricing',
    title: 'Simple pricing',
    lead: 'Start free and upgrade if you like it. Premium is a one-time payment per wedding: no subscription, no hidden fees.',
    popular: 'Most chosen',
    plans: [
      {
        name: 'Free',
        price: '₺0',
        period: '',
        text: 'For couples who want a simple wedding website and RSVP.',
        features: ['Wedding website', 'Online invitation by link', 'RSVP with meal choice', 'Up to 50 guests'],
        cta: 'Start free',
      },
      {
        name: 'Premium',
        price: '₺1,499',
        period: 'one-time per wedding, VAT included',
        text: 'For couples who want unlimited guests, every design and their own domain.',
        features: ['Everything in Free', 'Unlimited guests', 'All premium designs', 'Custom domain', 'Password protection', 'Save the Date and address collection'],
        cta: 'Choose Premium',
      },
    ],
    compareTitle: 'What’s included',
    compareHead: ['', 'Free', 'Premium'],
    compare: [
      ['Wedding website', true, true],
      ['Online invitation', true, true],
      ['Smart RSVP (plus-ones, meals, shuttle)', true, true],
      ['Guests', '50', 'Unlimited'],
      ['Guest list and address collection', true, true],
      ['Save the Date', false, true],
      ['Premium designs', false, true],
      ['Custom domain', false, true],
      ['Password-protected website', false, true],
      ['No Wifu branding', false, true],
    ] as [string, boolean | string, boolean | string][],
    note: 'Prices are in Turkish lira and include VAT. Premium is paid once per wedding.',
    faqTitle: 'Questions about payment',
    faq: [
      { q: "Can I try before paying?", a: "Yes. The free plan has no time limit: build your website and send it to guests. When you upgrade to Premium, everything you made stays as it is." },
      { q: "How do I pay?", a: "By credit or debit card through a secure payment provider, in Turkish lira. Prices include VAT and the invoice is emailed to you." },
      { q: "Can I get a refund?", a: "Within 14 days of payment, if you haven’t sent your invitations yet, we refund the full amount. Just write to info@wifupad.com." },
    ],
  },

  legal: {
    privacy: {
      title: 'Privacy policy',
      body: [
        { h: "Data controller", p: "This notice is provided by WIFU YAZILIM VE ORGANİZASYON HİZMETLERİ A.Ş. (“Wifu”) as data controller under the Turkish Personal Data Protection Law No. 6698 (KVKK). Our contact details are at the bottom of this page." },
        { h: "What we collect", p: "From couples: name, email, phone, wedding date and venue, and the text and photos added to the website. From guests: what they enter in the RSVP form (name, attendance, plus-one, meal choice, allergy notes, shuttle request) and in the address form (address and phone). Plus technical data needed to run the site (IP address, browser details, cookies)." },
        { h: "Why we use it", p: "To provide the service (wedding website, invitation and RSVP), to show couples their guests’ replies, for payment and invoicing, to answer support requests, to keep the service secure and to meet legal obligations. Legal grounds: performance of a contract, legal obligation and legitimate interest (KVKK art. 5/2)." },
        { h: "Guest data", p: "What guests enter in the RSVP and address forms is shared only with the couple of that wedding. We never use it for marketing, and we never sell or rent it." },
        { h: "Who we share it with", p: "Only with providers we need to run the service (hosting, email delivery, payments) and with authorities when the law requires it. Some providers may store data outside Türkiye; in that case we follow the conditions of KVKK art. 9." },
        { h: "How long we keep it", p: "Website and guest data are kept for 12 months after the wedding date, then deleted or anonymised. If a couple deletes their account earlier, the data is deleted within 30 days. Invoices are kept for the legally required period (10 years)." },
        { h: "Your rights", p: "Under KVKK art. 11 you can ask whether your data is processed, request information, ask for correction or deletion, object, and claim compensation for damage. Send requests to info@wifupad.com; we reply within 30 days." },
        { h: "Cookies", p: "We use cookies that the site needs to work and browser storage to remember your choices (for example the design you picked). We don’t use advertising cookies." },
      ],
    },
    terms: {
      title: 'Terms of use',
      body: [
        { h: "Parties and scope", p: "These terms govern the relationship between WIFU YAZILIM VE ORGANİZASYON HİZMETLERİ A.Ş. (“Wifu”) and people who use the wedding website, online invitation and RSVP services at wifupad.com (“User”). By using the service you accept these terms." },
        { h: "Account and content", p: "You are responsible for keeping your account secure. The text, photos and guest details you add are yours; we use them only to provide the service. You are responsible for making sure your content doesn’t infringe anyone’s rights and that you may share your guests’ details." },
        { h: "Prohibited use", p: "The service may not be used to publish illegal, misleading or abusive content or content that infringes others’ rights, to send unsolicited bulk messages, or to compromise the security of the system. We may suspend accounts that do." },
        { h: "Fees and payment", p: "The free plan is free. Premium is a one-time payment per wedding; the current price is on the pricing page and includes VAT. Within 14 days of payment, if invitations haven’t been sent yet, the full amount is refunded." },
        { h: "Availability", p: "We work to keep the service running without interruption, but maintenance or technical issues may cause short outages. We announce important changes by email in advance." },
        { h: "Limitation of liability", p: "Wifu is not responsible for content added by users or for the accuracy of guests’ replies. To the extent permitted by law, our liability is limited to the amount paid for the wedding concerned." },
        { h: "Changes and governing law", p: "We may update these terms; the current version is always on this page. Turkish law applies, and the courts and enforcement offices of İstanbul (Anadolu) have jurisdiction. Consumers keep the right to apply to consumer arbitration committees and consumer courts." },
      ],
    },
    company: 'Service provider',
    owners: 'Owners',
    address: 'Address',
    email: 'Email',
    phone: 'Phone',
    updated: 'Last updated: 14 October 2026',
  },

  thanks: {
    title: 'Thank you!',
    text: 'Your message is on its way. We usually reply within one business day.',
    back: 'Back to home',
  },

  notFound: {
    title: 'This page got lost on the way to the party',
    text: 'The link may be old or mistyped.',
    back: 'Back to home',
  },
};

export default en;
export type Dict = typeof en;
