import { NavLink } from 'react-router-dom';
import './header.styles.scss';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg header  py-0 bg-dark">
      <div className="container-fluid mx-5">
        <NavLink className="navbar-brand" to="/home"><img src="../assets/logoo.png" className="navigation__logo img-fluid header--image" alt="" /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center header__menu">
            <li className="nav-item header__menu--item">
              <NavLink className="nav-link header__menu--link" aria-current="page" to="#">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Tv Shows</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">Movies</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">New & Popular </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/home">My List </NavLink>
            </li>

          </ul>
          <form className="d-flex header__form" role="search">
            <input className="form-control me-2 shadow-none header__form--input" type="search" placeholder="Titles, people, genres" aria-label="Search" />
            <i className="fa-solid fa-magnifying-glass header__form--search" />
          </form>
          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/home">Kids </NavLink>
          </li>
          <li className="nav-item mx-2">
            <NavLink className="nav-link" to="/home">
              <i className="fa-regular fa-bell" />
            </NavLink>
          </li>
          <li className="nav-item dropdown mx-2">
            <NavLink className="nav-link dropdown-toggle pe-2" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="/assets/avar.jpg" width={20} height={21} alt="avar" />
            </NavLink>
            <ul className="dropdown-menu drop-menu-end py-2">
              <li><NavLink className="dropdown-item" to="#">Manage Profiles</NavLink></li>
              <li><NavLink className="dropdown-item" to="#">Transfer Profiles</NavLink></li>
              <li><NavLink className="dropdown-item" to="#">Accounct</NavLink></li>
              <li><NavLink className="dropdown-item" to="#">Help center</NavLink></li>
              <li><hr className="dropdown-divider" /></li>
              <li><NavLink className="dropdown-item" to="#">Signout of Netflix</NavLink></li>
            </ul>
          </li>
        </div>
      </div>
    </nav>
  );
}
export default Header;
