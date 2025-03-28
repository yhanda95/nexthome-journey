
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Home, Building, Key } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find Your Dream Property With NextHome
          </h1>
          <p className="text-xl mb-10 text-gray-200">
            Discover thousands of properties for sale and rent across the country. Your dream home is just a click away.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link to="/buy">
              <Button size="lg" className="w-full sm:w-auto">
                <Home className="mr-2 h-5 w-5" /> Buy
              </Button>
            </Link>
            <Link to="/rent">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-800">
                <Key className="mr-2 h-5 w-5" /> Rent
              </Button>
            </Link>
            <Link to="/list-property">
              <Button size="lg" className="w-full sm:w-auto bg-nexthome-green hover:bg-nexthome-green/90">
                <Building className="mr-2 h-5 w-5" /> Sell
              </Button>
            </Link>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-xl">
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <select 
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexthome-blue"
                  defaultValue=""
                >
                  <option value="" disabled>Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                </select>
              </div>
              <div className="flex-1">
                <input 
                  type="text" 
                  placeholder="Location" 
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexthome-blue"
                />
              </div>
              <div className="md:w-auto">
                <Button type="submit" className="w-full py-3 h-auto">
                  <Search className="mr-2 h-5 w-5" /> Search
                </Button>
              </div>
            </form>
          </div>

          <p className="mt-6 text-sm text-gray-300">
            Over 10,000+ properties available for you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
