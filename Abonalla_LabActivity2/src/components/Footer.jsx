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
  
  export default Footer;