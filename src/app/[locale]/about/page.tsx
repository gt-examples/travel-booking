import { T } from "gt-next";
import Header from "@/components/Header";

export default async function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-neutral-200">
      <Header />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <T>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-6">
            About this demo
          </h1>

          <div className="space-y-8 text-neutral-400 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-neutral-200 mb-3">
                What is this?
              </h2>
              <p>
                This is a demo travel booking application built to showcase the
                internationalization features of General Translation. Every piece
                of text, every price, every date, and every plural form on this
                site is automatically adapted to your language and region.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-200 mb-3">
                GT features demonstrated
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-neutral-300">{"<T>"} component</strong> —
                  wraps entire sections for translation, preserving JSX structure
                </li>
                <li>
                  <strong className="text-neutral-300">{"<Currency>"}</strong> —
                  locale-aware currency formatting that adapts symbols and
                  placement
                </li>
                <li>
                  <strong className="text-neutral-300">{"<DateTime>"}</strong> —
                  dates formatted according to regional conventions
                </li>
                <li>
                  <strong className="text-neutral-300">{"<Plural>"}</strong> —
                  grammatically correct singular and plural forms
                </li>
                <li>
                  <strong className="text-neutral-300">{"<Num>"}</strong> —
                  number formatting with locale-appropriate separators
                </li>
                <li>
                  <strong className="text-neutral-300">getGT()</strong> — server-side
                  translation for metadata, alt text, and dynamic strings
                </li>
                <li>
                  <strong className="text-neutral-300">Locale routing</strong> —
                  automatic locale detection and URL-based language switching
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-neutral-200 mb-3">
                Learn more
              </h2>
              <p className="mb-3">
                Explore the General Translation documentation and resources:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://generaltranslation.com/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-sm text-neutral-200 hover:bg-neutral-700 transition-colors"
                >
                  Documentation →
                </a>
                <a
                  href="https://github.com/gt-examples/travel-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-sm text-neutral-200 hover:bg-neutral-700 transition-colors"
                >
                  Source code →
                </a>
                <a
                  href="https://generaltranslation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-sm text-neutral-200 hover:bg-neutral-700 transition-colors"
                >
                  General Translation →
                </a>
              </div>
            </section>

            <section className="bg-neutral-900 border border-neutral-800 rounded-lg p-5">
              <h2 className="text-lg font-semibold text-neutral-200 mb-2">
                ⚠️ Disclaimer
              </h2>
              <p className="text-sm">
                This is a demonstration application. No real bookings are
                processed, no payments are collected, and no travel services are
                provided. All destinations, prices, reviews, and availability
                shown are fictional and used solely to illustrate
                internationalization features.
              </p>
            </section>
          </div>
        </T>
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
