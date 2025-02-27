import React from "react";

import { Typewriter } from "react-simple-typewriter";
import Header from "../components/Header";
import banner from '/assets/images/BustaniBanner.jpg';
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
        <section
            className="relative bg-blue-200"
            style={bannerStyle}
        >
            <div className="absolute grid items-center p-4 top-0 left-0 text-center bg-black/30 w-dvw h-full" style={{ backdropFilter: 'blur(1px)' }}>
                {/* TODO: Add TyperJs To Slogan */}
                <span
                    className="text-white text-2xl"
                    style={{ fontWeight: '500', textShadow: '0 0 .5rem #fff' }}
                >
                    <Typewriter words={sloganList} loop={0} cursor cursorStyle=';' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                </span>
            </div>
            <Header />
        </section>
    )
}

export default Hero