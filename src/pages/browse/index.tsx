import { useEffect, useState } from 'react';
import { getApiData } from '../api/api';
import { MOVIEDETAILS } from '../interface';
import Hero from './hero';
import SlidingSlides from './sliders/sliders';

function Browse() {
  const [apiMovies, setApiMovies] = useState<Array<MOVIEDETAILS | null>>([]);
  const [getOneMovie, setGetOneMovie] = useState<any>();
  useEffect(() => {
    const apiFunc = async () => {
      const result = await getApiData('https://api.themoviedb.org/3/discover/movie?api_key=a495d3cd0cf478c71fd3590344b481b9&?page=2');
      setGetOneMovie(result.results[14]);
      setApiMovies(result.results);
      return result;
    };
    console.log(apiFunc());
  }, []);
  return (
    <>
      <Hero data={apiMovies} />
      <SlidingSlides data={apiMovies} />
    </>
  );
}
export default Browse;
