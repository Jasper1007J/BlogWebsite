// CommentSection.js
import React, { useState } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = { name, message };
    setComments([...comments, newComment]);
    setName('');
    setMessage('');
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <form onSubmit={handleSubmit}>
          <div className='textInputWrapper'>
          
          <input
          type="text"
          placeholder="Your Name"
          value={name}
          className='textInput'
          onChange={(e) => setName(e.target.value)}
        />
          </div>
        <textarea
          placeholder="Your Comment"
          value={message}
          className='input'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit" className='checkout-button'>Submit</button>
      </form>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.name}</p>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
