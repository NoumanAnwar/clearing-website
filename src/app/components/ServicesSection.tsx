"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Customs Clearing", img: "/customs.jpg" },
  { title: "Freight Forwarding", img: "/freight.jpeg" },
  { title: "Transportation", img: "/transport.jpg" },
  { title: "Warehousing", img: "/warehouse.jpg" },
  { title: "DG Cargo Handling", img: "/dg.jpg" },
  { title: "Import/Export Consultancy", img: "/consultancy.jpg" },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-linear-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-14 text-gray-900">
          Our Services
        </h2>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Wrapper */}
              <div className="relative overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="h-60 w-full object-cover rounded-t-2xl transform transition-all duration-500 group-hover:-translate-y-3"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-60 transition-all duration-500 rounded-t-2xl"></div>
              </div>

              {/* Card Content */}
              <div className="p-8 text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Professional {service.title.toLowerCase()} services with fast,
                  reliable execution across all major Pakistani ports.
                </p>

                {/* Updated Button */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-linear-to-r from-blue-600 to-teal-400 hover:from-teal-400 hover:to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
