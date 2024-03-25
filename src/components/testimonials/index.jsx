export default function Testimonials() {
  return (
    <div>
      {/* TITLE */}
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="font-mono text-5xl font-bold">Feedbacks</div>
        <div className="text-center font-sans text-sm text-gray-500">
          Feedbacks from musicians who are using Efnote products
        </div>
      </div>
      {/* TESTIMONIALS */}
      <div className="mt-20 flex h-[400px] items-center justify-between bg-white px-40 pt-5 mobile:flex mobile:h-auto mobile:flex-col mobile:gap-6 md:gap-8">
        <span className="flex flex-col items-center justify-between gap-5">
          <div className="mx-2 h-24 w-24 rounded-full bg-[url('/testimonials/echaSoemantri.webp')] bg-cover bg-center"></div>
          <p className="text-center font-serif text-sm">
            "Since I discovered Efnote, I was amazed by their sound.
            <br />
            I use them live and in the studio, and they always
            <br />
            deliver the best!"
          </p>
          <div className="pt-5 mobile:text-center">Echa Soemantri</div>
        </span>
        <span className="flex flex-col items-center justify-between gap-5">
          <div className="mx-2 h-24 w-24 rounded-full bg-[url('/testimonials/ikmalTobing.webp')] bg-cover bg-center"></div>
          <p className="text-center font-serif text-sm">
            "Efnote has been a game-changer for me.
            <br />
            It provides a clean and easy to set
            <br />
            up one stop solution to get my tone with as
            <br />
            little worries as possible"
          </p>
          <div>Ikmal Tobing</div>
        </span>
        <span className="flex flex-col items-center justify-between gap-5">
          <div className="mx-2 h-24 w-24 rounded-full bg-[url('/testimonials/Yoiqball.webp')] bg-cover bg-center"></div>
          <p className="text-center font-serif text-sm">
            "Never found an electric drum like efnote.
            <br />
            it has great features and sound"
          </p>
          <div className="pt-10">Yoiqball</div>
        </span>
      </div>
    </div>
  );
}
