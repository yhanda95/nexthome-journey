
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, Building } from 'lucide-react';
import PropertyCard from '@/components/PropertyCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Sample property data (in a real app, this would come from an API)
const sampleProperties = [
  {
    id: 1,
    title: "Modern Villa with Ocean View",
    location: "Miami Beach, FL",
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    type: "House",
    featured: true
  },
  {
    id: 2,
    title: "Downtown Luxury Loft",
    location: "New York, NY",
    price: 950000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    type: "Apartment"
  },
  {
    id: 3,
    title: "Suburban Family Home",
    location: "Austin, TX",
    price: 750000,
    bedrooms: 5,
    bathrooms: 3,
    area: 3200,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    type: "House"
  },
  {
    id: 4,
    title: "Beachfront Condo",
    location: "San Diego, CA",
    price: 625000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    type: "Condo",
    featured: true
  },
  {
    id: 5,
    title: "Mountain View Retreat",
    location: "Denver, CO",
    price: 875000,
    bedrooms: 3,
    bathrooms: 2,
    area: 2400,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    type: "House"
  },
  {
    id: 6,
    title: "Luxury Penthouse",
    location: "Chicago, IL",
    price: 1450000,
    bedrooms: 3,
    bathrooms: 3,
    area: 2200,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    type: "Apartment",
    featured: true
  }
];

const PropertyListing = () => {
  const [priceRange, setPriceRange] = useState<number[]>([500000, 1500000]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter properties based on selected criteria
  const filteredProperties = sampleProperties.filter(property => {
    // Price filter
    if (property.price < priceRange[0] || property.price > priceRange[1]) {
      return false;
    }

    // Property type filter
    if (selectedPropertyTypes.length > 0 && !selectedPropertyTypes.includes(property.type)) {
      return false;
    }

    // Bedroom filter
    if (selectedBedrooms.length > 0 && !selectedBedrooms.includes(property.bedrooms.toString())) {
      return false;
    }

    // Search query filter
    if (searchQuery && 
        !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !property.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    return true;
  });

  const handlePropertyTypeChange = (type: string) => {
    setSelectedPropertyTypes(prev => 
      prev.includes(type) 
        ? prev.filter(item => item !== type) 
        : [...prev, type]
    );
  };

  const handleBedroomChange = (bedroom: string) => {
    setSelectedBedrooms(prev => 
      prev.includes(bedroom) 
        ? prev.filter(item => item !== bedroom) 
        : [...prev, bedroom]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Find Your Perfect Home</h1>
          
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search by location or property name" 
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-nexthome-blue"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-3 text-gray-400" />
            </div>
            <Button 
              className="md:w-auto"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="mr-2 h-5 w-5" /> Filters
            </Button>
          </div>
          
          {isFilterOpen && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="font-semibold mb-4">Filter Properties</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={priceRange}
                      min={100000}
                      max={2000000}
                      step={50000}
                      onValueChange={setPriceRange}
                      className="mb-6"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Property Type</h3>
                  <div className="space-y-2">
                    {["House", "Apartment", "Condo", "Land"].map(type => (
                      <div key={type} className="flex items-center">
                        <Checkbox 
                          id={`type-${type}`}
                          checked={selectedPropertyTypes.includes(type)}
                          onCheckedChange={() => handlePropertyTypeChange(type)}
                        />
                        <label htmlFor={`type-${type}`} className="ml-2 text-sm">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Bedrooms</h3>
                  <div className="space-y-2">
                    {["1", "2", "3", "4", "5+"].map(bedroom => (
                      <div key={bedroom} className="flex items-center">
                        <Checkbox 
                          id={`bedroom-${bedroom}`}
                          checked={selectedBedrooms.includes(bedroom)}
                          onCheckedChange={() => handleBedroomChange(bedroom)}
                        />
                        <label htmlFor={`bedroom-${bedroom}`} className="ml-2 text-sm">
                          {bedroom}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map(property => (
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
          ) : (
            <div className="text-center py-12">
              <Building className="mx-auto h-16 w-16 text-gray-300" />
              <h3 className="text-xl font-medium mt-4">No properties found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search criteria</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PropertyListing;
