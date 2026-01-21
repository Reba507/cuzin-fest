import { useEffect } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import SimpleNavigation from '@components/layout/simple-navigation';
import AboutHero from '@features/about/components/about-hero';
import AboutDetails from '@features/about/components/about-details';
import ImageGallery from '@features/about/components/image-gallery';
import CTASection from '@components/layout/cta-section';
import Footer from '@components/layout/footer';
import jobsData from '@data/jobs.json';

function AboutPage() {
  useEffect(() => {
    document.title = 'About Us - cuzin-fest';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <AboutHero />

      <AboutDetails />
      <ImageGallery />

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}

export default AboutPage;