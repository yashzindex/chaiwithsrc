import React from "react";
import Image from "next/image";
import teamData, { Person } from "@/ConstantData/teamData";
import { useTranslation } from "next-i18next";
const OurTeam: React.FC = () => {
  const { t } = useTranslation("ourteam");
  let team = t("team", { returnObjects: true });

  return (
    <div
      id="team"
      className="relative py-10 sm:py-12 lg:py-14 xl:py-16 xxl:py-20 2xl:py-[120px]"
    >
      <div className="container px-4 mx-auto">
        <div className="mx-auto mb-12 lg:max-w-xl sm:text-center">
          <div className="reguler-title text-center">
            <h2>{t("Ftitle")}</h2>
          </div>
        </div>
        <div className="grid gap-10 md:gap-16 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-screen-lg xxl:max-w-screen-xl 2xl:max-w-[1386px]">
          {team &&
            team.map((item: any) => {
              return (
                <>
                  <div key={item.id} className="flex flex-col items-center">
                    <div className="max-w-[120px] max-h-[120px] mb-[10px]">
                      <Image
                        width={120}
                        height={120}
                        className="rounded-full h-auto max-w-full"
                        src={item.imageSrc}
                        alt="Person"
                        loading="lazy"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#EDE9FE] rounded-[6px] text-center w-full max-w-[148px] mb-[15px]">
                        <p className="member-name">{item.name}</p>
                      </div>
                      <p className="text-[#111827] text-xl leading-[24px] text-center">
                        {t(item.role)}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
