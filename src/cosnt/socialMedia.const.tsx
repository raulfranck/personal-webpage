import { FaGithubAlt } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";
import { ISocialMedia } from "@/app/interfaces/socialMedia";
import { PiInstagramLogoBold } from "react-icons/pi";

export const socialMedia: ISocialMedia[] = [
  {
    name: "GitHub",
    href: "https://github.com/raulfranck",
    icon: <FaGithubAlt className=" text-sky-100 h-6 w-6" />,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/",
    icon: <ImYoutube className=" text-sky-100 h-6 w-6" />,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/raul-franck-6b9a0a1b2/",
    icon: <FaLinkedinIn className=" text-sky-100 h-6 w-6" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <PiInstagramLogoBold className=" text-sky-100 h-6 w-6" />,
  },
];
