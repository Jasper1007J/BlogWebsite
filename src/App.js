// Import necessary dependencies and components
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import IdentityManager from './Projects/IdentityManager';
import ImageSlider from './Projects/ImageSlider';
import TaskAlliance from './Projects/TaskAlliance';
import UserManagement from './Projects/UserManagement';
import Navigation from './components/Navigation';
function App() {
  // Define an array of posts containing information about different projects
  const posts = [
    {
      id: 1,
      title: 'Task Alliance',
      path:'task-alliance',
      content: 'Task Alliance is a React Project that mainly focus on Scrum Management Tool.',
      date: 'January 01, 2024',
    },
    {
      id: 2,
      title: 'Image Slider',
      path:'image-slider',
      content: 'An image slider, also known as a carousel or slideshow, is a user interface component commonly used in web development to display a series of images or other content in a sequential manner.',
      date: 'February 12, 2024',
    },
    {
      id: 3,
      title: 'User Management',
      path:'user-management',
      content: 'The user management tool is a React-based application designed to streamline the administration of user accounts and permissions.',
      date: 'January 18, 2024',
    },
    {
      id: 4,
      title: 'Identity Manager',
      path:'identity-manager',
      content: 'This Angular-based Identity Management Tool offers streamlined solutions for managing user identities within applications.',
      date: 'February 1, 2024',
    },
  ];

  // Render the application
  return(
    <div>
     <Navigation posts={posts}/>
      <Routes>
        {/* Define routes for different pages */}
        <Route path='/' exact element={<Home posts={posts} />} /> {/* Home page */}
        <Route path='/task-alliance' element={<TaskAlliance />} /> {/* Task Alliance project */}
        <Route path='/image-slider' element={<ImageSlider />} /> {/* Image Slider project */}
        <Route path='/user-management' element={<UserManagement />} /> {/* User Management project */}
        <Route path='/identity-manager' element={<IdentityManager />} /> {/* Identity Manager project */}
      </Routes>
   
    </div>
  );
}

export default App;
