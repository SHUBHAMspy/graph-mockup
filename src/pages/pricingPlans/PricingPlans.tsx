import React, { useState } from 'react';

const PricingPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('Basic');

  const plans = [
    {
      name: 'Basic Plan',
      price: '$4/month/user',
      features: ['Up to 10 graphs', 'Up to 500 chatbot queries'],
    },
    {
      name: 'Pro Plan',
      price: '$8/month/user',
      features: ['Up to 50 graphs', 'Up to 1000 chatbot queries', 'Email + live chat support'],
    },
    {
      name: 'Enterprise Plan',
      price: 'Contact for price',
      features: ['Unlimited graphs', 'Ability to upload custom PDFs', '24/7 phone + email support'],
    },
  ];

  const handlePlanChange = (planName: string) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`p-6 border ${
              selectedPlan === plan.name ? 'border-blue-500' : 'border-gray-300'
            } rounded-md`}
          >
            <h2 className="text-xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.price}</p>
            <ul className="list-disc ml-6">
              {plan.features.map((feature) => (
                <li key={feature} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 px-4 py-2 bg-blue-500 text-white rounded-md ${
                selectedPlan === plan.name && 'bg-blue-700'
              }`}
              onClick={() => handlePlanChange(plan.name)}
            >
              Select Plan
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Selected Plan: {selectedPlan}</h2>
        {plans
          .filter((plan) => plan.name === selectedPlan)
          .map((selectedPlanDetails) => (
            <div key={selectedPlanDetails.name} className="border p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">{selectedPlanDetails.name}</h3>
              <p className="text-gray-600 mb-2">{selectedPlanDetails.price}</p>
              <ul className="list-disc ml-6">
                {selectedPlanDetails.features.map((feature) => (
                  <li key={feature} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PricingPlans;