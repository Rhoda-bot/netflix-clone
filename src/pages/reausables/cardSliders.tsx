function CardSlider({ item }: any) {
  const { overview } = item;
  return (
    <div className="">
      <div className="card cards">
        {/* <img src="/assets/kids.png" className="card-img-top" alt="" /> */}
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
          }}
          src={(item?.backdrop_path === null) ? '/assets/kids.png' : `https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
          alt=""
          className="card-img-top"
        />
        <div className="card-body cards__body p-2 h-100">
          <div className="row align-items-center">
            <div className="col-9">
              <span className="cards__body--new">New</span>
              <div className="mb-3 d-flex align-items-center">
                <b className="cards__body--age">age</b>
                <span className="cards__body--year mx-1">2023</span>
              </div>
            </div>
            <div className="col-3 align-items-end justify-content-end">
              <button type="button" className="cards__body--btn">
                <i className="fa-regular fa-plus fa-inverse" />
              </button>
            </div>
          </div>
          <p className="cards__body--text">
            {overview && overview}
          </p>
        </div>
      </div>
    </div>
  );
}
export default CardSlider;
