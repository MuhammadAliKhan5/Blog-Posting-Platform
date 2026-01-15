import React, { useState, useEffect } from 'react';
import { Trash2, Pencil, Calendar, Eye, X, ArrowRight, Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllBlogs = ({ blogs, setBlogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  // FIX: Scroll to top of the page when this component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteBlog = (id) => {
    if (window.confirm("Are you sure you want to delete this story?")) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  // NEW: Function to delete everything
  const deleteAllBlogs = () => {
    if (window.confirm("CRITICAL: This will delete ALL your stories. Are you sure?")) {
      setBlogs([]);
    }
  };

  const handleEdit = (blog) => {
    navigate('/create', { state: { editBlog: blog } });
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">All Blogs</h1>
            <p className="text-slate-500 font-medium">Manage and view all your published content.</p>
          </div>
          
          <div className="flex items-center gap-3">
            {/* NEW: Delete All Button - Only shows if there are blogs */}
            {blogs.length > 0 && (
              <button 
                onClick={deleteAllBlogs}
                className="flex items-center gap-2 bg-red-50 text-red-600 px-5 py-2 rounded-full border border-red-100 text-sm font-bold hover:bg-red-600 hover:text-white transition-all shadow-sm"
              >
                <Trash size={16} /> Delete All
              </button>
            )}
            
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200 text-sm font-bold text-slate-600">
              Total Posts: {blogs.length}
            </div>
          </div>
        </div>

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col">
                
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img 
                    src={blog.thumbnail || 'https://via.placeholder.com/600x400?text=No+Thumbnail'} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Floating Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={() => handleEdit(blog)}
                      className="p-3 bg-white/90 backdrop-blur-md text-cyan-600 rounded-2xl shadow-lg hover:bg-cyan-600 hover:text-white transition-all"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={() => deleteBlog(blog.id)}
                      className="p-3 bg-white/90 backdrop-blur-md text-red-500 rounded-2xl shadow-lg hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <Calendar size={14} className="text-cyan-500" />
                    <span>{blog.date || "Jan 15, 2026"}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 line-clamp-2 leading-tight group-hover:text-cyan-600 transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-6">
                    {blog.content}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50">
                    <button 
                      onClick={() => setSelectedBlog(blog)}
                      className="flex items-center gap-2 text-slate-900 font-black text-sm group/btn hover:text-cyan-600 transition-colors"
                    >
                      READ STORY <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-slate-200">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <Eye size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">No Stories Yet</h3>
            <p className="text-slate-500 mb-8">Your dashboard is empty. Start by creating your first blog post.</p>
            <button 
              onClick={() => navigate('/create')}
              className="bg-cyan-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-cyan-700 transition-all shadow-lg shadow-cyan-100"
            >
              + Create Blog
            </button>
          </div>
        )}
      </div>

      {/* FULL BLOG VIEW MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            <div className="relative h-64 md:h-80 bg-slate-200">
              <img src={selectedBlog.thumbnail} className="w-full h-full object-cover" alt="" />
              <button 
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 p-2 bg-black/20 text-white rounded-full hover:bg-black/40 backdrop-blur-md transition-all"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-8 md:p-12 overflow-y-auto">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">{selectedBlog.title}</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap">
                  {selectedBlog.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;