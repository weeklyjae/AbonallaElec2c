import devices from "./Devices";


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
                  {product.new && <span className="new-label">New</span>}
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

  export default FeaturedProducts;