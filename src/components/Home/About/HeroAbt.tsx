import React from "react";
import Image from "next/image";
import laptop from "../../../../public/images/laptop.png";
import heroBg from "../../../../public/images/heroBg.png";
import BlackBg from "@/components/Buttons/About/BlackBg";
import TransparentBtn from "@/components/Buttons/About/TransparentBtn";
import { useTranslation } from "next-i18next";
const HeroAbt = () => {
  const { t } = useTranslation("about");
  return (
    <>
      <div
        id="about"
        className="relative w-[100%] h-[100% !important] bg-[#F7FAFF]"
      >
        <div className="max-w-full h-[780px] sm:h-[800px] lg:h-[640px] xl:h-[600px] 2xl:h-[870px]">
          <Image
            src={heroBg}
            alt="herobg"
            className="w-full h-[100%]"
            loading="eager"
          />
        </div>
        <div className="absolute w-full top-[120px] lg:top-[180px] xl:top-[150px] xll:top-[150px] 2xl:top-[255px]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:flex-row lg:justify-between">
              <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
                <div className="hero-title text-center lg:text-start">
                  <h1>
                    {t("title")}
                    <span className="hero-title-span">{t("spanI")}</span>
                    &nbsp;&&nbsp;
                    <span className="hero-title-span">{t("spanII")}</span>
                  </h1>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <p className="text-center mt-4 sm:mt-5 text-lg md:text-2xl lg:text-start 2xl:text-[28px] 2xl:leading-[40px] 2xl:mt-8">
                    {t("subtitle")} <br />
                    {t("description")}
                  </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-4 lg:gap-6 items-center justify-center md:justify-start mt-4 sm:mt-5 lg:mt-7">
                  <div>
                    <BlackBg />
                  </div>
                  <div>
                    <TransparentBtn />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex md:justify-center lg:justify-end">
                <div className="w-full md:w-[75%] max-w-full lg:w-[90%] 2xl:w-full 2xl:max-w-[745px] mt-0 lg:mt-[-7]">
                  <Image
                    src={laptop}
                    alt="laptop"
                    loading="lazy"
                    className="object-cover w-full max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroAbt;
