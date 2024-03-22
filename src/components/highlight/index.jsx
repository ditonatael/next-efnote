import Link from "next/link";

export default function Highlight() {
  return (
    <div className="container flex flex-row min-w-full w-full h-[45rem] bg-zinc-600">
      <div className="w-3/5 bg-[url('/highlight/efnoteprox_kit_spotlight_wide_L.webp')] bg-cover"></div>

      <div className="w-2/5 h-[45rem] bg-[url('/highlight/efnoteprox_kit_spotlight_wide_R.webp')] bg-cover">
        <div className="absolute flex flex-col gap-10 max-w-full max-h-full w-2/5 h-[100px] pl-7 pt-7 text-white text-4xl font-thin">
          "X" Series Newly Launched <br />
          <span className="text-xl">
            With a beautiful matte black finish, the X Series is optimized for
            dignified and darker stages such as WORSHIP <br /> concerts. <br />
            The first model 703X is configured with 5 shells and 7 cymbals to
            suit different styles of music and drummers. <br />
            <br />
          </span>
          <Link href="/products">
            <span className="border-2 rounded-full flex items-center justify-start pl-4 w-[120px] text-lg font-normal">
              Explore...
            </span>
          </Link>
        </div>
        {/* <img src="/highlight/efnoteprox_kit_spotlight_wide_R.webp" alt="" /> */}
      </div>
    </div>
  );
}
