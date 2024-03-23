import Highlight from "~/components/highlight"
import Testimonials from "~/components/testimonials"
import CompanyOverview from "~/components/companyOverview"
import HeroCarousel from "~/components/heroCarousel"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}

      <HeroCarousel />

      {/* COMPANY OVERVIEW */}
      <div className="h-[100%] pt-7 bg-zinc-800">
        <CompanyOverview />
      </div>
      {/* YOUTUBE
      <div className="flex justify-between gap-1 h-[400px] pt-7">
        <div className="w-1/2">
          <div className="h-full w-full bg-slate-300">
          <Image src="/youtubeThumbnail/youtube_L.jpeg" layout="fill" quality={100} loading="lazy"/>
          </div>
        </div>
        <div className="w-1/2">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/wEKwR3rR84c?si=UA_s3n_lU5nNemIq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy"></iframe>
        </div>
      </div> */}
      {/* PRODUCT HIGHLIGHT */}
      <div className="h-[100%] pt-7 bg-zinc-800">
        <Highlight />
      </div>
      {/* Testimonials*/}
      <div className="pt-24 w-screen bg-zinc-100">
        <Testimonials />
      </div>
      {/* ABOUT US */}
      <div className="flex items-center justify-center bg-black">
          <div className="absolute text-gray-100 text-center font-normal text-2xl flex flex-col items-center">
            True Musical Instruments<br />
            <span className=" text-gray-100 font-bold text-5xl">
              Beauty Quality Originality<br /><br />
            </span>
          </div>         
        <img src="/EFNOTE-Mini-1.webp" className="h-[200px] w-full object-cover opacity-40" alt="image"/>
      </div>
    </div>
  )
}
