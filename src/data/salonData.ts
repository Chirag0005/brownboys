export interface ServiceItem {
  id: string;
  name: string;
  category: 'haircuts' | 'beard' | 'colouring' | 'facial' | 'treatments';
  categoryLabel: string;
  price: string;
  priceNote?: string;
  description: string;
  popular?: boolean;
  isSpecialist?: boolean;
  bookingUrl?: string;
  duration?: string;
}

export interface SpecialistTreatment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  benefits: string[];
  idealFor: string;
  priceDisplay: string;
}

export const SALON_INFO = {
  name: 'Brown Boys Haircuts Unisex Salon',
  shortName: 'Brown Boys Haircuts',
  category: 'Unisex Hair Salon & Barbershop',
  address: {
    line1: 'Shop 2/53 Station Street',
    suburb: 'Wentworthville',
    state: 'NSW',
    postcode: '2145',
    country: 'Australia',
    full: 'Shop 2/53 Station Street, Wentworthville, NSW 2145, Australia',
  },
  email: 'brownboysprocut@gmail.com',
  bookingUrl: 'https://brown-boys-haircuts-unisex-salon.square.site/',
  instagramUrl: 'https://www.instagram.com/brown_boys_haircuts/',
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Shop+2%2F53+Station+Street+Wentworthville+NSW+2145+Australia',
  hours: [
    { day: 'Monday', opens: '09:00', closes: '20:00', label: '9:00 AM – 8:00 PM' },
    { day: 'Tuesday', opens: '09:00', closes: '20:00', label: '9:00 AM – 8:00 PM' },
    { day: 'Wednesday', opens: '09:00', closes: '20:00', label: '9:00 AM – 8:00 PM' },
    { day: 'Thursday', opens: '09:00', closes: '20:00', label: '9:00 AM – 8:00 PM' },
    { day: 'Friday', opens: '09:00', closes: '20:00', label: '9:00 AM – 8:00 PM' },
    { day: 'Saturday', opens: '09:00', closes: '18:00', label: '9:00 AM – 6:00 PM' },
    { day: 'Sunday', opens: '09:00', closes: '18:00', label: '9:00 AM – 6:00 PM' },
  ],
  pricingDisclaimer:
    "Prices are in AUD. Services marked 'from' may vary depending on hair length, condition, and treatment requirements. Please confirm the final price with the salon before your appointment.",
};

