import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <Heart className="text-white w-5 h-5 fill-current" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold font-heading leading-tight">ROCHE</span>
                                <span className="text-[10px] font-medium tracking-wider text-gray-400">PHARMACEUTICAL</span>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Delivering reliable, high-quality medical equipment and healthcare solutions to hospitals, clinics, and laboratories across Sri Lanka.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-dark-lighter flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Products', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-primary transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Products</h3>
                        <ul className="space-y-4">
                            {['Diagnostic Equipment', 'Laboratory Equipment', 'Surgical Instruments', 'Patient Monitoring', 'Medical Consumables'].map((item) => (
                                <li key={item}>
                                    <Link to="/products" className="text-gray-400 hover:text-secondary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span className="text-gray-400">Bambalapitiya, Colombo 04,<br />Sri Lanka</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400">+94 11 234 5678</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400">info@rochepharma.lk</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Roche Pharmaceutical. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
