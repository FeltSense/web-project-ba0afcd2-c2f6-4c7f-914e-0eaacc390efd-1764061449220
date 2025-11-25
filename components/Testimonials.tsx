'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Victoria Ashford",
      role: "CEO, Ashford Investments",
      image: "https://i.pravatar.cc/150?img=47",
      content: "The attention to detail and understanding of luxury real estate is unparalleled. They didn't just find us a property—they found our legacy home.",
      rating: 5
    },
    {
      name: "Marcus Chen",
      role: "Tech Entrepreneur",
      image: "https://i.pravatar.cc/150?img=13",
      content: "From our first viewing to closing, every interaction felt personalized and premium. This is how high-end real estate should be done.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Interior Designer",
      image: "https://i.pravatar.cc/150?img=32",
      content: "Working with true professionals who understand that luxury is in the details. They curated properties that aligned perfectly with our aesthetic vision.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm">Client Stories</span>
            <div className="h-0.5 bg-amber-500 mt-2 w-1/2 mx-auto"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mt-4">
            Trusted by Discerning Clients
          </h2>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative bg-white rounded-2xl shadow-2xl p-12 md:p-16 max-w-4xl mx-auto border border-gray-100">
          <div className="absolute -top-6 left-12">
            <div className="bg-amber-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-3xl font-serif">
              "
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              {testimonials[activeIndex].content}
            </p>

            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-amber-500/20">
                <Image
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-blue-900 text-lg">{testimonials[activeIndex].name}</h4>
                <p className="text-gray-600 text-sm">{testimonials[activeIndex].role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex 
                  ? 'w-12 h-3 bg-amber-500' 
                  : 'w-3 h-3 bg-gray-300 hover:bg-amber-400'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
