import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import ChatAssistant from './components/ChatAssistant';
import { AuthProvider } from './contexts/AuthContext';
import { TripProvider } from './contexts/TripContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <AuthProvider>
      <TripProvider>
        <Router>
          <div className={`min-h-screen transition-all duration-300 ${
            isDarkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
          }`}>
            <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
            <ChatAssistant />
          </div>
        </Router>
      </TripProvider>
    </AuthProvider>
  );
}

export default App;