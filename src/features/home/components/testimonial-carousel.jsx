import React, { useState } from 'react';
import testimonialsData from '@data/home-testimonials.json';

const TestimonialCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slideCount = testimonialsData.length;

  const goToPrevious = () => {
    setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount);
  };

  const goToNext = () => {
    setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1);
  };

  const PreviousIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.4 16H7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M16 24.4L7.59998 16L16 7.59998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );

  const NextIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.59998 16H24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      <path d="M16 7.59998L24.4 16L16 24.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );

  return (
    <section className="py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          {/* Image Carousel */}
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <div className="max-w-lg mx-auto md:mx-0 overflow-hidden">
              <div
                className="flex -mx-4 transition-transform duration-500"
                style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
              >
                {testimonialsData.map((testimonial) => (
                  <img
                    key={testimonial.id}
                    className="block flex-shrink-0 w-full px-4"
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content Carousel */}
          <div className="w-full md:w-1/2 px-4">
            <div className="max-w-lg mx-auto md:mr-0 overflow-hidden">
              <div
                className="flex -mx-4 transition-transform duration-500"
                style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
              >
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id} className="flex-shrink-0 px-4 w-full">
                    <h4 className="text-3xl lg:text-4xl font-medium mb-10">
                      "{testimonial.quote}"
                    </h4>
                    <span className="block text-xl font-medium">{testimonial.name}</span>
                    <span className="block mb-12 lg:mb-32 text-lg text-gray-700">{testimonial.role}</span>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div>
                <button
                  className="inline-block mr-4 text-gray-700 hover:text-lime-500"
                  onClick={goToPrevious}
                  aria-label="Previous testimonial"
                >
                  <PreviousIcon />
                </button>
                <button
                  className="inline-block text-gray-700 hover:text-lime-500"
                  onClick={goToNext}
                  aria-label="Next testimonial"
                >
                  <NextIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;