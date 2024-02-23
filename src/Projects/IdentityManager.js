import { NavLink } from 'react-router-dom';

export default function IdentityManager(){
     return(
<div className="project">
          <h1>Identity Manager</h1> 

          <div className="content">
          An identity manager serves as a central hub for efficiently handling user authentication, authorization, and management within digital ecosystems. With its comprehensive suite of features, an identity manager empowers organizations to securely manage user identities, access privileges, and authentication mechanisms across various applications and services. At its core, an identity manager provides robust authentication methods, ensuring that users are who they claim to be through mechanisms like multi-factor authentication, social logins, or biometric verification. Moreover, it facilitates seamless authorization by defining user roles, permissions, and access controls, enabling administrators to enforce fine-grained security policies tailored to their organizational needs.          </div>
          <div className='content' style={{fontSize:'20px',color:'#f10366 '}}> The Output Clips of the project are displayed below:</div>
          <div className="images">
               
                    <div className="ta-signin">
                          <label>Sign-in Page</label>
                          <img src={require('./Identity Manager/signin.png')}></img>
                    </div>

                    <div className="ta-register">
                         <label>Register Page</label>
                         <img src={require('./Identity Manager/register.png')}/>
                    </div>

                    <div className="ta-home">
                         <label>Home</label>
                         <img src={require('./Identity Manager/Home.png')}/>
                    </div>

                    <div className="ta-boards">
                         <label>Edit Info Page </label>
                         <img src={require('./Identity Manager/Editinfo.png')}/>
                    </div>
               
          </div>


          <div className='content' style={{textAlign:'center',fontSize:'20px'}}> You can go through my GitHub Account to access the project -  
          <NavLink to='https://github.com/Jasper1007J/IdentityManager.git' className='link' style={{fontSize:'30px'}}> IdentityManager</NavLink> </div>
     </div>     )
}