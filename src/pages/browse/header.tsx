import { Link } from 'react-router-dom';
import './header.styles.scss';
const Header = () => {
    return (
        <>
            <div className="header">
                <nav className="navbar navbar-expand-lg  header__nav">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="../assets/logoo.png" className='header__nav--logo' alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="navigation__menu--list nav-item text-white"><a className="nav-link current active" href="/browse">Home</a></li>
                            <li className="navigation__menu--list nav-item d-md-block d-sm-none text-white"><a className='nav-link' href="/browse/genre/83">TV Shows</a></li>
                            <li className="navigation__menu--list nav-item d-md-block d-sm-none"><a className='nav-link' href="/browse/genre/34399">Movies</a></li>
                            <li className="navigation__menu--list nav-item d-md-block d-sm-none"><a className='nav-link' href="/latest">New &amp; Popular</a></li>
                            <li className="navigation__menu--list nav-item d-md-block d-sm-none"><a className='nav-link' href="/browse/my-list">My List</a></li>
                            <li className="navigation__menu--list nav-item d-md-block d-sm-none"><a className='nav-link' href="/browse/original-audio">Browse by Languages</a></li> 
                            <li className="nav-item dropdown d-md-none d-sm-block">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            </ul>
                           
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}
export default Header;