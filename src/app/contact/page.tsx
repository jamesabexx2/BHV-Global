import React from 'react';
import { Mail } from 'lucide-react';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative w-full h-[400px]">
              <Image
                src="/images/hero/contact.jpeg"
                alt="Contact Us"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80"></div>
              <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                <div className="text-center max-w-4xl">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                      Contact Us
                  </h1>
                  <p className="text-xl text-white">
                    Get in touch with our team to discuss your wholesale needs.
                  </p>
                </div>
              </div>
            </div>
      
      {/* Contact form section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-sm">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Mail size={24} className="text-[#0B3C5D]" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Get in Touch</h2>
              <p className="text-gray-600">
                Email: <a href="mailto:info@bhvglobal.com" className="text-[#0B3C5D] hover:underline">info@bhvglobal.com</a>
              </p>
            </div>
            
            {/* Simple contact form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#0B3C5D] text-white py-2 px-4 rounded-md hover:bg-[#0A2F47] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A2F47] focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

