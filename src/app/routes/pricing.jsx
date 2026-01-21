import { useEffect } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import SimpleNavigation from '@components/layout/simple-navigation';
import PricingHero from '@features/pricing/components/pricing-hero';
import PricingCards from '@features/pricing/components/pricing-cards';
import ComparisonTable from '@features/pricing/components/comparison-table';
import CTASection from '@components/layout/cta-section';
import Footer from '@components/layout/footer';
import pricingData from '@data/pricing.json';




function PricingPage() {
  useEffect(() => {
    document.title = 'Community';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <PricingHero />
      <PricingCards plans={pricingData.plans} />
      <ComparisonTable plans={pricingData.plans} features={pricingData.features} />

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}

export default PricingPage;