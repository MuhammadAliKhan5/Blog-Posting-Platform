import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
            <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <  img
                            className="relative w-auto h-16 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
                            src="/ogo1.png"
                            alt="Logo"
                        />
                        <p className="mt-4 text-slate-400 leading-relaxed">
                            Empowering writers to share their thoughts with a global audience. Simple, fast, and free.
                        </p>
                        <div className="flex space-x-5 mt-6">
                            <a href="https://x.com/Muhamma8129943" className="hover:text-cyan-400 transition-colors"><Twitter size={20} /></a>
                            <a href="https://github.com/MuhammadAliKhan5" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
                            <a href="https://www.linkedin.com/in/muhammad-ali-khan-245b442bb/" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
                            <a href="https://www.instagram.com/" className="hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Platform</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/" className="hover:text-cyan-400 transition-colors">Home</a></li>
                            <li><a href="/create" className="hover:text-cyan-400 transition-colors">Create Blog</a></li>
                            <li><a href="/about" className="hover:text-cyan-400 transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-cyan-400 transition-colors">Contact Me</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Resources</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Stay Updated</h3>
                        <p className="text-sm text-slate-400 mb-4">Get the latest news and articles directly in your inbox.</p>
                        <div className="flex flex-col space-y-2">
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                />
                                <button className="absolute right-2 top-1.5 text-cyan-400 hover:text-cyan-300">
                                    <Mail size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2026 DevBlogger Platform. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <span className="flex items-center gap-1">
                            Status: <span className="w-2 h-2 bg-green-500 rounded-full"></span> All Systems Operational
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;