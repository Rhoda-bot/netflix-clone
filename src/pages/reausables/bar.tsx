import { Link } from "react-router-dom";

const Bar = () => {
    return(
        <>
        <div className="">
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary bg-dark hero__nav py-2 position-fixed w-100 `}
      >
        <div
          className={`container-fluid hero__nav--container`}
        >
          <Link className="navbar-brand logo-container" to="/browse">
            <img src="/assets/logo.png" alt="" className="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse align-items-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-md-4">
              <li className="nav-item ms-md">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ms-md">
                <a className="nav-link" href="#">
                  Tv Shows
                </a>
              </li>
              <li className="nav-item ms-md">
                <a className="nav-link" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item ms-md">
                <a className="nav-link" href="#">
                  New & Popular
                </a>
              </li>
              <li className="nav-item ms-md">
                <a className="nav-link" href="#">
                  My List
                </a>
              </li>
              <li className="nav-item ms-md">
                <a className="nav-link" href="#">
                  Browse by Languages
                </a>
              </li>
            </ul>
            <form
              className="d-flex align-items-center position-relative"
              role="search"
            >
              <input
                className="form-control me-2 px-3 shadow-none "
                type="search"
                placeholder="Titles, people, genres"
                aria-label="Search"
              />

              <span className="search-icon">
                {/* <IconSearch /> */}
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <span className="close-icon">
                <i className="fa-solid fa-xmark"></i>
              </span>
            </form>
            <Link to={"#"} className="text-decoration-none">
              Kids
            </Link>
            <Link to="#" className="text-decoration-none ms-3">
              <i className="fa-regular fa-bell"></i>
            </Link>
            <div className="dropdown">
              <div
                className="btn btn-secondary dropdown-toggle bg-transparent pe-0"
                // href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/assets/logo.png"
                  alt="Netflix"
                  // layout="responsive"
                  className="d-none d-sm-block img-fluid"
                  width={30}
                  height={21}
                  style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <ul className="dropdown-menu dropdown-menu-end py-2 ">
                <li className="px-3 py-2 ">
                  <Link className="fw-bold" to="#">
                    <i className="fa-solid fa-paperclip me-2"></i>Manage
                    Profiles{" "}
                  </Link>
                </li>
                <li className="px-3 py-2 ">
                  <Link className="fw-bold" to="#">
                    <i className="fa-solid fa-poo me-2"></i>Transfer Profile
                  </Link>
                </li>
                <li className="px-3 py-2 ">
                  <Link className="fw-bold" to="#">
                    <i className="fa-regular fa-user me-2"></i>My Account
                  </Link>
                </li>

                <li className="px-3 py-2 ">
                  <a className="fw-bold" href="#">
                  Help
                  </a>
                </li>
                <li className="px-3 py-2  signout-list text-center">
                  <Link
                    className="fw-bold"
                    to="#"
                  >
                    Sign out of Netflix
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
        </>
    )
}
export default Bar