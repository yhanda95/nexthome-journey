
import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  type: string;
  featured?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  image,
  type,
  featured = false
}: PropertyCardProps) => {
  return (
    <Link to={`/property/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 property-card">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge className="bg-nexthome-blue text-white">{type}</Badge>
            {featured && (
              <Badge className="ml-2 bg-nexthome-green text-white">Featured</Badge>
            )}
          </div>
          <div className="absolute bottom-3 right-3">
            <Badge className="bg-white text-nexthome-blue font-bold">
              ${price.toLocaleString()}
            </Badge>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h3>
          
          <div className="flex items-center text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          
          <div className="border-t pt-3 mt-3">
            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1 text-nexthome-blue" />
                <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-4 w-4 mr-1 text-nexthome-blue" />
                <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
              </div>
              <div className="flex items-center">
                <Maximize className="h-4 w-4 mr-1 text-nexthome-blue" />
                <span>{area} sq ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
