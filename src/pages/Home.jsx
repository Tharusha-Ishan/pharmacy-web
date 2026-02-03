import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle, Activity, Award, Users, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directions = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...directions[direction] }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

const Counter = ({ from, to, duration = 2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <span ref={ref} className="tabular-nums">
            {isInView ? <CountUp from={from} to={to} duration={duration} /> : from}
        </span>
    );
};

const CountUp = ({ from, to, duration }) => {
    const [count, setCount] = useState(from);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            setCount(Math.floor(progress * (to - from) + from));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [from, to, duration]);

    return <>{count}</>;
};

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-light pt-20">
                <div className="absolute inset-0 z-0">
                    {/* Abstract Gradient Background */}
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-bl-[1000px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-gradient-to-tr from-secondary/10 to-primary/5 rounded-tr-[800px] -z-10" />

                    {/* Parallax Elements */}
                    <motion.div style={{ y: y1 }} className="absolute top-40 right-20 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                    <motion.div style={{ y: y2 }} className="absolute bottom-40 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
                </div>

                <div className="container mx-auto px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <FadeIn delay={0.2} direction="right">
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide border border-primary/20">
                                PREMIER MEDICAL SOLUTIONS
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.4} direction="up">
                            <h1 className="text-5xl lg:text-7xl font-bold font-heading leading-tight text-dark">
                                Trusted Medical <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Equipment Supplier
                                </span> <br />
                                in Sri Lanka
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.6} direction="up">
                            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                                Delivering reliable, high-quality medical equipment and healthcare solutions to hospitals, clinics, and laboratories across the nation.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.8} direction="up" className="flex flex-wrap gap-4 pt-4">
                            <Link to="/contact">
                                <button className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                                    Contact Us <ArrowRight className="w-5 h-5" />
                                </button>
                            </Link>
                            <Link to="/products">
                                <button className="px-8 py-4 bg-white text-dark text-lg font-semibold rounded-lg shadow-md border border-gray-100 hover:border-primary/50 hover:text-primary transition-all hover:scale-105 active:scale-95">
                                    View Products
                                </button>
                            </Link>
                        </FadeIn>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
                                alt="Medical Equipment"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative circles */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-2xl" />
                        <div className="absolute -z-10 -bottom-10 -left-10 w-full h-full bg-secondary/10 rounded-2xl" />
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { label: 'Years Experience', value: 15, suffix: '+', icon: Activity },
                            { label: 'Products Supplied', value: 5000, suffix: '+', icon: Shield },
                            { label: 'Happy Clients', value: 250, suffix: '+', icon: Users },
                            { label: 'Global Partners', value: 30, suffix: '+', icon: Globe },
                        ].map((stat, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="text-center p-6 rounded-2xl bg-light hover:shadow-xl transition-shadow duration-300 group cursor-pointer border border-transparent hover:border-primary/10">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <stat.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                                    </div>
                                    <div className="text-4xl font-bold text-dark mb-2 font-heading">
                                        <Counter from={0} to={stat.value} />{stat.suffix}
                                    </div>
                                    <div className="text-gray-500 font-medium tracking-wide text-sm uppercase">{stat.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products Preview */}
            <section className="py-24 bg-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4">
                        <FadeIn>
                            <h2 className="text-4xl font-heading font-bold text-dark">Premium Medical Equipment</h2>
                            <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Explore our wide range of certified diagnostic, surgical, and laboratory equipment from world-class manufacturers.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Diagnostic Systems', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600', count: '120+ Products' },
                            { title: 'Surgical Instruments', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600', count: '500+ Tools' },
                            { title: 'Laboratory Devices', image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600', count: '80+ Devices' },
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 0.2}>
                                <Link to="/products" className="group block relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-8 flex flex-col justify-end">
                                        <h3 className="text-2xl font-bold text-white mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                                            {item.count}
                                        </p>
                                    </div>
                                </Link>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/products">
                            <button className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center gap-2">
                                View All Categories <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 -z-10" />

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <FadeIn direction="right">
                            <div className="space-y-8">
                                <h2 className="text-4xl font-heading font-bold text-dark">Why Healthcare Professionals Trust Roche Pharmaceutical</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    We are committed to excellence in healthcare distribution. Our ethical business practices and strict quality assurance ensure that you receive only the best.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        'Global Standards Certified',
                                        '24/7 Technical Support',
                                        'Nationwide Distribution',
                                        'Ethical Sourcing'
                                    ].map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                            </div>
                                            <span className="font-medium text-dark">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link to="/why-us">
                                    <button className="bg-dark text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                                        Learn More About Us
                                    </button>
                                </Link>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.3}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4 mt-8">
                                    <div className="bg-light p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 h-48 flex flex-col justify-center items-center text-center">
                                        <Award className="w-10 h-10 text-primary mb-3" />
                                        <h4 className="font-bold">Premium Quality</h4>
                                    </div>
                                    <div className="bg-primary p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 h-64 flex flex-col justify-center items-center text-center text-white">
                                        <Shield className="w-10 h-10 mb-3" />
                                        <h4 className="font-bold">Warranty Assured</h4>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-secondary p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 h-64 flex flex-col justify-center items-center text-center text-white">
                                        <Users className="w-10 h-10 mb-3" />
                                        <h4 className="font-bold">Expert Team</h4>
                                    </div>
                                    <div className="bg-light p-6 rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-300 h-48 flex flex-col justify-center items-center text-center">
                                        <Activity className="w-10 h-10 text-secondary mb-3" />
                                        <h4 className="font-bold">Fast Service</h4>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')] opacity-10" />
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                            Ready to Upgrade Your Medical Facility?
                        </h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
                            Get in touch with our expert team for a consultation and customized quote for your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact">
                                <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-xl hover:bg-gray-100 transition-colors w-full sm:w-auto">
                                    Request Quote
                                </button>
                            </Link>
                            <Link to="/contact">
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto">
                                    Call Our Hotline
                                </button>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default Home;
