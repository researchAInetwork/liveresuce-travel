import React from 'react';
import { MapPin, Star, Wifi, Car, Coffee, Check } from 'lucide-react';

interface Hotel {
  id: string;
  name: string;
  rating: number;
  price: number;
  distance: string;
  amenities: string[];
  image: string;
  availability: string;
  aiScore: number;
}

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const amenityIcons = {
    'WiFi': Wifi,
    'Parking': Car,
    'Breakfast': Coffee
  };

  return (
    <div className="neu-card p-6 rounded-2xl transition-all hover:scale-[1.02]">
      <div className="flex items-start space-x-4">
        <div className="neu-inset p-1 rounded-xl">
          <img 
            src={hotel.image} 
            alt={hotel.name}
            className="w-20 h-20 object-cover rounded-lg"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg text-gray-800">{hotel.name}</h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{hotel.distance} from airport</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{hotel.rating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">${hotel.price}</div>
              <div className="text-sm text-gray-600">per night</div>
            </div>
          </div>

          <div className="flex items-center space-x-4 mb-3">
            {hotel.amenities.map((amenity) => {
              const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
              return IconComponent ? (
                <div key={amenity} className="flex items-center space-x-1 text-gray-600">
                  <IconComponent className="h-4 w-4" />
                  <span className="text-sm">{amenity}</span>
                </div>
              ) : null;
            })}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                hotel.aiScore >= 90 ? 'bg-green-100 text-green-800' :
                hotel.aiScore >= 75 ? 'bg-blue-100 text-blue-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                🤖 AI Score: {hotel.aiScore}%
              </div>
              <span className="text-xs text-gray-500">{hotel.availability}</span>
            </div>
            
            <button className="neu-button-primary px-6 py-2 rounded-lg text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-sm font-medium flex items-center space-x-2">
              <Check className="h-4 w-4" />
              <span>Auto-Book</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;