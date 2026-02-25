import React, { useRef } from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline';
import { FaGooglePlay, FaApple, FaGlobe } from 'react-icons/fa';
import { SiFlutter, SiDart, SiFirebase, SiSupabase } from 'react-icons/si';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const apps = [
  {
    id: 1,
    name: "Bustani ya Hadith",
    tagline: "Authentic Hadith Collections at Your Fingertips",
    description: "An comprehensive app providing authentic Hadith collections with audio support in Arabic language. Access thousands of Hadiths from Sahih Bukhari, Sahih Muslim, and more.",
    screenshots: [
      "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194456_rcrofj.jpg",
      "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024785/Screenshot_20260203_193642_qqvne0.jpg",
      "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194345_z8u7qy.jpg",
      "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024794/Screenshot_20260203_194512_jto6dk.jpg",
      "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024793/Screenshot_20260203_193754_cs5qkx.jpg",
    ],
    status: "released",
    releaseDate: "February 19, 2026",
    platforms: [
      { name: "Google Play", icon: FaGooglePlay, link: "https://play.google.com/store/apps/details?id=com.tmdc.bustani" },
      { name: "Web App", icon: FaGlobe, link: "https://bustani.gohimma.xyz/" },
    ],
    features: ["Audio Recitation", "6 Hadith Collections", "Bookmarks & Favorites", "Offline Access", "Search Functionality", "Share Hadiths"],
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Firebase", icon: SiFirebase },
    ],
    stats: { downloads: "1K+", rating: "4.8", reviews: "50+" },
  },
  {
    id: 2,
    name: "Darsa Audio",
    tagline: "Islamic Learning Through Audio",
    description: "An Islamic learning platform with audio lessons on various topics including Fiqh, Aqeedah, Seerah, and more. Learn from renowned scholars at your own pace.",
    screenshots: [],
    status: "upcoming",
    expectedDate: "Q3 2026",
    platforms: [
      { name: "Google Play", icon: FaGooglePlay, link: "#" },
      { name: "App Store", icon: FaApple, link: "#" },
    ],
    features: ["Audio Lessons", "Scholar Library", "Playlists", "Offline Download", "Progress Tracking"],
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
  {
    id: 3,
    name: "Ahkaam Al-Janazah",
    tagline: "Complete Guide to Islamic Funeral Rites",
    description: "A comprehensive guide on Islamic funeral rites, including detailed teachings and best practices. Step-by-step guidance for this important Islamic obligation.",
    screenshots: [],
    status: "upcoming",
    expectedDate: "Q4 2026",
    platforms: [
      { name: "Google Play", icon: FaGooglePlay, link: "#" },
      { name: "App Store", icon: FaApple, link: "#" },
    ],
    features: ["Step-by-Step Guide", "Duas & Prayers", "Audio Support", "Offline Access"],
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
    ],
  },
];

