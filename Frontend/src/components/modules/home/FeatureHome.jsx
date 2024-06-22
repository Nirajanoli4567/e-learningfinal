import React from "react";
import Slider from "react-slick";
export const FeatureHome = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="px-lg flex py-2xl">
      <div className="w-1/3">
        <div className="title text-2xl bold">Keep tracking spending</div>
        <p></p>
      </div>
      <div className="content-area px-md flex wrap">
        {/* {features.map((feature, key) => (
          <div className="feature w-half">
            <div className="feature-title bold text-md">{feature.title}</div>
            <p>{feature.description}</p>
          </div>
        ))} */}
      </div>
    </section>
  );
};
