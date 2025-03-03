'use client'


import React from "react";

import { Typewriter } from "react-simple-typewriter";
import Header from "../components/Header";
import banner from '/assets/images/tmdc-banner-miin.png';
const Hero = () => {

    const sloganList = [
        'Tech for Taqwa: Building a Better Future Together',
        'From Bytes to Blessings: Tech Solutions for Muslims',
        'Empowering Muslims Through Technology',
        'Tech-driven, Faith-inspired, Community-focused',
        'Innovation, Faith, Unity: Empowering Muslims Through Technology',
    ];

    const bannerStyle = {
        height: '500px',
        background: `linear-gradient(#1117, #0008), url(${banner})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        <>
            <div id="home" className="bg-white">
                <Header />

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#38b5fe] to-[#204371] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Announcing our new App.{' '}
                                <a href="#projects" className="font-semibold text-blue-600">
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    Read more <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl font-semibold tracking-tight text-balance text-primary sm:text-7xl">
                                Tanzania Muslims Developer Community
                            </h1>
                            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                                <Typewriter words={sloganList} loop={0} cursor cursorStyle=';' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#about"
                                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                >
                                    Get to Know Us
                                </a>
                                <a href="#" className="text-sm/6 font-semibold text-gray-900">
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    >
                        <div
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#38b5fe] to-[#204371] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        />
                    </div>
                </div>
            </div>

            {/* <section
                className="relative bg-blue-200"
                style={bannerStyle}
            >
                <div className="absolute grid items-center p-4 top-0 left-0 text-center bg-black/30 w-dvw h-full" style={{ backdropFilter: 'blur(1px)' }}>
                    
                    <span
                        className="text-white text-2xl"
                        style={{ fontWeight: '500', textShadow: '0 0 .5rem #fff' }}
                    >
                        <Typewriter words={sloganList} loop={0} cursor cursorStyle=';' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                    </span>
                </div>
                <Header />
            </section> */}

        </>
    )
}

export default Hero