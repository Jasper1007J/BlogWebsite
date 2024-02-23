import { NavLink } from 'react-router-dom';

export default function TaskAlliance(){
     return(
          <div className="project">
               <h1>TASK ALLIANCE</h1> 

               <div className="content">
               The implementation of the Scrum Management product relies on a technological stack comprising HTML, CSS, JavaScript, and React.js. This selection is driven by the need for a responsive, interactive, and scalable platform. Each technology plays a specific role in ensuring a seamless user experience and efficient data handling within the application. The primary objective is to deliver a comprehensive platform that not only encapsulates the fundamental features of Scrum project management but also aligns with the principles of adaptability, collaboration, and continuous improvement. By leveraging web technologies, the Scrum Management product aims to provide a user-friendly interface that enhances the overall efficiency of project management processes
               </div>
               <div className='content' style={{fontSize:'20px',color:'#f10366 '}}> The Output Clips of the project are displayed below:</div>
               <div className="images">
                    
                         <div className="ta-signin">
                               <label>Sign in Page</label>
                               <img src={require('./Task Alliance/Signin.png')}></img>
                         </div>

                         <div className="ta-register">
                              <label>Register Page</label>
                              <img src={require('./Task Alliance/register.png')}/>
                         </div>

                         <div className="ta-home">
                              <label>Home Page</label>
                              <img src={require('./Task Alliance/Home.png')}/>
                         </div>

                         <div className="ta-boards">
                              <label>Boards</label>
                              <img src={require('./Task Alliance/Boards.png')}/>
                         </div>
                    
               </div>


               <div className='content' style={{textAlign:'center',fontSize:'20px'}}> You can go through my GitHub Account to access the project -  
               <NavLink to='https://github.com/Jasper1007J/Task_Alliance.git' className='link' style={{fontSize:'30px'}}>  TaskAlliance</NavLink> </div>
          </div>
     );
}