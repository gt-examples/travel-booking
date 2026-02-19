import { T, Num, Currency, DateTime, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { LocaleSelector } from "gt-next";

const destinations = [
  {
    id: "tokyo",
    nameKey: "Tokyo, Japan",
    descKey:
      "A dazzling metropolis where ancient temples stand alongside neon-lit skyscrapers. Explore centuries of history, world-class cuisine, and cutting-edge technology.",
    price: 1249,
    currency: "USD" as const,
    checkIn: new Date("2026-04-15"),
    checkOut: new Date("2026-04-22"),
    guests: 2,
    stars: 4.8,
    reviews: 2347,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&h=400&fit=crop",
  },
  {
    id: "santorini",
    nameKey: "Santorini, Greece",
    descKey:
      "White-washed villages perched on volcanic cliffs overlooking the Aegean Sea. Legendary sunsets, local wines, and Mediterranean charm at every turn.",
    price: 1879,
    currency: "USD" as const,
    checkIn: new Date("2026-06-01"),
    checkOut: new Date("2026-06-08"),
    guests: 2,
    stars: 4.9,
    reviews: 1823,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&h=400&fit=crop",
  },
  {
    id: "kyoto",
    nameKey: "Kyoto, Japan",
    descKey:
      "The cultural heart of Japan, home to over two thousand temples and shrines. Stroll through bamboo groves, attend a tea ceremony, and witness geisha culture.",
    price: 1099,
    currency: "USD" as const,
    checkIn: new Date("2026-05-10"),
    checkOut: new Date("2026-05-17"),
    guests: 1,
    stars: 4.7,
    reviews: 1956,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
  },
  {
    id: "paris",
    nameKey: "Paris, France",
    descKey:
      "The City of Light beckons with iconic landmarks, world-renowned museums, and a cafe culture that turns every meal into an occasion.",
    price: 1599,
    currency: "USD" as const,
    checkIn: new Date("2026-07-05"),
    checkOut: new Date("2026-07-12"),
    guests: 2,
    stars: 4.6,
    reviews: 3102,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop",
  },
  {
    id: "bali",
    nameKey: "Bali, Indonesia",
    descKey:
      "Lush rice terraces, sacred water temples, and pristine beaches make Bali an island paradise. Find serenity in Ubud or surf the breaks of Uluwatu.",
    price: 899,
    currency: "USD" as const,
    checkIn: new Date("2026-08-01"),
    checkOut: new Date("2026-08-10"),
    guests: 4,
    stars: 4.5,
    reviews: 2789,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop",
  },
  {
    id: "new-york",
    nameKey: "New York, USA",
    descKey:
      "The city that never sleeps offers Broadway shows, world-class dining, and iconic landmarks from Central Park to the Statue of Liberty.",
    price: 1749,
    currency: "USD" as const,
    checkIn: new Date("2026-09-15"),
    checkOut: new Date("2026-09-22"),
    guests: 3,
    stars: 4.4,
    reviews: 4521,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&h=400&fit=crop",
  },
];

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < fullStars
              ? "text-amber-400"
              : i === fullStars && hasHalf
              ? "text-amber-400"
              : "text-neutral-700"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.065 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.284-3.957z" />
        </svg>
      ))}
    </div>
  );
}

export default async function Home() {
  const gt = await getGT();

  const destinationContent = [
    {
      name: gt("Tokyo, Japan"),
      desc: gt("A dazzling metropolis where ancient temples stand alongside neon-lit skyscrapers. Explore centuries of history, world-class cuisine, and cutting-edge technology."),
    },
    {
      name: gt("Santorini, Greece"),
      desc: gt("White-washed villages perched on volcanic cliffs overlooking the Aegean Sea. Legendary sunsets, local wines, and Mediterranean charm at every turn."),
    },
    {
      name: gt("Kyoto, Japan"),
      desc: gt("The cultural heart of Japan, home to over two thousand temples and shrines. Stroll through bamboo groves, attend a tea ceremony, and witness geisha culture."),
    },
    {
      name: gt("Paris, France"),
      desc: gt("The City of Light beckons with iconic landmarks, world-renowned museums, and a cafe culture that turns every meal into an occasion."),
    },
    {
      name: gt("Bali, Indonesia"),
      desc: gt("Lush rice terraces, sacred water temples, and pristine beaches make Bali an island paradise. Find serenity in Ubud or surf the breaks of Uluwatu."),
    },
    {
      name: gt("New York, USA"),
      desc: gt("The city that never sleeps offers Broadway shows, world-class dining, and iconic landmarks from Central Park to the Statue of Liberty."),
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="https://generaltranslation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors"
            >
              General Translation
            </a>
            <span className="text-neutral-700">/</span>
            <h1 className="text-sm font-semibold text-neutral-100">
              {gt("Travel Booking")}
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/gt-examples/travel-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-neutral-200 transition-colors"
              aria-label="View on GitHub"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <LocaleSelector />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <T>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4">
            Discover your next destination
          </h2>
          <p className="text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Browse handpicked hotels and flights around the world. Prices,
            dates, and details adapt to your language and region automatically.
          </p>
        </T>
      </section>

      {/* Destination Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <article
              key={dest.id}
              className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={dest.image}
                  alt={destinationContent[i].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-neutral-100">
                    {destinationContent[i].name}
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  {destinationContent[i].desc}
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <StarRating rating={dest.stars} />
                  <T>
                    <span className="text-sm text-neutral-500">
                      <Num>{dest.stars}</Num> (<Plural
                        n={dest.reviews}
                        singular={<><Num>{dest.reviews}</Num>{" review"}</>}
                        plural={<><Num>{dest.reviews}</Num>{" reviews"}</>}
                      />)
                    </span>
                  </T>
                </div>

                <T>
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                    <svg
                      className="w-4 h-4 text-neutral-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>
                      <DateTime>{dest.checkIn}</DateTime>
                      {" - "}
                      <DateTime>{dest.checkOut}</DateTime>
                    </span>
                  </div>
                </T>

                <T>
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
                    <svg
                      className="w-4 h-4 text-neutral-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <Plural
                      n={dest.guests}
                      singular={<><Num>{dest.guests}</Num>{" guest"}</>}
                      plural={<><Num>{dest.guests}</Num>{" guests"}</>}
                    />
                  </div>
                </T>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                  <T>
                    <div>
                      <span className="text-xs text-neutral-500">
                        Per night
                      </span>
                      <div className="text-xl font-bold text-neutral-100">
                        <Currency currency={dest.currency}>
                          {dest.price}
                        </Currency>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-md hover:bg-white transition-colors">
                      Book now
                    </button>
                  </T>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <T>
            <p className="text-sm text-neutral-500 text-center">
              Built with General Translation to demonstrate locale-aware
              formatting of prices, dates, and plurals.
            </p>
          </T>
        </div>
      </footer>
    </div>
  );
}
