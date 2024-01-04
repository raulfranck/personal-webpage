"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavigation } from "@/app/interfaces/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { socialMedia } from "@/cosnt/socialMedia.const";
import { IoCloseSharp } from "react-icons/io5";

const navigation: INavigation[] = [
  {
    name: "Sobre mim",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Videos",
    href: "/projects",
  },
];

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className="container h-16 px-4 flex items-center justify-between">
        <div className="flex items-center h-16">
          <h1 className="text-sky-100 text-2xl">Raul</h1>
          <h1 className="text-sky-500 bold text-2xl">F.</h1>
        </div>

        <nav className="hidden sm:flex">
          <ul className="flex gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  className={`${
                    pathname === item.href ||
                    pathname.startsWith(item.href + "/")
                      ? "text-sky-500"
                      : "text-sky-100"
                  }  hover:text-sky-500 duration-300`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="sm:hidden" onClick={handleOpenMenu}>
          {openMenu ? (
            <IoCloseSharp className="text-sky-100 h-6 w-6" />
          ) : (
            <RxHamburgerMenu className="text-sky-100 h-6 w-6" />
          )}
        </div>
        <div
          className={`p-10 flex flex-col gap-5 fixed top-0 left-0 w-[60%] sm:hidden  h-full bg-zinc-950 ${
            openMenu ? "ease-in duration-500" : "hidden"
          }`}
        >
          <ul className="flex flex-col gap-8 mt-10">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  onClick={handleOpenMenu}
                  className={`${
                    pathname === item.href ? "text-sky-500" : "text-sky-100"
                  }  hover:text-sky-500 duration-300`}
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            {socialMedia.map((item) => (
              <Link href={item.href} target="_blank" key={item.name}>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
