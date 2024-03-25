import Navbar from "~/components/cores/navbar";
import HeroCarousel from "~/components/heroCarousel";
import CompanyOverview from "~/components/companyOverview";
import Highlight from "~/components/highlight";
import Testimonials from "~/components/testimonials";

export default function Test() {
  return (
    <div>
      <div>
        <HeroCarousel />
      </div>
      <div>
        <CompanyOverview />
      </div>
      <div>
        <Highlight />
      </div>
      <div>
        <Testimonials />
      </div>
    </div>
  );
}
