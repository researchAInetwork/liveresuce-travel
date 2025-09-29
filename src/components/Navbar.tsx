import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Shield, Menu, Sun, Moon, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const { user, login, logout } = useAuth();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="neu-inset p-2 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                LiveRescue
              </h1>
              <p className="text-xs text-gray-500 -mt-1">AI Travel Protection</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/'
                  ? 'neu-button-active text-blue-600'
                  : 'neu-button hover:text-blue-600'
              }`}
            >
              <Plane className="h-4 w-4" />
              <span>Travel</span>
            </Link>
            <Link
              to="/dashboard"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                location.pathname === '/dashboard'
                  ? 'neu-button-active text-blue-600'
                  : 'neu-button hover:text-blue-600'
              }`}
            >
              <Menu className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="neu-button p-2 rounded-lg"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            
            {user ? (
              <div className="flex items-center space-x-3">
                <div className="neu-inset p-2 rounded-lg">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <button
                  onClick={logout}
                  className="neu-button px-4 py-2 rounded-lg text-sm font-medium hover:text-red-600"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="neu-button-primary px-6 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;