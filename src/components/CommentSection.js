// Import necessary dependencies
import React, { useState } from 'react';

// Define a functional component CommentSection
const CommentSection = () => {
  // Define state variables for comments, name, and message using useState hook
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new comment object with name and message
    const newComment = { name, message };
    // Add the new comment to the comments array using setComments
    setComments([...comments, newComment]);
    // Reset name and message fields
    setName('');
    setMessage('');
  };

  // Render the comment section
  return (
    <div className="comment-section">
      {/* Render the section title */}
      <h3>Comments</h3>
      {/* Render the comment form */}
      <form onSubmit={handleSubmit}>
        <div className='textInputWrapper'>
          {/* Render the input field for name */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            className='textInput'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Render the textarea for entering comment */}
        <textarea
          placeholder="Your Comment"
          value={message}
          className='input'
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {/* Render the submit button */}
        <button type="submit" className='checkout-button'>Submit</button>
      </form>
      {/* Render the list of comments */}
      <div className="comments-list">
        {/* Map over the comments array and render each comment */}
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

// Export the CommentSection component
export default CommentSection;
