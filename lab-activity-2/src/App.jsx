
import 'bootstrap/dist/css/bootstrap.min.css'; // Load Bootstrap only inside this component
import './App.css'
import './fonts/MiSansLatin.ttf'
import MiCarousel from './components/MiCarousel';

function App() {

  return (
    <div>
      <Header />
      <Main />
      <FeaturedProducts />
    </div>
  )
}

export default App

function Header() {
  return(
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
  )
}

function Main() {
  return (
    <div className="main">
      <MiCarousel />

    </div>
  );
}

function FeaturedProducts() {
  return (
    <section className='featuredprod'>
      <h3>Featured Products</h3>
    </section>
  )
}