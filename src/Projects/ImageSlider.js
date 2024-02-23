import { NavLink } from 'react-router-dom'

export default function ImageSlider(){
     return(
          <div className="project">
          <h1>Image Slider</h1> 

          <div className="content">
          An image slider is a user interface component commonly found in web applications and websites. It allows users to view a series of images or slides in a dynamic and visually appealing manner. The primary purpose of an image slider is to showcase content, such as product images, portfolio items, featured articles, or any other visual media, in an engaging way.
          </div>
          <div className='content' style={{fontSize:'20px',color:'#f10366 '}}> The Output Clips of the project are displayed below:</div>
          <div className="images">
               
                    <div className="ta-signin">
                          <label>Page-1</label>
                          <img src={require('./Image Slider/image2.png')}></img>
                    </div>

                    <div className="ta-register">
                         <label>Page-2</label>
                         <img src={require('./Image Slider/image3.png')}/>
                    </div>

                    <div className="ta-home">
                         <label>Page-3</label>
                         <img src={require('./Image Slider/image1.png')}/>
                    </div>

                    <div className="ta-boards">
                         <label>Page-4</label>
                         <img src={require('./Image Slider/image5.png')}/>
                    </div>
               
          </div>


          <div className='content' style={{textAlign:'center',fontSize:'20px'}}> You can go through my GitHub Account to access the project -  
          <NavLink to='https://github.com/Jasper1007J/ImageSlider.git' className='link' style={{fontSize:'30px'}}> ImageSlider</NavLink> </div>
     </div>
     )
}