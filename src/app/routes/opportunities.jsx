import { useEffect } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import SimpleNavigation from '@components/layout/simple-navigation';
import CTASection from '@components/layout/cta-section';
import Footer from '@components/layout/footer';
import opportunities from '@data/opportunities.json';

function OpportunityCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{item.title}</h3>
          <div className="text-sm text-gray-500">{item.organization} • {item.location}</div>
        </div>
        <div className="text-sm text-green-700 font-semibold bg-green-50 px-3 py-1 rounded">{item.type}</div>
      </div>

      <p className="mt-4 text-gray-700 flex-1">{item.description}</p>

      <div className="mt-6 flex items-center justify-between">
        <a href={item.link} className="text-sm text-red-700 font-semibold hover:underline">Learn more →</a>
        <button className="bg-red-700 text-white px-4 py-2 rounded-full hover:bg-red-600">I'm Interested</button>
      </div>
    </div>
  );
}

function OpportunitiesPage() {
  useEffect(() => {
    document.title = 'Opportunities - CuzinFest';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold">Opportunities</h1>
              <p className="text-gray-600 mt-2">Hand-picked opportunities surfaced at CuzinFest — explore, connect, and act.</p>
            </div>
            <div>
              <a href="/register" className="inline-block bg-red-700 text-white px-6 py-3 rounded-full font-semibold">Create Opportunity</a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((item) => (
              <OpportunityCard key={item.id} item={item} />
            ))}
          </div>

        </div>
      </main>

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}

export default OpportunitiesPage;
