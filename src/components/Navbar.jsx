function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <span className="brand-name">REDEMPTION</span>
        <span className="brand-subtitle">WORSHIP CENTER</span>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#ministries">Ministries</a>
        <a href="#sermons">Sermons</a>
        <a href="#events">Events</a>
        <a href="#give">Give</a>
        <a href="#youth">Youth</a>
      </div>

      <a href="#visit" className="nav-button">
        Plan Your Visit
      </a>
    </nav>
  )
}

export default Navbar
