import React from "react";
import Image from "next/image";
import fLogo from "../../../public/images/fLogo.svg";
import twitter from "../../../public/images/twitter.svg";
import mail from "../../../public/images/mail.svg";
import fly from "../../../public/images/fly.svg";
import Link from "next/link";
import { FooterLinkData } from "../../ConstantData/footerLinkData";
const page: React.FC = () => {
  const iconSources = [twitter, mail, fly];
  return (
    <>
      <div className="relative bg-[#121113] py-6 pt-10 pb-6">
        <div className="container mx-auto px-4">
          <section className="flex justify-center items-center sm:items-start sm:justify-between flex-col sm:flex-row">
            <div className="max-w-[100px] md:max-w-[161px]">
              <Link href="#">
                <Image
                  src={fLogo}
                  alt="footerlogo"
                  className="max-w-full h-auto"
                  loading="lazy"
                />
              </Link>
            </div>
            <ul className="my-3 sm:my-0 flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-between w-[100%] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] xl:max-w-[610px]">
              {FooterLinkData.map((item: FooterLinkData) => (
                <li
                  key={item.id}
                  className="basis-[30%] sm:text-center md:text-start mb-4 sm:mb-8"
                >
                  <Link
                    href={item.href}
                    className="uppercase text-white text-xs md:text-base leading-5 hover:text-[#6B6B6C] duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex mb-3 sm:mb-0">
              {iconSources.map((src, index) => (
                <>
                  <div
                    className="bg-white hover:scale-105 hover:duration-300 rounded-full w-full max-w-[24px] max-h-[24px] md:max-w-[30px] h-full md:max-h-[30px] flex items-center justify-center ml-4"
                    key={index}
                  >
                    <Link href="#">
                      <Image
                        src={src}
                        alt={src}
                        className="max-w-full h-auto"
                        loading="lazy"
                      />
                    </Link>
                  </div>
                </>
              ))}
            </div>
          </section>
        </div>
        <div className="relative border-t border-[#ffffff33]">
          <div className="container mx-auto px-4">
            <ul>
              <li className="mt-4 text-center sm:text-start">
                <Link
                  href="#"
                  className="text-[#6B6B6C] hover:text-white duration-300 text-sm"
                >
                  Chain with.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
