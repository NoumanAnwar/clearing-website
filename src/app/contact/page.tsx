"use client";

import { MapPin, Phone, Mail, User } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="px-4 md:px-16 lg:px-24 xl:px-32 py-16 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4 mt-10"
      >
        Contact Us
      </motion.h1>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "150px" }}
        transition={{ duration: 1.2, delay: 0.8 }}
        className="h-1 bg-blue-700 rounded-full mx-auto mb-12"
      ></motion.div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side: Image + Map */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <img
            src="/office.webp"
            alt="Office"
            className="rounded-xl shadow-lg object-cover w-full h-96"
          />
          <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Office</h2>

            {/* Office Address */}
            <p className="flex items-center gap-2 mb-2 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-700" />
              123 Ocean World Road, Karachi, Pakistan
            </p>

            {/* Contact Person */}
            <p className="flex items-center gap-2 mb-2 text-gray-700">
              <User className="w-5 h-5 text-blue-700" />
              Contact: Mr. Nouman Ahmed
            </p>

            {/* Phone */}
            <p className="flex items-center gap-2 mb-2 text-gray-700">
              <Phone className="w-5 h-5 text-blue-700" /> +92 21 3456 7890
            </p>

            {/* Email */}
            <p className="flex items-center gap-2 mb-2 text-gray-700">
              <Mail className="w-5 h-5 text-blue-700" /> info@oceanworldlogistics.com
            </p>

            {/* Google Map */}
            <div className="mt-4">
              <iframe
                title="Ocean World Logistics Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.123456!2d67.00123!3d24.91234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e8a1234567%3A0xabcdef1234567890!2sOcean%20World%20Logistics!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                width="100%"
                height="250"
                className="rounded-lg border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Right Side: Additional Office Info */}
        <div className="lg:w-1/2 bg-blue-50 p-8 rounded-xl shadow-lg flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Office Details</h2>
          <p className="text-gray-700">
            <span className="font-semibold">Office Name:</span> Ocean World Logistics
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Address:</span> 123 Ocean World Road, Karachi, Pakistan
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Contact Person:</span> Mr. Nouman Ahmed
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span> +92 21 3456 7890
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span> info@oceanworldlogistics.com
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Office Hours:</span> Mon - Fri, 9:00 AM - 6:00 PM
          </p>
        </div>
      </div>
    </section>
  );
}
