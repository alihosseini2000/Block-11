import "./navbar.css";

import {
  IoHomeOutline,
  IoVideocamOutline,
  IoCallOutline,
} from "react-icons/io5";
import { GrAchievement } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";
import { VscBrowser, VscBriefcase, VscAccount } from "react-icons/vsc";
import { useState } from "react";

function Navbar() {
  // function myFunction(x) {
  //   x.classList.toggle("change");
  // }

  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex flex-row justify-between py-6">
      <ul className="flex flex-row menu items-center">
        <li className="px-5 text-white">
          <a href="#" className="flex flex-row">
            <span className="my-auto px-1">
              <IoHomeOutline />
            </span>
            <span className="font-shabnam"> خانه </span>
          </a>
        </li>
        <li className="px-5 text-white">
          <a href="#" className="flex flex-row">
            <span className="px-1 text-lg my-auto">
              <VscBriefcase />
            </span>
            <span className="font-shabnam"> دوره های آموزشی </span>
          </a>
        </li>
        <li className="px-5 text-white">
          <a href="#" className="flex flex-row">
            <span className="my-auto text-xl px-1">
              <IoVideocamOutline />
            </span>
            <span className="font-shabnam">ویدئو ها </span>
          </a>
        </li>
        <li className="px-5 text-white">
          <a href="#" className="flex flex-row">
            <span className="my-auto px-1">
              <VscBrowser />
            </span>
            <span className="font-shabnam">وبلاگ </span>
          </a>
        </li>
        <li className="px-5 text-white">
          <a href="#" className="flex flex-row">
            <span className="my-auto px-1">
              <GrAchievement />
            </span>
            <span className="font-shabnam">درباره ی ما </span>
          </a>
        </li>
        <li className="px-5 text-white">
          <a href="#" className="flex flex-row">
            <span className="my-auto px-1">
              <IoCallOutline />
            </span>
            <span className="font-shabnam">تماس با ما </span>
          </a>
        </li>
      </ul>
        <div className={`humburger ${toggled ? 'toggled' : ''}`} onClick={() => setToggled(!toggled)}>
          <a href="#" className="nav">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </a>
        </div>
      <ul className="flex flex-row">
        <li className="my-auto px-5 text-white">
          <a href="#">
            <VscAccount className="text-3xl" />
          </a>
        </li>
        <li className="my-auto px-5 text-white">
          <a href="#">
            <SlBasket className="text-3xl" />
          </a>
        </li>
        <li className="my-auto px-5">
          <a href="#">
            <img
              className="w-24 h-16"
              src="https://block11.com/wp-content/uploads/2022/02/adam-logo-min.png"
              alt="logo"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
