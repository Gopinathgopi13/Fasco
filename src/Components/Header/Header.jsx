import React from "react";
import image1 from '../../assets/Header_image1.png';
import image2 from '../../assets/Header_image2.png';
import image3 from '../../assets/Header_image3.png';
import image4 from '../../assets/Header_image4.png';
function Header() {
  return (
    <div>
      <div className="main-container w-[1281px] h-[906px] relative mx-auto my-0">
        <div className="w-[1280px] h-[56px] relative z-[23] mt-0 mr-0 mb-0 ml-0">
          <div className="w-[152px] h-[56px] bg-[#000] rounded-[10px] absolute top-0 left-[1128px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] z-[16]">
            <span className="flex w-[61px] h-[16px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[16px] text-[#fff] absolute top-[20px] left-[45px] text-center whitespace-nowrap z-[17]">
              Sign Up
            </span>
          </div>
          <span className="flex h-[52px] justify-start items-start font-['Volkhov'] text-[52px] font-normal leading-[52px] text-[#484848] absolute top-[2px] left-0 text-left whitespace-nowrap z-[23]">
            FASCO
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[17px] left-[516px] text-left whitespace-nowrap z-[19]">
            Home
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[17px] left-[622px] text-left whitespace-nowrap z-20">
            Deals
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[17px] left-[725px] text-left whitespace-nowrap z-[21]">
            New Arrivals
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[17px] left-[881px] text-left whitespace-nowrap z-[22]">
            Packages
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[17px] left-[1017px] text-left whitespace-nowrap z-[18]">
            Sign in
          </span>
        </div>
        <div className="w-[1281px] h-[756px] relative z-[11] mt-[94px] mr-0 mb-0 ml-0">
          <div className="w-[392px] h-[756px] absolute top-0 left-0 z-[1]" ><img src={image1}/> </div>
          <div className="w-[426px] h-[150px] absolute top-0 left-[427px] z-[3]" ><img src={image2}/> </div>
          <div className="w-[392px] h-[756px] absolute top-0 left-[889px] z-[2]" ><img src={image4}/> </div>
          <span className="flex w-[396px] h-[91px] justify-center items-start font-['Poppins'] text-[91px] font-medium leading-[91px] text-[#484848] tracking-[-3.64px] absolute top-[186px] left-[444px] text-center whitespace-nowrap z-[8]">
            ULTIMATE
          </span>
          <span className="flex w-[394px] h-[187px] justify-center items-start font-['Poppins'] text-[187px] font-medium leading-[187px] text-transparent tracking-[-10.29px] absolute top-[277px] left-[441px] text-center whitespace-nowrap z-[6]">
            SALE
          </span>
          <span className="flex w-[195px] h-[30px] justify-center items-start font-['Poppins'] text-[20px] font-normal leading-[30px] text-[#484848] tracking-[2px] absolute top-[464px] left-[542px] text-center uppercase whitespace-nowrap z-[9]">
            NEW COLLECTION
          </span>
          <div className="w-[207px] h-[56px] bg-[#000] rounded-[10px] absolute top-[513px] left-[535px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] z-[11]">
            <span className="flex w-[88px] h-[16px] justify-center items-start font-['Poppins'] text-[16px] font-medium leading-[16px] text-[#fff] absolute top-[20px] left-[59px] text-center whitespace-nowrap z-[12]">
              SHOP NOW
            </span>
          </div>
          <div className="w-[426px] h-[150px] rounded-[10px] absolute top-[606px] left-[427px]">
          <img src={image3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
