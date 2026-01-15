import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactMe = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-lg text-slate-600">Have questions? I'd love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Contact Information (Dark Side) */}
          <div className="bg-slate-900 p-10 text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-slate-400 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg text-cyan-400"><Phone size={20} /></div>
                <span>+92 3353155526</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg text-cyan-400"><Mail size={20} /></div>
                <span>alikhan236778@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500/20 p-3 rounded-lg text-cyan-400"><MapPin size={20} /></div>
                <span>Hyderabad, Sindh, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Contact Form (Light Side) */}
          <div className="p-10">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" className="mt-1 w-full border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" className="mt-1 w-full border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" className="mt-1 w-full border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea rows="4" className="mt-1 w-full border border-slate-200 rounded-lg p-2.5 focus:ring-2 focus:ring-cyan-500 outline-none"></textarea>
              </div>
              <button className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg hover:bg-cyan-700 transition-colors flex items-center justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;