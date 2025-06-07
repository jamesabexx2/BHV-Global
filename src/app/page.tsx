// Página principal simple que no depende de componentes cliente
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517097573548-da8a15b72060?q=80&w=1920&auto=format&fit=crop)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Where Brands Meet Business
            </h1>
            <h2 className="text-2xl md:text-3xl text-white mb-6">
              BHV GLOBAL – Wholesale Fashion, Delivered
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Powering resellers and retailers with direct access to premium shoes, bags, and apparel — trusted by top brands, shipped with precision.
            </p>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-black text-center">
              What We Do
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                BHV GLOBAL is a U.S.-based wholesale distributor specializing in brand-name footwear, fashion, and accessories.
              </p>
              <p>
                We help Amazon sellers, fashion retailers, and B2B buyers source fast-moving inventory with total confidence.
              </p>
              <p className="font-medium">
                From curated selections to bulk orders, we simplify wholesale — so you can focus on selling.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Brands We Work With
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* These would ideally be replaced with actual brand logos */}
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">Nike</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">NEW BALANCA</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">Adidas</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">KEEN</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">Timberland</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">Altra</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">UGG</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">Hoka</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">Brooks</p>
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm h-20">
              <p className="font-bold text-gray-800">On Running</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Ready to grow your business with premium wholesale fashion?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Connect with our team to discuss your inventory needs and discover how BHV GLOBAL can support your retail success.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#0B3C5D] text-white py-3 px-8 rounded-md hover:bg-[#0A2F47] transition-colors text-lg font-medium"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
