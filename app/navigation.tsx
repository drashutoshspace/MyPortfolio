"use client";

import {
  HomeIcon,
  PenLineIcon,
  RouteIcon,
  DogIcon,
  FlowerIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  LinkedinIcon,
  ArrowUpRightIcon,
  BookIcon,
  GlobeIcon,
  GraduationCapIcon, // For Education
  BriefcaseIcon, // For Experiences
  FileTextIcon, // For Publications
  HammerIcon, // For Projects
  CodeIcon, // For Skills & Proficiencies
  AwardIcon, // For Awards & Honors
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DrawerClose } from "@/components/ui/drawer";
import { ForwardRefExoticComponent } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "./theme-switcher";
import { useEffect } from "react";

const socials = {
  twitter: "https://twitter.com/drashutoshspace",
  instagram: "https://www.instagram.com/drashutoshspace/",
  linkedin: "https://www.linkedin.com/in/drashutoshspace/",
  github: "https://github.com/drashutoshspace",
  orcid: "https://orcid.org/0000-0002-8595-9995",
  scholar: "https://scholar.google.com/citations?hl=en&user=KwFxQqIAAAAJ",
};

function ShortcutHint({
  children,
  active,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Badge
      variant={active ? "default" : "secondary"}
      className={`h-5 w-5 place-content-center rounded border text-xs font-medium transition-colors duration-200 lg:grid`}
    >
      {children}
    </Badge>
  );
}

function NavigationLink({
  name,
  shortcut,
  icon,
  link,
  inDrawer,
}: {
  name: string;
  shortcut: number;
  icon: ForwardRefExoticComponent<any>;
  link: string;
  inDrawer: boolean;
}) {
  const Icon = icon;
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    addEventListener("keydown", (event) => {
      if (event.key === shortcut.toString()) {
        router.push(link);
      }
    });
  });
  let active = false;
  if (link === "/") {
    active = pathname === link;
  } else {
    active = pathname.includes(link);
  }

  const output = (
    <Button
      variant="ghost"
      asChild
      className={`w-full justify-start text-left px-2 ${
        active ? "bg-accent" : ""
      }`}
    >
      <Link href={link}>
        <Icon className="h-4 mr-2" />
        <div className="flex justify-between w-full">
          {name}
          <ShortcutHint active={active}>{shortcut}</ShortcutHint>
        </div>
      </Link>
    </Button>
  );

  if (inDrawer) {
    return <DrawerClose asChild>{output}</DrawerClose>;
  }

  return output;
}

function SocialLink({
  name,
  link,
  icon,
}: {
  name: string;
  link: string;
  icon: ForwardRefExoticComponent<any>;
}) {
  const Icon = icon;
  return (
    <Button variant="ghost" className="w-full px-2" asChild>
      <a
        href={link}
        target="_blank"
        className="flex justify-between text-left w-full items-center"
      >
        <div className="flex">
          <Icon className="h-4 mr-2" />
          <p>{name}</p>
        </div>
        <ArrowUpRightIcon className="w-4" />
      </a>
    </Button>
  );
}

type NavigationProps = {
  inDrawer: boolean;
};

export default function Navigation({ inDrawer }: NavigationProps) {
  return (
    <ScrollArea className="p-2 h-full">
      <Link
        href="/"
        className="inline-flex items-center justify-start whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground w-full h-9 py-6 px-2 mb-2 flex justify-start text-left"
      >
        <Image
          width={40}
          height={40}
          src="/author.png"
          alt="Picture of the author"
          className="mr-4 rounded-full"
        />
        <div>
          <p>Ashutosh Mishra</p>
          <p className="text-muted-foreground">The Space Scientist</p>
        </div>
      </Link>
      <nav className="flex flex-col gap-1">
        <NavigationLink
          name="Home"
          shortcut={1}
          icon={HomeIcon}
          link="/"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Education"
          shortcut={2}
          icon={GraduationCapIcon}
          link="/education"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Experiences"
          shortcut={3}
          icon={BriefcaseIcon}
          link="/experiences"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Publications"
          shortcut={4}
          icon={FileTextIcon}
          link="/publications"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Projects"
          shortcut={5}
          icon={HammerIcon}
          link="/projects"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Posts"
          shortcut={6}
          icon={PenLineIcon}
          link="/posts"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Skills & Proficiencies"
          shortcut={7}
          icon={CodeIcon}
          link="/skills"
          inDrawer={inDrawer}
        />
        <NavigationLink
          name="Awards & Honors"
          shortcut={8}
          icon={AwardIcon}
          link="/awards"
          inDrawer={inDrawer}
        />
      </nav>
      <Separator className="my-2" />
      <p className="text-muted-foreground text-xs p-2">Socials</p>
      <div className="flex flex-col gap-1">
        <SocialLink
          name="LinkedIn"
          link={socials.linkedin}
          icon={LinkedinIcon}
        />
        <SocialLink name="Github" link={socials.github} icon={GithubIcon} />
        <SocialLink
          name="Google Scholar"
          link={socials.scholar}
          icon={BookIcon}
        />
        <SocialLink name="ORCID" link={socials.orcid} icon={GlobeIcon} />
        <SocialLink name="Twitter" link={socials.twitter} icon={TwitterIcon} />
      </div>

      <Separator className="my-2" />
      <p className="text-muted-foreground text-xs p-2">Settings</p>
      <ThemeSwitcher />
    </ScrollArea>
  );
}
