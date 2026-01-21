import { useEffect } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import SimpleNavigation from '@components/layout/simple-navigation';
import ContactHero from '@features/contact/components/contact-hero';
import CTASection from '@components/layout/cta-section';
import Footer from '@components/layout/footer';

function ContactPage() {
  useEffect(() => {
    document.title = 'cuzin-fest';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <div>
        <AnnouncementBar />
        <SimpleNavigation showLogin={false} />
        <ContactHero />
        <CTASection />
        <Footer backgroundImage="images/footer-waves-left-bottom.png" />
      </div>
    </div>
  );
}

export default ContactPage;