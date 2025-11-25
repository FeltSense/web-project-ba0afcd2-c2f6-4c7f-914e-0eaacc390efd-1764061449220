'use client'

import { Home, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: 'Featured Properties', href: '#services' },
    { label: 'Our Services', href: '#services' },
    { label: 'Investment Plans', href: '#pricing' },
    { label: 'Client Stories', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' }
  ];

  const propertyTypes = [
    { label: 'Luxury Villas', href: '#services' },
    { label: 'Penthouses', href: '#services' },
    { label: 'Waterfront Estates', href: '#services' },
    { label: 'Urban Residences', href: '#services' },
    { label: 'Investment Properties', href: '#pricing' }
  ];

  const resources = [
    { label: 'Property Valuation', href: '#services' },
    { label: 'Buyer\'s Guide', href: '#contact' },
    { label: 'Seller\'s Guide', href: '#contact' },
    { label: 'Market Insights', href: '#testimonials' },
    { label: 'Financing Options', href: '#pricing' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#contact', label: 'Facebook' },
    { icon: Instagram, href: '#contact', label: 'Instagram' },
    { icon: Linkedin, href: '#contact', label: 'LinkedIn' },
    { icon: Twitter, href: '#contact', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section with Logo and Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-2.5 rounded-lg">
                <Home className="h-6 w-6 text-amber-500" />
              </div>
              <span className="text-2xl font-bold text-white">Luxe Properties</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Elevating luxury real estate experiences with unparalleled service, exclusive properties, 
              and a commitment to turning your property dreams into reality.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  123 Luxury Avenue, Premium District<br />New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="#contact" className="text-sm text-gray-400 group-hover:text-amber-500 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a href="#contact" className="text-sm text-gray-400 group-hover:text-amber-500 transition-colors">
                  hello@luxeproperties.com
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                  Quick Links
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 -mb-2"></span>
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Property Types */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                  Property Types
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 -mb-2"></span>
                </h3>
                <ul className="space-y-3">
                  {propertyTypes.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                  Resources
                  <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-500 -mb-2"></span>
                </h3>
                <ul className="space-y-3">
                  {resources.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-amber-500 transition-colors text-sm flex items-center group"
                      >
                        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © {currentYear} Luxe Properties. All rights reserved. | Crafted with excellence
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500 hidden sm:block">Follow Us:</span>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 p-2.5 rounded-lg hover:bg-blue-900 hover:scale-110 transition-all duration-300 group"
                  >
                    <Icon className="h-4 w-4 text-gray-400 group-hover:text-amber-500 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-gray-800">
          <a href="#contact" className="text-xs text-gray-500 hover:text-amber-500 transition-colors">
            Privacy Policy
          </a>
          <span className="text-gray-700">•</span>
          <a href="#contact" className="text-xs text-gray-500 hover:text-amber-500 transition-colors">
            Terms of Service
          </a>
          <span className="text-gray-700">•</span>
          <a href="#contact" className="text-xs text-gray-500 hover:text-amber-500 transition-colors">
            Cookie Policy
          </a>
          <span className="text-gray-700">•</span>
          <a href="#contact" className="text-xs text-gray-500 hover:text-amber-500 transition-colors">
            Accessibility
          </a>
        </div>
      </div>

      {/* Premium Accent Bar */}
      <div className="h-1 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900"></div>
    </footer>
  )
}
