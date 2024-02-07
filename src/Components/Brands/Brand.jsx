import React from "react";
import logo1 from "../../assets/brand_logo1.png";
import logo2 from "../../assets/brand_logo2.png";
import logo3 from "../../assets/brand_logo3.png";
import logo4 from "../../assets/brand_logo4.png";
import logo5 from "../../assets/brand_logo5.png";
function Brand() {
  return (
    <div>
      <div className="main-container w-full h-[200px] flex justify-center items-center">
        <div className="w-[1280px] h-[36px] flex justify-around">
          <div className="w-[196px] h-[32px]">
            <img src={logo1} />
          </div>
          <div className="w-[196px] h-[33px]">
            <img src={logo2} />
          </div>
          <div className="w-[184px] h-[27px]">
            <img src={logo3} />{" "}
          </div>
          <div className="w-[196px] h-[33px]">
            <img src={logo4} />
          </div>
          <div className="w-[196px] h-[25px]">
            <img src={logo5} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
