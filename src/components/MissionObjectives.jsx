import React from 'react';

const MissionObjectives = () => {

    const missionObjective = [
        {
            'id': 1,
            'title': 'Mission',
            'description': 'The mission of the Community is to bring together Muslim developers and technology enthusiasts from Tanzania and around the world, with the aim of contributing to Islamic projects, promoting networking, and fostering knowledge sharing.',
            'image': ''
        },
        {
            'id': 2,
            'title': 'Objective 1',
            'description': 'To develop and contribute to technological solutions that benefit the Muslim community, both locally and globally.',
            'image': ''
        },
        {
            'id': 3,
            'title': 'Objective 2',
            'description': 'To provide a platform for members to network, collaborate, and share knowledge related to technology and its applications within an Islamic context.',
            'image': ''
        },
        {
            'id': 4,
            'title': 'Objective 4',
            'description': 'To promote unity, mutual respect, and understanding among members, regardless of their level of expertise or background.',
            'image': ''
        }
    ];
    return (
        <section className="text-primary body-font">
            <h1 className='text-center text-4xl pt-10' style={{ fontWeight: '600' }}>Our Mission & Objectives</h1>
            <div className="container px-5 py-14 mx-auto flex flex-wrap">

                {missionObjective.map((missionObj) =>
                    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto" key={missionObj.id}>
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">{missionObj.id}</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-24 h-24 bg-blue-200 text-blue-500 rounded-full inline-flex items-center justify-center">
                                {missionObj.id === 1 &&
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>}

                                {missionObj.id >= 2 &&
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>}
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{missionObj.title}</h2>
                                <p className="leading-relaxed">{missionObj.description}</p>
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">The Catalyzer</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                <circle cx="12" cy="5" r="3"></circle>
                                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">The 400 Blows</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div>
                <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-blue-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                            <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Neptune</h2>
                            <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default MissionObjectives