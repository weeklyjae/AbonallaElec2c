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

  export default Header;