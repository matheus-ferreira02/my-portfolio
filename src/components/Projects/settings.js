import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function PrevArrow({ onClick }) {
  return (
    <button className="button-prev" onClick={ onClick }>
      <IoIosArrowBack />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button className="button-next" onClick={ onClick }>
      <IoIosArrowForward />
    </button>
  );
}

function teste() {
  console.log('antes');
}

function teste2() {
  console.log('dfepois');
}

const settings = {
  className: "center",
  focusOnSelect: true,
  centerMode: true,
  infinite: true,
  centerPadding: "100px",
  initialSlide: 1,
  dots: true,
  slidesToShow: 2,
  speed: 300,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange: () => teste(),
  afterChange: () => teste2(),
  /* responsive: [
    {
      breakpoint: 800,
      settings: {
        centerPadding: "100px",
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      }
    },
  ] */
};

export default settings;