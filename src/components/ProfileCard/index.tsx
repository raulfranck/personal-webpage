import { socialMedia } from "@/cosnt/socialMedia.const";
import Image from "next/image";
import Link from "next/link";

export const ProfileCard = () => {
  return (
    <section className="bg-zinc-900 w-[100%] md:max-h-[450px]  flex flex-col justify-center gap-5 items-center md:min-w-[300px] rounded-lg p-10">
      <div>
        <Image
          className="rounded-full border-2 border-sky-500 p-2"
          src="https://avatars.githubusercontent.com/u/62077452?v=4"
          alt="Foto pessoal de perfil"
          width={230}
          height={230}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl text-sky-500">Raul Franck</h1>
        <p className="text-sky-100">Software developer</p>
      </div>
      <div className="flex gap-4">
        {socialMedia.map((item) => (
          <Link href={item.href} target="_blank" key={item.name}>
            {item.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};
