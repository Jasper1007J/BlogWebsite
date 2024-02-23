import { NavLink } from 'react-router-dom';

// Define a functional component ImageSlider
export default function ImageSlider() {
  // Render the ImageSlider component
  return (
    <div className="project">
      {/* Render the project title */}
      <h1>Image Slider</h1>

      {/* Render the project description */}
      <div className="content">
        An image slider is a user interface component commonly found in web applications and websites. It allows users to view a series of images or slides in a dynamic and visually appealing manner. The primary purpose of an image slider is to showcase content, such as product images, portfolio items, featured articles, or any other visual media, in an engaging way.
      </div>

      {/* Render the output clips section */}
      <div className='content' style={{ fontSize: '20px', color: '#f10366 ' }}>
        The Output Clips of the project are displayed below:
      </div>

      {/* Render the images section */}
      <div className="images">
        <div className="ta-signin">
          <label>Page-1</label>
          {/* Render the image for Page-1 */}
          <img src={require('./Image Slider/image2.png')} alt="Page-1" />
        </div>

        <div className="ta-register">
          <label>Page-2</label>
          {/* Render the image for Page-2 */}
          <img src={require('./Image Slider/image3.png')} alt="Page-2" />
        </div>

        <div className="ta-home">
          <label>Page-3</label>
          {/* Render the image for Page-3 */}
          <img src={require('./Image Slider/image1.png')} alt="Page-3" />
        </div>

        <div className="ta-boards">
          <label>Page-4</label>
          {/* Render the image for Page-4 */}
          <img src={require('./Image Slider/image5.png')} alt="Page-4" />
        </div>
      </div>

      {/* Render the GitHub link */}
      <div className='content' style={{ textAlign: 'center', fontSize: '20px' }}>
        You can go through my GitHub Account to access the project -
        {/* Render the NavLink to the GitHub repository */}
        <NavLink to='https://github.com/Jasper1007J/ImageSlider.git' className='link' style={{ fontSize: '30px' }}> ImageSlider</NavLink>
      </div>
    </div>
  );
}
