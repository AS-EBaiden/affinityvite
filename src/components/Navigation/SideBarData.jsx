import {
  ArrowLeft,
  Auto1,
  Success,
  Star,
  TimerOutline,
  Pin,
  HeartFilled,
  Talk,
} from "@allied-solutions/affinity-react-icons/dist/16px";

export const links = [
  {
    title: "Dashboard",
    icon: Talk,
    link: "#",
    subList: [
      { title: "Title1", link: "#" },
      { title: "Title2", link: "#" },
    ],
  },
  {
    title: "CPI",
    icon: Auto1,
    link: "#",
  },
  {
    title: "Bond",
    icon: Success,
    link: "#",
    subList: [{ title: "Title1", link: "#" }],
  },
  {
    title: "Escrow",
    icon: Star,
    link: "#",
  },
  {
    title: "Reports",
    icon: TimerOutline,
    link: "#",
  },
  {
    title: "Upload",
    icon: HeartFilled,
    link: "#",
  },
];

export const footerLinks = [
  {
    title: "Provide Feedback",
    icon: Talk,
    link: "#",
    subList: [
      { title: "Title1", link: "#" },
      { title: "Title2", link: "#" },
    ],
  },
  {
    title: "Support",
    icon: Auto1,
    link: "#",
  },
  {
    title: "System Admin",
    icon: Success,
    link: "#",
    subList: [{ title: "Title1", link: "#" }],
  },
];
