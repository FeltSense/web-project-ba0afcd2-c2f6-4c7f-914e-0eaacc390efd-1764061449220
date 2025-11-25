'use client';

import { Search, Home, Video, UserCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Property Showcase",
      description: "Immersive carousel displays with full-width hero sections that highlight your property's finest features and architectural details.",
      gradient: "from-blue-900 to-blue-800"
    },
    {
      icon: Search,
      title: "Advanced Search",
      description: "Sophisticated filtering system for location, price range, bedrooms, and property type to find your perfect luxury home.",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      icon: Video,
      title: "Virtual Tours",
      description: "Interactive 360° property galleries and virtual tour integration for an authentic viewing experience from anywhere.",
      gradient: "from-blue-900 to-blue-800"
    },
    {
      icon: UserCircle,
      title: "Expert Agents",
      description: "Connect with experienced real estate professionals featuring detailed profiles, specializations, and direct contact access.",
      gradient: "from-amber-500 to-amber-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Elevated Real Estate Services
          </h2>
          <p className="text-lg text-gray-600">
            Experience luxury property search with cutting-edge technology and personalized service
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Decorative Bottom Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ready to discover your dream property?
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}
