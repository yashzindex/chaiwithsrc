import React from "react";
import { useTranslation } from "next-i18next";

const BannnerPage = () => {
  const { t } = useTranslation("banner");

  return (
    <>
      <div
        id="banner"
        className="relative py-10 sm:py-12 lg:py-14 xl:py-16 xxl:py-20 2xl:pt-[191px] 2xl:pb-[168px] after:absolute after:content-[''] after:bg-[#684987] after:opacity-[0.65] after:top-0 after:bottom-0 after:left-0 after:right-0"
        style={{
          background: "url('images/bannerO.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="w-[100%] max-w-[1252px] mx-auto relative z-10">
            <div className="white-heading text-center">
              <h2>{t("heading")}</h2>
            </div>
            <div className="mt-6 md:mt-8 xl:mt-10 2xl:mt-[72px] flex justify-center">
              <button className="bg-white text-black hover:text-white hover:duration-500 text-base sm:text-lg lg:text-2xl xxl:text-[30px] leading-[30px] rounded-lg lg:rounded-xl 2xl:rounded-2xl hover:bg-black px-6 py-2 md:px-10 md:py-2 xl:px-10 xl:py-3 xxl:py-4 2xl:px-[55px] 2xl:py-[25px] ">
                {t("buttonText")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannnerPage;
