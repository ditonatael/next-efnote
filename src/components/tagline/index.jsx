export default function Tagline() {
  return (
    <div className="flex w-screen items-center justify-center bg-black">
      <div className="absolute flex flex-col items-center text-center text-2xl font-normal text-gray-100 mobile:pt-7">
        True Musical Instruments
        <br />
        <span className=" text-5xl font-bold text-gray-100">
          Beauty Quality Originality
          <br />
          <br />
        </span>
      </div>
      <img
        src="/EFNOTE-Mini-1.webp"
        className="h-[200px] w-full object-cover opacity-40"
        alt="image"
      />
    </div>
  );
}
