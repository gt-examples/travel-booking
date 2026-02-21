# Travel Booking

A travel booking demo showcasing locale-aware prices, dates, plurals, and full-page translations with General Translation.

**[Live Demo](https://travel-booking.generaltranslation.dev)** | **[General Translation Docs](https://generaltranslation.com/docs)**

## About

Browse handpicked hotel destinations around the world with prices, dates, and guest counts that automatically adapt to your language and region. This app demonstrates how GT handles real-world i18n patterns — currency formatting, date localization, pluralization, and server-side string translation — all within a clean, production-style UI.

## GT Features Used

- `<T>` — JSX translation with wide wrapping for full-context translations
- `<Currency>` — Locale-aware currency formatting
- `<DateTime>` — Date formatting according to regional conventions
- `<Plural>` — Grammatically correct singular and plural forms
- `<Num>` — Number formatting with locale-appropriate separators
- `<Var>` — Dynamic values within translated content
- `getGT` — Server-side string translations for metadata, alt text, and data-driven content
- `loadTranslations` — Local translation storage for fast, reliable delivery
- `LocaleSelector` — Built-in language picker component

## Getting Started

```bash
git clone https://github.com/gt-examples/travel-booking.git
cd travel-booking
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Built With

- [Next.js](https://nextjs.org)
- [General Translation](https://generaltranslation.com) (gt-next)
- [Tailwind CSS](https://tailwindcss.com)
