import React, { useState } from 'react';
import { BarChart3, TrendingUp, Users, MapPin, AlertTriangle, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');

  // Mock data for demonstration
  const metrics = {
    disruptionsPrevented: 1247,
    hotelsBooked: 892,
    customersProtected: 1534,
    avgResponseTime: '47s',
    satisfaction: 4.8
  };

  const insights = [
    { title: 'Weather Disruptions', value: '34%', trend: '+5%', icon: '🌧️' },
    { title: 'Strike Impact', value: '18%', trend: '-12%', icon: '✋' },
    { title: 'Technical Delays', value: '28%', trend: '+2%', icon: '⚙️' },
    { title: 'Airport Congestion', value: '20%', trend: '-8%', icon: '✈️' }
  ];

  const recentBookings = [
    { id: 1, hotel: 'Marriott Downtown', location: 'NYC', guest: 'John D.', status: 'confirmed', time: '2 min ago' },
    { id: 2, hotel: 'Hilton Garden Inn', location: 'LAX', guest: 'Sarah M.', status: 'pending', time: '5 min ago' },
    { id: 3, hotel: 'Hampton Inn', location: 'CHI', guest: 'Mike R.', status: 'confirmed', time: '8 min ago' },
    { id: 4, hotel: 'Holiday Inn Express', location: 'MIA', guest: 'Lisa K.', status: 'confirmed', time: '12 min ago' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Partner Dashboard</h1>
          <p className="text-gray-600">AI-powered insights for travel industry partners</p>
        </div>

        {/* Time Range Selector */}
        <div className="mb-8">
          <div className="neu-card p-2 rounded-2xl inline-flex">
            {['day', 'week', 'month'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-6 py-2 rounded-xl text-sm font-medium capitalize transition-all ${
                  timeRange === range
                    ? 'neu-button-active text-blue-600'
                    : 'neu-button hover:text-blue-600'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="neu-card p-6 rounded-2xl text-center">
            <div className="neu-circle w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <AlertTriangle className="h-6 w-6 text-orange-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{metrics.disruptionsPrevented}</div>
            <div className="text-sm text-gray-600">Disruptions Prevented</div>
          </div>
          <div className="neu-card p-6 rounded-2xl text-center">
            <div className="neu-circle w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{metrics.hotelsBooked}</div>
            <div className="text-sm text-gray-600">Hotels Booked</div>
          </div>
          <div className="neu-card p-6 rounded-2xl text-center">
            <div className="neu-circle w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Users className="h-6 w-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{metrics.customersProtected}</div>
            <div className="text-sm text-gray-600">Customers Protected</div>
          </div>
          <div className="neu-card p-6 rounded-2xl text-center">
            <div className="neu-circle w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{metrics.avgResponseTime}</div>
            <div className="text-sm text-gray-600">Avg Response Time</div>
          </div>
          <div className="neu-card p-6 rounded-2xl text-center">
            <div className="neu-circle w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">{metrics.satisfaction}</div>
            <div className="text-sm text-gray-600">Satisfaction Score</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Insights */}
          <div className="neu-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
              <BarChart3 className="mr-3 text-blue-500" />
              AI Disruption Insights
            </h2>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="neu-inset p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{insight.icon}</span>
                      <span className="font-medium text-gray-700">{insight.title}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-800">{insight.value}</div>
                      <div className={`text-sm ${insight.trend.startsWith('+') ? 'text-red-500' : 'text-green-500'}`}>
                        {insight.trend}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 neu-inset rounded-xl bg-blue-50">
              <h3 className="font-semibold text-blue-800 mb-2">🤖 AI Recommendation</h3>
              <p className="text-sm text-blue-700">
                Weather patterns suggest 23% higher disruption risk this weekend. 
                Consider increasing hotel inventory near major airports.
              </p>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="neu-card p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Recent Rescue Bookings</h2>
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="neu-inset p-4 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-800">{booking.hotel}</div>
                      <div className="text-sm text-gray-600">{booking.location} • {booking.guest}</div>
                    </div>
                    <div className="text-right">
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {booking.status}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{booking.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Occupancy Impact Chart */}
        <div className="mt-8 neu-card p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Hotel Occupancy Impact</h2>
          <div className="neu-inset p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-600">LiveRescue Bookings vs Regular Occupancy</span>
              <span className="text-sm text-gray-500">This Week</span>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                <div key={day} className="text-center">
                  <div className="text-xs text-gray-600 mb-2">{day}</div>
                  <div className="neu-inset h-24 rounded-lg relative overflow-hidden">
                    <div 
                      className="absolute bottom-0 w-full bg-gradient-to-t from-blue-400 to-blue-500 rounded-lg"
                      style={{ height: `${40 + index * 8}%` }}
                    ></div>
                    <div 
                      className="absolute bottom-0 w-full bg-gradient-to-t from-orange-400 to-orange-500 rounded-lg opacity-80"
                      style={{ height: `${15 + index * 3}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{65 + index * 5}%</div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Regular Occupancy</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-gray-600">LiveRescue Bookings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;