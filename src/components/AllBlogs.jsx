import React, { useState, useEffect } from 'react';
import {
  Trash2,
  Pencil,
  Calendar,
  Eye,
  X,
  ArrowRight,
  Trash
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AllBlogs = ({ blogs, setBlogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteBlog = (id) => {
    if (window.confirm("Are you sure you want to delete this story?")) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

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

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">
              All Blogs
            </h1>
            <p className="text-slate-500 font-medium">
              Manage and view all your published content.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {blogs.length > 0 && (
              <button
                onClick={deleteAllBlogs}
                className="flex items-center gap-2 bg-red-50 text-red-600 px-5 py-2 rounded-full border border-red-100 text-sm font-bold hover:bg-red-600 hover:text-white transition-all"
              >
                <Trash size={16} /> Delete All
              </button>
            )}

            <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-bold text-slate-600">
              Total Posts: {blogs.length}
            </div>
          </div>
        </div>

        {/* Blog Cards */}
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                  <img
                    src={blog.thumbnail || 'https://via.placeholder.com/600x400'}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="p-3 bg-white text-cyan-600 rounded-2xl shadow hover:bg-cyan-600 hover:text-white transition-all"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => deleteBlog(blog.id)}
                      className="p-3 bg-white text-red-500 rounded-2xl shadow hover:bg-red-500 hover:text-white transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">

                  {/* Date & Author (IMPROVED SIZE) */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2 text-slate-600 text-sm font-semibold">
                      <Calendar size={16} className="text-cyan-600" />
                      <span>{blog.date}</span>
                    </div>

                    {blog.author && (
                      <span className="text-base font-bold text-slate-700">
                        By {blog.author}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    {blog.title}
                  </h3>

                  {/* Full Content */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 whitespace-pre-wrap">
                    {blog.content}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="flex items-center gap-2 text-slate-900 font-black text-sm hover:text-cyan-600 transition-colors"
                    >
                      READ STORY <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] p-20 text-center border-2 border-dashed border-slate-200">
            <Eye size={40} className="mx-auto mb-6 text-slate-300" />
            <h3 className="text-xl font-bold text-slate-800 mb-2">
              No Stories Yet
            </h3>
            <p className="text-slate-500 mb-8">
              Start by creating your first blog post.
            </p>
            <button
              onClick={() => navigate('/create')}
              className="bg-cyan-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-cyan-700 transition-all"
            >
              + Create Blog
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col">

            <div className="relative h-72 bg-slate-200">
              <img
                src={selectedBlog.thumbnail}
                className="w-full h-full object-cover"
                alt=""
              />
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-6 right-6 p-2 bg-black/30 text-white rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-10 overflow-y-auto">
              <h2 className="text-4xl font-black text-slate-900 mb-2">
                {selectedBlog.title}
              </h2>

              <p className="text-lg font-bold text-slate-600 mb-6">
                By {selectedBlog.author} • {selectedBlog.date}
              </p>

              <p className="text-slate-700 text-lg leading-relaxed whitespace-pre-wrap">
                {selectedBlog.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
