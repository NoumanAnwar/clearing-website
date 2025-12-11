"use client";
import React, { useState } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-linear-to-r from-black via-slate-900 to-blue-800 shadow-lg p-4 font-sans fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
          <span
            className="text-white font-extrabold text-xl md:text-2xl tracking-tight"
            style={{ fontFamily: "Orbitron, sans-serif" }}
          >
            OCEAN WORLD LOGISTICS
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium text-base">
          {[
            { href: "/", label: "Home" },
            { href: "/aboutus", label: "About Us" },
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
        <div className="hidden md:flex items-center space-x-4 text-white">
          <Link href="/contact" className="p-2 hover:bg-white/25 rounded-lg">
            <MapPin className="w-6 h-6" />
          </Link>
          <Link href="/call" className="p-2 hover:bg-white/25 rounded-lg">
            <Phone className="w-6 h-6" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white"
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden">
          <div className="fixed top-0 right-0 w-64 h-full bg-slate-900 shadow-xl p-6 text-white">

            {/* Close */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Sidebar Links */}
            <ul className="space-y-6 text-lg mt-16 font-medium">
              {[
                { href: "/", label: "Home" },
                { href: "/aboutus", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/ourclients", label: "Our Clients" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-blue-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Sidebar Icons */}
            <div className="flex space-x-6 mt-10">
              <Link href="/contact">
                <MapPin className="w-6 h-6" />
              </Link>
              <Link href="/call">
                <Phone className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
