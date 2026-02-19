import { T, Num, Currency, DateTime, Plural } from "gt-next";
import { destinations } from "@/data/destinations";
import { getTranslatedStrings } from "@/data/translated";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";

export default async function Home() {
  const t = await getTranslatedStrings();

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

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
          {destinations.map((dest) => (
            <a
              key={dest.id}
              href={`/destination/${dest.id}`}
              className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-700 transition-colors block"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={dest.image}
                  alt={t[dest.name] ?? dest.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-neutral-100">
                    {t[dest.name] ?? dest.name}
                  </h3>
                </div>
                <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                  {t[dest.desc] ?? dest.desc}
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
                    <span className="px-4 py-2 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-md">
                      Book now
                    </span>
                  </T>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-6xl mx-auto px-6 pb-8">
        <T>
          <p className="text-xs text-neutral-600 text-center">
            This is an example application built with General Translation to demonstrate internationalization. No real bookings are processed.
          </p>
        </T>
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
