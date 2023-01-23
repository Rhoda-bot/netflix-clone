import { useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

function HeroDetails() {
  const [getMovie, setGetMovie] = useState('');
  return (
    <HoverVideoPlayer
      videoSrc="/assets/videos/v1.mp4"
      hoverOverlay={(
        <div
          className="col-md-12 hero__banner"
          style={{
            backgroundImage: 'url(/assets/p.webp)',
            position: 'absolute',
            width: '100%',
            top: '0',
            left: '0',
            right: 0,
            bottom: 0,
            backgroundRepeat: 'no-repeat',
            objectFit: 'cover',
          }}
        >
          <div className="row align-items-center my-5 py-5">
            <div className="col-md-6 hero__banner--col align-items-center">
              <div className="border-0">
                <div className="card-title">
                  <h1 className="hero__banner--title">Good Hool</h1>
                  <div className="card-body">
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Totam itaque autem labore
                      numquam vel nisi provident quasi, sed
                      deleniti deserunt saepe eum dicta facere
                      nemo corporis quia aperiam quo dolore?
                    </p>
                    <div className="d">
                      <button type="button" className="hero__banner--btn m">
                        <i className="fa-sharp fa-solid fa-play" />
                        {' '}
                        Play
                      </button>
                      <button
                        type="button"
                        className="hero__banner--btn m-3"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          setGetMovie('this movies');
                        }}
                      >
                        {' '}
                        <i className="fa-solid fa-solid fa-info" />
                        {' '}
                        More Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 hero__banner--col align-items-end">
              <div className="float-end"><button type="button">16+</button></div>
            </div>
          </div>
        </div>
                            )}
      loadingOverlay={(
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
                              )}
    />
  );
}
export default HeroDetails;
