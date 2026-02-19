import { T, Num, Currency, DateTime, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { notFound } from "next/navigation";
import { destinations, getDestination } from "@/data/destinations";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";

const amenityLabels: Record<string, { icon: string; label: string }> = {
  wifi: { icon: "📶", label: "Free Wi-Fi" },
  pool: { icon: "🏊", label: "Swimming Pool" },
  spa: { icon: "💆", label: "Spa & Wellness" },
  restaurant: { icon: "🍽️", label: "Restaurant" },
  gym: { icon: "🏋️", label: "Fitness Center" },
  "airport-shuttle": { icon: "🚐", label: "Airport Shuttle" },
};

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id } = await params;
  const dest = getDestination(id);
  if (!dest) notFound();

  const gt = await getGT();
  const nights = Math.round(
    (dest.checkOut.getTime() - dest.checkIn.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      {/* Hero Image */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={dest.heroImage}
          alt={gt(dest.name)}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-8">
          <T>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {gt(dest.name)}
            </h1>
            <p className="text-neutral-300 text-sm">{gt(dest.location)}</p>
          </T>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                  About this destination
                </h2>
                <p className="text-neutral-400 leading-relaxed">
                  {gt(dest.longDesc)}
                </p>
              </T>
              <div className="flex items-center gap-2 mt-4">
                <StarRating rating={dest.stars} />
                <T>
                  <span className="text-sm text-neutral-500">
                    <Num>{dest.stars}</Num> — <Plural
                      n={dest.reviews}
                      singular={<><Num>{dest.reviews}</Num>{" review"}</>}
                      plural={<><Num>{dest.reviews}</Num>{" reviews"}</>}
                    />
                  </span>
                </T>
              </div>
            </section>

            {/* Amenities */}
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                  Hotel amenities
                </h2>
              </T>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {dest.amenities.map((a) => {
                  const info = amenityLabels[a];
                  return (
                    <div
                      key={a}
                      className="flex items-center gap-3 bg-neutral-900 border border-neutral-800 rounded-lg p-3"
                    >
                      <span className="text-xl">{info?.icon}</span>
                      <span className="text-sm text-neutral-300">
                        {gt(info?.label ?? a)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Room Types */}
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                  Room types
                </h2>
              </T>
              <div className="space-y-3">
                {dest.rooms.map((room) => (
                  <div
                    key={room.type}
                    className="flex items-center justify-between bg-neutral-900 border border-neutral-800 rounded-lg p-4"
                  >
                    <div>
                      <h3 className="font-medium text-neutral-100">
                        {gt(room.type)}
                      </h3>
                      <p className="text-sm text-neutral-500 mt-1">
                        {gt(room.desc)}
                      </p>
                    </div>
                    <T>
                      <div className="text-right shrink-0 ml-4">
                        <div className="text-lg font-bold text-neutral-100">
                          <Currency currency="USD">{room.price}</Currency>
                        </div>
                        <span className="text-xs text-neutral-500">
                          per night
                        </span>
                      </div>
                    </T>
                  </div>
                ))}
              </div>
            </section>

            {/* Guest Reviews */}
            <section>
              <T>
                <h2 className="text-xl font-semibold text-neutral-100 mb-4">
                  Guest reviews
                </h2>
              </T>
              <div className="space-y-4">
                {dest.guestReviews.map((review, i) => (
                  <div
                    key={i}
                    className="bg-neutral-900 border border-neutral-800 rounded-lg p-5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-sm font-medium text-neutral-300">
                          {review.name[0]}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-neutral-200">
                            {review.name}
                          </span>
                          <T>
                            <span className="text-xs text-neutral-500 ml-2">
                              <DateTime>{review.date}</DateTime>
                            </span>
                          </T>
                        </div>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      {gt(review.text)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-neutral-900 border border-neutral-800 rounded-lg p-6 space-y-5">
              <T>
                <h3 className="text-lg font-semibold text-neutral-100">
                  Book your stay
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">
                      Check-in
                    </label>
                    <input
                      type="date"
                      defaultValue="2026-04-15"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">
                      Check-out
                    </label>
                    <input
                      type="date"
                      defaultValue="2026-04-22"
                      className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">
                      Guests
                    </label>
                    <select className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-400 mb-1">
                      Room type
                    </label>
                    <select className="w-full bg-neutral-800 border border-neutral-700 rounded-md px-3 py-2 text-sm text-neutral-200 focus:outline-none focus:border-neutral-600">
                      {dest.rooms.map((r) => (
                        <option key={r.type} value={r.type}>
                          {gt(r.type)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="border-t border-neutral-800 pt-4 space-y-2">
                  <div className="flex justify-between text-sm text-neutral-400">
                    <span>
                      <Currency currency="USD">{dest.price}</Currency> × <Plural
                        n={nights}
                        singular={<><Num>{nights}</Num>{" night"}</>}
                        plural={<><Num>{nights}</Num>{" nights"}</>}
                      />
                    </span>
                    <span>
                      <Currency currency="USD">
                        {dest.price * nights}
                      </Currency>
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-neutral-400">
                    <span>Taxes & fees</span>
                    <span>
                      <Currency currency="USD">
                        {Math.round(dest.price * nights * 0.12)}
                      </Currency>
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-semibold text-neutral-100 pt-2 border-t border-neutral-800">
                    <span>Total</span>
                    <span>
                      <Currency currency="USD">
                        {Math.round(dest.price * nights * 1.12)}
                      </Currency>
                    </span>
                  </div>
                </div>

                <a
                  href={`/confirmation?dest=${dest.id}`}
                  className="block w-full text-center px-4 py-3 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-md hover:bg-white transition-colors"
                >
                  Book now
                </a>
              </T>
            </div>
          </div>
        </div>
      </div>

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
