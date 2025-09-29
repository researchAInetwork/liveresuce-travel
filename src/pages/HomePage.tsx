import React, { useState } from 'react';
import TripForm from '../components/TripForm';
import RiskAlert from '../components/RiskAlert';
import HotelCard from '../components/HotelCard';
import VoucherCard from '../components/VoucherCard';
import { useTrip } from '../contexts/TripContext';

const HomePage = () => {
  const { tripData, riskLevel, hotels, voucher } = useTrip();
  const [showSimulation, setShowSimulation] = useState(false);

  const handleSimulateDisruption = () => {
    setShowSimulation(true);
    // Simulate the rescue flow
    setTimeout(() => {
      // This would trigger the hotel search and booking
    }, 1000);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Never Get Stranded Again
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AI-powered travel protection that predicts disruptions and automatically books rescue accommodations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Trip Input Section */}
          <div className="neu-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Plan Your Journey</h2>
            <TripForm />
            
            {tripData && (
              <div className="mt-6">
                <RiskAlert level={riskLevel} />
                {riskLevel !== 'low' && (
                  <button
                    onClick={handleSimulateDisruption}
                    className="mt-4 w-full neu-button-primary px-6 py-3 rounded-xl text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 font-medium"
                  >
                    🚨 Simulate Disruption (Demo)
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Rescue Results Section */}
          <div className="neu-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">AI Rescue Engine</h2>
            
            {!showSimulation && !hotels.length && (
              <div className="text-center py-12">
                <div className="neu-inset p-8 rounded-2xl inline-block">
                  <div className="w-16 h-16 mx-auto mb-4 neu-circle flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-500">Ready to protect your journey</p>
                </div>
              </div>
            )}

            {showSimulation && (
              <div className="space-y-6">
                <div className="neu-inset p-4 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-orange-600">Searching nearby hotels...</span>
                  </div>
                </div>
                
                {hotels.map((hotel, index) => (
                  <HotelCard key={index} hotel={hotel} />
                ))}
                
                {voucher && <VoucherCard voucher={voucher} />}
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">How LiveRescue Protects You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="neu-card p-6 rounded-2xl text-center">
              <div className="neu-circle w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Prediction</h3>
              <p className="text-gray-600">Advanced algorithms analyze weather, strikes, and flight patterns to predict disruptions before they happen.</p>
            </div>
            <div className="neu-card p-6 rounded-2xl text-center">
              <div className="neu-circle w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-Booking</h3>
              <p className="text-gray-600">Instantly books the best available hotels near your location using Nuitee LiteAPI with personalized recommendations.</p>
            </div>
            <div className="neu-card p-6 rounded-2xl text-center">
              <div className="neu-circle w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-gray-600">24/7 AI copilot guides you through disruptions with personalized advice and rebooking options.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;