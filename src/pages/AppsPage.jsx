import React from "react";
import Header from "../components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ArrowTopRightOnSquareIcon, DevicePhoneMobileIcon, StarIcon } from '@heroicons/react/24/outline';
import { FaGooglePlay, FaApple, FaGlobe } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const apps = [
  {
    id: 1,
    name: "Bustani ya Hadith",
    tagline: "Authentic Hadith Collections at Your Fingertips",
    description: "An comprehensive app providing authentic Hadith collections with audio support in Arabic language. Access thousands of Hadiths from Sahih Bukhari, Sahih Muslim, and more. Features include audio recitation, bookmarks, and search functionality.",
    image: "https://res.cloudinary.com/dtibkhud5/image/upload/v1772023859/thumbnail_zyjvbf.jpg",
    mockup: "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194456_rcrofj.jpg",
    status: "released",
    releaseDate: "February 19, 2026",
    platforms: [
      { name: "Google Play", icon: FaGooglePlay, link: "https://play.google.com/store/apps/details?id=com.tmdc.bustani" },
      { name: "Web App", icon: FaGlobe, link: "https://bustani.gohimma.xyz/" },
    ],
    features: ["Audio Recitation", "6 Hadith Collections", "Bookmarks", "Offline Access", "Search", "Share"],
    technologies: ["Flutter", "Dart", "Firebase"],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    name: "Darsa Audio",
    tagline: "Islamic Learning Through Audio",
    description: "An Islamic learning platform with audio lessons on various topics including Fiqh, Aqeedah, Seerah, and more. Learn from renowned scholars at your own pace.",
    image: "/assets/images/coming-soon.png",
    status: "upcoming",
    expectedDate: "Q3 2026",
    platforms: [
      { name: "Google Play", icon: FaGooglePlay, link: "#" },
      { name: "App Store", icon: FaApple, link: "#" },
    ],
    features: ["Audio Lessons", "Scholar Library", "Playlists", "Offline Download", "Progress Tracking"],
    technologies: ["Flutter", "Dart", "Supabase"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    name: "Ahkaam Al-Janazah",
    tagline: "Complete Guide to Islamic Funeral Rites",
    description: "A comprehensive guide on Islamic funeral rites, including detailed teachings and best practices. Step-by-step guidance for this important Islamic obligation.",
    image: "/assets/images/coming-soon.png",
    status: "upcoming",
    expectedDate: "Q4 2026",
    platforms: [
      { name: "Google Play", icon: FaGooglePlay, link: "#" },
      { name: "App Store", icon: FaApple, link: "#" },
    ],
    features: ["Step-by-Step Guide", "Duas & Prayers", "Audio Support", "Offline Access"],
    technologies: ["Flutter", "Dart"],
    color: "from-purple-500 to-violet-600",
  },
];

const AppsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary via-blue-800 to-blue-900 pt-24 pb-16">
        <div className="absolute inset-0 -z-10 opacity-30">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="white" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 text-sm bg-white/10 text-white ring-1 ring-white/20">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              New Release: Bustani ya Hadith is now live!
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Our <span className="text-secondary">Apps</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
              Discover our collection of Islamic applications designed to bring you closer to your faith. 
              Built with love, powered by technology.
            </p>
          </div>
        </div>
      </div>

      {/* Featured App - Bustani ya Hadith */}
      <div className="relative bg-gray-50 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-green-100 text-green-800 mb-4">
                <StarIcon className="h-4 w-4 mr-1" />
                Featured Release
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Bustani ya Hadith
              </h2>
              <p className="mt-2 text-lg text-secondary font-medium">
                Released on February 19, 2026
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {apps[0].description}
              </p>
              
              <div className="mt-8">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {apps[0].features.map((feature, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.tmdc.bustani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 transition-colors"
                >
                  <FaGooglePlay className="h-5 w-5" />
                  <div className="text-left">
                    <div className="text-[10px] leading-none opacity-80">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </a>
                <a
                  href="https://bustani.gohimma.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-x-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                >
                  <FaGlobe className="h-5 w-5" />
                  <span>Visit Web App</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto w-[280px] h-[560px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl p-3">
                  <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden">
                    <img
                      src="https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194456_rcrofj.jpg"
                      alt="Bustani ya Hadith App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-2xl opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Apps Carousel */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All Our Applications
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore our complete suite of Islamic apps
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="apps-swiper pb-12"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 1.5, spaceBetween: 30 },
              1024: { slidesPerView: 2, spaceBetween: 40 },
            }}
          >
            {apps.map((app) => (
              <SwiperSlide key={app.id} className="!w-[350px] md:!w-[400px]">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full">
                  <div className={`h-48 bg-gradient-to-br ${app.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <DevicePhoneMobileIcon className="h-24 w-24 text-white/30" />
                    </div>
                    {app.status === 'released' && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Live
                      </div>
                    )}
                    {app.status === 'upcoming' && (
                      <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                    <p className="text-sm text-secondary font-medium mt-1">{app.tagline}</p>
                    <p className="mt-4 text-gray-600 text-sm line-clamp-3">{app.description}</p>
                    
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {app.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      {app.platforms.map((platform, index) => (
                        <a
                          key={index}
                          href={platform.link}
                          target={app.status === 'released' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            app.status === 'released'
                              ? 'bg-gray-900 text-white hover:bg-gray-800'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          <platform.icon className="h-4 w-4" />
                          {platform.name}
                        </a>
                      ))}
                    </div>
                    
                    {app.status === 'released' && (
                      <p className="mt-4 text-xs text-gray-500">Released: {app.releaseDate}</p>
                    )}
                    {app.status === 'upcoming' && (
                      <p className="mt-4 text-xs text-gray-500">Expected: {app.expectedDate}</p>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">1</div>
              <div className="mt-2 text-sm text-blue-200">Released Apps</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">2</div>
              <div className="mt-2 text-sm text-blue-200">In Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">1K+</div>
              <div className="mt-2 text-sm text-blue-200">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">4.8</div>
              <div className="mt-2 text-sm text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Have an App Idea?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We're always looking for new ideas to serve the Muslim community. Share your suggestion with us!
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-x-2 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
