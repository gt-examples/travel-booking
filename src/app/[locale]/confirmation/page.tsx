import { T, Currency, DateTime, Num, Plural } from "gt-next";
import { getGT } from "gt-next/server";
import { getDestination, destinations } from "@/data/destinations";
import Header from "@/components/Header";

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ dest?: string }>;
}) {
  const gt = await getGT();
  const { dest: destId } = await searchParams;
  const dest = getDestination(destId ?? "") ?? destinations[0];
  const nights = Math.round(
    (dest.checkOut.getTime() - dest.checkIn.getTime()) / (1000 * 60 * 60 * 24)
  );
  const subtotal = dest.price * nights;
  const taxes = Math.round(subtotal * 0.1);
  const fees = Math.round(subtotal * 0.02);
  const total = subtotal + taxes + fees;
  const confirmationNumber = `GT-${dest.id.toUpperCase()}-${Date.now().toString(36).toUpperCase().slice(-6)}`;

  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      <div className="max-w-2xl mx-auto px-6 py-16">
        <T>
          <div className="text-center mb-10">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-900/30 border border-green-800 flex items-center justify-center">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-neutral-100 mb-2">
              Booking confirmed!
            </h1>
            <p className="text-neutral-400">
              Your reservation has been successfully processed.
            </p>
          </div>
        </T>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 space-y-6">
          <T>
            <div className="text-center pb-4 border-b border-neutral-800">
              <span className="text-xs text-neutral-500 uppercase tracking-wider">
                Confirmation number
              </span>
              <div className="text-xl font-mono font-bold text-neutral-100 mt-1">
                {confirmationNumber}
              </div>
            </div>
          </T>

          {/* Trip Summary */}
          <T>
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                Trip summary
              </h2>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-neutral-500">Destination</span>
                  <div className="text-neutral-200 font-medium">{gt(dest.name)}</div>
                </div>
                <div>
                  <span className="text-neutral-500">Room type</span>
                  <div className="text-neutral-200 font-medium">{gt(dest.rooms[0].type)}</div>
                </div>
                <div>
                  <span className="text-neutral-500">Check-in</span>
                  <div className="text-neutral-200 font-medium">
                    <DateTime>{dest.checkIn}</DateTime>
                  </div>
                </div>
                <div>
                  <span className="text-neutral-500">Check-out</span>
                  <div className="text-neutral-200 font-medium">
                    <DateTime>{dest.checkOut}</DateTime>
                  </div>
                </div>
                <div>
                  <span className="text-neutral-500">Duration</span>
                  <div className="text-neutral-200 font-medium">
                    <Plural
                      n={nights}
                      singular={<><Num>{nights}</Num>{" night"}</>}
                      plural={<><Num>{nights}</Num>{" nights"}</>}
                    />
                  </div>
                </div>
                <div>
                  <span className="text-neutral-500">Guests</span>
                  <div className="text-neutral-200 font-medium">
                    <Plural
                      n={dest.guests}
                      singular={<><Num>{dest.guests}</Num>{" guest"}</>}
                      plural={<><Num>{dest.guests}</Num>{" guests"}</>}
                    />
                  </div>
                </div>
              </div>
            </div>
          </T>

          {/* Cost Breakdown */}
          <T>
            <div className="border-t border-neutral-800 pt-4 space-y-2">
              <h2 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider mb-3">
                Cost breakdown
              </h2>
              <div className="flex justify-between text-sm text-neutral-400">
                <span>
                  <Currency currency="USD">{dest.price}</Currency> × <Plural
                    n={nights}
                    singular={<><Num>{nights}</Num>{" night"}</>}
                    plural={<><Num>{nights}</Num>{" nights"}</>}
                  />
                </span>
                <span><Currency currency="USD">{subtotal}</Currency></span>
              </div>
              <div className="flex justify-between text-sm text-neutral-400">
                <span>Taxes</span>
                <span><Currency currency="USD">{taxes}</Currency></span>
              </div>
              <div className="flex justify-between text-sm text-neutral-400">
                <span>Service fees</span>
                <span><Currency currency="USD">{fees}</Currency></span>
              </div>
              <div className="flex justify-between text-base font-semibold text-neutral-100 pt-3 border-t border-neutral-800">
                <span>Total</span>
                <span><Currency currency="USD">{total}</Currency></span>
              </div>
            </div>
          </T>
        </div>

        <div className="mt-8 text-center">
          <T>
            <a
              href="/"
              className="inline-block px-6 py-3 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-md hover:bg-white transition-colors"
            >
              Back to destinations
            </a>
          </T>
        </div>
      </div>

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
