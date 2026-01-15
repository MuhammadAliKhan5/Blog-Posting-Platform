import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React, { useState, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import HomePage from './components/HomePage';
import MainLayout from './components/MainLayout';
import CreateBlog from './components/CreateBlog';
import AboutUs from './components/AboutUs';
import ContactMe from './components/ContactUs';
import AllBlogs from './components/AllBlogs';


const App = () => {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem('my_platform_blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : [];
  });

  useEffect(() => {
    localStorage.setItem('my_platform_blogs', JSON.stringify(blogs));
  }, [blogs]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/about',
          element: <AboutUs />
        },
        {
          path: '/contact',
          element: <ContactMe />
        },
        {
          path: '/create',
          element: <CreateBlog blogs={blogs} setBlogs={setBlogs} />
        },
        {
          path: '/all-blogs',
          element: <AllBlogs blogs={blogs} setBlogs={setBlogs} />
        }
      ]
    }
  ])
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
