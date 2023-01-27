function SlidingCards({ items }: any) {
  return (
    <div className="sliding__card p-2">
      <div className="card border-0">
        <div className="img">
          <img
            src={(items?.backdrop_path === null) ? '' : `https://image.tmdb.org/t/p/original${items?.backdrop_path}`}
            className="card-img-top"
            alt=""
            width={180}
            height={70}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      {/* <div className="card-body sliding__card--body">
        <div className="row align-items-center ">
          <div className="col mt-1">
            <div className="sliding__controls d-flex align-items-center m-0">
              <button
                className="sliding__controls--play  mx-1 "
                type="button"
              >
                <i className="fa-solid fa-play" />
              </button>
              <button
                className="sliding--button  mx-1"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Add to My List"
              >
                <i className="fa-regular fa-plus fa-inverse" />
              </button>
            </div>
          </div>
          <div className="col mt-1">
            <div className="sliding__controls ">
              <button
                className="sliding--button  "
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-title="Add to My List"
              >
                <i className="fa-solid fa-chevron-down fa-inverse" />
              </button>
            </div>
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
      </div> */}
    </div>
  );
}
export default SlidingCards;
