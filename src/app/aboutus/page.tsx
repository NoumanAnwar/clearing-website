"use client";

import { motion } from "framer-motion";
import { Users, Star, Eye, Flag } from "lucide-react";

const teamMembers = [
  { name: "John Doe", role: "CEO", img: "/ceo.webp" },
  { name: "Jane Smith", role: "COO", img: "/team1.avif" },
  { name: "Ali Khan", role: "CTO", img: "/team2.avif" },
  { name: "Sara Ahmed", role: "CFO", img: "/team3.avif" },
];

export default function AboutUsSection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20 lg:py-28 bg-gradient-to-r from-blue-50 via-white to-blue-50">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 sm:mb-20"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          About Us
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Learn more about OCEAN WORLD LOGISTICS, our mission, vision, and the team leading our success.
        </p>
      </motion.div>

      {/* CEO Message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center gap-10 mb-20"
      >
        <div className="w-full md:w-auto flex justify-center">
          <img
            src="/ceo.webp"
            alt="CEO"
            className="rounded-3xl shadow-lg object-cover aspect-square w-64 sm:w-72 md:w-80"
          />
        </div>

        <div className="md:w-3/4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
            CEO Message
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At OCEAN WORLD LOGISTICS, we aim to deliver world-class logistics solutions with innovation,
            transparency, and reliability. Our commitment to excellence guides every move we make.
          </p>
          <p className="text-gray-800 font-semibold mt-4">– John Doe, CEO</p>
        </div>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center"
      >
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center justify-center md:justify-start gap-2 mb-4">
            <Users className="text-blue-700" /> Who We Are
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We are a trusted logistics partner offering reliable freight management, customs clearance,
            warehousing, and global transportation solutions with full transparency and operational excellence.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <img
            src="/pic01.png"
            alt="Who We Are"
            className="rounded-3xl shadow-xl object-cover w-full aspect-video"
          />
        </div>
      </motion.div>

      {/* Why Us */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center"
      >
        <div>
          <img
            src="/pic02.avif"
            alt="Why Us"
            className="rounded-3xl shadow-xl object-cover w-full aspect-video"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center justify-center md:justify-start gap-2 mb-4">
            <Star className="text-yellow-500" /> Why Us
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            We guarantee efficiency, global reach, transparency, and dedicated customer support.
            Our technology-driven infrastructure ensures your cargo moves with precision.
          </p>
        </div>
      </motion.div>

      {/* Vision & Mission */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center"
      >
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center justify-center md:justify-start gap-2 mb-4">
            <Eye className="text-blue-600" /> Vision
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            To be the world’s most innovative and trusted logistics partner, enabling the growth of businesses globally.
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 flex items-center justify-center md:justify-start gap-2 mb-4">
            <Flag className="text-green-600" /> Mission
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            To deliver fast, seamless, and efficient logistics services powered by technology,
            expertise, and customer-first values.
          </p>
        </div>

        <div>
          <img
            src="/pic03.jpg"
            alt="Vision & Mission"
            className="rounded-3xl shadow-xl object-cover w-full aspect-video"
          />
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-12">
          Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-3xl shadow-xl p-6 text-center hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-900 mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
