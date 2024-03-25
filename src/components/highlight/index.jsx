import Link from "next/link";

export default function Highlight() {
  return (
    <div className="flex h-[45rem] w-screen min-w-full flex-row bg-zinc-600 md:container">
      {/* LEFT */}
      <div className="hidden md:block md:w-3/5 md:bg-[url('/highlight/efnoteprox_kit_spotlight_wide_L.webp')] md:bg-cover"></div>

      {/* RIGHT */}
      <div className="h-[45rem] w-screen bg-[url('/highlight/efnoteprox_kit_spotlight_wide_R.webp')] bg-cover text-center opacity-80 md:h-[45rem] md:w-2/5 md:opacity-100">
        <div className="absolute flex max-h-full w-screen max-w-full flex-col items-center gap-10 pl-7 pt-7 text-center text-4xl font-thin text-white md:w-2/5">
          "X" Series Newly Launched <br />
          <span className="text-xl">
            With a beautiful matte black finish, the X Series is optimized for
            dignified and darker stages such as WORSHIP <br /> concerts. <br />
            The first model 703X is configured with 5 shells and 7 cymbals to
            suit different styles of music and drummers. <br />
            <br />
          </span>
          <Link href="/products">
            <span className="flex w-[120px] items-center justify-start rounded-full border-2 pl-4 text-lg font-normal">
              Explore...
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
