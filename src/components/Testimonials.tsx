
import React from 'react';
import { Star } from 'lucide-react';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Buyer",
    content: "NextHome made finding my dream home incredibly easy. Their search tools and filters helped me narrow down exactly what I was looking for, and the agent I connected with was fantastic.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Property Seller",
    content: "I sold my apartment through NextHome and was impressed with how quickly they found qualified buyers. The whole process was smooth, and I got a great price for my property.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Real Estate Investor",
    content: "As an investor, I appreciate the detailed market insights NextHome provides. Their platform has helped me identify valuable investment opportunities across multiple cities.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-sm property-card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-medium text-gray-600">Join thousands of happy clients who found their perfect property with NextHome</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
