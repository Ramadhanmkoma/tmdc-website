import React, { useRef } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, StarIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaReact, FaNodeJs, FaDocker, FaJava, FaAngular } from 'react-icons/fa';
import { SiDart, SiFirebase, SiSupabase, SiTailwindcss, SiFlutter, SiSpringboot, SiKotlin, SiTypescript } from 'react-icons/si';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const projects = [
  {
    id: 1,
    name: "Bustani ya Hadith",
    type: "Mobile App",
    status: "completed",
    description: "A comprehensive Hadith app featuring audio support, multiple collections, and offline access. Built with Flutter and Firebase.",
    image: "https://res.cloudinary.com/dtibkhud5/image/upload/v1772023859/thumbnail_zyjvbf.jpg",
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Firebase", icon: SiFirebase },
    ],
    links: {
      playstore: "https://play.google.com/store/apps/details?id=com.tmdc.bustani",
      website: "https://bustani.gohimma.xyz/",
    },
    highlights: ["6 Hadith Collections", "Audio Recitation", "Offline Mode"],
  },
  {
    id: 2,
    name: "TMDC Website",
    type: "Web Application",
    status: "completed",
    description: "The official TMDC community website showcasing our projects, mission, and providing a platform for Muslim developers to connect.",
    image: "/assets/images/tmdc-banner.png",
    technologies: [
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    links: {
      website: "https://tmdc.gohimma.xyz/",
      github: "#",
    },
    highlights: ["Modern UI", "Responsive Design", "Fast Performance"],
  },
  {
    id: 3,
    name: "Darsa Audio Platform",
    type: "Mobile App",
    status: "in-progress",
    description: "An Islamic educational platform offering audio lessons from renowned scholars. Features include playlists, progress tracking, and offline downloads.",
    image: "/assets/images/coming-soon.png",
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Supabase", icon: SiSupabase },
    ],
    links: {},
    highlights: ["Scholar Library", "Progress Tracking", "Offline Mode"],
    expectedDate: "Q3 2026",
  },
  {
    id: 4,
    name: "Ahkaam Al-Janazah",
    type: "Mobile App",
    status: "planned",
    description: "A comprehensive guide to Islamic funeral rites with step-by-step instructions, duas, and audio support.",
    image: "/assets/images/coming-soon.png",
    technologies: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
    ],
    links: {},
    highlights: ["Step-by-Step Guide", "Duas & Prayers", "Audio Support"],
    expectedDate: "Q4 2026",
  },
];

const techStack = [
  { name: "Flutter", icon: SiFlutter, color: "bg-blue-500", description: "Cross-platform Apps" },
  { name: "React", icon: FaReact, color: "bg-cyan-500", description: "Web Development" },
  { name: "Angular", icon: FaAngular, color: "bg-red-500", description: "Enterprise Web Apps" },
  { name: "Spring Boot", icon: SiSpringboot, color: "bg-green-500", description: "Java Backend" },
  { name: "Node.js", icon: FaNodeJs, color: "bg-green-600", description: "Backend Services" },
  { name: "Docker", icon: FaDocker, color: "bg-blue-600", description: "Containerization" },
  { name: "Firebase", icon: SiFirebase, color: "bg-amber-500", description: "Cloud Platform" },
  { name: "Supabase", icon: SiSupabase, color: "bg-emerald-500", description: "Open Source Backend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-cyan-400", description: "Modern Styling" },
  { name: "TypeScript", icon: SiTypescript, color: "bg-blue-600", description: "Type-safe JavaScript" },
//   { name: "Kotlin", icon: SiKotlin, color: "bg-purple-500", description: "Android Development" },
  { name: "Java", icon: FaJava, color: "bg-orange-500", description: "Enterprise Solutions" },
];

const getStatusConfig = (status) => {
  switch (status) {
    case 'completed':
      return { label: 'Completed', bgColor: 'bg-green-500', textColor: 'text-white' };
    case 'in-progress':
      return { label: 'In Progress', bgColor: 'bg-secondary', textColor: 'text-white' };
    case 'planned':
      return { label: 'Planned', bgColor: 'bg-gray-500', textColor: 'text-white' };
    default:
      return { label: status, bgColor: 'bg-gray-500', textColor: 'text-white' };
  }
};

