import { NavLink } from 'react-router-dom';
import './banner.styles.scss';

function BannerSection() {
  return (
    <div className="banner">
      <div className="banner__wrapper">
        <nav className="banner__header navbar">
          <div className="container-fluid">
            <img src="../assets/logo.png" className="banner__header--logo navbar-brand" alt="" />
            <form className="d-flex" role="search">

              <button className="banner__header--links" type="submit">
                <NavLink to="/auth/signin">Sing In</NavLink>
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className="row banner__row">
          <h1 className="banner__row--title">
            Unlimited movies, TV
            {' '}
            <br />
            {' '}
            shows, and more.
          </h1>
          <span className="banner__row--subtitle">Watch anywhere. Cancel anytime.</span>
          <p className="banner__row--text">
            Ready to watch? Enter your email to create or
            restart your membership.
          </p>
          <div className="input-group mb-3">
            <input type="text" className="form-control banner__row--input" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="button-addon2" />
            <button className="banner__row--btn border-0" type="button" id="button-addon2">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerSection;
