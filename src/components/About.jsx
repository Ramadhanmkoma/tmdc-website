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
        <>
            <div className="relative isolate overflow-hidden bg-transparent px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        aria-hidden="true"
                        className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-blue-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                    >
                        <defs>
                            <pattern
                                x="50%"
                                y={-1}
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-transparent">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base/7 font-semibold text-blue-600">Get to Know Us!</p>
                                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                    About TMDC
                                </h1>
                                <p className="mt-6 text-xl/8 text-gray-700">
                                    Tanzania Muslims Developers Community (TMDC) is a tech-driven platform uniting Muslim developers in Tanzania. Our goal is to <strong className='underline'>innovate, build, and contribute</strong> to the tech space while promoting Islamic values.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
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
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">

                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
                                <h2 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
                                    Our Mission
                                </h2>

                                <ul role="list" className="mt-8 space-y-8 text-gray-600">

                                    {features.map((feature) => (
                                        <li className="flex gap-x-3">
                                            <feature.icon aria-hidden="true" className="mt-1 size-5 flex-none text-primary" />
                                            <span>
                                                <strong className="font-semibold text-gray-900">{feature.name}</strong> {feature.description}
                                            </span>
                                        </li>))}
                                </ul>
                                <p className="mt-8">
                                    <a href="#join" rel="noopener noreferrer" className="inline-flex items-center gap-x-1.5 rounded-md bg-primary px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary-dark">
                                        Join Us
                                        <span className="sr-only">, to the TMDC Community</span>
                                    </a>
                                </p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div id='about' className="overflow-hidden bg-white py-24 sm:py-32">
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
            </div> */}

        </>
    );
};

export default About;
