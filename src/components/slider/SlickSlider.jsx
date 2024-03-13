import { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import testimonialsData from "../../data/testimonials.json"; // Directly include card data
import Card from "../card/card"; // Your Card component

export default function SlickSlider() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
    console.log("next");
  };
  const previous = () => {
    sliderRef.slickPrev();
    console.log("prev");
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex justify-center">
      <div className="relative text-white flex w-3/4 ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}>
          {testimonialsData.map((testimonials, index) => (
            <div key={index} className="space-x-4 ">
              <Card {...testimonials} />
              
            </div>
          ))}
        </Slider>
        <button
          className="cursor-pointer text-5xl absolute p-2 bg-slate-800 inset-y-24 left-0 opacity-95"
          onClick={previous}>
          <IoIosArrowBack />
        </button>
        <button
          className="cursor-pointer text-5xl absolute p-2 bg-slate-800 inset-y-24 right-0 opacity-95"
          onClick={next}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
