import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer/FooterPage";
import About from "@/components/Home/About/HeroAbt";
import Timeline from "@/components/Home/Reasearch/Timeline";
import Banner from "@/components/Home/Banner/BannnerPage";
import ClientPage from "@/components/Home/Client/ClientPage";
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
      <ClientPage />
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
