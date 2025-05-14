import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-blue-900 h-16 w-full fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-0 flex items-center justify-between h-full">
                {/* Logo and Title Section */}
                <div className="flex items-center space-x-2">
                    <Link to="/" className="flex items-center">
                        <lottie-player
                            src="https://lottie.host/7b2f298f-2f20-48e8-9dd4-f0a1ca3e8b5d/qLQZgwTb4b.json"
                            background="transparent"
                            speed="1"
                            style={{ width: '60px', height: '60px' }}
                            loop
                            autoplay
                        ></lottie-player>
                    </Link>
                    <Link to="/" className="text-4xl font-bold text-blue-500 hover:text-blue-400">
                        <span className="text-white">Predict</span> DDoS
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex space-x-6 text-sm font-medium">
                    <Link to="/" className="text-white hover:text-blue-300 text-xl transition duration-300">
                        Home
                    </Link>
                    <Link to="/about" className="text-white hover:text-blue-300 text-xl transition duration-300">
                        About
                    </Link>
                    <Link to="/contact" className="text-white hover:text-blue-300 text-xl transition duration-300">
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-blue-800 text-white text-center py-4">
                    <nav>
                        <Link to="/" className="block py-2 text-white hover:text-blue-300">
                            Home
                        </Link>
                        <Link to="/about" className="block py-2 text-white hover:text-blue-300">
                            About
                        </Link>
                        <Link to="/contact" className="block py-2  text-white hover:text-blue-300">
                            Contact
                        </Link>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Header;
