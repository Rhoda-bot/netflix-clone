import axios from 'axios';
import { useEffect, useState } from 'react';
import './hero.styles.scss';
import Slider from 'react-slick';
import Header from './header';
import TestMovies from '../api/dommy.json';
import { getApiData } from '../api/api';
import { MOVIEDETAILS } from '../interface';

function Hero() {
  const [apiMovies, setApiMovies] = useState<Array<MOVIEDETAILS | null>>([]);
  const [getOneMovie, setGetOneMovie] = useState<any>();
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange(index:number) {
      return `Slider Changed to: ${index + 1}, background: #222; color: #bada55`;
    },
  };
  useEffect(() => {
    const apiFunc = async () => {
      const result = await getApiData('https://api.themoviedb.org/3/discover/movie?api_key=a495d3cd0cf478c71fd3590344b481b9&');
      setGetOneMovie(result.results[12]);
      return result.results[12].backdrop_path;
    };
    console.log(apiFunc());
  }, []);

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundColor: 'yellowgreen',
          backgroundImage: `url(https://image.tmdb.org/t/p/original${getOneMovie.backdrop_path})`,
        }}
      >
        <Header />
        <div className="container">
          <div className="row align-items-center justify-content-center  hero__banner">
            <div className="col-md-6 hero__col">
              <h1>{TestMovies[3].title}</h1>
              <div className="hero__col--body">
                <p className="hero__col--text">{TestMovies[3].description}</p>
                <div className="d-flex">
                  <button type="button" className="hero__col--btn me-2">
                    <i className="fa-regular fa-bell" />
                    Play
                  </button>
                  <button type="button" className="hero__col--btn me-2 hero__col--info">
                    <i className="fa-light fa-circle-info" />
                    More info
                  </button>
                </div>
              </div>

            </div>
            <div className="col-md-6 align-items-center justify-content-center hero__col2">
              <div className="hero__col2--ratings float-end my-4">18+</div>
            </div>
          </div>
        </div>
      </div>
      {/* <ViewMoreMovieDescription /> */}
    </>
  );
}
export default Hero;
