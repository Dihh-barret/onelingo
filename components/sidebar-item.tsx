import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SidebarItem } from "./SidebarItem";
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton,
  ClerkProvider,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/duolingo icon.svg" height={40} width={40} alt="icon" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Onelingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem label="Learn" iconSrc="/learn.svg" href="/learn" />
        <SidebarItem
          label="leaderboard"
          iconSrc="/leaderboard.svg"
          href="/leaderboard"
        />
        <SidebarItem label="quests" iconSrc="/quests.svg" href="/quests" />
        <SidebarItem label="shop" iconSrc="/shop.svg" href="/shop" />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <ClerkProvider afterSignOutUrl="/">
            <UserButton />
          </ClerkProvider>
        </ClerkLoaded>
      </div>
    </div>
  );
};
