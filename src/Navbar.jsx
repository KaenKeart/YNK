import React, { useState } from 'react';
import './Navbar.css'; // นำเข้าไฟล์ CSS
import { Link } from 'react-router-dom';
import Logo_YADA from "../src/img/Logo_YADA.png";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
      <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet" />
      <header>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#4183c4' }}>

          <div className="container-fluid">
            <Link to="/Home3" href="Project_01.html">
              <img src={Logo_YADA} alt="..." width={120} />
            </Link>
<button
    className="navbar-toggler navbar-toggler-end"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded={isNavbarOpen}
    aria-label="Toggle navigation"
    onClick={toggleNavbar}
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div
    className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`}
    id="navbarSupportedContent"
  >
<div className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
  <Link to="/Home3" className="nav-link btn" aria-current="page">
    Home
  </Link>

  <Link to={"/page01"} className="nav-link btn">
    Device01
  </Link>
  <Link to="/page02" className="nav-link btn">
    Device02
  </Link>
  <div className="btn-danger-container">
    <Link to="/" className="btn btn-danger" style={{ marginRight: "5px" }}>
      Logout
    </Link>
  </div>
</div>

            </div>  
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
