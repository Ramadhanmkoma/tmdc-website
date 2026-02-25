import React from 'react';
import { Link } from 'react-router-dom';
import { CodeBracketIcon, UserGroupIcon, RocketLaunchIcon, HeartIcon } from '@heroicons/react/24/outline';

const stats = [
    { name: 'Developers', value: '12', icon: CodeBracketIcon },
    { name: 'Sponsors', value: '3', icon: HeartIcon },
    { name: 'Software Architects', value: '2', icon: RocketLaunchIcon },
    { name: 'Members', value: '19', icon: UserGroupIcon },
]

const JoinUs = () => {
    return (
        <section id='join' className="bg-gray-900 py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Join Our Community</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Work With Us
                    </h2>
                    <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                        We aim to develop innovative technological solutions that benefit the Muslim community 
                        in Tanzania & globally, while upholding the values of faith, unity, and progress.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat) => (
                        <div 
                            key={stat.name} 
                            className="relative group bg-gray-800/50 rounded-2xl p-6 sm:p-8 text-center hover:bg-gray-800 transition-colors border border-gray-800 hover:border-secondary/30"
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/10 mb-4">
                                <stat.icon className="h-6 w-6 text-secondary" />
                            </div>
                            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-gray-400">{stat.name}</div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-gray-800/50 to-gray-800/30 rounded-3xl p-8 sm:p-12 border border-gray-800">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                                Ready to Make an Impact?
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                Join a community of passionate Muslim developers working together to create 
                                meaningful technology solutions. Whether you're a beginner or experienced, 
                                there's a place for you here.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                            <a 
                                href="https://github.com/tmdc-tz" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                            >
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                                View on GitHub
                            </a>
                            <Link 
                                to="/about"
                                className="inline-flex items-center justify-center gap-2 rounded-xl bg-secondary/10 border border-secondary/30 px-6 py-3.5 text-secondary font-semibold hover:bg-secondary/20 transition-colors"
                            >
                                Learn More
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUs