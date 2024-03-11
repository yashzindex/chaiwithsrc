"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import plus from "../../../../public/images/plus.svg";
import minus from "../../../../public/images/minus.svg";
import { useTranslation } from "next-i18next";

interface sData {
  title: string;
  content: object;
  head: string;
  text: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
}

const Accordion = () => {
  const { t } = useTranslation("service");
  let serviceData: sData[] = t("serviceData", { returnObjects: true });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    setExpandedIndex(0);
  }, []);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <div
        id="service"
        className="relative py-10 sm:py-12 lg:py-14 xl:py-16 xxl:py-20 2xl:py-[120px]"
      >
        <div className="container mx-auto px-4">
          <div className="reguler-title mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <h2>{t("maintitle")}</h2>
          </div>
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="left w-full lg:max-w-[48%] 2xl:max-w-[785px]">
                {serviceData &&
                  serviceData.map((item: any, index: number) => (
                    <div
                      key={item.title}
                      className={`flex items-center justify-between mb-3 md:mb-4 lxl:mb-6 cursor-pointer`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="flex accordion-head">
                        <span
                          className={`mr-3 ${
                            expandedIndex === index ? "text-[#7656D8]" : ""
                          }`}
                        >
                          {index + 1}
                        </span>
                        <span
                          className={`hover:text-[#7656D8] duration-300 ${
                            expandedIndex === index ? "text-[#7656D8]" : ""
                          }`}
                        >
                          {t(item.title)}
                        </span>
                      </div>
                      <div className="max-w-5 md:max-w-6 xl:max-w-[38px]">
                        <Image
                          src={expandedIndex === index ? minus : plus}
                          alt="plus"
                          className="w-full h-auto duration-300"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
              </div>
              <div className="right w-full lg:max-w-[48%] 2xl:max-w-[750px] mt-4 md:mt-0">
                <div className="h-[100%] border-[#BCBABF] border rounded-2xl p-3 md:p-5 lg:p-8">
                  {serviceData &&
                    serviceData.map((item: any, index: number) => (
                      <div
                        key={item.title}
                        className={`${expandedIndex === index ? "" : "hidden"}`}
                      >
                        <div className="mb-3 md:mb-4 lg:mb-6 flex flex-col content-head">
                          <div className="flex flex-row flex-nowrap mb-4 xl:mb-5">
                            <span className="mr-3 ">{index + 1}</span>
                            <span>{t(item.title)}</span>
                          </div>
                          <div className="content-text">
                            <p
                              className={`${
                                item?.content?.text ? "" : "hidden"
                              }`}
                            >
                              {t(item?.content?.text)}
                            </p>
                            <ol className="p-4 md:p-5 lg:p-8">
                              <li
                                className={`list-decimal ${
                                  item.content.first ? "" : "hidden"
                                }`}
                              >
                                {t(item.content.first)}
                              </li>
                              <li
                                className={`list-decimal ${
                                  item.content.second ? "" : "hidden"
                                }`}
                              >
                                {t(item?.content?.second)}
                              </li>
                              <li
                                className={`list-decimal ${
                                  item.content.third ? "" : "hidden"
                                }`}
                              >
                                {t(item.content.third)}
                              </li>
                              <li
                                className={`list-decimal ${
                                  item.content.fourth ? "" : "hidden"
                                }`}
                              >
                                {t(item.content.fourth)}
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
