/**
 * Single source of truth for all RAM NAAM landing-page copy.
 * English-primary with Hindi / Sanskrit devotional accents, per the
 * brand voice: reverent, warm, never pressuring. Built for elders & children.
 */

export const NAV_LINKS = [
  { label: 'Vision', hi: 'दृष्टि', href: '#vision' },
  { label: 'How to Play', hi: 'कैसे खेलें', href: '#how' },
  { label: 'Sacred Journey', hi: 'पवित्र यात्रा', href: '#journey' },
  { label: 'Milestones', hi: 'पड़ाव', href: '#milestones' },
  { label: 'FAQ', hi: 'प्रश्न', href: '#faq' },
];

/** Names that scroll in the sacred marquee band (Shaktipeethas + Jyotirlingas). */
export const SACRED_NAMES = [
  'Kamakhya',
  'Vaishno Devi',
  'Jwala Ji',
  'Kalighat',
  'Hinglaj',
  'Somnath',
  'Mahakaleshwar',
  'Kashi Vishwanath',
  'Kedarnath',
  'Rameshwaram',
  'Tripura Sundari',
  'Sharda Peeth',
  'Mangala Gauri',
  'Baidyanath',
  'Grishneshwar',
];

export const TRUST_STATS = [
  { value: 108, suffix: '', label: 'Shaktipeethas', hi: 'शक्तिपीठ' },
  { value: 12, suffix: '', label: 'Jyotirlingas', hi: 'ज्योतिर्लिंग' },
  { value: 0, prefix: '₹', suffix: '', label: 'Forever Free', hi: 'सदा निःशुल्क', isFree: true },
  { value: 100, suffix: '%', label: 'Made for Families', hi: 'परिवार के लिए' },
];

export const HOW_STEPS = [
  {
    n: 1,
    icon: '🔘',
    title: 'Tap the RAM Button',
    hi: 'राम बटन दबाएँ',
    body: 'Each gentle tap chants one Ram Naam — just like moving a single bead on your mala. Your count never resets; it grows forever.',
  },
  {
    n: 2,
    icon: '🕉️',
    title: 'Hanuman Ji Takes Flight',
    hi: 'हनुमान जी उड़ान भरें',
    body: 'Your devotion lifts Hanuman Ji higher through a calm, beautiful sky. No timers, no pressure — only the rhythm of the holy name.',
  },
  {
    n: 3,
    icon: '🛕',
    title: 'Awaken Sacred Sites',
    hi: 'पवित्र स्थल जगाएँ',
    body: 'As your chants accumulate, you unlock detailed information about all 108 Shaktipeethas & 12 Jyotirlingas, one sacred landmark at a time.',
  },
];

export const SACRED_POINTS = [
  {
    icon: '🚩',
    title: '108 Shaktipeethas & 12 Jyotirlingas',
    body: 'Every chant you complete helps unlock deep, detailed information about these iconic spiritual landmarks of India.',
  },
  {
    icon: '📖',
    title: 'Enhance Your Knowledge',
    body: 'Learn the history, significance, and proper information of all 108 Shaktipeethas and 12 Jyotirlingas as you advance on your journey.',
  },
  {
    icon: '✨',
    title: 'Elevate Your Journey',
    body: 'Seamlessly combine your spiritual growth with cultural education — bringing ancient wisdom into modern, everyday devotion.',
  },
];

export const BADGES = [
  { count: 108, icon: '🙏', name: '108 Ram Badge', toast: '108 राम जप पूरे! पवित्र माला पूर्ण!' },
  { count: 1008, icon: '🔱', name: 'Hanuman Bhakt', toast: '1008 राम जप! हनुमान भक्त!' },
  { count: 5000, icon: '🌟', name: 'Ram Sevak', toast: '5000 राम जप! राम सेवक!' },
  { count: 11000, icon: '⚡', name: 'Sankat Mochan', toast: '11000 राम जप! संकट मोचन!' },
  { count: 21000, icon: '🎊', name: 'Ram Leela', toast: '21000 राम जप! राम लीला!' },
  { count: 51000, icon: '🛕', name: 'Shakti Yatri', toast: '51000 राम जप! सभी शक्ति पीठ धन्य!' },
  { count: 108000, icon: '✨', name: 'Maha Bhakt', toast: 'एक लाख से अधिक! महा भक्त!' },
];

