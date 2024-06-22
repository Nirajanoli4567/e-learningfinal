import manOnTheChair from "../../../assets/images/ManOnTheChair.svg";
import coinVase from "../../../assets/images/CoinVase.svg";
import bigCircle from "../../../assets/images/bigCircle.svg";
import { useDispatch, useSelector } from "react-redux";
import { increaseCounter } from "../../../store/modules/count/action";
import { Button } from "@mantine/core";
import photo from "../../../assets/images/col1.png";

export const HeroHome = () => {
  const counter = useSelector((state) => state.countReducer.count);
  const dispatch = useDispatch();

  return (
    <section className="h-screen mt-5xl p-5xl">
      <div className="row flex">
        <div className="col1 w-1/2">
          <h1 className="text-5xl font-bold mt-lg">
            INVESTING IN KNOWLEDGE AND YOUR FUTURE
          </h1>
          <p>
            Our e-learning programs have been developed to be a vehicle for
            delivering multimedia learning solutions for your business.
          </p>

          <div className="btns flex flex-row justify-between mt-md">
            <button className="contact bg-purple-600 text-white text-center px-sm py-0 rounded-lg">
              Contact
            </button>
            <div className="courses flex flex-col">
              <h1 className="font-bold">50+ </h1>
              <p>Carrier Courses </p>
            </div>
            <div className="courses">
              <h1 className="font-bold">1M+ </h1>
              <p>Our Students </p>
            </div>
          </div>
        </div>
        <div className="col2 object-cover w-1/2">
          <img src={photo} alt="" />
        </div>
      </div>
    </section>
  );
};
