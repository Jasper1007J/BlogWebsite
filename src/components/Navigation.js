// Import necessary dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// Define a functional component Navigation that takes posts as input
const Navigation = ({ posts }) => {
  // Render the navigation menu
  return (
    <nav className="navigation">
      <ul>
        {/* Map over the posts array and render each post as a navigation link */}
        <li><NavLink to='/' className='link'><button id='button' className='profile-link btn1'>Home</button>  </NavLink> </li>
        {posts.map((post, index) => (
          <li key={index}>
            {/* Render a NavLink for each post */}
            <NavLink to={`${post.path}`}>
              {/* Render a button for each post title */}
              <button id='button' className='profile-link btn1'>{post.title}</button>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Export the Navigation component
export default Navigation;
