'use client';
import Image from 'next/image';
import React from 'react';
import Pic19 from '@/app/image/19.jpg';
import Pic20 from '@/app/image/20.jpg';
import Pic21 from '@/app/image/21.jpg';
import Pic22 from '@/app/image/22.jpg';
import Pic23 from '@/app/image/23.jpg';

const partners = [
  { name: 'Karachi Chamber of Commerce', image: Pic19 },
  { name: 'Rice Exporters Association', image: Pic20 },
  { name: 'Wheat Traders', image: Pic21 },
  { name: 'World Food Programme', image: Pic22 },
  { name: 'ISO Certified', image: Pic23 },
];

const PartnersSlider = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
        Organizations We Work With
      </h2>

      <div className="relative overflow-hidden">
        <div className="flex animate-slide whitespace-nowrap gap-12">
          {[...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="inline-block">
              <div className="relative w-40 h-24 grayscale hover:grayscale-0 transition-all duration-300 mx-4">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-gray-600 mt-2">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersSlider;
