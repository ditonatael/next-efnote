export default function CompanyOverview() {
  return (
    <div className="flex h-[45rem] w-screen min-w-full flex-row bg-zinc-600 md:container">
      {/* LEFT */}
      <div className="hidden md:block md:w-3/5 md:bg-[url('/companyOverview/efnotepro_versengold_06_L.webp')] md:bg-cover"></div>
      {/* RIGHT */}
      <div className="h-[45rem] w-screen bg-[url('/companyOverview/efnotepro_versengold_06_R.webp')] bg-cover text-center opacity-80 md:h-[45rem] md:w-2/5 md:opacity-100">
        <div className="absolute flex max-h-full w-screen max-w-full flex-col items-center gap-10 pl-7 pt-7 text-center text-4xl font-thin text-white md:w-2/5">
          -About Efnote- <br />
          <span className="text-xl font-thin">
            Efnote Want to create more valuable musical instruments with more
            free designs, with insane ideas.
            <br />
            <br /> No matter how much technology evolves, there are parts that
            do not change as musical instruments. Redefine the original value of
            electronic musical instruments.
          </span>
        </div>
      </div>
    </div>
  );
}
