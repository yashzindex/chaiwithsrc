"use client";
import Image from "next/image";
import React, { useState } from "react";
import navLogo from "../../../public/images/navLogo.svg";
import LanguageBtn from "../Buttons/DropDown/LanguageBtn";
import MobileMenu from "./MobileMenu";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useTranslation } from "next-i18next";
interface navI {
  id: string;
  navlink: string;
}
const Navbar: React.FC = () => {
  const { t } = useTranslation("navbar");
  let navItem: navI[] = t("navItem", { returnObjects: true });
  console.log(navItem);
  const [open, setOpen] = useState(false);
  const handleMobileMenuToggle = () => {
    setOpen(!open);
    document.body.classList.toggle("overflow-hidden");
  };
  const handleLinkClick = () => {
    setOpen(!open);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <div className="absolute w-full z-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 lg:justify-start lg:space-x-10 2xl:space-x-12">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className="w-full max-w-[161px]">
                <Link href="/">
                  <Image width={161} height={32} src={navLogo} alt="navLogo" />
                </Link>
              </div>
            </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <button type="button" onClick={handleMobileMenuToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 26 18"
                  fill="none"
                >
                  <rect width="26" height="4" rx="2" fill="black" />
                  <rect y="7" width="26" height="4" rx="2" fill="black" />
                  <rect y="14" width="26" height="4" rx="2" fill="black" />
                </svg>
              </button>
            </div>
            <ul className="hidden lg:flex space-x-5 lg:space-x-10 2xl:space-x-[50px]">
              {navItem &&
                navItem.map((item: any) => {
                  return (
                    <>
                      <li key={item.id}>
                        <ScrollLink
                          to={item.id}
                          activeClass="active"
                          spy={true}
                          className={`cursor-pointer text-sm text-[#121113] hover:text-[#7C3AED] hover:border-b-[2px] hover:border-[#7C3AED] pb-1`}
                        >
                          {item.navlink}
                        </ScrollLink>
                      </li>{" "}
                    </>
                  );
                })}
            </ul>
            <div className="hidden lg:flex items-center justify-end lg:flex-1 lg:w-0">
              <LanguageBtn />
            </div>
          </div>
        </div>
        <MobileMenu open={open} handleLinkClick={handleLinkClick} />
      </div>
    </>
  );
};

export default Navbar;

{
  /* {navigationItems.map((item: any) => (
                <li key={item.id}>
                  <ScrollLink
                    to={item.id}
                    activeClass="active"
                    spy={true}
                    className={`cursor-pointer text-sm text-[#121113] hover:text-[#7C3AED] hover:border-b-[2px] hover:border-[#7C3AED] pb-1`}
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))} */
}
