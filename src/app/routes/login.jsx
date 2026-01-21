import { useEffect } from 'react';
import AnnouncementBar from '@components/layout/announcement-bar';
import SimpleNavigation from '@components/layout/simple-navigation';
import LoginForm from '@features/auth/components/login-form';
import CTASection from '@components/layout/cta-section';
import Footer from '@components/layout/footer';

function LoginPage() {
  useEffect(() => {
    document.title = 'Login - Flora&Fauna';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <AnnouncementBar />
      <SimpleNavigation />

      <LoginForm />

      <CTASection />
      <Footer backgroundImage="images/footer-waves-left-bottom.png" />
    </div>
  );
}

export default LoginPage;