
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeaturedProperties />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
