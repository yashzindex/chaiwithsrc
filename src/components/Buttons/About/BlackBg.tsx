import React from "react";
import { useTranslation } from "next-i18next";

const BlackBg = () => {
  const { t } = useTranslation();

  return (
    <>
      <button
        className="block border-transparent border-[1px] rounded-[8px] bg-black text-white hover:bg-white hover:text-black hover:duration-500 
        hover:border-black text-lg 2xl:text-2xl tracking-normal leading-normal 2xl:leading-7 2xl:tracking-[-0.48] px-5 py-3 md:px-7 xl:py-3 
        2xl:px-[37px] 2xl:py-[23px] "
      >
        {t("blackBg")}
      </button>
    </>
  );
};

export default BlackBg;
