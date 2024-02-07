import React from "react";

function Footer() {
  return (
    <div>
      <div className="main-container w-[1440PX] h-[138px] relative mx-auto my-0">
        <div className="w-[1280px] h-[32px] relative z-10 mt-[30px]">
          <span className="flex h-[32px] justify-start items-start font-['Volkhov'] text-[32px] font-normal leading-[32px] text-[#484848] absolute top-0 left-0 text-left whitespace-nowrap z-10">
            FASCO
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[4px] left-[682px] text-left whitespace-nowrap z-[9]">
            Support Center
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[4px] left-[842px] text-left whitespace-nowrap z-[6]">
            Invoicing
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[4px] left-[953px] text-left whitespace-nowrap z-[7]">
            Contract
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[4px] left-[1062px] text-left whitespace-nowrap z-[4]">
            Careers
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[4px] left-[1164px] text-left whitespace-nowrap z-[5]">
            Blog
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-normal leading-[24px] text-[#484848] absolute top-[4px] left-[1237px] text-left whitespace-nowrap z-[8]">
            FAQ,s
          </span>
        </div>
        <span className="flex w-[266px] h-[26px] justify-center items-start font-['Poppins'] text-[12px] font-normal leading-[26px] text-[#484848] relative text-center whitespace-nowrap z-[1] mt-[50px] mr-0 mb-0 ml-[827px]">
          Copyright © 2022 FASCO . All Rights Reseved.
        </span>
      </div>
    </div>
  );
}

export default Footer;
