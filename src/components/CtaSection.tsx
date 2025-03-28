
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-nexthome-blue to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-lg mb-8 text-blue-100">
              Whether you're looking to buy, sell, or rent, our team of experienced agents is here to help you every step of the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-nexthome-blue hover:bg-gray-100">
                  Contact an Agent
                </Button>
              </Link>
              <Link to="/list-property">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nexthome-blue">
                  List Your Property
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-gray-800">
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Home className="h-5 w-5 text-nexthome-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-gray-600">123 Real Estate Avenue, Suite 100<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-nexthome-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-nexthome-blue" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-gray-600">info@nexthome.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
