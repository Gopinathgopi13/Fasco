import React from "react";
import image1 from "../../assets/subscribe_image_1.png";
import image2 from "../../assets/subscribe_image_2.png";
function Subscribe() {
  return (
    <div>
      <div className="main-container w-[1400px] h-[747px] relative mx-auto my-0">
        <div className="w-[355px] h-[747px] bg-cover bg-no-repeat absolute top-0 left-0 z-10">
          <img src={image1} alt="" />
        </div>
        <div className="w-[337px] h-[747px] bg-cover bg-no-repeat absolute top-0 left-[1063px] z-[11]">
          <img src={image2} alt="" />
        </div>
        <span className="flex w-[631px] h-[59px] justify-center items-start font-['Volkhov'] text-[46px] font-normal leading-[59px] text-[#484848] absolute top-[207px] left-[384px] text-center whitespace-nowrap z-[9]">
          Subscribe To Our Newsletter
        </span>
        <span className="flex w-[614px] h-[52px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[26px] text-[#8a8a8a] absolute top-[286px] left-[392px] text-center z-[8]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </span>
        <div className="w-[631px] h-[86px] bg-[#fff] absolute top-[368px] left-[384px] shadow-[0_3.019px_3.148px_0_rgba(0,0,0,0.01)] z-[5]">
          <span className="flex h-[26px] justify-start items-start font-['Poppins'] text-[22px] font-normal leading-[26px] text-[#8a8a8a] absolute top-[28px] left-[30px] text-left whitespace-nowrap z-[6]">
            michael@ymail.com
          </span>
        </div>
        <div className="w-[207px] h-[56px] bg-[#000] rounded-[10px] absolute top-[484px] left-[595px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] z-[2]">
          <span className="flex w-[119px] h-[16px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[16px] text-[#fff] absolute top-[20px] left-[44px] text-center whitespace-nowrap z-[3]">
            Subscribe Now
          </span>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
