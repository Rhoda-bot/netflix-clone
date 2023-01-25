import Cards from '../sliders/card';
import './modalView.styles.scss';

function ViewMoreMovieDescription({ props }: any) {
  console.log(props);
  return (
    <div className="modal fade" id="exampleModal" role="dialog" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg modal__dialog" role="document">
        <div className="modal-content modal__background">
          <div
            className="modal-header border-0 modal__header align-items-end pb-4"
            style={{
              backgroundImage: `linear-gradient(0deg,#aaa, transparent 100%),
              url(https://image.tmdb.org/t/p/original${props[9]?.backdrop_path}`,
              // backgroundColor: 'yellowgreen',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundBlendMode: 'overlay',
            }}
          >
            <div className="modal__header--content px-3 px-lg-4">
              <h1 className="modal-title fs-5" id="exampleModalLabel">{props[9]?.title}</h1>
            </div>

            <button type="button" className="btn-close modal__header--close shadow-none" data-bs-dismiss="modal" aria-label="Close">
              <i className="fa-solid fa-xmark" />
            </button>
            <div className="modal__controls d-flex align-items-center">
              <button type="button" className="m-1 modal__controls--play">
                <i className="fa-solid fa-play me-2" />
                <span className="">Play</span>
              </button>
              <button
                className="modal--button  mx-1"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Add to My List"
              >
                <i className="fa-regular fa-plus fa-inverse" />
              </button>
              <div className="modal--button modal--button-inverse mx-1" role="button">
                <i className="fa-regular fa-thumbs-up" />
                {' '}
                <div className="modal--likes py-2 px-1">
                  <div className="d-flex">
                    <div
                      className="modal--button modal--button-like mx-1"
                      role="button"
                    >
                      <i className="fa-regular fa-thumbs-down" />
                      {' '}
                    </div>
                    <div
                      className="modal--button modal--button-like mx-1"
                      role="button"
                    >
                      <i className="fa-regular fa-thumbs-up" />
                      {' '}
                    </div>
                    <div
                      className="modal--button modal--button-like mx-1"
                      role="button"
                    >
                      <i className="fa-regular fa-heart" />
                      {' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__header--overlay px-3 px-lg-4" />
          <div className="modal-body modal__details mx-lg-3 position-relative">
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex mb-2 mb-lg-3">
                  <div className="mx-1 fw-bold">
                    {props[9]?.release_date}
                  </div>
                  <div className="mx-1 modal__details--ratings px-2 ">
                    18+
                  </div>
                  <div className="mx-1 fw-bold">2h 42m</div>
                  <div className="mx-1 modal__details--ratings px-2">HD</div>
                </div>
                <div className="d-flex mb-2 mb-lg-3">
                  <p className="mb-0">{props[9]?.overview}</p>
                </div>
              </div>
              <div className="col-md-6">
                <p className="mb-2 mb-lg-3 modal__details--info">
                  <span>Cast:</span>
                  {' '}
                  Queen Ramonda, M’Baku. Okoye,
                  Dora Milaje, T’Challa Washington, more
                </p>
                <p className="mb-2 mb-lg-3 modal__details--info">
                  <span>Genre:</span>
                  {' '}
                  Movies, Action & Adventure
                </p>
                <p className="mb-2 mb-lg-3 modal__details--info">
                  <span>This movie is:</span>
                  {' '}
                  Violent, Suspensful, Exciting
                </p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <p className="mb-2 mb-lg-3 modal__details--info">
                      <span>Vote Average:</span>
                      {' '}
                      {props[9]?.vote_average}
                    </p>
                  </div>
                  <div className="col">
                    {' '}
                    <p className="mb-2 mb-lg-3 modal__details--info">
                      <span>Vote count:</span>
                      {' '}
                      {props[9]?.vote_count}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal__more">
            <div className="modal__more--header py-2">
              <h6>More like this</h6>
            </div>
            <div className="row">
              {
              props && props.filter((elts:any, index:number) => index < 6).map((items: any) => (
                <div className="col-md-4 p-2" key={items.id}>
                  <Cards item={items} />
                </div>
              ))
              }
            </div>
          </div>
          <div className="modal-footer">
            <div className="modal__about">
              <div className="modal__more--header py-2 mt-2 mt-lg-3">
                <h6>
                  About
                  {' '}
                  {props[9]?.title}
                  {' '}
                </h6>
              </div>
              <div className="">
                <p className="mb-0 mb-lg-3 modal__details--info">
                  <span>Creators:</span>
                  {' '}
                  Steven Seagal, Micheal B. Jordan,
                  Jamie Foxx, Denzel Washington, more
                </p>
                <p className="mb-0 mb-lg-3 modal__details--info">
                  <span>Cast:</span>
                  {' '}
                  Steven Seagal, Micheal B. Jordan, Jamie
                  Foxx, Denzel Washington, more
                </p>
                <p className="mb-0 mb-lg-3 modal__details--info">
                  <span>Genre:</span>
                  {' '}
                  Movies, Action & Adventure
                </p>
                <p className="mb-0 mb-lg-3 modal__details--info">
                  <span>This movie is:</span>
                  {' '}
                  Violent, Suspensful, Exciting
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ViewMoreMovieDescription;
