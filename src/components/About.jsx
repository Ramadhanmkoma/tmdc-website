import { CodeBracketIcon, GlobeEuropeAfricaIcon, UsersIcon, HeartIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import React from "react";
import { Link } from 'react-router-dom';

const features = [
    {
        name: 'Community Growth',
        description: 'Connecting Muslim developers to share knowledge and build impactful solutions together.',
        icon: UsersIcon,
    },
    {
        name: 'Open Source Projects',
        description: 'We contribute to and develop Islamic apps for the benefit of the Ummah worldwide.',
        icon: CodeBracketIcon,
    },
    {
        name: 'Global Impact',
        description: 'Building solutions that serve both local and international Muslim communities.',
        icon: GlobeEuropeAfricaIcon,
    },
];

const values = [
    { icon: HeartIcon, title: 'Faith-Driven', description: 'Guided by Islamic principles' },
    { icon: LightBulbIcon, title: 'Innovation', description: 'Creative tech solutions' },
    { icon: RocketLaunchIcon, title: 'Excellence', description: 'Quality in everything we do' },
];

const About = () => {
    return (
        <section id='about' className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block text-secondary font-semibold text-sm tracking-wider uppercase mb-3">
                        Get to Know Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        About <span className="text-primary">TMDC</span>
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Tanzania Muslims Developers Community (TMDC) is a tech-driven platform uniting Muslim developers in Tanzania. 
                        Our goal is to <strong className="text-gray-900">innovate, build, and contribute</strong> to the tech space while promoting Islamic values.
                    </p>
                </div>

                {/* Mission Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div 
                            key={feature.name}
                            className="group relative bg-gray-50 rounded-2xl p-8 hover:bg-gray-900 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-secondary/10 group-hover:bg-secondary/20 flex items-center justify-center mb-6 transition-colors">
                                <feature.icon className="h-6 w-6 text-secondary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">
                                {feature.name}
                            </h3>
                            <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Values Row */}
                <div className="bg-gray-900 rounded-3xl p-8 sm:p-12">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
                        <div className="sm:col-span-2 lg:col-span-1">
                            <h3 className="text-2xl font-bold text-white mb-2">Our Values</h3>
                            <p className="text-gray-400">What drives us forward every day</p>
                        </div>
                        {values.map((value, index) => (
                            <div key={value.title} className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                                    <value.icon className="h-5 w-5 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{value.title}</h4>
                                    <p className="text-sm text-gray-400">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link 
                        to="/about"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
                    >
                        Learn more about our story
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
