// Import necessary dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Define a functional component BlogPost that takes props as input
const BlogPost = ({ title, path, content, date, image }) => {
  // Extract the image source from props

  // Render the blog post
  return (
    <div className="blog-post">
      {/* Render the blog post title as a NavLink to the specified path */}
      <h2><NavLink className="link" to={`/${path}`}>{title}</NavLink></h2>
      {/* Render the blog post content */}
      <p>{content}</p>
      {/* Render the blog post date */}
      <p><label style={{ color: '#06d6a0' }}>Date: </label>{date}</p>
    </div>
  );
};

// Export the BlogPost component
export default BlogPost;
