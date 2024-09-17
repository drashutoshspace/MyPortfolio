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
  <h1 className="text-4xl font-bold mb-6">Greetings! I&apos;m Ashutosh Mishra.</h1>
  
  <div className="mb-8">
    <iframe
      width="100%"
      height="315"
      src="https://www.youtube.com/embed/D0UnqGm_miA?si=J2WEAqDtRRVkqLga&mute=1 "
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>

  <p className="mb-8 center">
    With a deep passion for space exploration and innovation, I&apos;m currently pursuing my PhD in Space Robotics at Tohoku University under Prof. Kazuya Yoshida. As a Japanse MEXT Scholar and Innovation Ambassador for the Ministry of Education Innovation Cell, I&apos;m committed to bridging the knowledge gap between young international students, fostering global collaboration, and empowering the next generation to lead in space exploration.
  </p>
</main>


    </ScrollArea>
  );
}
