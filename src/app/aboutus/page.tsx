"use client";

import { motion } from "framer-motion";
import { Users, Star, Eye, Flag } from "lucide-react";

const teamMembers = [
  { name: "John Doe", role: "CEO", img: "/ceo.jpg" },
  { name: "Jane Smith", role: "COO", img: "/team1.jpg" },
  { name: "Ali Khan", role: "CTO", img: "/team2.jpg" },
  { name: "Sara Ahmed", role: "CFO", img: "/team3.jpg" },
];

export default function AboutUsSection() {
  return (
    <section className="w-full px-4 md:px-16 lg:px-24 xl:px-32 py-24 bg-linear-to-r from-blue-50 via-white to-blue-50">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Learn more about OCEAN WORLD LOGISTICS, our vision, mission, and the team driving our success.
        </p>
      </motion.div>

      {/* CEO Message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-8 mb-20"
      >
        <img
          src="/ceo.jpg"
          alt="CEO"
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl"
        />
        <div className="md:w-2/3">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">CEO Message</h2>
          <p className="text-gray-700 mb-4">
            At OCEAN WORLD LOGISTICS, we are committed to delivering the highest level of logistics solutions to our clients worldwide. Our focus on innovation, integrity, and excellence drives every decision we make.
          </p>
          <p className="text-gray-700 font-semibold">- John Doe, CEO</p>
        </div>
      </motion.div>

      {/* Who We Are */}
      <motion.div
        className="mb-20 grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <Users className="w-6 h-6 text-blue-600" /> Who We Are?
          </h2>
          <p className="text-gray-700">
            OCEAN WORLD LOGISTICS is a leading logistics and freight forwarding company, specializing in sea, air, and land shipments across the globe. We provide tailor-made solutions for businesses of all sizes, ensuring reliability, speed, and safety.
          </p>
        </div>
        <img
          src="/who-we-are.jpg"
          alt="Who We Are"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </motion.div>

      {/* Why Us */}
      <motion.div
        className="mb-20 grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/why-us.jpg"
          alt="Why Us"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" /> Why Us
          </h2>
          <p className="text-gray-700">
            We focus on efficiency, transparency, and customer satisfaction. Our expert team leverages advanced technology and global partnerships to provide unparalleled logistics services for your business.
          </p>
        </div>
      </motion.div>

      {/* Vision & Mission */}
      <motion.div
        className="mb-20 grid md:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <Eye className="w-6 h-6 text-blue-600" /> Vision
          </h2>
          <p className="text-gray-700 mb-6">
            To be the most trusted and innovative logistics partner globally, delivering solutions that empower businesses and communities.
          </p>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
            <Flag className="w-6 h-6 text-green-600" /> Mission
          </h2>
          <p className="text-gray-700">
            Our mission is to provide seamless logistics solutions with efficiency, reliability, and innovation, ensuring customer satisfaction at every step.
          </p>
        </div>
        <img
          src="/vision-mission.jpg"
          alt="Vision & Mission"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </motion.div>

      {/* Our Team */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">
          Our Team
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-center p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
