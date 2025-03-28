
import React from 'react';
import { Button } from "@/components/ui/button";
import PropertyCard from './PropertyCard';
import { Building, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for featured properties
const featuredProperties = [
  {
    id: 1,
    title: "Modern Apartment with Ocean View",
    location: "Miami Beach, FL",
    price: 450000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    type: "Apartment",
    featured: true
  },
  {
    id: 2,
    title: "Cozy Family Home in Suburbs",
    location: "Austin, TX",
    price: 385000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2200,
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83",
    type: "House",
    featured: true
  },
  {
    id: 3,
    title: "Luxury Downtown Penthouse",
    location: "Chicago, IL",
    price: 875000,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2800,
    image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    type: "Condo",
    featured: true
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="section-heading">Featured Properties</h2>
          <Link to="/properties">
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              location={property.location}
              price={property.price}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              area={property.area}
              image={property.image}
              type={property.type}
              featured={property.featured}
            />
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center property-card">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <MapPin className="text-nexthome-blue h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Your Location</h3>
            <p className="text-gray-600">Browse properties in your preferred neighborhoods and discover the perfect location.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center property-card">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Building className="text-nexthome-green h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Property Types</h3>
            <p className="text-gray-600">Explore a variety of property types from apartments and houses to luxury villas.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center property-card">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <ArrowRight className="text-nexthome-blue h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Process</h3>
            <p className="text-gray-600">Our streamlined process makes buying, selling or renting properties simpler than ever.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
