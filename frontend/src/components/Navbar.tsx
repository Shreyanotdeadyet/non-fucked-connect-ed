import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Determine styles based on scroll position
    const isScrolled = scrollPosition > 50;
    const navbarStyle = {
        backgroundColor: `rgba(146, 18, 33, ${Math.min(scrollPosition / 300, 1)})`, // Gradual opacity increase
        transition: 'background-color 0.3s ease', // Smooth background transition
    };

    const textColor = isScrolled ? 'text-white' : 'text-[#921221]'; // Maroon for transparent, white for opaque

    return (
        <nav
            className={`fixed w-full top-0 z-50 p-4 ${textColor}`}
            style={navbarStyle}
        >
            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <div className="text-1xl font-bold lg:text-3xl">
                    CONNECT-ED
                </div>

                {/* Mobile Toggle Button (Visible for md and smaller screens) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu (Hidden for md and smaller screens) */}
                <ul className="hidden md:flex space-x-5 flex-nowrap">
                    {['Home', 'About', 'Testimonials', 'Services', 'Contact', 'Blog', 'Appointment'].map((item) => (
                        <li key={item} className="group relative">
                            <Link
                                to={`/${item.toLowerCase()}`}
                                className={`font-bold px-4 py-2 rounded ${textColor} transition-colors duration-300 lg:text-2xl `}
                            >
                                {item}
                                {/* Modern hover effect: underline animation */}
                                <span
                                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-red-500 to-red-900 transition-all duration-300 group-hover:w-full"
                                ></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Menu (Visible when hamburger is clicked) */}
            {isMenuOpen && (
                <ul className="flex flex-col items-end md:hidden mt-4 space-y-2 bg-red-800 p-4 rounded">
                    {['Home', 'About', 'Testimonials', 'Services', 'Contact', 'Blog', 'Appointment'].map((item) => (
                        <li key={item} className="py-2">
                            <Link
                                to={`/${item.toLowerCase()}`}
                                className="text-white font-bold hover:bg-red-900 px-4 py-2 rounded"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
