import { CodeBracketIcon, GlobeEuropeAfricaIcon, UsersIcon } from '@heroicons/react/20/solid';
import React from "react";
import banner from '/assets/images/tmdc-banner.png';

const features = [
    {
        name: 'Community Growth',
        description:
            'Connecting Muslim developers to share knowledge and build together.',
        icon: UsersIcon,
    },
    {
        name: 'Open Source Projects',
        description: 'We contribute to and develop Islamic apps for the benefit of the Ummah.',
        icon: CodeBracketIcon,
    },
    {
        name: 'Global Impact',
        description: 'Building solutions that serve both local and international Muslim communities.',
        icon: GlobeEuropeAfricaIcon,
    },
];

const About = () => {
    return (
        <div id='about' className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base/7 font-semibold text-blue-600">Get to Know Us!</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                About TMDC
                            </p>
                            <p className="mt-6 text-lg/8 text-gray-600">
                                Tanzania Muslims Developers Community (TMDC) is a tech-driven platform uniting Muslim developers in Tanzania. Our goal is to **innovate, build, and contribute** to the tech space while promoting Islamic values.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-blue-600" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src={banner}
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        style={{
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'left',
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
