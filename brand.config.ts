export const brandConfig = {
  "slug": "rdj-barbershop",
  "repo": "rdj-barbershop-malang-landing",
  "brandName": "R Dwiejhaya Barbershop",
  "monogram": "RDJ",
  "category": "Barbershop",
  "location": "S. Supriyadi grooming route",
  "address": "Jl. S. Supriyadi No.82, Bandungrejosari, Malang",
  "contact": "WhatsApp via Linktree",
  "publicLink": "https://linktr.ee/rdjbarbershop",
  "instagram": "https://www.instagram.com/rdjbarbershop",
  "designConcept": "Apple-style style consultation landing",
  "conversionGoal": "Make RDJ feel more premium through haircut, hairstyle, color, booking, and visual style direction.",
  "proofPoints": [
    "Public profile positions RDJ as a premium barbershop with haircut, hairstyle, and hair color.",
    "Booking schedule, WhatsApp, Instagram, and TikTok links support appointment-led conversion.",
    "S. Supriyadi address gives a clear local destination for chair reservations."
  ],
  "sourceLinks": [
    {
      "label": "RDJ Linktree",
      "url": "https://linktr.ee/rdjbarbershop"
    },
    {
      "label": "RDJ Instagram",
      "url": "https://www.instagram.com/rdjbarbershop"
    }
  ],
  "theme": {
    "bg": "#0d1117",
    "accent": "#71c7ec",
    "accent2": "#fef3b4",
    "paper": "#f7fbff"
  },
  "nav": [
    "Style",
    "Color",
    "Prices",
    "Book"
  ],
  "hero": {
    "eyebrow": "Premium haircut, hairstyle, and color",
    "title": "A style-first barbershop page for cuts, looks, and color upgrades.",
    "body": "A grooming page that gives RDJ more premium positioning: consultation, style direction, color upgrade, and easy appointment flow.",
    "cta": "Book Style Session"
  },
  "sections": [
    {
      "id": "style",
      "kicker": "Style Consultation",
      "title": "Help customers choose a look before they enter the chair.",
      "items": [
        "Face-shape direction",
        "Hair texture check",
        "Finish recommendation"
      ]
    },
    {
      "id": "color",
      "kicker": "Hair Color",
      "title": "Color service gets its own stage and pricing logic.",
      "items": [
        "Color consult",
        "Bleach planning",
        "Aftercare guidance"
      ]
    },
    {
      "id": "price-list",
      "kicker": "Packages",
      "title": "Simple tiers for quick appointment decisions.",
      "items": [
        "Clean Cut",
        "Style Session",
        "Color Upgrade"
      ]
    }
  ],
  "layout": "barber-blue"
} as const;

export type BrandConfig = typeof brandConfig;
