import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed z-40">
      {/* MD to LG */}
      <div className="md:bg-white h-[115px] w-screen text-black flex flex-col justify-between py-2">
        {/* Top */}
        <div className="flex justify-between px-3 pt-2">
          <div className="w-full flex justify-center pl-40">
            <Link href="/">
              <img
                src="/EFNOTE_logo.webp"
                alt="efnoteLogo"
                className="w-[300px]"
              />
            </Link>
          </div>
          <div className="flex gap-5 pr-10">
            <img
              src="/icons/iconIg.webp"
              alt="Instagram"
              className="w-[24px] h-[24px]"
            />
            <img
              src="/icons/iconFb.webp"
              alt="Facebook"
              className="w-[24px] h-[24px]"
            />
            <img
              src="/icons/iconTw.webp"
              alt="Twitter"
              className="w-[24px] h-[24px]"
            />
            <img
              src="/icons/iconYt.webp"
              alt="Youtube"
              className="w-[24px] h-[24px]"
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex justify-center gap-40 font-poppins">
          <Link href="/products">
            <span>Products</span>
          </Link>
          <span>Teams</span>
          <Link href="/about">
            <span>About</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
