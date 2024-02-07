import React from "react";
import image1 from '../../assets/gallery_image_1.png'
import image2 from '../../assets/gallery_image_2.png'
import image3 from '../../assets/gallery_image_3.png'
import image4 from '../../assets/gallery_image_4.png'
import image5 from '../../assets/gallery_image_5.png'
import image6 from '../../assets/gallery_image_6.png'
import image7 from '../../assets/gallery_image_7.png'
function Gallery() {
  return (
    <div>
      <div className="main-container w-full h-[611px] text-[0px] relative mx-auto my-0">
        <span className="flex w-[536px] h-[59px] justify-center items-start font-['Volkhov'] text-[46px] font-normal leading-[59px] text-[#484848] relative text-center whitespace-nowrap z-[3] mt-0 mr-0 mb-0 ml-[692px]">
          Follow Us On Instagram
        </span>
        <span className="flex w-[614px] h-[52px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[26px] text-[#8a8a8a] relative text-center z-[2] mt-[20px] mr-0 mb-0 ml-[653px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </span>
        <div className="w-[1900px] h-[380px] bg-cover flex flex-wrap justify-around items-center bg-no-repeat absolute top-[231px] left-0">
        <img src={image1} alt=""/>
        <img src={image2} alt=""/>
        <img src={image3} alt=""/>
        <img src={image4} alt=""/>
        <img src={image5} alt=""/>
        <img src={image6} alt=""/>
        {/* <img src={image7} alt=""/> */}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
