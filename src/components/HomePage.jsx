import React from 'react';
import { ArrowRight, Feather, Zap, Shield } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 py-20 lg:py-32 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              Share Your Story with <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                The World
              </span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              The modern platform for writers. Create, edit, and manage your personal blog 
              with a beautiful interface and lightning-fast performance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20">
                Start Writing Now <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-full transition-all border border-slate-700">
                Explore Blogs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFO / FEATURES SECTION --- */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose DevBlog?</h2>
          <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-lg flex items-center justify-center mb-6">
              <Feather size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Rich Editing</h3>
            <p className="text-slate-600">
              A distraction-free writing environment that lets you focus on what matters: your ideas.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Loading</h3>
            <p className="text-slate-600">
              Optimized images and lightweight code ensure your readers never have to wait.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Full Control</h3>
            <p className="text-slate-600">
              You own your content. Edit or delete your posts anytime with our easy-to-use dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* --- IMAGE / GALLERY SECTION --- */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Capture the Moment with Visual Stories
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our platform supports high-resolution imagery to make your blog posts pop. 
                Whether you're a travel photographer or a tech reviewer, your visuals will look stunning.
              </p>
              <ul className="space-y-4">
                {['Automatic Image Optimization', 'Drag & Drop Uploads', 'Custom Galleries'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-800 font-medium">
                    <div className="w-5 h-5 bg-cyan-500 rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=600" 
                alt="Working" 
                className="rounded-2xl shadow-lg transform translate-y-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&q=80&w=600" 
                alt="Writing" 
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Ready to join the community?</h2>
          <button className="bg-slate-900 text-white px-10 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;