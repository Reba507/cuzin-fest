import { useEffect, useState } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import CTASection from '@components/layout/cta-section';
import { Navigation, Footer } from '@components/ui';
import StatsSection from '@features/home/components/stats-section';
import SolutionsSection from '@features/home/components/solutions-section';
import CommitmentSection from '@features/home/components/commitment-section';
import opportunities from '@data/opportunities.json';

// Simple Countdown Component
function CountdownTimer() {
  const targetDate = new Date('2026-06-16T09:00:00+02:00').getTime(); // SAST = UTC+2

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-600 to-lime-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          CuzinFest 2026 • 16 June • Mahikeng
        </h2>
        <p className="text-xl mb-8">Where family meets opportunity. Don't come alone — bring your cousins!</p>

        <div className="flex justify-center gap-6 md:gap-12 flex-wrap">
          {[
            { value: timeLeft.days, label: 'Days' },
            { value: timeLeft.hours, label: 'Hours' },
            { value: timeLeft.minutes, label: 'Minutes' },
            { value: timeLeft.seconds, label: 'Seconds' },
          ].map((item, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-6 min-w-[100px]">
              <div className="text-4xl md:text-5xl font-bold">{item.value.toString().padStart(2, '0')}</div>
              <div className="text-sm md:text-base uppercase mt-2 opacity-90">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/tickets"
            className="inline-block bg-white text-red-700 font-bold text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition shadow-lg"
          >
            Secure Your Early Bird Spot →
          </a>
          <a
            href="/opportunities"
            className="ml-4 inline-block bg-transparent border border-white text-white font-semibold text-lg px-8 py-3 rounded-full hover:bg-white/10 transition shadow-sm"
          >
            Opportunities →
          </a>
        </div>
      </div>
    </div>
  );
}

// Simple opportunities slideshow component
function OpportunitiesSlideshow({ items = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!items || items.length === 0) return;
    const t = setInterval(() => setIndex(i => (i + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items]);

  if (!items || items.length === 0) return null;

  const item = items[index];

  const prev = () => setIndex(i => (i - 1 + items.length) % items.length);
  const next = () => setIndex(i => (i + 1) % items.length);

  return (
    <div className="bg-gradient-to-r from-white/3 to-white/2 rounded-2xl p-4 text-white">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold">Featured Opportunities</h3>
        <div className="flex items-center gap-2">
          <button onClick={prev} aria-label="Previous" className="px-3 py-1 bg-white/5 rounded hover:bg-white/10">◀</button>
          <button onClick={next} aria-label="Next" className="px-3 py-1 bg-white/5 rounded hover:bg-white/10">▶</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1 bg-black-50 p-6 rounded-xl">
          <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-2xl font-bold mb-1">{item.title}</h4>
                <div className="text-sm text-white/80">{item.organization} • {item.location}</div>
              </div>
              <div className="hidden md:block">
                <div className="text-sm text-green-700 font-semibold bg-green-50 px-3 py-1 rounded">{item.type}</div>
              </div>
            </div>

            <p className="mt-4 text-white/70">{item.description}</p>

            <div className="mt-6 flex items-center gap-4">
              <a href={item.link} className="text-red-300 font-semibold">Learn more →</a>
              <button className="bg-red-700 text-white px-4 py-2 rounded-full">I'm Interested</button>
            </div>
        </div>

        <div className="w-full md:w-64 flex-shrink-0">
          <div className="text-sm text-gray-400 mb-2">Spotlight</div>
          <div className="bg-white/5 p-4 rounded-lg">
            <div className="text-sm text-green-700 font-semibold">{item.type}</div>
            <div className="text-sm text-gray-300 mt-2">{item.organization}</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-red-700' : 'bg-white/20'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function HomePage() {
  useEffect(() => {
    document.title = 'CuzinFest — Family. Business. Future.';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />

      <Navigation
        variant="hero"
        backgroundImage="images/header-bg-waves.png"
        hero={{
          title: "CuzinFest",
          subtitle:
            "Building stronger family ties while creating real business opportunities. Connect with cousins, learn from entrepreneurs, tackle market challenges together — and grow sustainably.",
          ctaText: "Explore Past Events",
          ctaLink: "/#past-events",
          footer: <OpportunitiesSlideshow items={opportunities} />
        }}
      />

      <main>
        {/* Countdown — placed right after hero for maximum impact */}
        <CountdownTimer />

        {/* Updated stats — more relevant to CuzinFest */}
        <StatsSection
          stats={[
            { number: "4,200+", label: "Cousins Connected" },
            { number: "18", label: "Epic Gatherings" },
            { number: "R6.2M+", label: "Opportunities Discussed" },
            { number: "91%", label: "Say They'd Bring Family Again" },
          ]}
        />

        {/* Quick "What Happens" section — very high value */}
        <section className="py-16 bg-black-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">What Actually Happens at CuzinFest</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cousin Speed Networking",
                  desc: "Meet 20+ cousins in under an hour — real connections, real fast.",
                },
                {
                  title: "Real Talk Panels",
                  desc: "Money, markets, failures, comebacks — no filter, just truth.",
                },
                {
                  title: "Family Feast & Chill",
                  desc: "Good food, good music, good vibes. Business gets built over pap & vleis too.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-2xl font-bold mb-5">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <SolutionsSection />
        <CommitmentSection />

        {/* Final strong CTA */}
        <CTASection
          title="Ready to level up with your cousins?"
          subtitle="Early bird tickets for June 16, 2026 drop soon — join the waitlist and be first in line."
          ctaText="Join the Waitlist Now"
          ctaLink="/waitlist"
        />
      </main>

      <Footer
        variant="detailed"
        backgroundImage="images/footer-waves-left-bottom.png"
        companyName="CuzinFest"
      />
    </div>
  );
}

export default HomePage;