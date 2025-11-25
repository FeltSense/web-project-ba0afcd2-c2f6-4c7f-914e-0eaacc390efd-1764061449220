import Image from 'next/image';
import { MapPin, Home, Award, ArrowRight } from 'lucide-react';

export default function Hero() {
  const features = [
    { icon: Home, label: '500+ Premium Properties', value: '500+' },
    { icon: MapPin, label: 'Prime Locations', value: '50+' },
    { icon: Award, label: 'Years of Excellence', value: '25+' }
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-900/5 border border-blue-900/10 rounded-full px-5 py-2.5 backdrop-blur-sm">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-blue-900 font-semibold text-sm tracking-wide">LUXURY REAL ESTATE SINCE 1998</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-900 leading-tight">
                Discover Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mt-2">
                  Dream Estate
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Experience unparalleled luxury in the world's most prestigious locations. 
                Your journey to extraordinary living begins here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="group bg-blue-900 text-white px-8 py-4 rounded-xl hover:bg-blue-800 hover:shadow-2xl hover:shadow-blue-900/40 transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="group bg-white text-blue-900 px-8 py-4 rounded-xl border-2 border-blue-900 hover:bg-blue-900 hover:text-white hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
              >
                Schedule Viewing
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <feature.icon className="w-5 h-5 text-amber-500" />
                    <span className="text-2xl font-bold text-blue-900">{feature.value}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-tight">{feature.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Property Showcase */}
          <div className="relative lg:h-[700px] h-[600px]">
            {/* Main Property Image */}
            <div className="absolute top-0 right-0 w-full lg:w-[90%] h-[70%] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80"
                alt="Luxury modern estate"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-amber-500 text-white px-5 py-2.5 rounded-lg font-bold shadow-lg backdrop-blur-sm">
                <span className="text-sm">FEATURED</span>
              </div>
              {/* Price Tag */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-lg">
                <p className="text-xs text-gray-600 mb-1">Starting from</p>
                <p className="text-2xl font-bold text-blue-900">$4.5M</p>
              </div>
            </div>

            {/* Secondary Property Image */}
            <div className="absolute bottom-0 left-0 w-[55%] h-[40%] rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500 border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
                alt="Luxury property interior"
                fill
                className="object-cover"
              />
              {/* Interior Badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent flex items-end p-4">
                <div className="text-white">
                  <p className="font-semibold text-sm">Designer Interiors</p>
                  <p className="text-xs text-amber-500">Premium Finishes</p>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute top-[45%] left-[45%] bg-white rounded-xl shadow-2xl p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300 hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-900">98%</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-900/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
