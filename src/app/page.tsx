// Página principal simple que no depende de componentes cliente
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/id/1076/1600/900)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              BHV Global Product Distribution
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Your trusted partner for global product distribution
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">
              Our Mission
            </h2>
            <p className="text-lg text-[#666666] leading-relaxed">
              To provide exceptional distribution services connecting manufacturers with markets worldwide through innovative logistics solutions and strategic partnerships.
            </p>
          </div>
        </div>
      </section>
      
      {/* International Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center text-black">
            International Presence
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* USA Office */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">USA Office</h3>
              <p className="text-[#666666] mb-2">123 Business Avenue, New York, NY 10001, USA</p>
              <p className="text-[#666666] mb-2">+1 (555) 123-4567</p>
              <p className="text-[#666666]">usa@bhvglobal.com</p>
            </div>
            
            {/* Mexico Office */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">Mexico Office</h3>
              <p className="text-[#666666] mb-2">Av. Reforma 222, Col. Juárez, 06600, Ciudad de México, México</p>
              <p className="text-[#666666] mb-2">+52 (55) 1234-5678</p>
              <p className="text-[#666666]">mexico@bhvglobal.com</p>
            </div>
            
            {/* Europe Office */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-black">Europe Office</h3>
              <p className="text-[#666666] mb-2">Hauptstraße 25, 10178 Berlin, Germany</p>
              <p className="text-[#666666] mb-2">+49 (30) 1234-5678</p>
              <p className="text-[#666666]">europe@bhvglobal.com</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Brands & Sectors
            </h2>
            <p className="text-lg text-[#666666]">
              We work with leading brands across various sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 w-full bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">Technology</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 w-full bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">Healthcare</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 w-full bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">Automotive</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 w-full bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black">Consumer Goods</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Contact Us
            </h2>
            <p className="text-lg text-[#666666]">
              Get in touch with our team
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4169E1]"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#4169E1] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
}
