import { NavLink } from 'react-router-dom';

function Cards({ items }: any) {
  return (
    <div className="slider p-2">
      <div className="card border-0">
        <img src={(items?.backdrop_path === null) ? '' : `https://image.tmdb.org/t/p/original${items?.backdrop_path}`} className="card-img-top" alt="" />
        <div className="card-body slider__body">
          <div className="row align-items-center">
            <div className="col-9">
              <div>
                <button type="button" className="slider__body--btn">
                  <NavLink to={`/watch/${items?.id}`}>
                    <i className="fa-regular fa-play fa-inverse" />
                  </NavLink>
                </button>
                <button type="button" className="slider__body--btn mx-2">
                  <i className="fa-regular fa-plus fa-inverse" />
                </button>
              </div>
            </div>
            <div className="col-3">
              <button type="button" className="slider__body--btn">
                <i className="fa-regular fa-plus fa-inverse" />
              </button>
            </div>
          </div>
          <div className="row">
            <p>
              <span>98% Match</span>
              {' '}
              <b>18+</b>
              {' '}
              <span>Seasons</span>
              <b>HD</b>
            </p>
            <p>
              <span>Witty</span>
              {' '}
              <span>Drama</span>
              {' '}
              <span>Commedy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
