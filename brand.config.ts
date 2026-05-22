export const brandConfig = {
  "slug": "rdj-barbershop",
  "repo": "rdj-barbershop-malang-landing",
  "brandName": "R Dwiejhaya Barbershop",
  "monogram": "RDJ",
  "layout": "rdj",
  "category": "Style and color barbershop",
  "address": "Jl. S. Supriyadi No.82, Bandungrejosari, Malang",
  "contact": "WhatsApp via Linktree",
  "hours": "Daily 10:00-21:00, color consultation by booking",
  "publicLink": "https://linktr.ee/rdjbarbershop",
  "instagram": "https://www.instagram.com/rdjbarbershop",
  "theme": {
    "bg": "#eef7fb",
    "ink": "#0b1320",
    "muted": "#526071",
    "accent": "#71c7ec",
    "accent2": "#f1c453",
    "panel": "#ffffff"
  },
  "dna": {
    "visual": "Clean style lab with diagnostic cards, transformation strips, and airy blue editorial spacing.",
    "business": "Position RDJ around consultation, hair color, and transformation confidence.",
    "story": "Visitor answers style intent, sees consultation process, checks color plan, then books a session.",
    "emotion": "Modern, clean, advisory, aspirational.",
    "type": "Modern grotesk with precise editorial display sizing.",
    "motion": "Soft panel slide, diagnostic selector, color-swatch hover.",
    "layout": "Consultation lab and transformation board, not a standard barber brochure.",
    "conversion": "Primary route is style session booking; secondary route is color consultation.",
    "photo": "Before-after transformations, hair texture close-ups, color swatches, clean chair scenes.",
    "unique": "It sells decision support before the haircut."
  },
  "metrics": [
    "Premium barbershop",
    "Haircut, hairstyle, hair color",
    "Booking schedule path",
    "S. Supriyadi location"
  ],
  "packages": [
    {
      "name": "Clean Cut",
      "price": "from Rp45k",
      "note": "shape and finish"
    },
    {
      "name": "Style Session",
      "price": "from Rp75k",
      "note": "consult and styling"
    },
    {
      "name": "Color Upgrade",
      "price": "from Rp180k",
      "note": "consulted color plan"
    }
  ],
  "operations": [
    "Style quiz",
    "Color consult",
    "Transformation gallery",
    "Aftercare notes",
    "Loyalty plan"
  ],
  "workflow": [
    "Choose style intent",
    "Book consult",
    "Confirm color/cut plan",
    "Finish with styling",
    "Receive aftercare note"
  ],
  "proof": [
    "Public profile positions RDJ as premium haircut, hairstyle, and color.",
    "Booking and social paths support appointment-led conversion.",
    "Address gives clear local destination."
  ],
  "team": [
    "Style consultant",
    "Color barber",
    "Aftercare advisor"
  ],
  "testimonials": [
    "Konsultasi bentuk wajah membantu pilih model.",
    "Color plan lebih aman karena dijelaskan dulu."
  ],
  "faqs": [
    "Do you consult before color?",
    "Can I bring a reference photo?",
    "How do aftercare notes work?"
  ],
  "policies": [
    "Color service requires consultation.",
    "Reference photos are used as direction, not exact guarantee.",
    "Booking confirmed through official profile."
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
  ]
} as const;

export type BrandConfig = typeof brandConfig;
