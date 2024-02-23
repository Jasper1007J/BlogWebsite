// Define a functional component UserManagement
export default function UserManagement() {
     // Render the UserManagement component
     return (
       <div className="project">
         {/* Render the project title */}
         <h1>User Management</h1>
   
         {/* Render the project description */}
         <div className="content">
           User Management using React is a robust solution designed to streamline the administration of user accounts and permissions within web applications. Leveraging the power of React's component-based architecture, this system provides developers with a flexible and scalable framework to implement user management functionalities effectively.
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
             <img src={require('./User Management/signin.png')} alt="Sign-in Page" />
           </div>
   
           <div className="ta-register">
             <label>Register Page</label>
             {/* Render the image for the Register Page */}
             <img src={require('./User Management/signup.png')} alt="Register Page" />
           </div>
   
           <div className="ta-home">
             <label>Home</label>
             {/* Render the image for the Home Page */}
             <img src={require('./User Management/homepage.png')} alt="Home Page" />
           </div>
   
           <div className="ta-boards">
             <label>Edit Info Page</label>
             {/* Render the image for the Forgot Password Page */}
             <img src={require('./User Management/ForgotPassword.png')} alt="Forgot Password Page" />
           </div>
         </div>
       </div>
     );
   }
   