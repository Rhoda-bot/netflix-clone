/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import './sliders.styles.scss';
import SlidingCards from './slidingCard';

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right  position-relative fa-3x" />
    </div>
  );
}
function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right  position-relative fa-3x" />
    </div>
  );
}
function SlidingSlides({ data }: any) {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '60px',
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 0.5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      className="sliding py-5"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="d-flex mb-5">
                <h4>Swipe To Slide</h4>
                <div className="mx-3 align-items-center mt-1">
                  {' '}
                  <b className="sliding--explore">Explore All</b>
                  {' '}
                  <span className="sliding--chevron"><i className="fa-solid fa-chevron-right" /></span>

                </div>
              </div>
              <Slider {...settings}>
                {data?.map((item: any) => (
                  <SlidingCards key={item?.id} items={item} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlidingSlides;
