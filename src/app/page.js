import Section1 from "./section-1";
import Hospis from "./hospis";
import Cards from "./cards";
import Donation from "./donation";
import Footer from "./footr";

export default function Home() {
  return (
    <div>
      <div className=" p-2 pb-24 max-w-[1320px] mx-auto">
        <Section1/>
        <Hospis/>
        <Cards/>
        <Donation/>
      </div>
      <Footer/>
    </div>
  );
}
