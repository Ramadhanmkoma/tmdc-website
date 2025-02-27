import React from "react";
import { FaCode, FaGlobe, FaUsers } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="bg-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                    About TMDC
                </h2>
                <p className="text-primary mt-4 max-w-3xl mx-auto text-lg">
                    Tanzania Muslims Developers Community (TMDC) is a tech-driven platform uniting Muslim developers in Tanzania. Our goal is to **innovate, build, and contribute** to the tech space while promoting Islamic values.
                </p>

                {/* Features Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                        <FaUsers className="text-secondary text-5xl" />
                        <h3 className="text-xl font-semibold mt-4">Community Growth</h3>
                        <p className="text-primary mt-2 text-sm">
                            Connecting Muslim developers to share knowledge and build together.
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                        <FaCode className="text-secondary text-5xl" />
                        <h3 className="text-xl font-semibold mt-4">Open Source Projects</h3>
                        <p className="text-primary mt-2 text-sm">
                            We contribute to and develop Islamic apps for the benefit of the Ummah.
                        </p>
                    </div>

                    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg">
                        <FaGlobe className="text-secondary text-5xl" />
                        <h3 className="text-xl font-semibold mt-4">Global Impact</h3>
                        <p className="text-primary mt-2 text-sm">
                            Building solutions that serve both local and international Muslim communities.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
