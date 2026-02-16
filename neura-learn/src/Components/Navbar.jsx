import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-xl navbar-kids">
      <div className="container-fluid">
        <Link className="navbar-brand kids-logo" to="/">
          🌈 NeuraLearn 🍭
        </Link>
        
        <button className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link kids-link" to="/home">
                🏡 Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link kids-link" to="/about">
                🦄 About Us
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle kids-link" 
                    to="#" 
                    role="button" 
                    data-bs-toggle="dropdown">
                🎨 Activities
              </Link>
              <ul className="dropdown-menu kids-dropdown">
                
                <li>
                  <Link className="dropdown-item kids-dropdown-item" to="/learning-modules">
                    📚 Learning Modules
                  </Link>
                </li> 
                <li>
                  <Link className="dropdown-item kids-dropdown-item" to="/games">
                    🎓 Learning Games
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link className="dropdown-item kids-dropdown-item" to="/contact">
                    ❓ Help Corner
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link kids-link" to="/profile">
              👤 Profile
              </Link>
            </li>
            
          </ul> 

          {isAuthenticated ? 
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link kids-link" 
                    to="/" 
                    onClick={handleLogout}>
                🚪 Logout
              </Link>
            </li>
          </ul> : null }
          
          <SearchBar isLoggedIn={isAuthenticated ? true: false}/>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;