export default function About() {
  return (
    <div className="h-auto bg-black">
      <div className="h-auto bg-black">
        <div className=" absolute flex h-[300px] w-full flex-col items-center justify-center gap-10">
          <div className="text-4xl text-gray-200">About EFNOTE</div>
          <div className="text-center text-lg font-thin text-white">
            EFNOTE is a brand for electronic true musical instruments based on
            the beliefs of
            <br />
            <br /> Beauty, Quality, Originality.
          </div>
        </div>
        <img
          src="/companyOverview/efnotepro_versengold_06_L.webp"
          alt=""
          className="h-[300px] w-full object-cover opacity-20"
        />
      </div>

      <div className="flex h-auto flex-col bg-gray-100 pt-10">
        <div className="flex h-auto w-full flex-col items-center gap-4 bg-white pt-3">
          <div className="mobile:text-xl mobile:font-bold md:text-3xl md:font-thin">
            - Birth Story -
          </div>
          <span className="w-full min-w-60 text-center text-lg font-thin">
            Want to create more valuable musical instruments with more free
            designs, with insane ideas.
            <br />
            <br />
            In 2018, skilled engineers with a 20-year career who felt the limits
            of product development at a major electronic musical instrument
            manufacturer in Japan, gathered <br /> together pursuing flexible
            ideas that are not tied to cost, and the non-logical attraction of
            musical instruments. <br /> <br />
            No matter how much technology evolves, there are parts that do not
            change as musical instruments. <br />
            Redefine the original value of electronic musical instruments.
          </span>
        </div>
      </div>
      <div className="flex h-auto flex-col bg-gray-100 pt-10 mobile:pt-10">
        <div className="flex h-auto w-full flex-col items-center gap-4 bg-white pt-3">
          <div className="mobile:text-xl mobile:font-bold md:text-3xl md:font-thin">
            - Be a true musical instrument -
          </div>
          <span className="w-full min-w-60 text-center text-lg font-thin">
            Musical instruments are something that will be loved forever. <br />{" "}
            It is worth not being swept away by the times. <br /> It has beauty,
            and your skills are improved as you get closer. <br />
            <br /> Nowadays, musical instruments with electronic are losing
            their original values because of their priority on specs and price.{" "}
            <br />
            <br /> A musical instrument that can be loved for a long time.{" "}
            <br />A musical instrument that can be used safely in education.{" "}
            <br />
            EFNOTE sticks to true musical instruments.
          </span>
        </div>
      </div>
      <div className="flex h-auto flex-col bg-gray-100 pt-10">
        <div className="flex h-auto w-full flex-col items-center gap-4 bg-white pt-3">
          <div className="mobile:text-xl mobile:font-bold md:text-3xl md:font-thin">
            - Philosophy -
          </div>
          <span className="w-full min-w-60 text-center text-lg font-thin">
            Beauty + Quality + Originality <br /> <br />
            Every instrument has beauty. The beauty of materials. The beauty of
            shape. <br />
            In order to resonate the sound beautifully, in order to image a
            beautiful sound. <br />
            Beauty in electronic musical instruments. <br /> <br />
            A musical instrument has richness. There will be fun following
            practice period. <br />
            What is more important than the quantity of functions or sounds is
            the quality of the musical instrument. <br />
            Quality over number. <br /> <br />
            There is no musical instrument that everyone loves. Because people
            have different preferences and sensibilities. <br />
            Musical instruments without middle-of-the-road approach, <br />
            with unique ideas and technique, with originality that does not fade
            away. <br /> <br /> <br />
            For the everlasting value as the first note <br /> <br />
            EFNOTE
          </span>
        </div>
      </div>
    </div>
  );
}
