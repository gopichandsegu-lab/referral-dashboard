import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="topbar">
        <div className="logo">
          <div className="logo-icon"></div>
          <span>Go Business</span>
        </div>

        <nav className="nav">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Courses</a>
          <a href="/">Projects</a>
          <a href="/">Contact</a>
        </nav>

        <button className="try-btn">Try for free</button>
      </div>

      <div className="header-row">
        <div>
          <h2>Referral Dashboard</h2>
        </div>

        <div className="header-actions">
          <input
            type="text"
            placeholder="Search here..."
            className="search-box"
          />

          <button className="search-btn">
            Search
          </button>

          <div className="user-box">
            <div className="avatar"></div>

            <div>
              <h4>Name</h4>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
