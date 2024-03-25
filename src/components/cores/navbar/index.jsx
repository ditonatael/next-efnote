import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed z-40 w-screen">
      <div className=" flex h-[115px] flex-col justify-between bg-white py-2 md:text-black">
        <div className=" md:flex md:justify-between md:px-3 md:pt-2">
          <div className="flex flex-1 justify-center lg:pl-48">
            <Link href="/">
              <img
                src="/EFNOTE_logo.webp"
                alt="efnoteLogo"
                className="w-[300px]"
              />
            </Link>
          </div>
          <div className=" hidden lg:flex lg:gap-5 lg:pr-10">
            <img
              src="/icons/iconIg.webp"
              alt="Instagram"
              className="h-[24px] w-[24px]"
            />
            <img
              src="/icons/iconFb.webp"
              alt="Facebook"
              className="h-[24px] w-[24px]"
            />
            <img
              src="/icons/iconTw.webp"
              alt="Twitter"
              className="h-[24px] w-[24px]"
            />
            <img
              src="/icons/iconYt.webp"
              alt="Youtube"
              className="h-[24px] w-[24px]"
            />
          </div>
        </div>

        <div className=" font-poppins flex justify-between px-16 md:px-40">
          <Link href="/products">
            <span>Products</span>
          </Link>
          <Link href="/teams">
            <span>Teams</span>
          </Link>
          <Link href="/about">
            <span>About</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
