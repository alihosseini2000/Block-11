import SlickSlider from "../slider/SlickSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./main.css";

function Main() {
  return (
    <div className="bg-slate-950 w-full text-center">
      <h3 className="text-red-700 font-shabnam-medium py-4">
        آموزش ببین و رشد کن!
      </h3>
      <h1 className="font-shabnam-Bold text-2xl text-white pb-10 pt-2">
        دوره ها ی آموزشی آدام مرادی
      </h1>
      <SlickSlider />
    </div>
  );
}

export default Main;
