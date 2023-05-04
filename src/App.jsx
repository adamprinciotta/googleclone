import './App.css'
import Logo from './assets/Logo.png'
import Mic from './assets/Google_mic.png'
import Camera from './assets/Camera.png'
import Leaf from './assets/leaf.png'

function App() {


  return (
    <>
      <div className="container">
        <div className="nav">
          <div className="leftnav">
            <h3><a>About</a></h3>
            <h3><a>Store</a></h3>
          </div>
          <div className='rightnav'>
          <div className="rightnavText">
            <h3><a>Gmail</a></h3>
            <h3><a>Images</a></h3>
          </div>
            <div className="grid">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <button className="signIn">Sign In</button>
          </div>
        </div>
        <div className='main'>
          <img src={Logo}></img>
          <div className="searchBar">
            <textarea></textarea>
            <div className="magGlass"></div>
            <div className="rightSearchbar">
              <img src={Mic}></img>
              <img src={Camera}></img>
            </div>
          </div>
          <div className="searchButtons">
            <button className="search">Google Search</button>
            <button className="lucky">I'm Feeling Lucky</button>
          </div>
        </div>
        <footer>
          <div className='leftFooter'>
            <span><a>Advertising</a></span>
            <span><a>Business</a></span>
            <span><a>How Search Works</a></span>
          </div>
          <div className="middleFooter">
            <img src={Leaf}></img>
            <a>Carbon Neutral since 2007</a>
          </div>
          <div className="rightFooter">
            <span><a>Privacy</a></span>
            <span><a>Terms</a></span>
            <span><a>Settings</a></span>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
