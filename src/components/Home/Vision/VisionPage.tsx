import React from "react";
import { useTranslation } from "next-i18next";
const VisionPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        id="vision"
        className="relative w-[100%] bg-[#110F12] py-10 sm:py-12 lg:py-14 xl:py-16 xxl:py-[70px]"
        style={{
          backgroundImage: "url(/images/vision.png)",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "right",
          backgroundSize: "contain",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="lg:max-w-[867px]">
            <div className="white-heading">
              <h1>{t("titleV")}</h1>
            </div>
            <div className="mt-[31px]">
              <p className="text-[#C3AFFF] text-lg md:text-xl xl:text-2xl 2xl:text-[30px] leading-[24px] md:leading-[26px] xl:leading-[30px] 2xl:leading-[40px]">
                {t("textI")}
              </p>
              <p className="text-white text-lg md:text-xl xl:text-2xl 2xl:text-[30px] leading-[24px] md:leading-[26px] xl:leading-[30px] 2xl:leading-[40px] mt-4 md:mt-5 xl:mt-7 2xl:mt-[50px]">
                {t("textII")}
              </p>
              <p className="text-[#C3AFFF] text-lg md:text-xl xl:text-2xl 2xl:text-[30px] leading-[24px] md:leading-[26px] xl:leading-[30px] 2xl:leading-[40px] mt-4 md:mt-5 xl:mt-7 2xl:mt-[50px]">
                {t("textIII")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionPage;
