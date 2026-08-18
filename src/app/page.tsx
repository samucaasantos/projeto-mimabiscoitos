import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HistorySection from "@/components/HistorySection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body-md text-on-surface bg-petal-pink overflow-x-hidden selection:bg-berry-glaze selection:text-flour-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Landing Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Institutional: Nossa História */}
        <HistorySection />

        {/* 3. Product Catalog: Nossos Clássicos */}
        <ProductsSection />

        {/* 4. Testimonials Section */}
        <TestimonialsSection />

        {/* 5. Final Call to Action */}
        <CtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
