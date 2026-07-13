import type { Metadata } from "next";
import { AcuityEmbed, getAcuitySchedulerUrl } from "@/components/AcuityEmbed";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Book a Free Trial | Heart of the Matter School of Music",
  description:
    "Book or request a free trial lesson with Heart of the Matter School of Music.",
};

export default function BookPage() {
  const schedulerUrl = getAcuitySchedulerUrl();

  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <PageHero
          eyebrow="Booking"
          title="Book a Free Trial Lesson"
          description={
            schedulerUrl
              ? "Choose an available time below to schedule your free trial lesson."
              : "Automated scheduling is being connected soon. For now, request a free trial by emailing Elizabeth directly or sending a note through the contact page."
          }
          primaryCta={{
            label: "Start with a Free Trial",
            href: schedulerUrl
              ? "#scheduler"
              : "mailto:heartofthemattermusic@gmail.com?subject=Free%20trial%20lesson%20request",
          }}
          secondaryCta={{ label: "Contact the School", href: "/contact" }}
        />
        <AcuityEmbed />
      </main>
      <SiteFooter />
    </>
  );
}
