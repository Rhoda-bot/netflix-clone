import Cards from '../sliders/card';
import './modal.styles.scss';
// import './modalView.styles.scss';

function Modals({ props }: any) {
  return (
    <div className="modal  fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div
            className="modal__background"
          >
            <div
              className="modal__header"
              style={{
                borderRadius: '10px 10px 0px 0',
                backgroundImage: `linear-gradient(0deg,#aaa, transparent 100%),
                url(https://image.tmdb.org/t/p/original${props[9]?.backdrop_path}`,
              }}
            >

              <div className="modal-header border-bottom-none">
                <button type="button" className="btn-close modal__header--close shadow-none" data-bs-dismiss="modal" aria-label="Close" />
              </div>
            </div>
          </div>
          <div className="modal__header--overlay px-3 px-lg-4" />
          <h1 className="modal-title modal__header--title  fs-5" id="exampleModalLabel">{props[9]?.title}</h1>
          <div className="modal__media">
            <div className="container">
              <div className="row">
                <div className="col-md-10 modal__media--col">
                  <div className="row">
                    <div className="col-md-2">
                      <button type="button" className="modal__media--btn me-2">
                        <i className="fa-regular fa-play m-2" />
                        Play
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button type="button" className="modal__media--icon me-2 ">
                        <i className="fa-light fa-circle-plus" />
                      </button>
                      <button type="button" className="modal__media--icon me-2">
                        <i className="fa-light fa-circle-plus" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div className="col-md-1" /> */}
                <div className="col-md-2 modal__media--col">
                  {/* <div className="d-flex"> */}
                  <button type="button" className="modal__media--icon me-2">
                    <div className="d-flex">
                      <i className="fa-thin fa-volume-xmark" />
                    </div>
                  </button>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal__description">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 align-items-center">
                    <div className="mx-1 fw-bold mb-3">
                      83% Match
                      {' '}
                      <div className="mx-1 fw-bold">
                        {props[9]?.release_date}
                      </div>
                      <b>18+</b>
                    </div>
                    <p>
                      {props[9]?.overview}
                    </p>
                  </div>
                  <div className="col-md-5 align-items-center">
                    <p className="mb-2 mb-lg-3">
                      <span>Cast:</span>
                      {' '}
                      Queen Ramonda, M’Baku. Okoye,
                      Dora Milaje, T’Challa Washington, more
                    </p>
                    <p className="mb-2 mb-lg-3">
                      <span>Genre:</span>
                      {' '}
                      Movies, Action & Adventure
                    </p>
                    <p className="mb-2 mb-lg-3">
                      <span>This movie is:</span>
                      {' '}
                      Violent, Suspensful, Exciting
                    </p>
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
            </div>
          </div>
          <div className="modal-footer border-bottom-none">
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
export default Modals;
