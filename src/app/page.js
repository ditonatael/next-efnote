import Highlight from "~/components/highlight";
import Testimonials from "~/components/testimonials";
import CompanyOverview from "~/components/companyOverview";
import HeroCarousel from "~/components/heroCarousel";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
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
      {/* ABOUT US */}
      <div className="flex items-center justify-center bg-black">
        <div className="absolute flex flex-col items-center text-center text-2xl font-normal text-gray-100">
          True Musical Instruments
          <br />
          <span className=" text-5xl font-bold text-gray-100">
            Beauty Quality Originality
            <br />
            <br />
          </span>
        </div>
        <img
          src="/EFNOTE-Mini-1.webp"
          className="h-[200px] w-full object-cover opacity-40"
          alt="image"
        />
      </div>
    </div>
  );
}
