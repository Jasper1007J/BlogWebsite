import { NavLink } from 'react-router-dom';

// Define a functional component IdentityManager
export default function IdentityManager() {
  // Render the IdentityManager component
  return (
    <div className="project">
      {/* Render the project title */}
      <h1>Identity Manager</h1>

      {/* Render the project description */}
      <div className="content">
        An identity manager serves as a central hub for efficiently handling user authentication, authorization, and management within digital ecosystems. With its comprehensive suite of features, an identity manager empowers organizations to securely manage user identities, access privileges, and authentication mechanisms across various applications and services. At its core, an identity manager provides robust authentication methods, ensuring that users are who they claim to be through mechanisms like multi-factor authentication, social logins, or biometric verification. Moreover, it facilitates seamless authorization by defining user roles, permissions, and access controls, enabling administrators to enforce fine-grained security policies tailored to their organizational needs.
      </div>

      {/* Render the output clips section */}
      <div className='content' style={{ fontSize: '20px', color: '#f10366 ' }}>
        The Output Clips of the project are displayed below:
      </div>

      {/* Render the images section */}
      <div className="images">
        <div className="ta-signin">
          <label>Sign-in Page</label>
          {/* Render the image for the Sign-in Page */}
          <img src={require('./Identity Manager/signin.png')} alt="Sign-in Page" />
        </div>

        <div className="ta-register">
          <label>Register Page</label>
          {/* Render the image for the Register Page */}
          <img src={require('./Identity Manager/register.png')} alt="Register Page" />
        </div>

        <div className="ta-home">
          <label>Home</label>
          {/* Render the image for the Home Page */}
          <img src={require('./Identity Manager/Home.png')} alt="Home Page" />
        </div>

        <div className="ta-boards">
          <label>Edit Info Page</label>
          {/* Render the image for the Edit Info Page */}
          <img src={require('./Identity Manager/Editinfo.png')} alt="Edit Info Page" />
        </div>
      </div>

      {/* Render the GitHub link */}
      <div className='content' style={{ textAlign: 'center', fontSize: '20px' }}>
        You can go through my GitHub Account to access the project -
        {/* Render the NavLink to the GitHub repository */}
        <NavLink to='https://github.com/Jasper1007J/IdentityManager.git' className='link' style={{ fontSize: '30px' }}> IdentityManager</NavLink>
      </div>
    </div>
  );
}
