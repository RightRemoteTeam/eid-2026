import { HeroSection, GreetingSection, MessageSection } from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-[#d4fefe] to-[#6ff6f8]">
      {/* Hero Section - Logo + Family Scene */}
      <HeroSection />

      {/* Greeting Section - Eid Mubarak Badge + Homes */}
      <GreetingSection />

      {/* Message Section - Secondary Logo + Arabic Message */}
      <MessageSection />
    </main>
  );
}
