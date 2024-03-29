"use client";
import React from "react";
import Image from "next/image";
import navLogo from "../../../public/images/navLogo.svg";
import { Link as ScrollLink } from "react-scroll";
import LanguageBtn from "../Buttons/DropDown/LanguageBtn";
import { useTranslation } from "next-i18next";
interface MobileMenuProps {
  open: boolean;
  handleLinkClick: any;
}
interface navI {
  id: string;
  navlink: string;
  link: any;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ open, handleLinkClick }) => {
  const { t } = useTranslation("navbar");
  let navItem: navI[] = t("navItem", { returnObjects: true });
  return (
    <div
      className={
        open
          ? "opacity-100 scale-100 ease-out absolute top-0 left-0 transform origin-left lg:hidden transition-transform w-full duration-1000"
          : "hidden scale-95 absolute top-0 inset-x-0 p-2 lg:hidden"
      }
    >
      <div className="h-screen shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50 duration-500">
        <div className="container px-4 py-4 sm:py-6 mx-auto h-full">
          <div className="flex items-center justify-between">
            <div className="w-full max-w-[161px]">
              <Image
                src={navLogo}
                alt="Workflow"
                className="max-w-full h-auto"
              />
            </div>
            <div className="-mr-2 block">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                onClick={handleLinkClick}
              >
                <svg
                  className="h-7 w-h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <ul className="mt-5 w-full h-full flex flex-col gap-5 justify-center overflow-y-auto">
            {navItem.map((item) => (
              <li
                key={item.id}
                className="w-full block text-center"
                onClick={handleLinkClick}
              >
                <ScrollLink
                  to={item.link}
                  activeClass="active"
                  spy={true}
                  onClick={handleLinkClick}
                  className={`cursor-pointer text-xl text-[#121113] hover:text-[#7C3AED] hover:border-b-[2px] hover:border-[#7C3AED] pb-1`}
                >
                  {t(item.navlink)}
                </ScrollLink>
              </li>
            ))}
            <li className="mx-auto">
              <LanguageBtn />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
