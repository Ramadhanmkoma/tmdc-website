import React from "react";
import Header from "../components/Header";
import { CodeBracketIcon, GlobeEuropeAfricaIcon, UsersIcon, HeartIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const values = [
  {
    name: 'Faith-Driven Development',
    description: 'We build with purpose, guided by Islamic principles and values in every line of code we write.',
    icon: HeartIcon,
  },
  {
    name: 'Community First',
    description: 'Our projects serve the Muslim Ummah, creating solutions that make religious practice more accessible.',
    icon: UsersIcon,
  },
  {
    name: 'Innovation with Purpose',
    description: 'We leverage cutting-edge technology to solve real problems faced by Muslim communities worldwide.',
    icon: LightBulbIcon,
  },
  {
    name: 'Open Source Spirit',
    description: 'We believe in sharing knowledge and contributing to the global developer community.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Global Impact',
    description: 'From Tanzania to the world, our solutions reach Muslims across continents.',
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: 'Continuous Growth',
    description: 'We constantly learn, improve, and push boundaries to deliver excellence.',
    icon: RocketLaunchIcon,
  },
];

const team = [
  {
    name: 'Core Development Team',
    role: '12 Developers',
    description: 'Full-stack developers, mobile app specialists, and UI/UX designers working together.',
  },
  {
    name: 'Community Leaders',
    role: '19 Members',
    description: 'Active members contributing ideas, testing, and promoting our projects.',
  },
  {
    name: 'Technical Architects',
    role: '2 Architects',
    description: 'Senior developers guiding technical decisions and system design.',
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20 pt-24">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Building the Future of <span className="text-primary">Islamic Technology</span>
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                Tanzania Muslims Developer Community (TMDC) is more than a tech group – we're a movement. 
                Founded with the vision of empowering Muslims through technology, we bring together talented 
                developers who share a common goal: creating meaningful digital solutions for the Ummah.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Our journey began with a simple question: "How can technology serve our faith?" Today, 
                we're answering that question with every app we build, every line of code we write, 
                and every Muslim life we touch through our work.
              </p>
            </div>
            <img
              src="/assets/images/tmdc-banner.png"
              alt="TMDC Team"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Foundation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Values That Drive Us
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every project we undertake is guided by principles that reflect our commitment 
            to excellence, faith, and community service.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <value.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A diverse group of passionate Muslim developers united by faith and technology.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((member) => (
              <li key={member.name} className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <UsersIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                <p className="text-base font-semibold leading-7 text-blue-600">{member.role}</p>
                <p className="mt-4 text-base leading-7 text-gray-600">{member.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Join Our Mission?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Whether you're a seasoned developer or just starting out, there's a place for you in TMDC.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/#join"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join Us Today
              </a>
              <a href="/#contact" className="text-sm font-semibold leading-6 text-white">
                Contact Us <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
