import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '/assets/images/community-log.png';

const navigation = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Apps', href: '/apps', isRoute: true },
    { name: 'Projects', href: '/projects', isRoute: true },
    { name: 'Contact', href: '/#contact', isRoute: false },
];

// Pages with dark hero backgrounds where white text is readable
const darkHeroPages = ['/apps', '/projects'];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Check if current page has a dark hero
    const hasDarkHero = darkHeroPages.includes(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href) => {
        if (href === '/') return location.pathname === '/';
        return location.pathname.startsWith(href);
    };

    // Determine if we should use light text (white) or dark text
    const useLightText = hasDarkHero && !scrolled;

    return (
        <>
            <header 
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-white/95 backdrop-blur-md shadow-sm' 
                        : hasDarkHero 
                            ? 'bg-transparent'
                            : 'bg-white/95 backdrop-blur-md shadow-sm'
                }`}
            >
                <nav aria-label="Global" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 sm:h-18 items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center gap-2.5 group">
                                <div className={`relative p-1.5 rounded-xl transition-all duration-300 ${
                                    useLightText ? 'bg-white/10' : 'bg-gray-100'
                                }`}>
                                    <img
                                        alt="TMDC Logo"
                                        src={logo}
                                        className="h-8 w-8 object-contain"
                                    />
                                </div>
                                <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                                    useLightText ? 'text-white' : 'text-gray-900'
                                }`}>
                                    TMDC
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:gap-1">
                            {navigation.map((item) => {
                                const active = isActive(item.href);
                                return item.isRoute ? (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                            active
                                                ? useLightText 
                                                    ? 'text-white bg-white/20' 
                                                    : 'text-primary bg-blue-50'
                                                : useLightText 
                                                    ? 'text-white/80 hover:text-white hover:bg-white/10' 
                                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.name}
                                        {active && (
                                            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                                                useLightText ? 'bg-white' : 'bg-primary'
                                            }`} />
                                        )}
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                            useLightText 
                                                ? 'text-white/80 hover:text-white hover:bg-white/10' 
                                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                );
                            })}
                        </div>

                        {/* Desktop CTA */}
                        <div className="hidden lg:flex lg:items-center">
                            <a 
                                href="/#join" 
                                className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                                    useLightText 
                                        ? 'bg-white text-gray-900 hover:bg-gray-100' 
                                        : 'bg-gray-900 text-white hover:bg-black'
                                }`}
                            >
                                Join Us
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className={`p-2.5 rounded-full transition-colors ${
                                    useLightText 
                                        ? 'text-white hover:bg-white/10' 
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm">
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
                            <Link 
                                to="/" 
                                className="flex items-center gap-2.5" 
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <div className="p-1.5 bg-gray-100 rounded-xl">
                                    <img
                                        alt="TMDC Logo"
                                        src={logo}
                                        className="h-8 w-8 object-contain"
                                    />
                                </div>
                                <span className="font-bold text-lg text-gray-900">TMDC</span>
                            </Link>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-2.5 rounded-full text-gray-500 hover:bg-gray-100 transition-colors"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Mobile Menu Content */}
                        <div className="px-4 py-6">
                            <nav className="space-y-1">
                                {navigation.map((item) => {
                                    const active = isActive(item.href);
                                    return item.isRoute ? (
                                        <Link
                                            key={item.name}
                                            to={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                                                active
                                                    ? 'bg-blue-50 text-primary'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            {item.name}
                                            {active && (
                                                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                                            )}
                                        </Link>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    );
                                })}
                            </nav>

                            {/* Mobile CTA */}
                            <div className="mt-8 pt-6 border-t border-gray-100">
                                <a
                                    href="/#join"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-black transition-colors"
                                >
                                    Join Us
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>

                            {/* Social Links */}
                            <div className="mt-8 flex items-center justify-center gap-4">
                                <a 
                                    href="https://github.com/tmdc-tz" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 transition-colors"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a 
                                    href="https://wa.me/255766570255" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-colors"
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    );
};

export default Header;