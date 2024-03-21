export default function CompanyOverview() {
  return (
    <div className="container flex flex-row min-w-full w-full h-[700px] bg-zinc-600">
      <div className="w-3/5">
        <img
          src="/companyOverview/efnotepro_versengold_06_L.webp"
          className=""
        />
      </div>
      <div className="w-2/5">
        <div className="absolute flex flex-col items-center gap-10 max-w-full max-h-full w-2/5 h-[100px] pl-7 pt-7 text-white text-4xl font-thin text-center">
          -About Efnote- <br />
          <span className="text-xl font-thin">
            Efnote Want to create more valuable musical instruments with more free
            designs, with insane ideas.<br/><br /> No matter how much
            technology evolves, there are parts that do not change as musical
            instruments. Redefine the original value of electronic musical
            instruments.
          </span>
        </div>
        <img src="/companyOverview/efnotepro_versengold_06_R.webp" alt="" />
      </div>
    </div>
  );
}
