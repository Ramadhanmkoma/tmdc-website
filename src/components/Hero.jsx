'use client'


import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Header from "../components/Header";
import { FaGooglePlay } from 'react-icons/fa';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
    const sloganList = [
        'Tech for Taqwa',
        'From Bytes to Blessings',
        'Empowering Muslims Through Technology',
        'Faith-inspired Innovation',
    ];

    const appScreenshots = [
        "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194456_rcrofj.jpg",
        "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024785/Screenshot_20260203_193642_qqvne0.jpg",
        "https://res.cloudinary.com/dtibkhud5/image/upload/v1772024792/Screenshot_20260203_194345_z8u7qy.jpg",
    ];

    return (
        <>
            <div id="home" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white overflow-hidden">
                <Header />

                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    {/* Gradient Orbs */}
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl"></div>
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16 sm:pt-32">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
                        
                        {/* Left Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            {/* Announcement Badge */}
                            <Link 
                                to="/apps"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-colors mb-8 group"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span>🎉 Bustani ya Hadith is now live!</span>
                                <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* Main Heading */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                                <span className="block text-gray-900">Tanzania Muslims</span>
                                <span className="block mt-2 bg-gradient-to-r from-primary via-blue-600 to-secondary bg-clip-text text-transparent">
                                    Developer Community
                                </span>
                            </h1>

                            {/* Animated Tagline */}
                            <div className="mt-6 h-12 flex items-center justify-center lg:justify-start">
                                <p className="text-xl sm:text-2xl font-medium text-gray-500">
                                    <Typewriter 
                                        words={sloganList} 
                                        loop={0} 
                                        cursor 
                                        cursorStyle="|" 
                                        cursorColor="#38b5fe"
                                        typeSpeed={80} 
                                        deleteSpeed={50} 
                                        delaySpeed={2000} 
                                    />
                                </p>
                            </div>

                            {/* Description */}
                            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                We're building innovative tech solutions that serve the Muslim Ummah. 
                                Join us in creating meaningful digital experiences guided by faith.
                            </p>

                            {/* CTA Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <a
                                    href="#about"
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-primary/30 transition-all"
                                >
                                    <SparklesIcon className="h-5 w-5" />
                                    Discover Our Mission
                                </a>
                                <Link
                                    to="/apps"
                                    className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-base font-semibold text-gray-900 shadow-lg ring-1 ring-gray-200 hover:bg-gray-50 hover:ring-gray-300 transition-all"
                                >
                                    <FaGooglePlay className="h-5 w-5 text-primary" />
                                    Explore Our Apps
                                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-primary">12+</div>
                                    <div className="text-sm text-gray-500 mt-1">Developers</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-primary">1</div>
                                    <div className="text-sm text-gray-500 mt-1">Live App</div>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="text-3xl font-bold text-primary">1K+</div>
                                    <div className="text-sm text-gray-500 mt-1">Downloads</div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content - Phone Mockup */}
                        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
                            <div className="relative">
                                {/* Decorative Ring */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-emerald-500/20 rounded-[4rem] blur-2xl opacity-60"></div>
                                
                                {/* Phone Frame */}
                                <div className="relative w-[260px] sm:w-[300px]">
                                    <div className="relative bg-gray-900 rounded-[3rem] p-2.5 shadow-2xl shadow-gray-900/30">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>
                                        
                                        {/* Screen */}
                                        <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
                                            <Swiper
                                                modules={[Autoplay, EffectFade]}
                                                effect="fade"
                                                autoplay={{
                                                    delay: 2500,
                                                    disableOnInteraction: false,
                                                }}
                                                loop={true}
                                                className="h-full w-full"
                                            >
                                                {appScreenshots.map((screenshot, index) => (
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

                                {/* Floating Cards */}
                                <div className="absolute -left-20 top-1/4 bg-white rounded-2xl shadow-xl p-4 hidden lg:block animate-float z-30">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                                            <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Live on Play Store</div>
                                            <div className="text-xs text-gray-500">Feb 19, 2026</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -right-12 bottom-1/4 bg-white rounded-2xl shadow-xl p-3 hidden lg:block z-30" style={{ animation: 'float 3s ease-in-out infinite 1s' }}>
                                    <div className="flex items-center gap-2">
                                        <div className="flex -space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm font-bold text-gray-900">4.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Wave */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Hero