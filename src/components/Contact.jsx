import { Mail, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="bg-blue-200/20 backdrop-blur-3xl py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">
                    Get in Touch
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                    Have a question or want to collaborate? Reach out to us!
                </p>

                {/* Contact Details */}
                <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
                    <a
                        href="mailto:muslimsdevtz@gmail.com"
                        className="flex items-center gap-3 text-gray-700 hover:text-primary transition"
                    >
                        <Mail className="w-6 h-6 text-secondary" />
                        <span>muslimsdevtz@gmail.com</span>
                    </a>

                    <a
                        href="https://wa.me/255766570255"
                        className="flex items-center gap-3 text-gray-700 hover:text-primary transition"
                    >
                        <Phone className="w-6 h-6 text-secondary" />
                        <span>Join our WhatsApp Community</span>
                    </a>
                </div>

                {/* Contact Form */}
                {/* <div className="mt-12 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full mt-4 h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
                        ></textarea>
                        <button
                            type="submit"
                            className="mt-4 bg-secondary text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition"
                        >
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>
                    </form>
                </div> */}
            </div>
        </section>
    );
};

export default Contact;
