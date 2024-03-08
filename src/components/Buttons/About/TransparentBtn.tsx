import React from "react";
import { useTranslation } from "next-i18next";

const TransparentBtn = () => {
  const { t } = useTranslation();

  return (
    <>
      <button
        className="max-w-[294px] border-black border bg-transparent hover:bg-black hover:text-white hover:duration-500 rounded-[8px]
         text-lg 2xl:text-2xl tracking-normal leading-normal 2xl:leading-7 2xl:tracking-[-0.48] px-5 py-3 md:px-10 xl:px-14 xl:py-3 2xl:px-[83px] 2xl:py-[23px]"
      >
        {t("transparentBtn")}
      </button>
    </>
  );
};

export default TransparentBtn;
