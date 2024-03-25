import Highlight from "~/components/highlight";
import Testimonials from "~/components/testimonials";
import CompanyOverview from "~/components/companyOverview";
import HeroCarousel from "~/components/heroCarousel";
import Link from "next/link";
import Image from "next/image";
import Tagline from "~/components/tagline";

export default function Home() {
  return (
    <div className="flex w-screen flex-col">
      {/* HERO SECTION */}

      <HeroCarousel />

      {/* COMPANY OVERVIEW */}
      <div className="h-[100%] bg-zinc-800 pt-7">
        <CompanyOverview />
      </div>

      {/* PRODUCT HIGHLIGHT */}
      <div className="h-[100%] bg-zinc-800 pt-7">
        <Highlight />
      </div>
      {/* Testimonials*/}
      <div className="w-screen bg-zinc-100 pt-24">
        <Testimonials />
      </div>
      {/* TAGLINE*/}
      <Tagline />
    </div>
  );
}
