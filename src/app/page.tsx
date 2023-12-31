import { DescriptionCard } from "@/components/DescriptionCard";
import { ProfileCard } from "@/components/ProfileCard";

export default function Home() {
  return (
    <main className="flex mt-10 w-full px-4 gap-5 flex-wrap justify-center md:flex-row md:flex-nowrap">
      <ProfileCard />
      <DescriptionCard />
    </main>
  );
}
