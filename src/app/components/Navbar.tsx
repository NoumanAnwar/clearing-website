import React from "react";
import { Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-linear-to-r from-black via-white-600 to-blue-800 shadow-lg p-4 font-sans fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo + Name */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <span className="text-white font-extrabold text-2xl md:text-3xl tracking-tight"
           style={{ fontFamily: "Orbitron, sans-serif" }}>
            OCEAN WORLD LOGISTICS
          </span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium text-base md:text-lg">
          {[
            { href: "/#", label: "Home" },
            { href: "./aboutus", label: "About Us" },
            { href: "/services", label: "Services" },
            { href: "/ourclients", label: "Our Clients" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-1 rounded-lg hover:bg-white/25 hover:scale-105 transition-all"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 text-white">
          <Link
            href="/contact"
            className="p-2 rounded-lg hover:bg-white/25 transition-all"
          >
            <MapPin className="w-5 h-5 md:w-6 md:h-6" />
          </Link>

          <Link
            href="/call"
            className="p-2 rounded-lg hover:bg-white/25 transition-all"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
