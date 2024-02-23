// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ posts }) => {
  return (
    <nav className="navigation">
      <ul>
        {posts.map((post, index) => (
          <li key={index} >
               <NavLink to={`${post.path}`}>
            <button id='button' className='profile-link btn1' >{post.title}</button></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
