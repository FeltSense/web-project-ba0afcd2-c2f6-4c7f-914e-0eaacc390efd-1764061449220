'use client';

import { Check, Star, Crown } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 px-4 py-2 rounded-full mb-4">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-semibold">Exclusive Pre-Order Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Luxury Living, Accessible Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your premium property consultation at an exclusive pre-launch rate
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
                <Star className="w-4 h-4 fill-white" />
                <span className="font-bold text-sm">Limited Time Offer</span>
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-amber-500/20 overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* Card Header */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Premium Access</h3>
                <p className="text-blue-200 mb-6">Complete Property Showcase Package</p>
                
                <div className="flex items-end justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold">$29</span>
                </div>
                <p className="text-blue-200 mt-2">Pre-Order Special</p>
              </div>

              {/* Card Body */}
              <div className="p-8">
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {[
                    'Premium Property Listings Access',
                    'Virtual Tour Experiences',
                    'Personalized Consultation Session',
                    'Market Analysis & Insights',
                    'Exclusive Neighborhood Guides',
                    'Priority Customer Support',
                    'Investment Portfolio Review',
                    'Lifetime Platform Updates'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div className="w-5 h-5 rounded-full bg-amber-500/10 flex items-center justify-center">
                          <Check className="w-3 h-3 text-amber-600" strokeWidth={3} />
                        </div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stripe Button */}
                <button
                  onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                  className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Pre-Order Now - $29
                </button>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-600" />
                      <span>Money-Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">
              <span className="font-semibold text-blue-900">Limited slots available</span> - Secure your spot today
            </p>
            <p className="text-sm text-gray-500">
              Price increases to $99 after pre-order period ends
            </p>
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: '500+', label: 'Properties Listed', icon: '🏠' },
              { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { number: '24/7', label: 'Support Available', icon: '💬' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-900 mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
