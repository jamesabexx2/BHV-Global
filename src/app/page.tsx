import Image from 'next/image';

// Página principal simple que no depende de componentes cliente
export default function Home() {
  const brands: { name: string; logoSrc: string }[] = [
    { name: 'Nike', logoSrc: '/images/brands/nike.jpg' },
    { name: 'New Balance', logoSrc: '/images/brands/new-balance.png' },
    { name: 'Adidas', logoSrc: '/images/brands/adidas.png' },
    { name: 'KEEN', logoSrc: '/images/brands/keen.png' },
    { name: 'Timberland', logoSrc: '/images/brands/timberland.png' },
    { name: 'Altra', logoSrc: '/images/brands/altra.png' },
    { name: 'UGG', logoSrc: '/images/brands/ugg.png' },
    { name: 'Hoka', logoSrc: '/images/brands/hoka.png' },
    { name: 'Brooks', logoSrc: '/images/brands/brooks.png' },
    { name: 'On Running', logoSrc: '/images/brands/on-running.png' },
    { name: 'Puma', logoSrc: '/images/brands/puma.png' },
    { name: 'Merrell', logoSrc: '/images/brands/merrell.png' },
    { name: 'Crocs', logoSrc: '/images/brands/crocs.png' },
    { name: 'Ecco', logoSrc: '/images/brands/ecco.png' },
    { name: 'Vionic', logoSrc: '/images/brands/vionic.png' },
    { name: 'Saucony', logoSrc: '/images/brands/saucony.png' },
    { name: 'Osprey', logoSrc: '/images/brands/osprey.png' },
    { name: 'Fjallraven', logoSrc: '/images/brands/fjallraven.png' },
    { name: 'Jansport', logoSrc: '/images/brands/jansport.png' },
    { name: 'New Era', logoSrc: '/images/brands/new-era.png' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px]">
        <Image
          src="/images/hero/home.jpg"
          alt="BHV Global Hero Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black/80"></div>
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
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm h-24 transform transition-transform hover:scale-105">
                <div className="relative w-full h-full">
                  <Image 
                    src={brand.logoSrc} 
                    alt={`${brand.name} logo`} 
                    layout="fill"
                    objectFit="contain"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
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
