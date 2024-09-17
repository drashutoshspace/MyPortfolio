import { ScrollArea } from "@/components/ui/scroll-area";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashutosh Mishra",
  description: "Frontend Engineer",
};

export default function Home() {
  return (
    <ScrollArea className="grow w-full h-full relative">
      {/* Background video */}
      <video
  autoPlay
  muted
  loop
  className="absolute top-0 left-0 w-full h-full object-cover -z-11"
>
  <source src="shower2.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


      <main className="relative z-10 max-w-[50rem] mx-auto px-8 py-20 text-white">
        <p className="mb-8">
          A software engineer who builds all kinds of software, including web
          apps, mobile apps, CLI tools, automation scripts, and even dumb games.
        </p>
      </main>
    </ScrollArea>
  );
}
