export default function Footer() {
  return (
    <div className="h-[220px] bg-stone-100 flex flex-col justify-center items-enc pr-7 text-xs text-right text-zinc-400">
      The information on this website is subject to change without notice. 
      Some <br />
      of the product photos on this website are prototypes and actual products
      may vary. <br />
      The color of the product in the photos on this website may
      differ from the actual product. <br /> 
      Company names, product names, logo marks,
      etc. described or shown in this website are registered trademarks or
      trademarks of the respective owners. <br /><br />
      <span className="font-thin flex justify-end gap-1 ">
        <span className="underline cursor-pointer">
        Terms of Use    
        </span> |
        <span className="underline cursor-pointer">
        Privacy Policy     
        </span> | 
        <span className="underline cursor-pointer">
        Compliance Information    
        </span> <br /><br /><br /> 
      </span>
      © 2020-2023 Ef-Note Inc.
    </div>
  );
}
