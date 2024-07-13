import { NavLink } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import CommentSection from './components/CommentSection';

export default function Home({posts}){

     return(
          <div className="App">
      
      <div className='profile'>
      <img src={require('./Image.jpg')} alt='profile'></img>
        <h1>I<label style={{color:'#06d6a0'}}> ' </label>m<p> NAMALA JASPER</p> 
        <label style={{fontSize:'25px'}}>MERN Stack Developer & MEAN Stack Developer</label></h1>
        
      </div>
      <div className='social-media'>
        <div><p style={{color:'#ff0054'}}>Github Profile</p><NavLink className='profile-link btn' to='https://github.com/Jasper1007J'  ><span className='bn54span'>Jasper1007J</span></NavLink> </div>
        <div><p style={{color:'#ff0054'}}>Linkedin Profile</p><NavLink className='profile-link btn' to='https://www.linkedin.com/in/jasper-namala'><span className='bn54span'>jasper-namala</span></NavLink></div>
        <div><p style={{color:'#ff0054'}}>Email</p><NavLink className='profile-link btn' style={{width:'70%'}}><span className='bn54span'>jasperchandu1007@gmail.com</span></NavLink> </div>
        <div><p style={{color:'#ff0054'}}>Contact</p><NavLink className='profile-link btn'><span className='bn54span'>7386198025</span></NavLink> </div>
        </div>
      <div className="blog-posts">
        {posts.map((post) => (
          <div id={post.id} key={post.id}>
            <BlogPost {...post} />
          </div>
        ))}
          
      </div>
      <footer>
      <CommentSection />
          </footer>
    </div>
     )
}