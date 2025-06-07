import React from 'react';

export default function UngatingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative w-full h-[300px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Ungating Services
          </h1>
        </div>
      </section>
      
      {/* Ungating content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Looking to get ungated for major fashion brands on Amazon?
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-16">
              Join our exclusive mailing list and gain access to expert support, documentation, and early brand opportunities.
            </p>
            
            {/* Subscription form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-black">Subscribe to Our Ungating List</h3>
              <form className="space-y-6 max-w-md mx-auto">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B3C5D]"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#0B3C5D] text-white py-3 px-4 rounded-md hover:bg-[#0A2F47] transition-colors font-medium"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Or contact us directly at: <a href="mailto:info@bhvglobal.com" className="text-[#0B3C5D] font-medium hover:underline">info@bhvglobal.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
