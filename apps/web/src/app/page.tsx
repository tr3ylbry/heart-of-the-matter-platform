import { FinalCTA } from "@/components/FinalCTA";
import { FounderSection } from "@/components/FounderSection";
import { Hero } from "@/components/Hero";
import { LessonsGrid } from "@/components/LessonsGrid";
import { MissionStrip } from "@/components/MissionStrip";
import { PricingPreview } from "@/components/PricingPreview";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MissionStrip />
        <LessonsGrid />
        <PricingPreview />
        <FounderSection />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  );
}
