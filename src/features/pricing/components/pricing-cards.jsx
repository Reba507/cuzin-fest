const PricingCards = ({ plans }) => {
  if (!plans || plans.length === 0) return null;

  return (
    <div className="container mx-auto px-4 relative">
      <div className="flex flex-wrap -mx-4 mb-24">
        {plans.map((plan) => (
          <div key={plan.id} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className={`relative pt-14 pb-8 px-8 rounded-2xl overflow-hidden ${plan.recommended ? 'bg-lime-500' : 'bg-orange-50'}`}>
              {plan.recommended && (
                <div className="absolute top-0 left-0 w-full py-0.5 flex items-center justify-center bg-teal-900">
                  <span className="text-xs leading-7 text-white">Recommended</span>
                </div>
              )}
              {!plan.recommended && (
                <div className="absolute top-0 left-0 h-1 w-full bg-lime-500"></div>
              )}
              <span className="block text-2xl font-medium mb-6">{plan.name}</span>
              <div className="flex items-center mb-6">
                <span className="text-6xl">{plan.price}</span>
                {plan.price !== 'Custom' && (
                  <span className="ml-4 text-xl font-medium text-gray-700">per month</span>
                )}
              </div>
              <p className="text-lg mb-8">{plan.description}</p>
              <a className="inline-flex w-full group py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="#">
                <span className="mr-2">Get started</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 10H15.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.5 4.75L15.75 10L10.5 15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;