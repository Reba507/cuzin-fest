import statsData from '@data/home-stats.json';

const StatsSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`w-full sm:w-1/2 md:w-1/4 px-4 ${
                index < 2 ? 'mb-10 md:mb-0' :
                index === 2 ? 'mb-10 sm:mb-0' : ''
              }`}
            >
              <div className="text-center">
                <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mb-4">
                  {stat.value}
                </h5>
                <span className="text-base lg:text-lg text-gray-700">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;