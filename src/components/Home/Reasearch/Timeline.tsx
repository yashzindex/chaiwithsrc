import React from "react";
import Image from "next/image";
import center from "../../../../public/images/center.png";
import a1 from "../../../../public/images/a1.svg";
import a2 from "../../../../public/images/a2.svg";
import a3 from "../../../../public/images/a3.svg";
import a4 from "../../../../public/images/a4.svg";
import a5 from "../../../../public/images/a5.svg";
import a6 from "../../../../public/images/a6.svg";
import a7 from "../../../../public/images/a7.svg";
import a8 from "../../../../public/images/a8.svg";
import { useTranslation } from "next-i18next";

const Timeline = () => {
  const { t } = useTranslation("timeline");

  return (
    <>
      <div
        className="relative h-full z-[-1] py-10 sm:py-12 lg:py-14 xl:py-16 xxl:py-20 2xl:py-[120px]"
        style={{ backgroundImage: "url('images/researchBG.png')" }}
      >
        <div className="container mx-auto px-4">
          <div className="uppercase text-center lg:text-start text-[#C3AFFF] text-[30px] lg:text-4xl xl:text-[50px] lg:leading-[38px] xxl:leading-[50px] 2xl:leading-[60px] tracking-[-1.25px] mb-5 md:mb-8 xl:mb-12">
            <h2>{t("mtitle")}</h2>
          </div>
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-center sm:justify-between">
              {/* left side div */}
              <div className="flex flex-col order-2 lg:order-1">
                <div className="relative mx-auto w-full lg:w-[280px] xxl:w-[360px] 2xl:w-[490px] mb-10 lg:mb-6 h-full z-10 lg:after:z-[-1] lg:after:absolute lg:after:content-[''] lg:after:bg-white after:right-[-15%] after:w-[1px] after:h-[270px] after:rotate-[-48deg] lg:after:h-[133px] lg:after:top-[24px] lg:after:right-[-15%] xl:after:top-4 xl:after:h-[190px] xxl:after:w-[1px] xxl:after:top-6 2xl:after:top-12 2xl:after:right-[-15%] 2xl:after:w-[1px] 2xl:after:h-[270px] 2xl:after:rotate-[-48deg] ">
                  <div className="bg-black-timeline bg-gradient-to-r from-black via-transparent to-black flex justify-center lg:justify-start">
                    <div className="text-center lg:text-start mt-2 lg:mt-0">
                      <div className="timeline-head">
                        <h3>2000+</h3>
                      </div>
                      <div>
                        <p className="timeline-text">{t("t1")}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full max-w-[40px] 2xl:max-w-[80px] top-[-20px] left-0 right-0 mx-auto lg:mr-0 lg:top-0 lg:bottom-0 lg:right-[-15px] xl:right-[-20px] xxl:right-[-25px] 2xl:right-[-32px]">
                      <Image
                        src={a1}
                        alt="a1"
                        className="w-full max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto w-full lg:w-[280px] xxl:w-[360px] 2xl:w-[490px] mb-10 lg:mb-6 h-full z-10 lg:after:z-[-1] lg:after:absolute lg:after:content-[''] lg:after:bg-white after:right-[-7%] after:w-[1px] after:h-[150px] after:rotate-[-52deg] after:top-10 lg:after:top-[35px] lg:after:h-[50px] lg:after:right-[-26px] xl:after:top-[8px] xl:after:h-[120px] xxl:after:top-2 xxl:after:right-[-14%] xxl:after:rotate-[-58deg] 2xl:after:right-[-7%] 2xl:after:w-[1px] 2xl:after:h-[150px] 2xl:after:rotate-[-52deg] 2xl:after:top-10">
                  <div className="bg-black-timeline bg-gradient-to-r from-black via-transparent to-black flex justify-center lg:justify-start">
                    <div className="text-center lg:text-start mt-2 lg:mt-0">
                      <div className="timeline-head">
                        <h3>200+</h3>
                      </div>
                      <div>
                        <p className="timeline-text">{t("t2")}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full max-w-[40px] 2xl:max-w-[80px] top-[-20px] left-0 right-0 mx-auto lg:mr-0 lg:top-0 lg:bottom-0 lg:right-[-15px] xl:right-[-20px] xxl:right-[-25px] 2xl:right-[-32px]">
                      <Image
                        src={a2}
                        alt="a2"
                        className="w-full max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto w-full lg:w-[280px] xxl:w-[360px] 2xl:w-[490px] mb-10 lg:mb-6 h-full z-10 lg:after:z-[-1] lg:after:absolute lg:after:content-[''] lg:after:bg-white after:right-[-5%] after:w-[1px] after:h-[170px] after:rotate-[-125deg] 2xl:after:bottom-5 xxl:after:right-[-17%] xxl:after:h-[120px] xxl:after:top-[-20px] xl:after:h-[100px] xl:after:bottom-[36px] xl:after:right-[-12%] lg:after:h-[50px] lg:after:right-[-23px] lg:after:top-0 2xl:after:right-[-5%] 2xl:after:w-[1px] 2xl:after:h-[170px] 2xl:after:rotate-[-125deg]">
                  <div className="bg-black-timeline bg-gradient-to-r from-black via-transparent to-black flex justify-center lg:justify-start">
                    <div className="text-center lg:text-start mt-2 lg:mt-0">
                      <div className="timeline-head">
                        <h3>100+</h3>
                      </div>
                      <div>
                        <p className="timeline-text">{t("t3")}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full max-w-[40px] 2xl:max-w-[80px] top-[-20px] left-0 right-0 mx-auto lg:mr-0 lg:top-0 lg:bottom-0 lg:right-[-15px] xl:right-[-20px] xxl:right-[-25px] 2xl:right-[-32px]">
                      <Image
                        src={a3}
                        alt="a3"
                        className="w-full max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto w-full lg:w-[280px] xxl:w-[360px] 2xl:w-[490px] mb-10 lg:mb-6 h-full z-10 lg:after:z-[-1] lg:after:absolute lg:after:content-[''] lg:after:bg-white after:right-[-15%] after:w-[1px] after:h-[250px] after:rotate-[50deg] after:bottom-4 lg:after:h-[120px] xl:after:h-[182px] xl:after:bottom-[0%] xxl:after:h-[210px] xxl:after:bottom-0 2xl:after:right-[-15%] 2xl:after:w-[1px] 2xl:after:h-[250px] 2xl:after:rotate-[50deg] 2xl:after:bottom-4">
                  <div className="bg-black-timeline bg-gradient-to-r from-black via-transparent to-black flex justify-center lg:justify-start">
                    <div className="text-center lg:text-start mt-2 lg:mt-0">
                      <div className="timeline-head">
                        <h3>1000+</h3>
                      </div>
                      <div>
                        <p className="timeline-text">{t("t4")}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full max-w-[40px] 2xl:max-w-[80px] top-[-20px] left-0 right-0 mx-auto lg:mr-0 lg:top-0 lg:bottom-0 lg:right-[-15px] xl:right-[-20px] xxl:right-[-25px] 2xl:right-[-32px]">
                      <Image
                        src={a4}
                        alt="a4"
                        className="w-full max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* center image div */}
              <div className="max-w-[300px] md:max-w-[200px] lg:max-w-[310px] xl:max-w-[435px] lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:right-0 flex items-center mx-auto order-1 lg:order-2 mb-10 lg:mb-0 relative z-20">
                <Image
                  src={center}
                  alt="centerImg"
                  className="max-w-full h-auto relative z-20"
                  loading="lazy"
                />
              </div>
              {/* right side div */}
              <div className="relative flex flex-col order-3 lg:order-3">
                <div className="relative mx-auto w-full lg:w-[280px] xxl:w-[360px] 2xl:w-[490px] mb-10 lg:mb-6 h-full z-10 lg:after:z-[-1] lg:after:absolute lg:after:content-[''] lg:after:bg-white after:w-[1px] after:left-[-15%] after:h-[250px] after:rotate-[48deg] lg:after:h-[133px] lg:after:top-[14px] lg:after:left-[-15%]  xl:after:top-[-16px] xl:after:h-[213px] xxl:after:h-[234px] xxl:after:top-[-14px] 2xl:after:top-12 2xl:after:w-[1px] 2xl:after:left-[-15%] 2xl:after:h-[250px] 2xl:after:rotate-[48deg]">
                  <div className="bg-black-timeline-right bg-gradient-to-r from-black via-transparent to-black flex justify-center lg:justify-start">
                    <div className="text-center lg:text-start mt-2 lg:mt-0">
                      <div className="timeline-head">
                        <h3>10+</h3>
                      </div>
                      <div>
                        <p className="timeline-text">{t("t5")}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full max-w-[40px] 2xl:max-w-[80px] top-[-20px] left-0 right-0 mx-auto lg:ml-0 lg:top-0 lg:bottom-0 lg:left-[-20px] xxl:left-[-25px] 2xl:left-[-32px]">
                      <Image
                        src={a5}
                        alt="a5"
                        className="w-full max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto w-full lg:w-[280px] xxl:w-[360px] 2xl:w-[490px] mb-10 lg:mb-6 h-full z-10 lg:after:z-[-1] lg:after:absolute lg:after:content-[''] lg:after:bg-white after:left-[-7%] after:w-[1px] after:h-[150px] after:rotate-[52deg] after:top-10 lg:after:top-[35px] lg:after:h-[50px] lg:after:left-[-26px]  xl:after:top-[6px] xl:after:h-[131px] xxl:after:left-[-52px] xxl:after:top-[21px] xxl:after:rotate-[54deg] 2xl:after:left-[-7%] 2xl:after:w-[1px] 2xl:after:h-[150px] 2xl:after:rotate-[52deg] 2xl:after:top-10">
                  <div className="bg-black-timeline-right bg-gradient-to-r from-black via-transparent to-black flex justify-center lg:justify-start">
                    <div className="text-center lg:text-start mt-2 lg:mt-0">
                      <div className="timeline-head">
                        <h3>20+</h3>
                      </div>
                      <div>
                        <p className="timeline-text">{t("t6")}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full max-w-[40px] 2xl:max-w-[80px] top-[-20px] left-0 right-0 mx-auto lg:ml-0 lg:top-0 lg:bottom-0 lg:left-[-20px] xxl:left-[-25px] 2xl:left-[-32px]">
                      <Image
                        src={a6}
                        alt="a6"
                        className="w-full max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto w-full lg:w-[280px] xxl:w-[360px] 2xl:w-[490px] mb-10 lg:mb-6 h-full z-10 lg:after:z-[-1] lg:after:absolute lg:after:content-[''] lg:after:bg-white after:left-[-5%] after:w-[1px] after:h-[170px] after:rotate-[125deg] after:bottom-5 lg:after:h-[50px] lg:after:left-[-23px] lg:after:top-0 xl:after:h-[120px] xl:after:left-[-8%] xxl:after:left-[-12%] xxl:after:h-[150px] xxl:after:top-[-20px] 2xl:after:left-[-5%] 2xl:after:w-[1px] 2xl:after:h-[170px] 2xl:after:rotate-[125deg] 2xl:after:bottom-5">
                  <div className="bg-black-timeline-right bg-gradient-to-r from-black via-transparent to-black flex justify-center lg:justify-start">
                    <div className="text-center lg:text-start mt-2 lg:mt-0">
                      <div className="timeline-head">
                        <h3>50+</h3>
                      </div>
                      <div>
                        <p className="timeline-text">{t("t7")}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full max-w-[40px] 2xl:max-w-[80px] top-[-20px] left-0 right-0 mx-auto lg:ml-0 lg:top-0 lg:bottom-0 lg:left-[-20px] xxl:left-[-25px] 2xl:left-[-32px]">
                      <Image
                        src={a7}
                        alt="a7"
                        className="w-full max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative mx-auto w-full lg:w-[280px] xxl:w-[360px] 2xl:w-[490px] mb-10 lg:mb-6 h-full z-10 lg:after:z-[-1] lg:after:absolute lg:after:content-['']  lg:after:bg-white after:left-[-15%] after:w-[1px] after:rotate-[132deg] after:bottom-4 lg:after:h-[110px] xl:after:h-[150px] xl:after:bottom-[40px] xxl:after:h-[190px] xxl:after:bottom-5 2xl:after:left-[-15%] 2xl:after:w-[1px] 2xl:after:h-[250px] 2xl:after:rotate-[132deg] 2xl:after:bottom-4">
                  <div className="bg-black-timeline-right g-gradient-to-r from-black via-transparent to-black flex justify-center lg:justify-start">
                    <div className="text-center lg:text-start mt-2 lg:mt-0">
                      <div className="timeline-head">
                        <h3>100+</h3>
                      </div>

                      <div>
                        <p className="timeline-text">{t("t8")}</p>
                      </div>
                    </div>
                    <div className="absolute flex w-full max-w-[40px] 2xl:max-w-[80px] top-[-20px] left-0 right-0 mx-auto lg:ml-0 lg:top-0 lg:bottom-0 lg:left-[-20px] xxl:left-[-25px] 2xl:left-[-32px]">
                      <Image
                        src={a8}
                        alt="a8"
                        className="w-full max-w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