const AppsPage = () => {
  const featuredSwiperRef = useRef(null);
  const featuredApp = apps[0];
  const upcomingApps = apps.filter(app => app.status === 'upcoming');

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-900 pt-16">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-primary/20 to-gray-900" />
        
        {/* Animated Dots Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm font-medium bg-secondary/20 text-secondary backdrop-blur-sm border border-secondary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Bustani ya Hadith is now live!
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Our <span className="text-secondary">Apps</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Discover our collection of Islamic applications designed to bring you closer to your faith. 
              Built with love, powered by technology.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">3</div>
                <div className="mt-1 text-sm text-gray-400">Apps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-400">1</div>
                <div className="mt-1 text-sm text-gray-400">Live</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-secondary">2</div>
                <div className="mt-1 text-sm text-gray-400">Coming</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Featured App Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 mb-4">
                <SparklesIcon className="h-4 w-4" />
                Featured Release
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{featuredApp.name}</h2>
              <p className="mt-2 text-secondary font-medium">{featuredApp.tagline}</p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={() => featuredSwiperRef.current?.slidePrev()}
                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button 
                onClick={() => featuredSwiperRef.current?.slideNext()}
                className="p-2.5 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-900 hover:text-white transition-colors"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Phone Mockup with Screenshots Slider */}
            <div className="relative order-2 lg:order-1">
              <div className="relative mx-auto w-[280px] sm:w-[300px]">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[3rem] p-2.5 shadow-2xl">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                  
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                    <Swiper
                      onSwiper={(swiper) => { featuredSwiperRef.current = swiper; }}
                      modules={[Pagination, Autoplay]}
                      pagination={{ clickable: true }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      className="h-full w-full featured-app-swiper"
                    >
                      {featuredApp.screenshots.map((screenshot, index) => (
                        <SwiperSlide key={index} className="h-full">
                          <img
                            src={screenshot}
                            alt={`${featuredApp.name} Screenshot ${index + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -right-4 sm:-right-16 top-12 bg-white rounded-2xl shadow-xl p-4 z-30">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-900">{featuredApp.stats.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{featuredApp.stats.reviews} reviews</p>
                </div>

                <div className="absolute -left-4 sm:-left-12 bottom-24 bg-gray-900 rounded-2xl shadow-xl p-4 z-30">
                  <div className="text-white text-center">
                    <div className="text-xl font-bold">{featuredApp.stats.downloads}</div>
                    <div className="text-xs text-gray-400">Downloads</div>
                  </div>
                </div>

                {/* Decorative Blurs */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/30 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {featuredApp.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {featuredApp.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircleIcon className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Built With</h4>
                <div className="flex gap-3">
                  {featuredApp.technologies.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                      <tech.icon className="h-5 w-5 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={featuredApp.platforms[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-gray-900 px-6 py-4 text-white hover:bg-black transition-colors"
                >
                  <FaGooglePlay className="h-6 w-6" />
                  <div className="text-left">
                    <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
                    <div className="text-base font-semibold -mt-0.5">Google Play</div>
                  </div>
                </a>
                <a
                  href={featuredApp.platforms[1].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-4 text-white font-semibold hover:bg-secondary/90 transition-colors"
                >
                  <FaGlobe className="h-5 w-5" />
                  Visit Web App
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-6 text-sm text-gray-500">
                Released on {featuredApp.releaseDate}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Apps Section */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Coming Soon</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Upcoming Apps
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We're working on more apps to serve the Muslim community. Stay tuned!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingApps.map((app) => (
              <div 
                key={app.id} 
                className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-secondary/30 hover:shadow-xl transition-all"
              >
                {/* Coming Soon Badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                    <ClockIcon className="h-3.5 w-3.5" />
                    {app.expectedDate}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{app.name}</h3>
                <p className="text-secondary font-medium text-sm mb-4">{app.tagline}</p>
                <p className="text-gray-600 mb-6">{app.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {app.features.slice(0, 4).map((feature, index) => (
                    <span 
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Built with</span>
                  <div className="flex gap-2">
                    {app.technologies.map((tech, index) => (
                      <div 
                        key={index} 
                        className="p-2 bg-gray-100 rounded-lg group-hover:bg-secondary/10 transition-colors"
                        title={tech.name}
                      >
                        <tech.icon className="h-5 w-5 text-gray-600 group-hover:text-secondary transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Platforms */}
                <div className="mt-6 flex gap-3">
                  {app.platforms.map((platform, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 text-gray-400"
                    >
                      <platform.icon className="h-4 w-4" />
                      <span className="text-sm font-medium">{platform.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary/20 to-primary/20 p-8 sm:p-12 lg:p-16 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-pattern)" />
              </svg>
            </div>
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Have an App Idea?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
                We're always looking for new ideas to serve the Muslim community. 
                Share your suggestion with us and let's build something meaningful together!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                >
                  Share Your Idea
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
                <a
                  href="/#join"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                >
                  Join Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppsPage;
