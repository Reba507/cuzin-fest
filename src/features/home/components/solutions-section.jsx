import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import partnersData from '@data/partners';
import { Icon } from '@components/ui';

const SolutionsSection = () => {
  const partners = useMemo(() => partnersData, []);

  return (
    <section id="solutions" className="p-4 bg-white">
      <div className="pt-16 pb-24 px-5 xs:px-8 xl:px-12 bg-lime-500 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <Icon name="circle-dot" size={8} color="#022C22" />
            <span className="inline-block ml-2 text-sm font-medium">
              Companies
            </span>
          </div>

          <div className="border-t border-teal-900 border-opacity-25 pt-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
              <h1 className="font-heading text-4xl sm:text-6xl">
                Companies we work with
              </h1>

              {/* See more companies button */}
              <Link
                to="/pricing"
                className="mt-6 lg:mt-0 inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-teal-900 transition"
              >
                See more companies
                <Icon name="arrow-right" size={16} className="ml-3" />
              </Link>
            </div>

            <div className="flex flex-wrap -mx-4">
              {partners.slice(0, 3).map((partner, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-10"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm h-full">
                    <h5 className="text-xl font-semibold mb-2">
                      {partner.company}
                    </h5>

                    <p className="text-sm mb-1">
                      <strong>Director:</strong> {partner.director}
                    </p>

                    <p className="text-sm mb-1">
                      <strong>Contact:</strong> {partner.phone}
                    </p>

                    <p className="text-sm break-all">
                      <strong>Email:</strong> {partner.email}
                    </p>

                    {partner.altEmail && (
                      <p className="text-sm break-all">
                        <strong>Alt Email:</strong> {partner.altEmail}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
