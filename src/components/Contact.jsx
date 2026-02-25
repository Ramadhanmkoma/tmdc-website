import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import React from "react";

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Send us an email anytime",
        value: "muslimsdevtz@gmail.com",
        href: "mailto:muslimsdevtz@gmail.com",
        color: "bg-secondary/10 text-secondary",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        description: "Join our community",
        value: "Community Chat",
        href: "https://wa.me/255766570255",
        color: "bg-green-500/10 text-green-500",
    },
    {
        icon: MapPin,
        title: "Location",
        description: "Based in",
        value: "Dar es Salaam, Tanzania",
        href: "#",
        color: "bg-primary/10 text-primary",
    },
];

const Contact = () => {
    return (
        <section id="contact" className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">Contact</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                        Get in Touch
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                        Have a question, idea, or want to collaborate? We'd love to hear from you. 
                        Reach out through any of the channels below.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {contactMethods.map((method, index) => (
                        <a
                            key={index}
                            href={method.href}
                            target={method.href.startsWith("http") ? "_blank" : undefined}
                            rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="group relative bg-gray-50 rounded-2xl p-6 hover:bg-gray-900 transition-colors duration-300 border border-gray-100 hover:border-gray-900"
                        >
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${method.color} mb-4 group-hover:bg-white/10`}>
                                <method.icon className="h-6 w-6 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors mb-1">
                                {method.title}
                            </h3>
                            <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors mb-3">
                                {method.description}
                            </p>
                            <p className="text-gray-700 group-hover:text-secondary font-medium transition-colors">
                                {method.value}
                            </p>
                        </a>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-2 bg-gray-900 rounded-full px-6 py-3">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-white text-sm font-medium">
                            We typically respond within 24 hours
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
