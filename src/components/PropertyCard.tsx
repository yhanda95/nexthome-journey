
import React from 'react';
import { Link } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react';

export interface PropertyProps {
  id: string;
  title: string;
  price: number;
  priceType: 'sale' | 'rent';
  type: 'house' | 'apartment' | 'condo' | 'land';
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  image: string;
  featured?: boolean;
}

const PropertyCard: React.FC<PropertyProps> = ({
  id,
  title,
  price,
  priceType,
  type,
  location,
  bedrooms,
  bathrooms,
  area,
  image,
  featured
}) => {
  return (
    <Link to={`/property/${id}`}>
      <Card className="property-card h-full overflow-hidden">
        <div className="relative">
          <AspectRatio ratio={4/3}>
            <img 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full rounded-t-lg"
            />
          </AspectRatio>
          <div className="absolute top-3 right-3">
            <button 
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Add to favorites logic here
              }}
            >
              <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
            </button>
          </div>
          <div className="absolute top-3 left-3 flex gap-2">
            {featured && (
              <Badge className="bg-nexthome-blue hover:bg-nexthome-blue/90">
                Featured
              </Badge>
            )}
            <Badge variant="outline" className="bg-white border-white text-gray-800 hover:bg-gray-100">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </Badge>
            <Badge className="bg-nexthome-green hover:bg-nexthome-green/90">
              For {priceType === 'sale' ? 'Sale' : 'Rent'}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-lg mb-1 line-clamp-1">{title}</h3>
          <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm line-clamp-1">{location}</span>
          </div>
          
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-nexthome-blue text-xl">
              ${price.toLocaleString()}
              {priceType === 'rent' && <span className="text-sm font-normal text-gray-500">/month</span>}
            </h4>
          </div>
          
          {(bedrooms || bathrooms || area) && (
            <div className="flex items-center text-gray-500 gap-4 text-sm">
              {bedrooms !== undefined && (
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1" />
                  <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
                </div>
              )}
              {bathrooms !== undefined && (
                <div className="flex items-center">
                  <Bath className="h-4 w-4 mr-1" />
                  <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
                </div>
              )}
              {area !== undefined && (
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-1" />
                  <span>{area} sq ft</span>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