export const BENEFITS = [
  {
    icon: '🧠',
    title: 'Deeper Clarity',
    body: 'Chanting brings a sense of stillness and focus to a noisy mind, gently easing distraction and restlessness.',
  },
  {
    icon: '🎯',
    title: 'Better Decision-Making',
    body: 'A calm mind leads to sharper insights, helping you navigate the choices and challenges of day-to-day life.',
  },
  {
    icon: '🕊️',
    title: 'Inner Peace',
    body: 'Experience the same grounding peace our ancestors felt with their mala — right from your modern device.',
  },
];

export const ELDER_FEATURES = [
  { icon: '🔠', title: 'Big buttons, big text', body: 'Large tap targets and 18px+ type — easy to see and easy to press.' },
  { icon: '🌸', title: 'No losing — only devotion', body: 'A gentle "rest" message instead of "game over". Never punishing.' },
  { icon: '📿', title: 'Your chants never reset', body: 'Every Ram Naam is counted forever, accumulating like beads on a mala.' },
  { icon: '🤝', title: 'Stays logged in', body: '"Keep me logged in" stays on, so elders never get locked out.' },
  { icon: '🐢', title: 'Slow, forgiving pace', body: 'Wide gaps, no countdown timers, no pressure mechanics of any kind.' },
  { icon: '🎁', title: 'Free · No ads · Offline', body: 'Completely free, no advertisements, and playable even without internet.' },
];

export const FAQS = [
  {
    question: 'What is the Ram Naam Chanting Game?',
    answer:
      'The Ram Naam Chanting Game is a mobile-friendly digital experience created by Astroite Gaming. It transforms the spiritual practice of reciting Ram Naam into an interactive game that helps users build a devotional habit, find peace, and discover sacred Indian geography.',
  },
  {
    question: "How does the game help you learn about India's sacred landmarks?",
    answer:
      "As you progress and complete chants in the game, you unlock historical facts, significance, and detailed information about India's 108 Shaktipeethas and 12 Jyotirlingas, seamlessly merging spiritual growth with cultural education.",
  },
  {
    question: 'What are the main benefits of chanting Ram Naam?',
    answer:
      'Chanting Ram Naam brings deeper mental clarity by calming a noisy mind, improves decision-making by grounding your thoughts, and delivers the same inner peace our grandparents experienced — right on your modern digital device.',
  },
  {
    question: 'Is the game free? Are there any ads?',
    answer:
      'Yes — the Ram Naam Chanting Game is completely free, forever. There are no advertisements and nothing to buy. It is a devotional offering, made to be accessible to everyone.',
  },
  {
    question: 'Do my chants ever reset?',
    answer:
      'Never. Just like the beads on a traditional Beeds Mala accumulate over a lifetime of devotion, your Ram Naam count only ever grows. Every tap is preserved forever.',
  },
  {
    question: 'Is it easy for elderly people and children to use?',
    answer:
      'Absolutely — elders and children are our primary users. The game uses big buttons, large text, gentle vibration feedback, a slow forgiving pace, and a calm "rest" message instead of any "game over", so it never feels like failure.',
  },
  {
    question: 'Why did Astroite Gaming create this devotional game?',
    answer:
      'Astroite Gaming wanted to preserve traditional practices like using a Beeds Mala. By introducing a modern, educational gaming solution, they bridged the gap between ancient roots and modern vibes — making devotion accessible and engaging for all generations.',
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Our Vision', href: '#vision' },
      { label: 'How to Play', href: '#how' },
      { label: 'Sacred Journey', href: '#journey' },
      { label: 'Milestones', href: '#milestones' },
    ],
  },
  {
    title: 'Devotion',
    links: [
      { label: 'Why Chant Ram Naam', href: '#benefits' },
      { label: 'Made for Elders', href: '#elders' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Play Portal',
    links: [
      { label: 'Game Login →', href: 'https://ramnaam.astroite.com/login', accent: true },
      { label: 'llms.txt Index', href: '/llms.txt' },
      { label: 'XML Sitemap', href: '/sitemap.xml' },
    ],
  },
];

export const BLESSING = 'ॐ जय श्री राम · जय माँ शक्ति · ॐ नमः शिवाय ॐ';
