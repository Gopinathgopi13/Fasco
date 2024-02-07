import React from "react";
import image1 from "../../assets/Card_image1.png";
import image2 from "../../assets/Card_image2.png";
import image3 from "../../assets/Card_image3.png";
import image4 from "../../assets/Card_image4.png";
import image5 from "../../assets/Card_image5.png";
import image6 from "../../assets/Card_image6.png";
function NewArrivals() {
  return (
    <div className="w-full">
      <div className="main-container w-[614px] h-[131px] text-[0px] relative mx-auto my-0">
        <span className="flex w-[289px] h-[59px] justify-center items-start font-['Volkhov'] text-[46px] font-normal leading-[59px] text-[#484848] relative text-center whitespace-nowrap z-[1] mt-0 mr-0 mb-0 ml-[163px]">
          New Arrivals
        </span>
        <span className="flex w-[614px] h-[52px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[26px] text-[#8a8a8a] relative text-center mt-[20px] mr-0 mb-0 ml-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </span>
      </div>
      {/* Categories  */}
      <div className="main-container w-[1155px] h-[56px] rounded-[10px] relative mx-auto my-0">
        <div className="w-[207px] h-[56px] bg-[#fafafa] rounded-[10px] absolute top-0 left-0 z-[1]">
          <span className="flex w-[112px] h-[16px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[16px] text-[#8a8a8a] absolute top-[20px] left-[47px] text-center whitespace-nowrap z-[2]">
            Men’s Fashion
          </span>
        </div>
        <div className="w-[207px] h-[56px] bg-[#000] rounded-[10px] absolute top-0 left-[237px] shadow-[0_20px_35px_0_rgba(0,0,0,0.15)] z-[4]">
          <span className="flex w-[141px] h-[16px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[16px] text-[#fff] absolute top-[20px] left-[33px] text-center whitespace-nowrap z-[5]">
            Women’s Fashion
          </span>
        </div>
        <div className="w-[207px] h-[56px] bg-[#fafafa] rounded-[10px] absolute top-0 left-[474px] z-[7]">
          <span className="flex w-[163px] h-[16px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[16px] text-[#8a8a8a] absolute top-[20px] left-[22px] text-center whitespace-nowrap z-[8]">
            Women Accessories
          </span>
        </div>
        <div className="w-[207px] h-[56px] bg-[#fafafa] rounded-[10px] absolute top-0 left-[711px] z-10">
          <span className="flex w-[134px] h-[16px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[16px] text-[#8a8a8a] absolute top-[20px] left-[36px] text-center whitespace-nowrap z-[11]">
            Men Accessories
          </span>
        </div>
        <div className="w-[207px] h-[56px] bg-[#fafafa] rounded-[10px] absolute top-0 left-[948px] z-[13]">
          <span className="flex w-[119px] h-[16px] justify-center items-start font-['Poppins'] text-[16px] font-normal leading-[16px] text-[#8a8a8a] absolute top-[20px] left-[44px] text-center whitespace-nowrap z-[14]">
            Discount Deals
          </span>
        </div>
      </div>
      {/* Card */}

      <div className="main-container w-[1280px] h-[936px] relative mx-auto my-0">
        <div className="flex w-[1280px] h-[438px] justify-between items-center relative z-[45] mt-0 mr-0 mb-0 ml-0">
          <div className="w-[386px] h-[438px] shrink-0 bg-[#fff] rounded-[10px] relative shadow-[0_40px_90px_0_rgba(0,0,0,0.06)] z-[1]">
            <div className="w-[336px] h-[244px] bg-cover bg-no-repeat rounded-[10px] relative z-10 mt-[15px] mr-0 mb-0 ml-[25px]" >
                <img src={image1}/>
            </div>
            <div className="flex w-[336px] h-[30px] justify-between items-center relative z-[9] mt-[12px] mr-0 mb-0 ml-[25px]">
              <span className="h-[30px] shrink-0 font-['Poppins'] text-[20px] font-medium leading-[30px] text-[#484848] relative text-left whitespace-nowrap z-[9]">
                Shiny Dress
              </span>
              <div className="w-[95px] h-[19px] shrink-0 bg-[url(../assets/images/ab906ee4-29f9-4082-9fa7-8d854e477e2f.png)] bg-cover bg-no-repeat relative z-[6]" />
            </div>
            <span className="block h-[12px] font-['Poppins'] text-[12px] font-medium leading-[12px] text-[#8a8a8a] relative text-left whitespace-nowrap z-[8] mt-px mr-0 mb-0 ml-[25px]">
              Al Karam
            </span>
            <span className="block h-[18px] font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#484848] relative text-left whitespace-nowrap z-[5] mt-[25px] mr-0 mb-0 ml-[25px]">
              (4.1k) Customer Reviews
            </span>
            <div className="flex w-[336px] h-[20px] justify-between items-center relative z-[4] mt-[25px] mr-0 mb-0 ml-[25px]">
              <span className="h-[20px] shrink-0 font-['Poppins'] text-[24px] font-medium leading-[20px] text-[#484848] tracking-[-0.24px] relative text-left whitespace-nowrap z-[3]">
                $95.50
              </span>
              <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#ff4646] tracking-[-0.12px] relative text-right whitespace-nowrap z-[4]">
                Almost Sold Out
              </span>
            </div>
          </div>
          <div className="w-[386px] h-[438px] shrink-0 bg-[#fff] rounded-[10px] relative shadow-[0_40px_90px_0_rgba(0,0,0,0.06)] z-[23]">
          <div className="w-[336px] h-[244px] bg-cover bg-no-repeat rounded-[10px] relative z-10 mt-[15px] mr-0 mb-0 ml-[25px]" >
                <img src={image2}/>
            </div>
            <div className="flex w-[336px] h-[30px] justify-between items-center relative z-[31] mt-[12px] mr-0 mb-0 ml-[25px]">
              <span className="h-[30px] shrink-0 font-['Poppins'] text-[20px] font-medium leading-[30px] text-[#484848] relative text-left whitespace-nowrap z-[31]">
                Long Dress
              </span>
              <div className="w-[95px] h-[19px] shrink-0 bg-[url(../assets/images/332b6f45-b456-48d5-a458-6093636d272e.png)] bg-cover bg-no-repeat relative z-[28]" />
            </div>
            <span className="block h-[12px] font-['Poppins'] text-[12px] font-medium leading-[12px] text-[#8a8a8a] relative text-left whitespace-nowrap z-30 mt-px mr-0 mb-0 ml-[25px]">
              Al Karam
            </span>
            <span className="block h-[18px] font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#484848] relative text-left whitespace-nowrap z-[27] mt-[25px] mr-0 mb-0 ml-[25px]">
              (4.1k) Customer Reviews
            </span>
            <div className="flex w-[336px] h-[20px] justify-between items-center relative z-[26] mt-[25px] mr-0 mb-0 ml-[25px]">
              <span className="h-[20px] shrink-0 font-['Poppins'] text-[24px] font-medium leading-[20px] text-[#484848] tracking-[-0.24px] relative text-left whitespace-nowrap z-[25]">
                $95.50
              </span>
              <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#ff4646] tracking-[-0.12px] relative text-right whitespace-nowrap z-[26]">
                Almost Sold Out
              </span>
            </div>
          </div>
          <div className="w-[386px] h-[438px] shrink-0 bg-[#fff] rounded-[10px] relative shadow-[0_40px_90px_0_rgba(0,0,0,0.06)] z-[45]">
          <div className="w-[336px] h-[244px] bg-cover bg-no-repeat rounded-[10px] relative z-10 mt-[15px] mr-0 mb-0 ml-[25px]" >
                <img src={image3}/>
            </div>
            <div className="flex w-[336px] h-[30px] justify-between items-center relative z-[53] mt-[12px] mr-0 mb-0 ml-[25px]">
              <span className="h-[30px] shrink-0 font-['Poppins'] text-[20px] font-medium leading-[30px] text-[#484848] relative text-left whitespace-nowrap z-[53]">
                Full Sweater
              </span>
              <div className="w-[95px] h-[19px] shrink-0 bg-[url(../assets/images/8d70e5a0-7a6a-4118-8bd4-085b84262673.png)] bg-cover bg-no-repeat relative z-50" />
            </div>
            <span className="block h-[12px] font-['Poppins'] text-[12px] font-medium leading-[12px] text-[#8a8a8a] relative text-left whitespace-nowrap z-[52] mt-px mr-0 mb-0 ml-[25px]">
              Al Karam
            </span>
            <span className="block h-[18px] font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#484848] relative text-left whitespace-nowrap z-[49] mt-[25px] mr-0 mb-0 ml-[25px]">
              (4.1k) Customer Reviews
            </span>
            <div className="flex w-[336px] h-[20px] justify-between items-center relative z-[48] mt-[25px] mr-0 mb-0 ml-[25px]">
              <span className="h-[20px] shrink-0 font-['Poppins'] text-[24px] font-medium leading-[20px] text-[#484848] tracking-[-0.24px] relative text-left whitespace-nowrap z-[47]">
                $95.50
              </span>
              <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#ff4646] tracking-[-0.12px] relative text-right whitespace-nowrap z-[48]">
                Almost Sold Out
              </span>
            </div>
          </div>
        </div>
        <div className="flex w-[1280px] h-[438px] justify-between items-center relative z-[56] mt-[60px] mr-0 mb-0 ml-0">
          <div className="w-[386px] h-[438px] shrink-0 bg-[#fff] rounded-[10px] relative shadow-[0_40px_90px_0_rgba(0,0,0,0.06)] z-[12]">
          <div className="w-[336px] h-[244px] bg-cover bg-no-repeat rounded-[10px] relative z-10 mt-[15px] mr-0 mb-0 ml-[25px]" >
                <img src={image4}/>
            </div>            <div className="flex w-[336px] h-[30px] justify-between items-center relative z-20 mt-[12px] mr-0 mb-0 ml-[25px]">
              <span className="h-[30px] shrink-0 font-['Poppins'] text-[20px] font-medium leading-[30px] text-[#484848] relative text-left whitespace-nowrap z-20">
                White Dress
              </span>
              <div className="w-[95px] h-[19px] shrink-0 bg-[url(../assets/images/b2decd81-0f83-4fc5-a10c-f2cf10e30004.png)] bg-cover bg-no-repeat relative z-[17]" />
            </div>
            <span className="block h-[12px] font-['Poppins'] text-[12px] font-medium leading-[12px] text-[#8a8a8a] relative text-left whitespace-nowrap z-[19] mt-px mr-0 mb-0 ml-[25px]">
              Al Karam
            </span>
            <span className="block h-[18px] font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#484848] relative text-left whitespace-nowrap z-[16] mt-[25px] mr-0 mb-0 ml-[25px]">
              (4.1k) Customer Reviews
            </span>
            <div className="flex w-[336px] h-[20px] justify-between items-center relative z-[15] mt-[25px] mr-0 mb-0 ml-[25px]">
              <span className="h-[20px] shrink-0 font-['Poppins'] text-[24px] font-medium leading-[20px] text-[#484848] tracking-[-0.24px] relative text-left whitespace-nowrap z-[14]">
                $95.50
              </span>
              <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#ff4646] tracking-[-0.12px] relative text-right whitespace-nowrap z-[15]">
                Almost Sold Out
              </span>
            </div>
          </div>
          <div className="w-[386px] h-[438px] shrink-0 bg-[#fff] rounded-[10px] relative shadow-[0_40px_90px_0_rgba(0,0,0,0.06)] z-[34]">
          <div className="w-[336px] h-[244px] bg-cover bg-no-repeat rounded-[10px] relative z-10 mt-[15px] mr-0 mb-0 ml-[25px]" >
                <img src={image5}/>
            </div>  <div className="flex w-[336px] h-[30px] justify-between items-center relative z-[42] mt-[12px] mr-0 mb-0 ml-[25px]">
              <span className="h-[30px] shrink-0 font-['Poppins'] text-[20px] font-medium leading-[30px] text-[#484848] relative text-left whitespace-nowrap z-[42]">
                Colorful Dress
              </span>
              <div className="w-[95px] h-[19px] shrink-0 bg-[url(../assets/images/a98849c2-2a3c-4cd7-bb8a-90769452d65e.png)] bg-cover bg-no-repeat relative z-[39]" />
            </div>
            <span className="block h-[12px] font-['Poppins'] text-[12px] font-medium leading-[12px] text-[#8a8a8a] relative text-left whitespace-nowrap z-[41] mt-px mr-0 mb-0 ml-[25px]">
              Al Karam
            </span>
            <span className="block h-[18px] font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#484848] relative text-left whitespace-nowrap z-[38] mt-[25px] mr-0 mb-0 ml-[25px]">
              (4.1k) Customer Reviews
            </span>
            <div className="flex w-[336px] h-[20px] justify-between items-center relative z-[37] mt-[25px] mr-0 mb-0 ml-[25px]">
              <span className="h-[20px] shrink-0 font-['Poppins'] text-[24px] font-medium leading-[20px] text-[#484848] tracking-[-0.24px] relative text-left whitespace-nowrap z-[36]">
                $95.50
              </span>
              <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#ff4646] tracking-[-0.12px] relative text-right whitespace-nowrap z-[37]">
                Almost Sold Out
              </span>
            </div>
          </div>
          <div className="w-[386px] h-[438px] shrink-0 bg-[#fff] rounded-[10px] relative shadow-[0_40px_90px_0_rgba(0,0,0,0.06)] z-[56]">
          <div className="w-[336px] h-[244px] bg-cover bg-no-repeat rounded-[10px] relative z-10 mt-[15px] mr-0 mb-0 ml-[25px]" >
                <img src={image6}/>
            </div>  <div className="flex w-[336px] h-[30px] justify-between items-center relative z-[64] mt-[12px] mr-0 mb-0 ml-[25px]">
              <span className="h-[30px] shrink-0 font-['Poppins'] text-[20px] font-medium leading-[30px] text-[#484848] relative text-left whitespace-nowrap z-[64]">
                White Shirt
              </span>
              <div className="w-[95px] h-[19px] shrink-0 bg-[url(../assets/images/5f93834d-48e8-486b-be4c-a0f4a052e382.png)] bg-cover bg-no-repeat relative z-[61]" />
            </div>
            <span className="block h-[12px] font-['Poppins'] text-[12px] font-medium leading-[12px] text-[#8a8a8a] relative text-left whitespace-nowrap z-[63] mt-px mr-0 mb-0 ml-[25px]">
              Al Karam
            </span>
            <span className="block h-[18px] font-['Poppins'] text-[12px] font-medium leading-[18px] text-[#484848] relative text-left whitespace-nowrap z-[60] mt-[25px] mr-0 mb-0 ml-[25px]">
              (4.1k) Customer Reviews
            </span>
            <div className="flex w-[336px] h-[20px] justify-between items-center relative z-[59] mt-[25px] mr-0 mb-0 ml-[25px]">
              <span className="h-[20px] shrink-0 font-['Poppins'] text-[24px] font-medium leading-[20px] text-[#484848] tracking-[-0.24px] relative text-left whitespace-nowrap z-[58]">
                $95.50
              </span>
              <span className="flex w-[94px] h-[20px] justify-end items-start shrink-0 font-['Poppins'] text-[12px] font-normal leading-[20px] text-[#ff4646] tracking-[-0.12px] relative text-right whitespace-nowrap z-[59]">
                Almost Sold Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewArrivals;
