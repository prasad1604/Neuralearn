import {Link} from 'react-router-dom';
import '../Assets/CSS/Navbar.css';
//import '../Assets/JS/search.js'

function Navbar(){
    return(<>
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">🎨 NeuraLearn 🎨</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to = "/">Home 🏠</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/AboutPage">About us ✨</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/topic.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Topics 🌟
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Courses 🎓</a></li>
                  <li><a className="dropdown-item" href="#">Resources 📚</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">FAQ ❓</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/ContactPage">Contact Us 💬</Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="index.html">
                  <i className="bi bi-box-arrow-right"></i> Logout 🚪
                </a>
              </li>
            </ul>
            <form className="d-flex ms-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search 🔍" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </>
    );
}

export default Navbar;