"use client";

import { motion } from "framer-motion";

const clients = [
  "The Karachi Electric Supply Corporation Limited",
  "Heavy Mechanical Complex Taxila",
  "Water & Sewerage Development Authority",
  "Sui Northern Gas Pipe Line Limited",
  "Marubeni Power Development",
  "Riaz Bottlers (Pvt.) Ltd. (Pepsi)",
  "Kohat Cement Limited. (Project of state cement)",
  "Lasmo Oil Pakistan",
  "National Fertilizer Corporation of Pakistan",
  "Oil & Gas Development Corporation",
  "Pakistan Steel Mills Corporation",
  "Ramzan Flour Mills",
  "Sigma Refrigeration",
  "Meherban Seed Corporation",
  "Bashir Pipe Industries",
  "Abdullah Sugar Mills LTD",
  "Aftab Feeds Mills LTD",
  "Saritow Spinning Mills",
  "Fatima Fertilizer Co. LTD",
  "J.K Spinning Mills LTD",
  "Etihad Sugar Mills",
  "Pakistan Petroleum LTD",
  "Pakistan International Airlines",
  "Thal Jute Mills Limited",
  "Siemens (Pakistan) Limited",
  "World Food Program",
  "Trading Corporation of Pakistan",
  "Sialkot International Airport",
  "Honda Atlas",
  "Tetra Pak (Pvt) LTD",
  "Diamond Paint (Pvt) LTD",
  "Nestle (Pvt) LTD",
  "Lifestyle Traders",
];

export default function OurClients() {
  return (
    <section className="py-24 bg-linear-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center relative">
        {/* Heading with background image */}
        <div className="relative mb-12">
          <img
            src="/hero2.jpg" // replace with your image path
            alt="Clients Background"
            className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-20 -z-10"
          />
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4"
          >
            Our Clients
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="h-1 bg-blue-700 mt-2 rounded-full mx-auto"
          ></motion.div>
        </div>

        {/* Clients Grid */}
        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="p-4 bg-white shadow-lg rounded-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <p className="text-gray-800 font-medium text-sm md:text-base">
                {client}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
