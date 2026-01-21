import { useEffect } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import SimpleNavigation from '@components/layout/simple-navigation';
import RegisterForm from '@features/auth/components/register-form';
import CTASection from '@components/layout/cta-section';
import Footer from '@components/layout/footer';

function RegisterPage() {
  useEffect(() => {
    document.title = 'Register - cuzin-fest';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <RegisterForm />

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}

export default RegisterPage;