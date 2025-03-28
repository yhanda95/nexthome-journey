
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  User, 
  LogIn, 
  Home as HomeIcon,
  Building,
  Search,
  Heart,
  Plus
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state, replace with actual auth

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <HomeIcon className="h-6 w-6 text-nexthome-blue mr-2" />
            <span className="text-xl font-bold text-nexthome-blue">NextHome</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-nexthome-blue font-medium">
              Home
            </Link>
            <Link to="/buy" className="text-gray-700 hover:text-nexthome-blue font-medium">
              Buy
            </Link>
            <Link to="/rent" className="text-gray-700 hover:text-nexthome-blue font-medium">
              Rent
            </Link>
            <Link to="/search" className="text-gray-700 hover:text-nexthome-blue font-medium">
              Search
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Link to="/favorites">
                  <Button variant="outline" size="sm">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Link to="/list-property">
                  <Button size="sm" className="bg-nexthome-green hover:bg-nexthome-green/90">
                    <Plus className="h-4 w-4 mr-2" />
                    List Property
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm">Sign up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-700 hover:text-nexthome-blue"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-nexthome-blue font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/buy" 
                className="text-gray-700 hover:text-nexthome-blue font-medium"
                onClick={toggleMenu}
              >
                Buy
              </Link>
              <Link 
                to="/rent" 
                className="text-gray-700 hover:text-nexthome-blue font-medium"
                onClick={toggleMenu}
              >
                Rent
              </Link>
              <Link 
                to="/search" 
                className="text-gray-700 hover:text-nexthome-blue font-medium"
                onClick={toggleMenu}
              >
                Search
              </Link>
              {isLoggedIn ? (
                <>
                  <Link 
                    to="/favorites"
                    className="text-gray-700 hover:text-nexthome-blue font-medium"
                    onClick={toggleMenu}
                  >
                    Favorites
                  </Link>
                  <Link 
                    to="/dashboard"
                    className="text-gray-700 hover:text-nexthome-blue font-medium"
                    onClick={toggleMenu}
                  >
                    Dashboard
                  </Link>
                  <Link to="/list-property" onClick={toggleMenu}>
                    <Button size="sm" className="w-full bg-nexthome-green hover:bg-nexthome-green/90">
                      <Plus className="h-4 w-4 mr-2" />
                      List Property
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="outline" size="sm" className="w-full">
                      <LogIn className="h-4 w-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <Button size="sm" className="w-full">Sign up</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
