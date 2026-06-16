import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>COMPANY</h4>
          <p>About</p>
          <p>Premium</p>
          <p>Blog</p>
        </div>

        <div>
          <h4>HELP</h4>
          <p>Contact</p>
          <p>Support</p>
          <p>FAQ</p>
        </div>

        <div>
          <h4>LEARNING</h4>
          <p>Learn Hub</p>
          <p>Tutorials</p>
          <p>Communities</p>
        </div>

        <div>
          <h4>RESOURCES</h4>
          <p>Tools</p>
          <p>Assets</p>
          <p>Photos</p>
        </div>

        <div>
          <h4>LEGAL</h4>
          <p>Privacy Policy</p>
          <p>Terms</p>
          <p>Cookies</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2024 Go Business
      </div>
    </footer>
  );
}

export default Footer;