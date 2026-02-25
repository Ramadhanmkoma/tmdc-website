import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const footerNavigation = {
    main: [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Apps', href: '/apps' },
        { name: 'Projects', href: '/projects' },
    ],
    social: [
        { name: 'WhatsApp', href: 'https://wa.me/255766570255', icon: FaWhatsapp },
        { name: 'GitHub', href: '#', icon: FaGithub },
        { name: 'Twitter', href: '#', icon: FaTwitter },
        { name: 'Instagram', href: '#', icon: FaInstagram },
        { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    ],
};

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 sm:py-20 lg:px-8">
                {/* Logo & Description */}
                <div className="flex flex-col items-center mb-10">
                    <Link to="/" className="flex items-center gap-3">
                        <img 
                            src="/assets/images/community-log.png" 
                            alt="TMDC Logo" 
                            className="h-10 w-auto"
                        />
                        <span className="text-xl font-bold text-white">TMDC</span>
                    </Link>
                    <p className="mt-4 text-center text-sm text-gray-400 max-w-md">
                        Tanzania Muslims Developer Community - Building innovative tech solutions 
                        that serve the Muslim Ummah worldwide.
                    </p>
                </div>

                {/* Navigation Links */}
                <nav className="mb-10 flex flex-wrap justify-center gap-x-8 gap-y-3" aria-label="Footer">
                    {footerNavigation.main.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="/#contact"
                        className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                    <a
                        href="/#join"
                        className="text-sm leading-6 text-gray-400 hover:text-white transition-colors"
                    >
                        Join Us
                    </a>
                </nav>

                {/* Social Links */}
                <div className="flex justify-center gap-x-6 mb-10">
                    {footerNavigation.social.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-secondary transition-colors"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 pt-8">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; {year} Tanzania Muslims Developer Community. All rights reserved.
                    </p>
                    <p className="text-center text-xs leading-5 text-gray-600 mt-2">
                        Made with ❤️ for the Ummah
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;