import { ProfileCard } from "@/components/ProfileCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex mt-10 w-full flex-row px-4">
      <ProfileCard />
    </main>
  );
}
