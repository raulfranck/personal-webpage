"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { INavigation } from "@/app/interfaces/navigation";

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

  return (
    <header>
      <div className="container h-16 px-4 flex items-center justify-between">
        <div className="flex items-center h-16">
          <h1 className="text-sky-100 text-2xl">Raul</h1>
          <h1 className="text-sky-500 bold text-2xl">F.</h1>
        </div>

        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
