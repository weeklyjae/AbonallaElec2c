
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'
import './fonts/MiSansLatin.ttf'
import MiCarousel from './components/MiCarousel';
import supportItems from "./components/SupportItems"; 
import devices from "./components/Devices";

function App() {

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App

function Header() {
  return(
    <div className="sticky-header">
      <div className='minavbar'>
        <a href='' className='milogo'><img src='/xiaomi-logo.svg'></img></a>
        <ul>
          <li><a href=''>Mobile</a></li>
          <li><a href=''>Wearables</a></li>
          <li><a href=''>Smart Home</a></li>
          <li><a href=''>Lifestyle</a></li>
        </ul>
      <div className='navbar-separator'></div>      
        <ul>
          <li><a href=''>Discover</a></li>
          <li><a href=''>Support</a></li>
        </ul>
        <a href='' className='search-icon'><img src='/search-icon.png'></img></a>
        <a href='' className='search-icon'><img src='/user-icon.png'></img></a>
      </div>
    </div>
  )
}

function Main() {
  return (
    <div className="main">
      <MiCarousel />
      <FeaturedProducts />
      <MiSupport />
    </div>
  );
}

function FeaturedProducts() {
  return (
    <section className='featuredprod'>
      <h3>Featured Products</h3>
      <ul>
        <li><a href='' style={{ color: "#ff6900", borderBottom: "3px solid #ff6900", fontWeight: "bold" }}>Latest Flagship</a></li>
        <li><a href=''>Stay on Trend</a></li>
        <li><a href=''>Home Upgrade</a></li>
        <li><a href=''>Smart Security</a></li>
      </ul>
      <div className='fpdiv'>
        <div className='fpbanner'>
          <img src='banner1.jpg' alt="Banner" />
        </div>
        <div className="fpdivdevices">
          {devices.map((product, index) => {
            let productStyle = {};
            switch (product.type) {
              case "Phone":
                productStyle = { backgroundColor: "#ffd6bb", border: "3px solid #ff6900" };
                break;
              case "Wearable":
                productStyle = { backgroundColor: "#bbffbb", border: "3px solid #00a100" };
                break;
              case "SmartHome":
                productStyle = { backgroundColor: "#d6e0ff", border: "3px solid #0033ff" };
                break;
              default:
                productStyle = { backgroundColor: "#f0f0f0", border: "3px solid #ccc" }; 
            }

            return (
              <div className="product-item" key={index} style={productStyle}>
                <div className="product-image-container">
                  <img src={product.src} alt={product.name} className="product-img" />
                </div>
                <h4>{product.name}</h4>
                <p className="product-desc">{product.desc}</p>
                <button className="learn-more">Learn More</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


function MiSupport() {
  return (
    <section className="mi-support">
      <h2 className="support-title">Xiaomi Support</h2>
      <div className="support-container">
        {supportItems.map((item, index) => (
          <div key={index} className="support-item">
            <div className="support-icon">
              <img src={item.icon} alt={item.title} />
            </div>
            <h3 className="support-heading">{item.title}</h3>
            <p className="support-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>User Guide</li>
            <li>Warranty</li>
            <li>Service Center</li>
            <li>Where to buy</li>
            <li>VIP Exclusive Services</li>
            <li>Mobile Phone Out-of-warranty Material Price</li>
            <li>Spam Protection</li>
            <li>VIP Benefits Redemption</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li>Xiaomi</li>
            <li>Leadership Team</li>
            <li>Privacy Policy</li>
            <li>Integrity & Compliance</li>
            <li>Trust Center</li>
            <li>Xiaomi HyperOS</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Xiaomi</h3>
          <div className="social-icons">
            <span><img src='/facebook (1).png'></img></span>
            <span><img src='/twitter.png'></img></span>
            <span><img src='/instagram.png'></img></span>
            <span><img src='/tik-tok.png'></img></span>
            <span><img src='/xiaomi.png'></img></span>
          </div>

          <h3>Subscribe to our newsletters</h3>
          <div className="newsletter">
            <input type="email" placeholder="Enter email address" />
            <button>→</button>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>Replicated by Jhon Martin Abonalla. For Educational Purposes only.</p>
        <a href="#">Sitemap</a>
        <div className="language">
          <span>Philippines / English</span>
          <span className="globe">🌍</span>
        </div>
      </div>
    </footer>
  );
}
