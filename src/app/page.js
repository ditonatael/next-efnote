import Highlight from "~/components/highlight"
import Testimonials from "~/components/testimonials"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <div className="carousel w-screen">
        <div id="item1" className="carousel-item w-screen">
          <img src="/hero/efnotemini_efnote5_room_caro.webp" className=""/>
        </div> 
        <div id="item2" className="carousel-item w-full">
          <img src="/hero/efnotemini_bird_flooring_caro.webp" className="" />
        </div> 
        <div id="item3" className="carousel-item w-full">
          <img src="/hero/efnoteprox_kit_audience_caro.webp" className="" />
        </div> 
        <div id="item4" className="carousel-item w-full">
          <img src="/hero/efnoteprox_engineer_ipad_caro.webp" className="" />
        </div>
      </div> 
      {/* YOUTUBE */}
      <div className="flex justify-between gap-1 h-[400px] pt-7">
        <div className="w-1/2">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/Ap1F6oJO9aM?si=XNGk2Yg2l1rxpEK1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="w-1/2">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/wEKwR3rR84c?si=UA_s3n_lU5nNemIq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
      {/* PRODUCT HIGHLIGHT */}
      <div className="h-[100%] pt-7 bg-zinc-700">
        <Highlight />
      </div>
      {/* Testimonials*/}
      <div className="pt-24 w-screen bg-zinc-100">
        <Testimonials />
      </div>
      {/* ABOUT US */}
      <div className="flex items-center justify-center">
          <div className="absolute text-gray-900 text-center font-normal text-2xl flex flex-col items-center">
            True Musical Instruments<br />
            <span className=" text-gray-900 font-bold text-5xl">
              Beauty Quality Originality<br /><br />
            </span>
            <div className=" border-2 border-black text-black font-bold w-[180px] h-[30px] rounded-full text-base">
              About EFNOTE
            </div>
          </div>         
        <img src="/EFNOTE-Mini-1.webp" className="h-[200px] w-full object-cover opacity-40"/>
      </div>
    </div>
  )
}
