const AboutDetails = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-24">
          <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
            <div>
              <h1 className="font-heading text-6xl">About us</h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="lg:max-w-lg md:ml-auto">
              <p className="text-xl font-medium mb-10">
               A platform to share and discuss opportunities and build stronger relationships with cousins while engaging directly with entrepreneurs and networking to understand the challenges in the market and their financial implications. The aim is to find ways to empower others to grow and improve sustainability in their business endevours and career.
              </p>
              <a className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-teal-900 hover:text-lime-500 border border-lime-500 hover:border-teal-900 bg-lime-500 hover:bg-teal-900 rounded-full transition duration-300" href="#">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;