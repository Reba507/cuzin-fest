import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './';
import { getRouteByName, getNavigationRoutes } from '@app/router';

/**
 * Unified navigation component supporting different variants
 * @param {Object} props - Component props
 * @param {'header'|'hero'} [props.variant='header'] - Navigation style variant
 * @param {boolean} [props.showLogo=true] - Whether to display logo
 * @param {boolean} [props.showCta=true] - Whether to display CTA button
 * @param {Object} [props.hero] - Hero section configuration for hero variant
 * @param {string} [props.hero.title] - Hero title
 * @param {string} [props.hero.subtitle] - Hero subtitle
 * @param {string} [props.hero.ctaText] - Hero CTA text
 * @param {string} [props.hero.ctaLink] - Hero CTA link
 * @param {string} [props.backgroundImage] - Background image for hero variant
 * @param {Array} [props.navItems] - Custom navigation items
 * @param {string} [props.className=''] - Additional CSS classes
 * @returns {React.ReactElement} Navigation component
 */
const Navigation = ({
  variant = 'header',
  showLogo = true,
  showCta = true,
  hero = {},
  backgroundImage,
  navItems: customNavItems,
  className = ''
}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = customNavItems || getNavigationRoutes();

  const toggleMobileNav = useCallback(() => {
    setMobileNavOpen(prev => !prev);
  }, []);

  const closeMobileNav = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  if (variant === 'header') {
    return (
      <header className={`bg-white shadow-sm border-b border-gray-200 ${className}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {showLogo && (
              <div className="flex items-center">
                <Link to={getRouteByName('home')} className="text-xl font-bold text-gray-900">
                  Logo
                </Link>
              </div>
            )}
              <div className="hidden md:flex items-center space-x-8">
              {navItems.map(item => (
                <Link key={item.to} to={item.to} className="text-gray-700 hover:text-gray-900">
                  {item.label}
                </Link>
              ))}
              <Link to={getRouteByName('login')} className="text-blue-600 hover:text-blue-700">Login</Link>
              {showCta && (
                <Link
                  to={getRouteByName('register')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Register
                </Link>
              )}
            </div>
          </div>
        </nav>
      </header>
    );
  }

  // Hero variant
  const {
    title = "Energizing a Green Future",
    subtitle = "Our commitment to green energy is paving the way for a cleaner, healthier planet. Join us on a journey towards a future where clean, renewable energy sources transform the way we power our lives.",
    ctaText = "See our solutions",
    ctaLink = "/#solutions",
    footer = null
  } = hero;

  return (
    <div className={className}>
      <section className="relative bg-teal-900">
        {backgroundImage && (
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={backgroundImage}
            alt=""
            loading="lazy"
          />
        )}
        <nav className="py-6 relative">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              {showLogo && (
                <Link className="inline-block" to={getRouteByName('home')}>
                  <img
                    className="h-8"
                    src="images/logo-white.svg"
                    alt="Company Logo"
                    loading="lazy"
                  />
                </Link>
              )}

              {/* Desktop Navigation */}
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                {navItems.map(item => (
                  <li key={item.to} className="mr-8 last:mr-0">
                    <Link
                      className="inline-block text-white hover:text-lime-500 font-medium transition-colors duration-200"
                      to={item.to}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-end">
                {showCta && (
                  <div className="hidden md:block">
                    <Link
                      className="inline-flex group py-2.5 px-4 items-center justify-center text-sm font-medium text-white hover:text-teal-900 border border-white hover:bg-white rounded-full transition duration-200"
                      to={getRouteByName('contact')}
                    >
                      <span className="mr-2">Get in touch</span>
                      <span className="transform group-hover:translate-x-0.5 transition-transform duration-200">
                        <Icon name="arrow-right" size={20} color="currentColor" />
                      </span>
                    </Link>
                  </div>
                )}

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden p-2 rounded-full text-white hover:text-lime-500 transition-colors duration-200"
                  onClick={toggleMobileNav}
                  aria-label="Toggle mobile menu"
                  aria-expanded={mobileNavOpen}
                >
                  <Icon name="menu" size={32} color="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative pt-18 pb-24 sm:pb-32 lg:pt-36 lg:pb-62">
          <div className="container mx-auto px-4 relative">
            <div className="max-w-lg xl:max-w-xl mx-auto text-center">
              <h1 className="font-heading text-5xl xs:text-7xl xl:text-8xl tracking-tight text-white mb-8">
                {title}
              </h1>
              <p className="max-w-md xl:max-w-none text-lg text-white drop-shadow-sm mb-10">
                {subtitle}
              </p>
              <Link
                className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                to={ctaLink}
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>

          {/* Optional hero footer (inserted by pages, e.g. opportunities slideshow) */}
          {footer && (
            <div className="container mx-auto px-4 pb-8">
              {footer}
            </div>
          )}

          {/* Mobile Navigation Overlay */}
        <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50`}>
          <div
            className="fixed inset-0 bg-violet-900 opacity-20"
            onClick={closeMobileNav}
            aria-label="Close mobile menu"
          />
          <nav
            className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between">
              {showLogo && (
                <Link className="inline-block" to={getRouteByName('home')} onClick={closeMobileNav}>
                  <img
                    className="h-8"
                    src="images/logo-sign-flow.svg"
                    alt="Company Logo"
                    loading="lazy"
                  />
                </Link>
              )}
              <div className="flex items-center">
                <Link
                  className="inline-flex py-3 px-5 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200 touch-manipulation"
                  to={getRouteByName('login')}
                  onClick={closeMobileNav}
                >
                  Login
                </Link>
                <button
                  onClick={closeMobileNav}
                  aria-label="Close mobile menu"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  <Icon name="close" size={32} color="currentColor" />
                </button>
              </div>
            </div>

            <div className="pt-20 pb-12 mb-auto">
              <ul className="flex-col">
                {navItems.map(item => (
                  <li key={item.to} className="mb-6">
                    <Link
                      className="inline-block text-teal-900 hover:text-teal-700 font-medium transition-colors duration-200"
                      to={item.to}
                      onClick={closeMobileNav}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <Link
                className="inline-flex items-center text-lg font-medium text-teal-900 transition-colors duration-200"
                to={getRouteByName('contact')}
                onClick={closeMobileNav}
              >
                <Icon name="email" size={32} color="#646A69" />
                <span className="ml-2">Newsletter</span>
              </Link>
              <div className="flex items-center space-x-4">
                <a
                  className="inline-block text-teal-900 hover:text-teal-700 transition-colors duration-200"
                  href="#"
                  aria-label="Facebook"
                >
                  <Icon name="facebook" size={20} color="currentColor" />
                </a>
                <a
                  className="inline-block text-teal-900 hover:text-teal-700 transition-colors duration-200"
                  href="#"
                  aria-label="Instagram"
                >
                  <Icon name="instagram" size={24} color="currentColor" />
                </a>
                <a
                  className="inline-block text-teal-900 hover:text-teal-700 transition-colors duration-200"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <Icon name="linkedin" size={24} color="currentColor" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Navigation);