export const SERVICES: ServiceItem[] = [
  // CATEGORY A: HAIRCUTS & FADES
  {
    id: 'skin-fade',
    name: 'Skin Fade',
    category: 'haircuts',
    categoryLabel: 'Haircuts & Fades',
    price: 'AUD $35',
    description: 'Precision zero-to-skin taper or drop fade tailored to your head shape, finished with neck razor taper.',
    popular: true,
  },
  {
    id: 'classic-cut',
    name: 'Classic Cut',
    category: 'haircuts',
    categoryLabel: 'Haircuts & Fades',
    price: 'AUD $25',
    description: 'Timeless scissor and clipper styling with clean perimeter lines, textured top, and natural finish.',
    popular: true,
  },
  {
    id: 'half-fade-zero',
    name: 'Half Fade or Zero Fade',
    category: 'haircuts',
    categoryLabel: 'Haircuts & Fades',
    price: 'AUD $30',
    description: 'Smooth gradient fade blended from zero or half guard into styled crown and fringe lengths.',
  },
  {
    id: 'kids-under-10',
    name: 'Kids Under 10',
    category: 'haircuts',
    categoryLabel: 'Haircuts & Fades',
    price: 'From AUD $22',
    description: 'Patient, gentle, and stylish cuts tailored for children under 10 years old.',
  },
  {
    id: 'buzz-cut',
    name: 'Buzz Cut',
    category: 'haircuts',
    categoryLabel: 'Haircuts & Fades',
    price: 'AUD $20',
    description: 'Uniform clipper cut with defined hairline cleanup and crisp neck edge styling.',
  },
  {
    id: 'senior-citizens',
    name: 'Senior Citizens',
    category: 'haircuts',
    categoryLabel: 'Haircuts & Fades',
    price: 'AUD $20',
    description: 'Traditional, attentive grooming and haircut service at special courtesy pricing for seniors.',
  },

  // CATEGORY B: BEARD & GROOMING
  {
    id: 'beard-trim-razor',
    name: 'Beard Trim with Razor Work',
    category: 'beard',
    categoryLabel: 'Beard & Grooming',
    price: 'AUD $20',
    description: 'Detailed beard sculpting, length reduction, cheek line definition, and straight razor edge finish.',
    popular: true,
  },
  {
    id: 'faded-beard-razor',
    name: 'Faded Beard with Razor Work',
    category: 'beard',
    categoryLabel: 'Beard & Grooming',
    price: 'AUD $25',
    description: 'Seamless taper from sideburns into a structured full beard with hot lather razor line-up.',
    popular: true,
  },

  // CATEGORY C: COLOURING & STYLING
  {
    id: 'colour-service',
    name: 'Colour',
    category: 'colouring',
    categoryLabel: 'Colouring & Styling',
    price: 'From AUD $35',
    priceNote: 'Varies with hair length & tone',
    description: 'Professional grey coverage, solid tone colouring, or subtle highlights for men and women.',
    popular: true,
  },

  // CATEGORY D: FACIAL & PERSONAL GROOMING
  {
    id: 'steam-facial',
    name: 'Steam Facial',
    category: 'facial',
    categoryLabel: 'Facial & Personal Grooming',
    price: 'From AUD $25',
    description: 'Deep pore cleansing, warm steam hydration, exfoliation, and relaxing face massage.',
    popular: true,
  },
  {
    id: 'head-massage',
    name: 'Head Massage',
    category: 'facial',
    categoryLabel: 'Facial & Personal Grooming',
    price: 'AUD $25',
    description: 'Soothing pressure-point scalp massage using nourishing essential tonics to relieve tension.',
  },
  {
    id: 'wax-threading',
    name: 'Wax and Threading',
    category: 'facial',
    categoryLabel: 'Facial & Personal Grooming',
    price: 'From AUD $10',
    description: 'Clean eyebrow shaping, cheek hair cleanup, or ear/nose grooming using thread or gentle wax.',
  },

  // CATEGORY E: SPECIALIST HAIR TREATMENTS
  {
    id: 'treatment-botox-card',
    name: 'Hair Botox Treatment',
    category: 'treatments',
    categoryLabel: 'Specialist Hair Treatments',
    price: 'Enquire for pricing',
    description: 'Deep restorative cuticle filler that reconstructs broken fibres and softens extreme frizz.',
    isSpecialist: true,
    popular: true,
  },
  {
    id: 'treatment-keratin-card',
    name: 'Keratin Treatment',
    category: 'treatments',
    categoryLabel: 'Specialist Hair Treatments',
    price: 'Enquire for pricing',
    description: 'Enriched protein treatment sealing the hair shaft for silky softness and humidity resistance.',
    isSpecialist: true,
  },
  {
    id: 'treatment-nanoplasty-card',
    name: 'Nanoplasty',
    category: 'treatments',
    categoryLabel: 'Specialist Hair Treatments',
    price: 'Enquire for pricing',
    description: 'Organic amino acid smoothing system delivering ultra-straight gloss with long-lasting strength.',
    isSpecialist: true,
  },
  {
    id: 'treatment-straightening-card',
    name: 'Hair Straightening',
    category: 'treatments',
    categoryLabel: 'Specialist Hair Treatments',
    price: 'Enquire for pricing',
    description: 'Permanent rebonding formula designed for sleek, pin-straight hair with everyday styling ease.',
    isSpecialist: true,
  },
  {
    id: 'treatment-perming-card',
    name: 'Hair Perming',
    category: 'treatments',
    categoryLabel: 'Specialist Hair Treatments',
    price: 'Enquire for pricing',
    description: 'Modern body wave or defined curl formulation creating natural bounce and textured volume.',
    isSpecialist: true,
  },
  {
    id: 'treatment-spa-card',
    name: 'Hair Spa',
    category: 'treatments',
    categoryLabel: 'Specialist Hair Treatments',
    price: 'Enquire for pricing',
    description: 'Intensive therapy combining warm therapeutic steam, moisture masks, and deep scalp rejuvenation.',
    isSpecialist: true,
  },
];

