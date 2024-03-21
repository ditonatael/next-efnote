
'use client';

import { Carousel } from 'flowbite-react';

export default function HeroCarousel() {
  return (
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
  );
}
