import './modal.styles.scss';

function Modals() {
  return (
    <div className="modal  fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content ">
          <div
            className="modal__background"
            style={{
              borderRadius: '4px 4px 10px 10px',
            }}
          >
            <div
              className="modal__header"
              style={{
                borderRadius: '4px 0',
              }}
            >

              <div className="modal-header ">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
            </div>
          </div>
          <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
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
          <div className="modal__header--overlay px-3 px-lg-4" />
          <div className="modal-body modal__details mx-lg-3 position-relative">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia inventore delectus ullam dolorem nisi quia impedit eius, voluptatem
              praesentium tempore expedita modi iste! Quaerat assumenda
              inventore voluptatibus natus, expedita veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia inventore delectus ullam dolorem nisi quia impedit eius, voluptatem
              praesentium tempore expedita modi iste! Quaerat assumenda
              inventore voluptatibus natus, expedita veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia inventore delectus ullam dolorem nisi quia impedit eius, voluptatem
              praesentium tempore expedita modi iste! Quaerat assumenda
              inventore voluptatibus natus, expedita veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia inventore delectus ullam dolorem nisi quia impedit eius, voluptatem
              praesentium tempore expedita modi iste! Quaerat assumenda
              inventore voluptatibus natus, expedita veniam?
            </p>
          </div>
          <div className="modal__more">
            <div className="modal__more--header py-2">
              <h6>More like this</h6>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="card position-relative m-2">
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia inventore delectus ullam dolorem nisi quia impedit eius, voluptatem
                      praesentium tempore expedita modi iste! Quaerat assumenda
                      inventore voluptatibus natus, expedita veniam?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card position-relative m-2">
                  <div className="card-body">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Mollitia inventore delectus ullam dolorem nisi quia impedit eius, voluptatem
                      praesentium tempore expedita modi iste! Quaerat assumenda
                      inventore voluptatibus natus, expedita veniam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modals;
