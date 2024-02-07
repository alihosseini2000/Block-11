import Navbar from "../navbar/navbar";
import "./header.css";

function Header() {
  return (
    <div className="background-img background-color w-screen h-screen">
      <div className="background-color w-screen h-screen">
      <div className="text-center pt-3">
        <p className="font-shabnam-medium text-sky-400">این یک سایت نیست.</p>
        <p className="font-shabnam-light text-sky-500">می فهمی چی میگم</p>
      </div>
      <Navbar />
        <div className="pr-10 flex flex-col justify-center h-4/6">
          <h2 className="text-3xl font-shabnam pb-8 text-white header-align">
             به <strong className="text-shadow">بلوک11 </strong>خوش آمدید !
          </h2>
          <h1 className="text-4xl font-shabnam-Bold text-white fs-3 header-align">
            <span>این یک سایت نیست <br/>می فهمی چی میگم !</span>
          </h1>
          <p className="font-shabnam py-8 text-white header-align">
             ما می‌خواهیم خلاقیت شما را برای 
             دستیابی به اهداف‌تان بیشتر کنیم
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