const ProjectsPage = () => {
  const techSwiperRef = useRef(null);

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gray-900 pt-16">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-primary/30" />
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm font-medium bg-white/10 text-white backdrop-blur-sm border border-white/10">
              <CodeBracketIcon className="h-4 w-4 text-secondary" />
              Open Source & Community Driven
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Our <span className="text-secondary">Projects</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Explore our portfolio of Islamic technology solutions. From mobile apps to web platforms, 
              we build with purpose and passion.
            </p>
            
            {/* Quick Stats */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">4</div>
                <div className="mt-1 text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-green-400">2</div>
                <div className="mt-1 text-sm text-gray-400">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-secondary">1</div>
                <div className="mt-1 text-sm text-gray-400">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400">12+</div>
                <div className="mt-1 text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </div>

      {/* Tech Stack Slider Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Our Stack</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Technologies We Use</h2>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button 
                onClick={() => techSwiperRef.current?.slidePrev()}
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button 
                onClick={() => techSwiperRef.current?.slideNext()}
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => { techSwiperRef.current = swiper; }}
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            className="tech-stack-swiper"
          >
            {techStack.map((tech, index) => (
              <SwiperSlide key={index}>
                <div className="group flex flex-col items-center p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all cursor-pointer">
                  <div className={`p-3 sm:p-4 ${tech.color} rounded-xl text-white mb-3 group-hover:scale-110 transition-transform`}>
                    <tech.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{tech.name}</span>
                  <span className="text-xs text-gray-500 mt-1 text-center hidden sm:block">{tech.description}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Swipe through our work and see what we've been building for the community.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
              1280: { slidesPerView: 2.2 },
            }}
            className="projects-swiper !pb-14"
          >
            {projects.map((project) => {
              const statusConfig = getStatusConfig(project.status);
              return (
                <SwiperSlide key={project.id}>
                  <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                    {/* Project Image */}
                    <div className="relative h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center rounded-full ${statusConfig.bgColor} px-3 py-1 text-xs font-semibold ${statusConfig.textColor}`}>
                          {statusConfig.label}
                        </span>
                      </div>
                      
                      {/* Type Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gray-900">
                          {project.type}
                        </span>
                      </div>
                      
                      {/* Project Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">{project.name}</h3>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <p className="text-gray-600 line-clamp-2 mb-5">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="inline-flex items-center gap-1.5 bg-gray-100 rounded-full px-3 py-1.5 hover:bg-gray-200 transition-colors"
                          >
                            <tech.icon className="h-4 w-4 text-gray-600" />
                            <span className="text-xs font-medium text-gray-700">{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.highlights.map((highlight, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center gap-1 text-xs text-gray-500"
                          >
                            <StarIcon className="h-3.5 w-3.5 text-yellow-500" />
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Links or Expected Date */}
                      <div className="flex items-center gap-3">
                        {project.status === 'completed' ? (
                          <>
                            {project.links.playstore && (
                              <a
                                href={project.links.playstore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-black transition-colors"
                              >
                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                View App
                              </a>
                            )}
                            {project.links.github && (
                              <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-200 transition-colors"
                              >
                                <FaGithub className="h-4 w-4" />
                                GitHub
                              </a>
                            )}
                            {project.links.website && !project.links.playstore && (
                              <a
                                href={project.links.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-black transition-colors"
                              >
                                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                                Visit Site
                              </a>
                            )}
                          </>
                        ) : (
                          <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-4 py-2.5 rounded-xl">
                            <ClockIcon className="h-4 w-4" />
                            Expected: {project.expectedDate}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="mt-12 text-center">
            <Link 
              to="/apps" 
              className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-primary transition-colors"
            >
              View All Apps
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="bg-gray-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-800 to-gray-800/50 p-8 sm:p-12 lg:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="contrib-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#contrib-pattern)" />
              </svg>
            </div>
            
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Get Involved</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Want to Contribute?
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  We're always open to collaborations. Whether you're a developer, designer, or have ideas for new projects, 
                  we'd love to hear from you and build something meaningful together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#join"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    Join Our Team
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-transparent border border-gray-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">12+</div>
                  <div className="text-sm text-gray-400">Developers</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">100%</div>
                  <div className="text-sm text-gray-400">Open Source</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">1K+</div>
                  <div className="text-sm text-gray-400">App Downloads</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">∞</div>
                  <div className="text-sm text-gray-400">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
