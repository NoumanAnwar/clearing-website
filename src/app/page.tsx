import Hero from "@/app/components/Hero";
import ServicesSection from "@/app/components/ServicesSection";
import ContactSection from "@/app/components/ContactSection";


export default function Home() {
  return (
    <main className="bg-linear-to-b from-blue-50 via-white to-gray-50">
      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
     
      {/* Services Section */}
      <ServicesSection />

      {/* Contact Section */}
      <ContactSection />

    </main>
  );
}
