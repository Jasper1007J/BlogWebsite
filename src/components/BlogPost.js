// BlogPost.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogPost = ({ title,path, content, date, image }) => {

     const Srcimage = image;
  return (
    <div className="blog-post">
      <h2><NavLink className="link" to={`/${path}`}>{title}</NavLink></h2>
      <p>{content}</p>
      <p><a style={{color:'#06d6a0'}}>Date: </a>{date}</p>
    </div>
  );
};

export default BlogPost;
