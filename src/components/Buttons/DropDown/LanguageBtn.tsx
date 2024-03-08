// "use client";
import { useState } from "react";
import Image from "next/image";
import global from "../../../../public/images/global.svg";
import down from "../../../../public/images/down.svg";
import rightArror from "../../../../public/images/rightArror.svg";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const LanguageBtn = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleChnage = (locale: any) => {
    router.push(router.pathname, router.asPath, { locale });
  };
  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-center items-center ml-4 xl:ml-8 whitespace-nowrap px-3 py-2 border border-transparent rounded-[8px] shadow-sm text-sm  text-white bg-[#9983DB] transition ease-in-out duration-150"
      >
        <span>
          <Image src={global} alt="global" width={20} height={20} priority />
        </span>
        &nbsp;&nbsp;&nbsp;Language
        <span className="max-w-4">
          <Image
            src={down}
            alt="down"
            className={`ml-2 max-w-auto h-auto ${isOpen ? "" : "rotate-180"}`}
          />
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg w-full max-w-[208px]">
          <div className="w-full py-2 rounded-lg bg-white">
            <div
              className="py-2 px-4 text-sm text-black hover:bg-[#9983DB] hover:text-white flex items-center justify-between w-full duration-300"
              onClick={() => {
                handleChnage("en");
                setIsOpen(!isOpen);
              }}
            >
              English
              <span className="w-full max-w-4">
                <Image src={rightArror} alt="rightarrow" />
              </span>
            </div>
            <div
              className="py-2 px-4 text-sm text-black hover:bg-[#9983DB] hover:text-white flex items-center justify-between w-full duration-300"
              onClick={() => {
                handleChnage("zh");
                setIsOpen(!isOpen);
              }}
            >
              简体中文
              <span className="w-full max-w-4">
                <Image src={rightArror} alt="rightarrow" />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageBtn;
