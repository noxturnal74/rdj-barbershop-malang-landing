# Batch Notes - R Dwiejhaya Barbershop

## Production Direction

- Business type: Local barbershop / grooming service
- Layout DNA: rdj
- Primary conversion: Find My Cut
- Secondary conversion: Book Service
- Customer journey: RDJ should feel practical and trustworthy: visitors answer a quick style prompt, choose service, see transformations, then book.

## Image Strategy

This sandbox cannot reliably download and compress binary photos, so the site uses stable fixed remote image URLs from images.unsplash.com. No random image endpoint is used. Replace these with local compressed files in assets/photos/ when final brand-approved photography is available.

## WhatsApp Placeholder

The JavaScript contains BUSINESS_WHATSAPP as an intentionally empty replaceable variable. Add the confirmed business phone number in script.js if the official WhatsApp number is available. Until then, the generator uses a WhatsApp share URL with a brand-specific message.

## Validation

Run:

```powershell
npm run validate
npm run build
```
