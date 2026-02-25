import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowTopRightOnSquareIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { FaGooglePlay } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const AppShowcase = () => {
  const releaseDate = new Date('2026-02-19T23:49:00');
  const formattedDate = releaseDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const screenshots = [
    "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194456_rcrofj.jpg",
    "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024785/Screenshot_20260203_193642_qqvne0.jpg",
    "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194345_z8u7qy.jpg",
    "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024794/Screenshot_20260203_194512_jto6dk.jpg",
    "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024793/Screenshot_20260203_193754_cs5qkx.jpg",
    "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024788/Screenshot_20260203_193720_u8e9qt.jpg",
  ];

  const features = [
    "6 Hadith Collections",
    "Audio Recitation",
    "Offline Access",
    "Bookmarks & Share",
  ];

  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            New Release • {formattedDate}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Introducing <span className="text-secondary">Bustani ya Hadith</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Your companion for authentic Hadith collections with beautiful Arabic typography and audio recitation.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone Mockup */}
          <div className="relative flex justify-center order-1 lg:order-1">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[260px] sm:w-[280px]">
                <div className="relative bg-gray-900 rounded-[3rem] p-2.5 shadow-2xl">
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20"></div>
                  
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      loop={true}
                      className="h-full w-full app-showcase-swiper"
                    >
                      {screenshots.map((screenshot, index) => (
                        <SwiperSlide key={index} className="h-full">
                          <img
                            src={screenshot}
                            alt={`Bustani ya Hadith Screenshot ${index + 1}`}
                            className="w-full h-full object-cover object-top"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -right-6 sm:-right-12 top-8 bg-white rounded-2xl shadow-xl p-3 z-30">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900">4.8</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">User Rating</p>
              </div>

              {/* Download Badge */}
              <div className="absolute -left-4 sm:-left-10 bottom-16 bg-gray-900 rounded-2xl shadow-xl p-3 z-30">
                <div className="text-white text-center">
                  <div className="text-lg font-bold">1K+</div>
                  <div className="text-xs text-gray-400">Downloads</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Authentic Hadith at Your Fingertips
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Discover authentic Hadith collections including Sahih Bukhari, Sahih Muslim, and more. 
              With beautiful Arabic typography and audio recitation support, deepen your understanding 
              of the Prophet's teachings anytime, anywhere.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.tmdc.bustani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-gray-900 px-6 py-4 text-white hover:bg-black transition-colors"
              >
                <FaGooglePlay className="h-6 w-6" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider opacity-70">Get it on</div>
                  <div className="text-base font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>
              <Link
                to="/apps"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-gray-200 px-6 py-4 text-gray-900 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                View All Apps
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
