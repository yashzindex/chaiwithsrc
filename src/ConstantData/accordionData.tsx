// accordionData.tsx
export interface AccordionItem {
  index: string;
  title: string;
  content: {
    head: string;
    text: string;
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
}

export const accordionData: AccordionItem[] = [
  {
    index: "01",
    title: "Consultation and Research",
    content: {
      head: "Consultation and Research",
      text: "Professional project experts provide preliminary consultation and promotion plan communication services for you, including:",
      first: "Project positioning",
      second: "Understanding business models",
      third: "Selection of marketing methods",
      fourth: "",
    },
  },
  {
    index: "02",
    title: "Development & Optimization",
    content: {
      head: "Development & Optimization",
      text: "",
      first: "Whitepaper/Website/Deck",
      second: "Visual design/promotional materials optimization",
      third: "Product multilingual translation",
      fourth: "",
    },
  },
  {
    index: "03",
    title: "Fundraising & Listing Consultation",
    content: {
      head: "Fundraising & Listing Consultation",
      text: "",
      first: "Financing consultation, resource connection",
      second: "Listing plan formulation and listing promotion",
      third: "",
      fourth: "",
    },
  },
  {
    index: "04",
    title: "Community and Social Media …",
    content: {
      head: "Community and Social Media …",
      text: " ",
      first: "Community building and maintenance, event planning",
      second: "Social media content creation and operation",
      third: "Telegram/Discord/Kakaotalk/Line/Whatsapp, etc.",
      fourth: "Twitter/Ins/Youtube/Medium, etc.",
    },
  },
  {
    index: "05",
    title: "Influencer Marketing",
    content: {
      head: "Influencer Marketing",
      text: "",
      first:
        "KOL from Japan, China，Korea，Europe, the Americas, Southeast Asia, etc.",
      second: "Multilingual AMA, Space operations",
      third: "KOL research or project research",
      fourth:
        "Spread and marketing on platforms like Twitter/Telegram/Discord/Naverblog/Wechat, etc.",
    },
  },
  {
    index: "06",
    title: "B2B Partnership Collaboration",
    content: {
      head: "B2B Partnership Collaboration",
      text: "",
      first: "Joint event hosting",
      second: "Strategic partnership promotion",
      third: "Sharing User-Growth event",
      fourth: "",
    },
  },
  {
    index: "07",
    title: "Localization Services",
    content: {
      head: "Localization Services",
      text: "",
      first: "Localization language translation",
      second: "Localization community building",
      third: "Localization marketing strategy",
      fourth: "",
    },
  },
  {
    index: "08",
    title: "Customized Marketing Strategy",
    content: {
      head: "Customized Marketing Strategy",
      text: "",
      first:
        "Develop marketing strategies based on the project's development stage",
      second: "Develop marketing plans based on the target market",
      third: "Develop marketing schemes based on the product's characteristics",
      fourth: "",
    },
  },
  {
    index: "09",
    title: "Offline Events",
    content: {
      head: "Offline Events",
      text: "",
      first: "Hosting Meetups",
      second: "Offline gatherings",
      third: "Parties, receptions, and other events",
      fourth: "",
    },
  },
  {
    index: "10",
    title: "Compliance Consultation",
    content: {
      head: "Compliance Consultation",
      text: "",
      first: "Consultation on legal regulations in target regions.",
      second: "Handling of licenses and permits in target regions, etc.",
      third: "",
      fourth: "",
    },
  },
];
