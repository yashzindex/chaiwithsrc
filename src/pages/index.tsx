import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer/page";
import About from "@/components/Home/About/HeroAbt";
import Timeline from "@/components/Home/Reasearch/Timeline";
import Banner from "@/components/Home/Banner/BannnerPage";
import Client from "@/components/Home/Client/page";
import Service from "@/components/Home/Service/page";
import OurTeam from "@/components/Home/Team/OurTeam";
import Vision from "@/components/Home/Vision/VisionPage";
import Contact from "@/components/Home/ContactUs/Contact";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Service />
      <Timeline />
      <Client />
      <Vision />
      <OurTeam />
      <Banner />
      <Contact />
      <Footer />
    </>
  );
}
export async function getStaticProps(context: any) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "about",
        "banner",
        "client",
        "contact",
        "footer",
        "navbar",
        "timeline",
        "service",
        "ourteam",
        "vision",
      ])),
    },
  };
}
{
  /* <h1>{t("blackBg")}</h1>
      <button onClick={() => handleChnage("en")}>english</button>
      <button onClick={() => handleChnage("zh")}>chinese</button> */
}
