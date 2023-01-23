import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Tester from '../api/dommy.json';

function HeroBanner() {
  const [apiImages, setApiImages] = useState<string>();
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange(index:number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
  };

  useEffect(() => {
    const Api = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=a495d3cd0cf478c71fd3590344b481b9').then((res) => {
          setApiImages(res.data.results);
        });
        return response;
      } catch (err) {
        return err;
      }
    };
    Api();
  }, []);

  return (
    <>
    </>
  );
}
export default HeroBanner;
