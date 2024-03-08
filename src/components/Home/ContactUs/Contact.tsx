import React from "react";
import Image from "next/image";
import rightArror from "../../../../public/images/rightArror.svg";
import { useTranslation } from "next-i18next";
const Contact = () => {
  const { t } = useTranslation("contact");
  return (
    <>
      <div className="relative py-10 sm:py-12 lg:py-14 xl:py-16 xxl:py-20 2xl:py-[120px]">
        <div className="container mx-auto px-4">
          <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center mb-5 sm:mb-11">
            <div className="reguler-title mb-3 sm:mb-0">
              <h2>{t("contact.title")}</h2>
            </div>
            <div>
              <button className="bg-black text-white border-transparent hover:bg-[#6B6B6C] duration-500 rounded-lg py-2 px-6 lg:px-6 lg:py-4 2xl:px-9 2xl:py-[18px] flex flex-row items-center text-base lg:text-lg md:text-2xl">
                {t("contact.submitButtonText")}
                <span className="ml-2">
                  <Image
                    src={rightArror}
                    alt="rightarror"
                    className="w-5 h-5 md:w-6 md:y-6 xl:w-8 xl:h-8"
                  />
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                id="name"
                className="text-base md:text-lg xl:text-2xl text-[#A4A4A4] leading-6 col-span-1 border  border-[#BCBABF] rounded-lg px-3 py-3 md:px-4 md:py-3 xl:px-6 xl:py-4 focus:outline-none"
                placeholder={t("contact.formLabels.name")}
              />
              <input
                type="email"
                id="email"
                className="text-base md:text-lg xl:text-2xl text-[#A4A4A4] leading-6 col-span-1 border  border-[#BCBABF] rounded-lg px-3 py-3 md:px-4 md:py-3 xl:px-6 xl:py-4 focus:outline-none"
                placeholder={t("contact.formLabels.email")}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                id="project"
                className="text-base md:text-lg xl:text-2xl text-[#A4A4A4] leading-6 col-span-1 border  border-[#BCBABF] rounded-lg px-3 py-3 md:px-4 md:py-3 xl:px-6 xl:py-4 focus:outline-none"
                placeholder={t("contact.formLabels.project")}
              />
              <input
                type="text"
                id="jobTitle"
                className="text-base md:text-lg xl:text-2xl text-[#A4A4A4] leading-6 col-span-1 border  border-[#BCBABF] rounded-lg px-3 py-3 md:px-4 md:py-3 xl:px-6 xl:py-4 focus:outline-none"
                placeholder={t("contact.formLabels.jobTitle")}
              />
            </div>
            <div>
              <textarea
                rows={8}
                id="description"
                className="text-base md:text-lg xl:text-2xl text-[#A4A4A4] leading-6 border border-[#BCBABF] rounded-lg px-3 py-3 md:px-4 md:py-3 xl:px-6 xl:py-4 w-full focus:outline-none"
                placeholder={t("contact.formPlaceholder.description")}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
