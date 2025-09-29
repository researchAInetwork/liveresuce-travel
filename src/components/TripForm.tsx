import React, { useState } from 'react';
import { Plane, Calendar, Clock, MapPin } from 'lucide-react';
import { useTrip } from '../contexts/TripContext';

const TripForm = () => {
  const { setTripData, analyzeRisk } = useTrip();
  const [formData, setFormData] = useState({
    flightNumber: '',
    from: '',
    to: '',
    date: '',
    time: '',
    travelerType: 'business'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTripData(formData);
    analyzeRisk(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Plane className="inline w-4 h-4 mr-2" />
            Flight Number
          </label>
          <input
            type="text"
            value={formData.flightNumber}
            onChange={(e) => setFormData({ ...formData, flightNumber: e.target.value })}
            className="neu-input w-full px-4 py-3 rounded-xl"
            placeholder="e.g., AA123"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline w-4 h-4 mr-2" />
            Travel Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="neu-input w-full px-4 py-3 rounded-xl"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-2" />
            From
          </label>
          <input
            type="text"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
            className="neu-input w-full px-4 py-3 rounded-xl"
            placeholder="e.g., JFK New York"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline w-4 h-4 mr-2" />
            To
          </label>
          <input
            type="text"
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
            className="neu-input w-full px-4 py-3 rounded-xl"
            placeholder="e.g., LAX Los Angeles"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="inline w-4 h-4 mr-2" />
            Departure Time
          </label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="neu-input w-full px-4 py-3 rounded-xl"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Traveler Type
          </label>
          <select
            value={formData.travelerType}
            onChange={(e) => setFormData({ ...formData, travelerType: e.target.value })}
            className="neu-input w-full px-4 py-3 rounded-xl"
          >
            <option value="business">Business</option>
            <option value="leisure">Leisure</option>
            <option value="family">Family</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full neu-button-primary px-8 py-4 rounded-xl text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 font-medium transition-all transform hover:scale-[1.02]"
      >
        🔮 Analyze Risk & Monitor Trip
      </button>
    </form>
  );
};

export default TripForm;