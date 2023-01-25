/* eslint-disable react/destructuring-assignment */
function Cards(items:any) {
  const { overview, title } = items;
  return (
    <div className="card border-0 modal__card position-relative">
      <img
        src={(items?.backdrop_path === null) ? '' : `https://image.tmdb.org/t/p/original${items?.backdrop_path}`}
        alt="images"
        className="card-img-top"
        width={180}
        height={70}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
      <button className="modal__card--play" type="button">
        <i className="fa-solid fa-play fa-inverse ps-1 pt-1" />
      </button>
      <div className="card-body modal__card--body p-2 p-lg-3 h-100">
        <div className="row align-items-center">
          <div className="col">
            <p className="card-title fw-bold m-0 modal__card--percentage ">
              84% Match
            </p>
            <div className="d-flex align-items-center">
              <div className=" modal__details--ratings px-2 m-1 ms-0 modal__card--ratings ">
                18+
              </div>
              <div className="mx-1 fw-bold modal__card--year">
                <p>hdhdhdhhd</p>
              </div>
            </div>
          </div>
          <div className="col text-end d-flex justify-content-end">
            <button
              className="modal--button text-end  mx-1"
              type="button"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-title="Add to My List"
            >
              <i className="fa-regular fa-plus fa-inverse" />
            </button>
          </div>
        </div>
        <p className="card-text py-2">hchhc</p>
      </div>
    </div>
  );
}
export default Cards;
