import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TripData {
  flightNumber: string;
  from: string;
  to: string;
  date: string;
  time: string;
  travelerType: string;
}

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

interface Voucher {
  bookingId: string;
  hotelName: string;
  checkIn: string;
  checkOut: string;
  guestName: string;
  qrCode: string;
  confirmationSent: boolean;
}

interface TripContextType {
  tripData: TripData | null;
  riskLevel: 'low' | 'medium' | 'high';
  hotels: Hotel[];
  voucher: Voucher | null;
  setTripData: (data: TripData) => void;
  analyzeRisk: (data: TripData) => void;
}

const TripContext = createContext<TripContextType | undefined>(undefined);

export const useTrip = () => {
  const context = useContext(TripContext);
  if (context === undefined) {
    throw new Error('useTrip must be used within a TripProvider');
  }
  return context;
};

interface TripProviderProps {
  children: ReactNode;
}

export const TripProvider: React.FC<TripProviderProps> = ({ children }) => {
  const [tripData, setTripData] = useState<TripData | null>(null);
  const [riskLevel, setRiskLevel] = useState<'low' | 'medium' | 'high'>('low');
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [voucher, setVoucher] = useState<Voucher | null>(null);

  const analyzeRisk = (data: TripData) => {
    // Mock risk analysis - in real app, call AI prediction API
    const randomRisk = Math.random();
    let risk: 'low' | 'medium' | 'high';
    
    if (randomRisk < 0.3) {
      risk = 'low';
    } else if (randomRisk < 0.7) {
      risk = 'medium';
    } else {
      risk = 'high';
    }
    
    setRiskLevel(risk);
    
    // If high risk, simulate hotel search
    if (risk === 'high') {
      setTimeout(() => {
        simulateHotelSearch();
      }, 2000);
    }
  };

  const simulateHotelSearch = () => {
    // Mock hotels from Nuitee LiteAPI
    const mockHotels: Hotel[] = [
      {
        id: '1',
        name: 'Airport Marriott',
        rating: 4.5,
        price: 189,
        distance: '0.3 miles',
        amenities: ['WiFi', 'Parking', 'Breakfast'],
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        availability: '3 rooms available',
        aiScore: 94
      },
      {
        id: '2',
        name: 'Holiday Inn Express',
        rating: 4.2,
        price: 129,
        distance: '0.8 miles',
        amenities: ['WiFi', 'Breakfast'],
        image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
        availability: '7 rooms available',
        aiScore: 87
      }
    ];
    
    setHotels(mockHotels);
    
    // Auto-book top hotel after 3 seconds
    setTimeout(() => {
      const topHotel = mockHotels[0];
      setVoucher({
        bookingId: 'LR' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        hotelName: topHotel.name,
        checkIn: new Date().toLocaleDateString(),
        checkOut: new Date(Date.now() + 86400000).toLocaleDateString(),
        guestName: 'Alex Traveler',
        qrCode: 'QR' + Math.random().toString(36).substr(2, 12).toUpperCase(),
        confirmationSent: true
      });
    }, 3000);
  };

  const value = {
    tripData,
    riskLevel,
    hotels,
    voucher,
    setTripData,
    analyzeRisk
  };

  return <TripContext.Provider value={value}>{children}</TripContext.Provider>;
};