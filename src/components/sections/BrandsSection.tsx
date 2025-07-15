'use client';

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BrandsSection = () => {
  
  const brands = [
    { name: 'Nike', logo: '/images/brands/logos/NIKE.png' },
    { name: 'New Balance', logo: '/images/brands/logos/NEW BALANCE.png' },
    { name: 'Adidas', logo: '/images/brands/logos/ADIDAS.png' },
    { name: 'Keen', logo: '/images/brands/logos/KEEN.png' },
    { name: 'Timberland', logo: '/images/brands/logos/Timberland.png' },
    { name: 'Altra', logo: '/images/brands/logos/ALTRA.png' },
    { name: 'UGG', logo: '/images/brands/logos/UGG.png' },
    { name: 'Hoka', logo: '/images/brands/logos/HOKA.png' },
    { name: 'Brooks', logo: '/images/brands/logos/BROOKS.png' },
    { name: 'On Running', logo: '/images/brands/logos/ON RUNNING.png' },
    { name: 'Merrel', logo: '/images/brands/logos/MERREL.png' },
    { name: 'Crocs', logo: '/images/brands/logos/CROCS.png' },
    { name: 'Ecco', logo: '/images/brands/logos/ECCO.png' },
    { name: 'Vionic', logo: '/images/brands/logos/VIONIC.png' },
    { name: 'Osprey', logo: '/images/brands/logos/OSPREY.png' },
    { name: 'Jansport', logo: '/images/brands/logos/JANSPORT.png' },
    { name: 'New Era', logo: '/images/brands/logos/NEW ERA.png' }
  ];
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      }
    ]
  };
  
  return (
    <section id="brands" className="py-16 md:py-24" style={{ backgroundColor: 'var(--secondary)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Brands & Sectors
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            We work with leading brands across various sectors
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="brand-carousel-container py-8">
            <Slider {...settings}>
              {brands.map((brand, index) => (
                <div key={index} className="px-4 py-4 flex justify-center items-center relative">
                  <div className="rounded-lg shadow-md p-4 flex items-center justify-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ backgroundColor: 'var(--background)' }}>
                    <div className="relative h-24 w-full">
                      <Image 
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        style={{ objectFit: 'contain' }}
                        className="p-2"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      
      {/* Custom CSS for carousel arrows */}
      <style jsx global>{`
        .slick-prev, .slick-next {
          width: 40px;
          height: 40px;
          z-index: 10;
        }
        
        .slick-prev {
          left: -10px;
        }
        
        .slick-next {
          right: -10px;
        }
        
        .slick-prev:before, .slick-next:before {
          font-size: 30px;
          color: var(--text-primary);
          opacity: 0.75;
        }
        
        .slick-prev:hover:before, .slick-next:hover:before {
          opacity: 1;
        }
        
        .slick-slide {
          margin: 0 10px;
        }

        .slick-track {
          display: flex;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default BrandsSection;
