import React from "react";
import style from "./menuStyle.module.css";
import { megabtn, navbarLinks } from "./navbarData";
const Navbar = () => {
  return (
    <div className={`${style.bg}`}>
      {/**navbar menu */}
      <div className="flex items-center justify-between">
        {/**menu */}
        <div className={`relative`}>
          {navbarLinks.map((item) => (
            <button
              className={`font-iran text-base font-semibold text-white mx-10
                 mt-5 hover:border-b-2 border-blue-600 py-2 
                 transition-all ease-in-out delay-75  ${
                   item.mega ? style.megamenu : ""
                 }`}
              key={item.id}
            >
              {item.title}
            </button>
          ))}
          {/**megamenu */}
          <div className={`grid grid-cols-3  ${style.megaitem}`}>
            <div  className="border-l-2 border-white flex flex-col items-start">
            {megabtn.map((btn) => (
                <button key={btn.id} className={`m-2 rounded-lg text-base text-white font-vazir ${btn.classname}`}>
                  {btn.title}
                </button>
            ))}
            </div>
            
          </div>
        </div>
        {/**logo */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Navbar;
