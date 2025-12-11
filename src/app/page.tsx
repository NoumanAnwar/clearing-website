import Hero from "@/app/components/Hero";
import ServicesSection from "@/app/components/ServicesSection";
import ContactSection from "@/app/components/ContactSection";
import Hero1 from "@/app/components/Hero1";
import Hero2 from "@/app/components/Hero2";

export default function Home() {
  return (
    <main className="bg-linear-to-b from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
     
      {/* Services Section */}
      <ServicesSection />

      <Hero1 />

      <Hero2 />

      {/* Contact Section */}
      <ContactSection />

    </main>
  );
}
