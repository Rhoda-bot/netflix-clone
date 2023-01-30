/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import Cards from './card';
import './sliders.styles.scss';

function SampleNextArrow(props: any, title: any) {
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
function SlidingSlides({ data, title }: any) {
  const settings = {
    className: 'center',
    infinite: true,
    centerPadding: '40px',
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 0.5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div
      className="sliding py-1"
    >
      <div className="container-fluid">
        <div className="row text-start">
          <div>
            <div className="d-flex mb-5">
              <h4 className="sliding-title">{title}</h4>
              <div className="mx-3 align-items-center mt-1">
                {' '}
                <b className="sliding--explore">
                  Explore All
                  {' '}
                  <span className="sliding--chevron"><i className="fa-solid fa-chevron-right" /></span>
                </b>
                {' '}

              </div>
            </div>
            <Slider {...settings}>
              {data?.map((item: any) => (
                <Cards key={item?.id} items={item} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SlidingSlides;
