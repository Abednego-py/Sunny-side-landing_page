import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import Navbar from './components/Navbar';
import imageEmily from './images/image-emily.jpg'
import imageJennie from './images/image-jennie.jpg'
import imageThomas from './images/image-thomas.jpg'
import fb from './images/icon-facebook.svg'
import insta from './images/icon-instagram.svg'
import twitter from './images/icon-twitter.svg'
import pintrest from './images/icon-pinterest.svg'
import arrow from './images/icon-arrow-down.svg'
import hamburger from './images/icon-hamburger.svg'

// import hambburger from './images/icon-hamburger.svg'
// import Card from './components/Card';
function App() {

  const handleClick = ()=>{
    let menu = document.getElementById('menu')
    if(menu.style.display === 'block'){
      menu.style.display = 'none'
    }
    else{
      menu.style.display = 'block'
    }
  }
  return (
    <div className="container-fluid">
      <main className='main'>
      <div className='row navbar'> 
      <div className="logo col-3"><h3 className='text-white'>
          sunnyside</h3></div>
          <div className="nav nav_ col-5">
              <ul >
                  <li><a href ='#about'>About</a></li>
                  <li><a href ='#about'>Services</a></li>
                  <li><a href ='#about'>Projects</a></li>
              </ul>
              <button className='button'>contact</button>
          </div>
          <div className='col-2 hamburger'>
            <img src={hamburger} alt="hamburger" onClick={handleClick} id='hamburger'/>
          </div>
    </div>

        <h1 className='text-white top-text'>WE ARE CREATIVES</h1>
        {/* <div className='text-white special'></div>
        <div className='arrow-head text-white'></div>
        <div className='text-white arrow-2'></div> */}
        <img src={arrow} alt="" className='arrow'/>
      </main>

      <div className="hero" id='about'>
      <div className="card card-1 col-sm-12">
        <h1 className='title'>Transform your brand</h1>
        <p className='content'>We are a full-service agency specializing in helping brands
          grow fast. Engage your clients through compeling visuals that 
          do most of the marketing for you
        </p>
        <a href="##" className='link link-yellow'>LEARN MORE</a>
      </div>
      <div className="card card-2 col-sm-12"></div>
      <div className="card card-3 col-sm-12"></div>
      <div className="card card-4 col-sm-12">
        <h1 className='title'>Stand out to the right audience</h1>
        <p className='content'>Using a collaborative formula of designers, researchers, 
          photographers, videographers, and copywriters, we'll build and
          extend your brand in digital places
        </p>
        <a href="##" className='link link-red'>LEARN MORE</a>
      </div>
      <div className="card card-5 col-sm-12">
      <h3 className='last-title graphic'>  Graphic Design</h3>
      <p className='last-content graphic'>Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures client's attention.
      </p>
      </div>
      <div className="card card-6 col-sm-12">
        <h3 className='last-title photo'> Photography</h3>
        <p className='last-content photo'>Increase your creadibility by getting the most stunning, 
          high-quality photos that improve your business image
        </p>
      </div>
      </div> 

    <section className='testimonial'>
      <div className="row">
        <h6>CLIENT TESTIMONIALS</h6>
        <div className="col-md-4 col-sm-12">
          <img src={imageEmily} alt="emily-img" className='img img-responsive'/>
           <p>We put our trust in Sunnyside and they 
             delivered. Making sure our needs were met and deadlines
             were always hit
           </p>
           <h5>Emily R.</h5>
           <small>Marketing Director</small>
        </div>
        <div className="col-md-4 col-sm-12">
        <img src={imageThomas} alt="thomas-img" className='img' />
           <p>Sunnyside's ethusiasm coupled with their keen 
             interest in our brand's success made it a satisfying and 
             enjoyable experience
           </p>
           <h5>Thomas S.</h5>
           <small>Chief Operating Officer</small>
        </div>
        <div className="col-md-4 col-sm-12">
        <img src={imageJennie} alt="jennie-img" className='img'/>
           <p>Incredible and result! Our sales increased
             over 400% when we worked with sunnyside. Highly recommendable!
           </p>
           <h5>Jennie F.</h5>
           <small>Business Owner</small>
        </div>
      </div>
    </section>

    <section className='gallery'>
      <div className="row">
        <div className="card col-md-3 col-sm-12 card-b-1"></div>
        <div className="card col-md-3 col-sm-12 card-b-2"></div>
        <div className="card col-md-3 col-sm-12 card-b-3"></div>
        <div className="card col-md-3 col-sm-12 card-b-4"></div>
      </div>
    </section>

    <footer>
      <h5>sunnyside</h5>
      <div className="foot-section row">
        <p className='col-2'><a href='#About'>About</a></p>
        <p className='col-2'><a href='#About'>Services</a></p>
        <p className='col-2'><a href='#About'>Projects</a></p>
      </div>
<div className="social-icons">
  <img src={fb} alt="facebook" />
  <img src={insta} alt="instagram" />
  <img src={twitter} alt="twitter" />
  <img src={pintrest} alt="pintrest" />
</div>

    </footer>
   
    <div className='menu' id='menu'>
    <div  className='curve'></div>
      <ul>
      <li><a href ='#about'>About</a></li>
       <li><a href ='#about'>Services</a></li>
        <li><a href ='#about'>Projects</a></li>
      </ul>
      <button className='button'>contact</button>
    </div>
    </div>
  );
}

export default App;
