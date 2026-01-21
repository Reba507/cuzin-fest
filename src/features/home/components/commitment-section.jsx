import images from '@data/commitment-images.json';

const CommitmentSection = () => {
  if (!images) return null;

  return (
    <section className="py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-24 text-center">
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl tracking-sm mb-16">
            Our commitment to green energy is paving the way for a cleaner, healthier planet.
          </h1>
          <a
            className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
            href="#"
          >
            Get in touch
          </a>
        </div>
        <div className="flex justify-center">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 h-full max-w-xs sm:max-w-md md:max-w-xl mr-4 sm:mr-8 ${
                index >= 4 ? 'hidden md:block sm:flex-shrink-0 h-full max-w-md md:max-w-xl mr-4 sm:mr-8' : ''
              }`}
            >
              <img
                className="block w-full"
                src={image}
                alt={`Commitment image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;