import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Upload, X } from 'lucide-react';

const CreateBlog = ({ blogs, setBlogs }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const editData = location.state?.editBlog;

  const [title, setTitle] = useState(editData ? editData.title : '');
  const [content, setContent] = useState(editData ? editData.content : '');
  const [author, setAuthor] = useState(editData ? editData.author : '');
  const [image, setImage] = useState(editData ? editData.thumbnail : null);
  const [preview, setPreview] = useState(editData ? editData.thumbnail : null);

  const handleTitleChange = (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setTitle(value);
  };

  const handleContentChange = (e) => {
    const val = e.target.value;
    if (val.length > 0) {
      setContent(val.charAt(0).toUpperCase() + val.slice(1));
    } else {
      setContent('');
    }
  };

  const handleAuthorChange = (e) => {
    let value = e.target.value;
    if (value.length > 0) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    setAuthor(value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogData = {
      title,
      content,
      author,
      thumbnail: preview,
      date: new Date().toLocaleDateString(),
    };

    if (editData) {
      const updatedBlogs = blogs.map((b) =>
        b.id === editData.id ? { ...b, ...blogData } : b
      );
      setBlogs(updatedBlogs);
    } else {
      setBlogs([{ id: Date.now(), ...blogData }, ...blogs]);
    }

    navigate('/all-blogs');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10 bg-white rounded-[2.5rem] shadow-xl mt-10 border border-slate-100">
      <h2 className="text-4xl font-black text-slate-900 mb-8">
        {editData ? 'Edit Blog' : 'Create New Blog'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Blog Title */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">
            BLOG TITLE
          </label>
          <input
            className="w-full p-5 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-cyan-100 text-xl font-semibold"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter a catchy title..."
            required
          />
        </div>

        {/* Author Name */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">
            AUTHOR NAME
          </label>
          <input
            className="w-full p-5 bg-slate-50 rounded-3xl outline-none focus:ring-4 ring-cyan-100 text-lg"
            value={author}
            onChange={handleAuthorChange}
            placeholder="Enter author name..."
            required
          />
        </div>

        {/* Image Upload */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">
            COVER IMAGE
          </label>

          {preview ? (
            <div className="relative aspect-video rounded-[2rem] overflow-hidden">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                }}
                className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center aspect-video rounded-[2rem] border-4 border-dashed bg-slate-50 cursor-pointer">
              <Upload size={32} className="text-cyan-600 mb-2" />
              <p className="text-sm text-slate-500 font-bold">
                Click to upload cover image
              </p>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>

        {/* Content */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1">
            BLOG CONTENT
          </label>
          <textarea
            className="w-full p-6 bg-slate-50 rounded-[2rem] outline-none focus:ring-4 ring-cyan-100 min-h-[300px]"
            value={content}
            onChange={handleContentChange}
            placeholder="Tell your story..."
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-slate-900 text-white font-black py-5 rounded-3xl hover:bg-cyan-600 transition-all"
        >
          {editData ? 'Update Story' : 'Publish Story'}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
