import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Services', path: '/services' },
        { name: 'Why Choose Us', path: '/why-us' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
            }`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="relative">
                            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                <Heart className="text-white w-6 h-6 fill-current" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full border-2 border-white animate-pulse" />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xl font-bold font-heading leading-tight ${scrolled || isOpen ? 'text-dark' : 'text-primary'}`}>ROCHE</span>
                            <span className={`text-xs font-medium tracking-wider ${scrolled || isOpen ? 'text-gray-500' : 'text-primary-dark/80'}`}>PHARMACEUTICAL</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-300 relative group ${location.pathname === link.path
                                        ? 'text-primary'
                                        : scrolled ? 'text-gray-600 hover:text-primary' : 'text-dark hover:text-primary'
                                    }`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                    }`} />
                            </Link>
                        ))}
                        <Link to="/contact">
                            <button className="bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-full font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                <Phone className="w-4 h-4" />
                                Get Quote
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-dark p-2 hover:text-primary transition-colors"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-base font-medium p-2 rounded-lg transition-colors ${location.pathname === link.path
                                            ? 'bg-primary/10 text-primary'
                                            : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-primary text-white py-3 rounded-lg font-medium shadow-md hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Request a Quote
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
