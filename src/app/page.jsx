
import "@/app/css/index.css"
import "@/app/css/index.media.css"


import SectionTitle from "@/components/Index/SectionTitle";
import SectionOffers from "@/components/Index/SectionOffers";
import SectionAnotherSpecialties from "@/components/Index/SectionAnotherSpecialties";
import SectionPrice from "@/components/Index/SectionPrice";
import SectionReviews from "@/components/Index/SectionReviews";
import HeaderIndex from "@/components/Index/HeaderIndex";
import FooterIndex from "@/components/Index/FooterIndex";


export default function Home() {
  return (
    <>
      <HeaderIndex />
      <div className="landingMargin">

        <SectionTitle />
        <SectionOffers />
        <SectionAnotherSpecialties />
        <SectionPrice />
        <SectionReviews />

      </div>
      <FooterIndex />
    </>
  );
}