export const SPECIALIST_TREATMENTS: SpecialistTreatment[] = [
  {
    id: 'hair-botox',
    name: 'Hair Botox Treatment',
    tagline: 'Deep Cuticle Restoration & Frizz Elimination',
    description:
      'An intensive deep-conditioning and restorative treatment that fills damaged hair cuticles, neutralises unwanted frizz, and restores healthy shine without harsh chemical alterations.',
    image: '/images/treatment-botox.jpg',
    benefits: ['Transforms dry, unmanageable textures', 'Reconstructs porous hair cuticles', 'Delivers vibrant shine & softness', 'Leaves hair manageable for weeks'],
    idealFor: 'Frizzy, brittle, or chemically processed hair needing intense rejuvenation',
    priceDisplay: 'Contact the salon for pricing.',
  },
  {
    id: 'keratin',
    name: 'Keratin Treatment',
    tagline: 'Smooth, Humidity-Resistant Silky Hair',
    description:
      'Professional smoothing solution enriched with natural keratin proteins that seals the outer hair shaft to tame unruly volume and shield against humid Sydney weather.',
    image: '/images/treatment-keratin.jpg',
    benefits: ['Smooths unruly flyaways & coarse hair', 'Drastically cuts daily blow-dry time', 'Seals cuticle against humidity', 'Touchably soft, silky finish'],
    idealFor: 'Thick, wavy, or coarse hair that puffs up with humidity',
    priceDisplay: 'Contact the salon for pricing.',
  },
  {
    id: 'nanoplasty',
    name: 'Nanoplasty',
    tagline: 'Advanced Straightening & Deep Nourishment',
    description:
      'A revolutionary organic smoothing and straightening method using nano-molecules and botanical amino acids that penetrate deeply to straighten while intensely conditioning from the inside out.',
    image: '/images/treatment-nanoplasty.jpg',
    benefits: ['High-gloss glass-hair reflective shine', 'Organic amino acid smoothing system', 'Long-lasting structural straightening', 'Safe for sensitive scalps'],
    idealFor: 'Those desiring ultra-sleek, glossy straight hair with organic nourishment',
    priceDisplay: 'Contact the salon for pricing.',
  },
  {
    id: 'hair-straightening',
    name: 'Hair Straightening',
    tagline: 'Permanent Rebonding & Everyday Sleekness',
    description:
      'Precision thermal rebonding engineered to permanently relax tight curls and waves, giving you effortless pin-straight hair that stays sleek through washing and rain.',
    image: '/images/treatment-straightening.jpg',
    benefits: ['Permanent straightening results', 'Eliminates morning flat-ironing routines', 'Smooth, uniform texture from root to tip', 'Customised for your natural density'],
    idealFor: 'Clients seeking permanent smooth and straight hair texture',
    priceDisplay: 'Contact the salon for pricing.',
  },
  {
    id: 'hair-perming',
    name: 'Hair Perming',
    tagline: 'Modern Textured Waves & Dynamic Volume',
    description:
      'Customised modern perm techniques created for both men and women wanting effortless wavy texture, Korean-style loose curls, or root lift with natural movement.',
    image: '/images/treatment-perming.jpg',
    benefits: ['Creates effortless modern beach waves', 'Adds noticeable volume to fine hair', 'Low-maintenance styling wash-and-go', 'Tailored curl diameter for your face shape'],
    idealFor: 'Men wanting modern textured crops and women desiring voluminous waves',
    priceDisplay: 'Contact the salon for pricing.',
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    tagline: 'Scalp Detoxification & Deep Conditioning Ritual',
    description:
      'A therapeutic salon ritual that exfoliates the scalp, restores moisture balance to stressed hair strands, and stimulates healthy circulation through warm aromatherapy steam and massage.',
    image: '/images/treatment-spa.jpg',
    benefits: ['Relieves scalp tightness & dryness', 'Infuses deep moisture into brittle strands', 'Invigorating pressure-point scalp massage', 'Pure relaxation and sensory calm'],
    idealFor: 'Anyone needing scalp relief, intensive hydration, and relaxation',
    priceDisplay: 'Contact the salon for pricing.',
  },
];

export const FAQS = [
  {
    q: 'Do you accept walk-ins?',
    a: 'Yes. Walk-in customers are welcome, subject to availability.',
  },
  {
    q: 'Can I book an appointment online?',
    a: 'Yes. Visit the salon’s existing website to access its online booking options.',
  },
  {
    q: 'Do you offer children’s haircuts?',
    a: 'Yes. The published service list includes haircuts for children under 10.',
  },
  {
    q: 'What hair treatments do you offer?',
    a: 'The salon advertises Hair Botox, Keratin, Nanoplasty, hair straightening, hair perming, and hair spa treatments.',
  },
  {
    q: 'Where is the salon located?',
    a: 'Shop 2/53 Station Street, Wentworthville NSW 2145, Australia.',
  },
  {
    q: 'What are your opening hours?',
    a: 'Monday to Friday, 9 AM–8 PM. Saturday and Sunday, 9 AM–6 PM.',
  },
  {
    q: 'How much does a haircut cost?',
    a: 'Published walk-in prices include Classic Cut at AUD $25, Skin Fade at AUD $35, and Buzz Cut at AUD $20. Other services have their own listed prices.',
  },
  {
    q: 'How can I ask about treatment prices?',
    a: 'Contact the salon using the published email address or visit its official website.',
  },
];
