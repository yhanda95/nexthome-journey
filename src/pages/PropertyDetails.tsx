
import React from 'react';
import { useParams } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin, Heart, Share2, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from '@/components/Footer';

// Mock data for a single property
const propertyData = {
  id: 1,
  title: "Modern Apartment with Ocean View",
  description: "This stunning apartment offers breathtaking ocean views and modern amenities. Perfect for those who appreciate contemporary design and seaside living. Features include an open floor plan, high-end appliances, and a private balcony overlooking the water.",
  location: "Miami Beach, FL",
  price: 450000,
  bedrooms: 2,
  bathrooms: 2,
  area: 1200,
  images: [
    "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
    "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
  ],
  type: "Apartment",
  featured: true,
  amenities: ["Swimming Pool", "Gym", "Parking", "Security", "Elevator", "Air Conditioning"],
  yearBuilt: 2018,
  agent: {
    name: "Sarah Johnson",
    phone: "(555) 123-4567",
    email: "sarah@nexthome.com",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
};

const PropertyDetails = () => {
  const { id } = useParams();
  
  // In a real app, you would fetch property data based on the ID
  // For now, we'll use the mock data
  
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - takes 2/3 of the space on desktop */}
          <div className="lg:col-span-2">
            {/* Image gallery */}
            <div className="mb-6">
              <div className="rounded-lg overflow-hidden h-96 bg-gray-200">
                <img 
                  src={propertyData.images[0]} 
                  alt={propertyData.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {propertyData.images.slice(1).map((image, index) => (
                  <div key={index} className="h-24 rounded-md overflow-hidden bg-gray-200">
                    <img 
                      src={image}
                      alt={`Property view ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Property title and badges */}
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{propertyData.title}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{propertyData.location}</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-nexthome-blue">
                    ${propertyData.price.toLocaleString()}
                  </h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-nexthome-blue text-white">{propertyData.type}</Badge>
                <Badge className="bg-nexthome-green text-white">For Sale</Badge>
              </div>
            </div>
            
            {/* Property details */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <Bed className="h-6 w-6 text-nexthome-blue mb-2" />
                  <span className="text-sm text-gray-600">Bedrooms</span>
                  <span className="font-bold">{propertyData.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <Bath className="h-6 w-6 text-nexthome-blue mb-2" />
                  <span className="text-sm text-gray-600">Bathrooms</span>
                  <span className="font-bold">{propertyData.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center p-4 border rounded-lg">
                  <Maximize className="h-6 w-6 text-nexthome-blue mb-2" />
                  <span className="text-sm text-gray-600">Area</span>
                  <span className="font-bold">{propertyData.area} sq ft</span>
                </div>
              </div>
              
              <Tabs defaultValue="description">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="py-4">
                  <p className="text-gray-600">{propertyData.description}</p>
                </TabsContent>
                <TabsContent value="details" className="py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Property Type:</span>
                      <span className="font-medium">{propertyData.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-medium">{propertyData.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bedrooms:</span>
                      <span className="font-medium">{propertyData.bedrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bathrooms:</span>
                      <span className="font-medium">{propertyData.bathrooms}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Area:</span>
                      <span className="font-medium">{propertyData.area} sq ft</span>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="amenities" className="py-4">
                  <ul className="grid grid-cols-2 gap-2">
                    {propertyData.amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-nexthome-blue mr-2"></div>
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          {/* Sidebar - takes 1/3 of the space on desktop */}
          <div>
            {/* Agent contact card */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src={propertyData.agent.image} 
                    alt={propertyData.agent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{propertyData.agent.name}</h3>
                  <p className="text-sm text-gray-600">Property Agent</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <p className="flex items-center text-sm">
                  <span className="font-medium w-20">Phone:</span> 
                  {propertyData.agent.phone}
                </p>
                <p className="flex items-center text-sm">
                  <span className="font-medium w-20">Email:</span>
                  {propertyData.agent.email}
                </p>
              </div>
              
              <div className="space-y-2">
                <Button className="w-full bg-nexthome-blue hover:bg-nexthome-blue/90">
                  Contact Agent
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule a Tour
                </Button>
              </div>
            </div>
            
            {/* Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-4">Property Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Heart className="mr-2 h-4 w-4" /> Save Property
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Share2 className="mr-2 h-4 w-4" /> Share Property
                </Button>
                <Button variant="outline" className="w-full flex items-center justify-center">
                  <Calendar className="mr-2 h-4 w-4" /> Book a Viewing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default PropertyDetails;
