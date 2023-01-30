/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApiData } from '../../api/api';
import { MOVIEDETAILS } from '../../interface';
import Footer from '../../reausables/footer';
import Header from '../header';

function WatchMovie() {
  const { id } = useParams();
  const [videos, setVideos] = useState<Array<MOVIEDETAILS> | any>([]);

  useEffect(() => {
    const apiFunc = async () => {
      const result = await getApiData(`movie/${id}/videos?api_key=a495d3cd0cf478c71fd3590344b481b9&?page=2`);
      setVideos(result.results);
      return result;
    };
    console.log(apiFunc());
  }, []);

  console.log(videos);
  return (
    <>
      <Header />
      <div className="watchs">
        <div className="container">
          <div className="row watchs__top ">
            <h3 className="watchs__top--title">{(videos[1]?.title === null) ? 'Video title' : videos[1]?.title }</h3>
            <div className="col-md-10">
              <video
                autoPlay
                playsInline
                muted
                loop
                style={{
                  border: '2px solid white',
                  borderRadius: '4px',
                }}
                src={(videos[1]?.key === undefined) ? '/assets/videos/vi.m4v' : `https://www.youtube.com/watch?v=${videos[1]?.key}`}
                width="100%"
              >
                {/* <source src={(videos[1]?.key === null) ? '' : `https://www.youtube.com/watch?v=${videos[1]?.key}`} /> */}
              </video>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default WatchMovie;
