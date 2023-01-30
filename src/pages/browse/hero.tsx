import { NavLink } from 'react-router-dom';
import './hero.styles.scss';
import Header from './header';
import Modals from './modals/modal';

function Hero({ data }: any) {
  return (
    <>
      <div
        className="hero"
        style={{
          backgroundColor: 'yellowgreen',
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data[9]?.backdrop_path})`,
        }}
      >
        <Header />
        <div className="container">
          <div className="row align-items-center justify-content-center  hero__banner">
            <div className="col-md-6 hero__col">
              <h1>{data[9]?.title}</h1>
              <div className="hero__col--body">
                <p className="hero__col--text">{data[9]?.overview}</p>
                <div className="d-flex">
                  <button type="button" className="hero__col--btn me-2">
                    <i className="fa-regular fa-play m-2">
                      <NavLink to={`/watch/${data[9]?.id}`}>Play</NavLink>
                    </i>
                  </button>
                  <button type="button" className="hero__col--btn me-2 hero__col--info" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i className="fa-light fa-circle-info m-2" />
                    More info
                  </button>
                </div>
              </div>

            </div>
            <div className="col-md-6 align-items-center justify-content-center hero__col2">
              <div className="hero__col2--ratings float-end my-5 ">18+</div>
            </div>
          </div>
        </div>
      </div>
      <Modals props={data} />
    </>
  );
}
export default Hero;
