import React from 'react';

const ComparisonTable = ({ plans, features }) => {
  if (!plans || !features) return null;

  const CheckIcon = () => (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666504" width="20" height="20" rx="10" fill="#BEF264" />
      <path d="M15.4667 6.40002L8.8667 13L5.8667 10" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const CrossIcon = () => (
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.666504" width="20" height="20" rx="10" fill="#EDF2F1" />
      <path d="M14.2664 6.40002L7.06641 13.6M7.06641 6.40002L14.2664 13.6" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="container mx-auto px-4 relative">
      <div className="pb-4 overflow-x-scroll">
        <h4 className="font-heading text-3xl font-medium text-center mb-8">Compare benefits</h4>
        <table className="min-w-max">
          <thead>
            <tr>
              <th className="w-72 pr-4"></th>
              {plans.map((plan) => (
                <th key={plan.id} className="w-72 px-4">
                  <div className="py-4 px-2 shadow-md rounded-2xl">
                    <span className="block font-medium">{plan.name}</span>
                    <div className="flex items-center justify-center">
                      <span className="font-medium">{plan.price}</span>
                      {plan.price !== 'Custom' && (
                        <span className="ml-1 font-medium text-gray-700">/month</span>
                      )}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((featureGroup, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <tr>
                  <td>
                    <div className={`py-8 ${groupIndex > 0 ? 'pt-12' : ''}`}>
                      <span className="text-xl font-medium">{featureGroup.category}</span>
                    </div>
                  </td>
                </tr>
                {featureGroup.items.map((feature, featureIndex) => (
                  <tr key={featureIndex}>
                    <td className="border-b">
                      <div className="py-8">
                        <span className="text-sm">{feature.name}</span>
                      </div>
                    </td>
                    {plans.map((plan, planIndex) => (
                      <td key={planIndex} className="border-b">
                        <div className="py-8 text-center">
                          {feature.values[planIndex] === true ? (
                            <span className="inline-block">
                              <CheckIcon />
                            </span>
                          ) : feature.values[planIndex] === false ? (
                            <span className="inline-block">
                              <CrossIcon />
                            </span>
                          ) : (
                            <span className="text-sm">{feature.values[planIndex]}</span>
                          )}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;