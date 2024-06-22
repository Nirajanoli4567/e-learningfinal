import { useSelector } from "react-redux";
import { FeatureHome } from "../../components/modules/home/FeatureHome";
import { HeroHome } from "../../components/modules/home/HeroHome";
import { JoinUsHome } from "../../components/modules/home/JoinUsHome";
import { TestimonialHome } from "../../components/modules/home/Testimonial";

export const Home = () => {
  return (
    <>
      <main>
        <HeroHome />
        <div className="bg-primary text-white">
          <FeatureHome />
          {/* <JoinUsHome /> */}
        </div>
        {/* <TestimonialHome /> */}
      </main>
    </>
  );
};
