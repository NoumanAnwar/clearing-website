'use client';
import Image from 'next/image';
import React from 'react';
import Pic24 from '@/app/image/24.jpg';
import Pic25 from '@/app/image/25.jpg';
import Pic26 from '@/app/image/26.jpg';
import Pic27 from '@/app/image/27.jpg';

const partners = [
  { name: 'Karachi Chamber of Commerce', image: Pic24 },
  { name: 'ISO Certification', image: Pic25 },
  { name: 'REAP Certification', image: Pic26 },
  { name: 'National Tax Certificate', image: Pic27 },
];

const PartnersSlider = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12">
        Certification & Partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
        {partners.map((partner, idx) => (
          <div key={idx} className="w-full max-w-[180px] group">
            <div className="relative w-full h-24 sm:h-28 md:h-32 mx-auto transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
              <Image
                src={partner.image}
                alt={partner.name}
                fill
                className="object-contain rounded-md"
              />
            </div>
            <p className="text-sm text-gray-700 mt-3 font-medium">{partner.name}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-500 mt-12 text-sm italic">
        If you like something, feel free to <span className="text-green-700 font-semibold">reach out</span> or learn more about us.
      </p>
    </section>
  );
};

export default PartnersSlider;
