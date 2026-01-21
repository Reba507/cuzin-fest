import React, { useMemo } from 'react';
import partnersData from '@data/partners';
import { Icon } from '@components/ui';

const PricingHero = () => {
  // Pull EVERYTHING from partners.js
  const partners = useMemo(() => partnersData, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-12 lg:py-24 overflow-hidden">
        <img
          className="absolute top-0 right-0"
          src="images/pricing-waves-right-top.png"
          alt=""
        />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h1 className="font-heading text-5xl sm:text-6xl tracking-xs mb-6">
              Our Partners and speakers
            </h1>
            <p className="text-lg text-gray-700">
              At CuzinFest, we’re proud to collaborate with leading companies and visionary entrepreneurs who send their directors and representatives to share unfiltered insights straight from the front lines. These industry trailblazers open up about how businesses truly operate—from navigating tough market challenges and financial realities to the practical steps, mindset shifts, and bold moves that helped them build, scale, and sustain success. Their talks deliver actionable wisdom that empowers cousins to turn ideas into thriving ventures and careers, all while fostering genuine connections in a family-first environment.
            </p>
          </div>
        </div>
      </section>

      {/* COMPANIES SECTION */}
      <section className="pb-24 bg-lime">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Icon name="circle-dot" size={8} color="#022C22" />
            <span className="ml-2 text-sm font-medium">
              Partnered Companies ({partners.length})
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-lime-500 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {partner.company}
                </h3>

                <p className="text-sm mb-1">
                  <strong>Director:</strong> {partner.director}
                </p>

                <p className="text-sm mb-1">
                  <strong>Contact:</strong> {partner.phone}
                </p>

                <p className="text-sm break-all mb-1">
                  <strong>Email:</strong> {partner.email}
                </p>
                

                {partner.altEmail && (
                  <p className="text-sm break-all">
                    <strong>Alt Email:</strong> {partner.altEmail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingHero;
