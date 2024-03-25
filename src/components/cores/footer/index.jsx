export default function Footer() {
  return (
    <div className="flex h-[220px] flex-col items-end justify-center bg-stone-100 pr-7 text-right text-xs text-zinc-400 mobile:h-auto mobile:pt-10">
      <div className=" mobile:h-full mobile:max-h-52">
        The information on this website is subject to change without notice.
        Some <br />
        of the product photos on this website are prototypes and actual products
        may vary. <br />
        The color of the product in the photos on this website may differ from
        the actual product. <br />
        Company names, product names, logo marks, etc. described or shown in
        this website are registered trademarks or trademarks of the respective
        owners. <br />
        <br />
      </div>
      <span className="flex justify-end gap-1 font-thin ">
        <span className="cursor-pointer underline">Terms of Use</span> |
        <span className="cursor-pointer underline">Privacy Policy</span> |
        <span className="cursor-pointer underline">Compliance Information</span>{" "}
        <br />
        <br />
        <br />
      </span>
      © 2020-2023 Ef-Note Inc.
    </div>
  );
}
