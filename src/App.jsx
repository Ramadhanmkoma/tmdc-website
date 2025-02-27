import React from "react";
import Footer from "./components/Footer";
import MissionObjectives from "./components/MissionObjectives";
import banner from '/assets/images/BustaniBanner.jpg';
import logo from '/assets/images/community-log.png';

function App() {

  const bannerStyle = {
    height: '500px',
    background: `linear-gradient(#1117, #0008), url(${banner})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  };

  const projects = [
    {
      'title': 'Bustani Ya Hadith',
      'description': '',
      'image': '/assets/icon/leafs.png',
      'platform': [
        {
          android: 'Android',
          iOS: 'iOS',
          web: 'Web',
          windows: 'Windows',
          linux: 'Linux'
        }
      ]
    },
    {
      'title': 'Darsa App',
      'description': '',
      'image': '/assets/images/community-log.png',
      'platform': [
        {
          android: 'Android',
          iOS: 'iOS',
          web: 'Web',
          windows: 'Windows',
          linux: 'Linux'
        }
      ]
    },
    {
      'title': 'Ahkaam Janazah',
      'description': '',
      'image': '/assets/images/community-log.png',
      'platform': [
        {
          android: 'Android',
          iOS: 'iOS',
          web: 'Web',
          windows: 'Windows',
          linux: 'Linux'
        }
      ]
    },
    {
      'title': 'Dua & Dhikr',
      'description': '',
      'image': '/assets/images/community-log.png',
      'platform': [
        {
          android: 'Android',
          iOS: 'iOS',
          web: 'Web',
          windows: 'Windows',
          linux: 'Linux'
        }
      ]
    }
  ];

  return (
    <>
      <section
        className="relative bg-blue-200 p-4"
        style={bannerStyle}
      >
        <div className="absolute grid items-center top-0 left-0 text-center bg-black/30 w-dvw h-full" style={{ backdropFilter: 'blur(1px)' }}>
          {/* TODO: Add TyperJs To Slogan */}
          <span
            className="text-white text-2xl"
            style={{ fontWeight: '500', textShadow: '0 0 .5rem #fff' }}
          >
            Tech for Taqwa: Building a Better Future Together
          </span>
        </div>
        <header className="absolute w-full">
          <nav className="relative flex justify-between items-center my-navbar">
            <div className="container mx-auto sticky top-0 flex justify-between items-center my-navbar">
              <img src={logo} alt="tdmc" width={50} height={50} />
              <div className="nav-menu">
                <ul className="flex gap-8 p-4 text-white">
                  <li><a className="" href="#">Home</a></li>
                  <li><a className="" href="#">About Us</a></li>
                  <li><a className="" href="#">Projects</a></li>
                  <li><a className="" href="#">Contact US</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </section>

      <div className="relative -top-14 mx-auto text-black/90 bg-white/10 text-center w-fit h-fit p-8 rounded-4xl" style={{
        backdropFilter: 'blur(10px)',
        boxShadow: '0 2px .2rem #c1c1c1'
      }}>
        <h1 className="text-2xl text-white" style={{ fontWeight: '600', textShadow: '0 0 .5rem #000' }}>Tanzania Muslim Developer Community</h1>
      </div>

      <MissionObjectives />

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">OUR PROJECTS</h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
          </div>
          <div class="flex flex-wrap -m-4">
            {projects.map((project, index) =>
              <div class="p-4 lg:w-1/2" key={index}>
                <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={project.image} />
                  <div class="flex-grow sm:pl-8">
                    <h2 class="title-font font-medium text-lg text-gray-900">{project.title}</h2>
                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-gray-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )
            }
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App