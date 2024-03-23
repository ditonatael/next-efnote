
'use client';
import Image from "next/image";


export default function HeroCarousel() {
  return (
    <div className="carousel w-screen scroll-smooth">
        <div id="item1" className="carousel-item w-screen bg-[url('/hero/efnotemini_efnote5_room_caro.webp')] bg-cover">
          {/* <img src="/hero/efnotemini_efnote5_room_caro.webp" alt='image'/> */}
        </div> 
        <div id="item2" className="carousel-item w-screen bg-[url('/hero/efnotemini_bird_flooring_caro.webp')] bg-cover">
          {/* <img src="/hero/efnotemini_bird_flooring_caro.webp" alt='image' /> */}
        </div> 
        <div id="item3" className="carousel-item w-screen bg-[url('/hero/efnoteprox_kit_audience_caro.webp')] bg-cover">
          {/* <img src="/hero/efnoteprox_kit_audience_caro.webp" alt='image' /> */}
        </div> 
        <div id="item4" className="carousel-item w-screen">
          <img src="/hero/efnoteprox_engineer_ipad_caro.webp" alt='image' />
        </div>
      </div> 
  );
}
