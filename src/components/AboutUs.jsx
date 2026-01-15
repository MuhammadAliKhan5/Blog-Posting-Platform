import React from 'react';
import { Users, Globe, Award } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Story</h1>
        <p className="text-slate-400 max-w-2xl mx-auto px-4">
          We believe everyone has a story worth telling. DevBlog was built to provide a 
          seamless, beautiful space for those stories to live.
        </p>
      </section>

      {/* Stats/Values Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-8 rounded-2xl bg-slate-50">
            <div className="bg-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-600">
              <Users size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">10k+ Writers</h3>
            <p className="text-slate-600">A growing community of creative minds sharing daily.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Globe size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">Global Reach</h3>
            <p className="text-slate-600">Readers from over 150 countries exploring new ideas.</p>
          </div>
          <div className="p-8 rounded-2xl bg-slate-50">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
              <Award size={24} />
            </div>
            <h3 className="font-bold text-xl mb-2">Quality First</h3>
            <p className="text-slate-600">Built with the latest tech to ensure the best reading experience.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;