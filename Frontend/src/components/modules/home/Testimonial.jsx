import { useNavigate } from "react-router";

export const TestimonialHome = () => {
  const navigate = useNavigate();

  const testimonials = [
    {
      img: "https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_1280.jpg",
      name: "John doe",
      position: "Software Engineer",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt vitae in porro! Cum, et nisi? Vel voluptatum",
    },
  ];

  const goToContact = () => {
    navigate("/contact");
  };
  return (
    <section className="testimonials px-wrapper">
      <div className="text-area flex my-lg justify-between items-center">
        <div>
          <div className="title text-lg">Dont just take our word for it</div>
          <div className="text-md">
            Check what our users have to say about our app
          </div>
        </div>
        <div className="btn-area">
          <button onClick={goToContact} className="btn secondary">
            Get Started
          </button>
        </div>
      </div>
      <div className="testimonial-area ">
        <div className="testimonial relative flex items-end p-sm">
          <div className="testimonial-image absolute h-full w-full top-none left-none">
            <img
              src="https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_1280.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="testimonial-content relative w-full text-white p-md">
            <div className="testimonial-user mb-md">John doe</div>
            <div className="testimonial-user bold">Software Developer</div>
            <div className="testimonial-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              vitae in porro! Cum, et nisi? Vel voluptatum
            </div>
          </div>
        </div>
        <div className="testimonial relative flex items-end p-sm">
          <div className="testimonial-image absolute h-full w-full top-none left-none">
            <img
              src="https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_1280.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="testimonial-content relative w-full text-white p-md">
            <div className="testimonial-user mb-md">John doe</div>
            <div className="testimonial-user bold">Software Developer</div>
            <div className="testimonial-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              vitae in porro! Cum, et nisi? Vel voluptatum
            </div>
          </div>
        </div>
        <div className="testimonial relative flex items-end p-sm">
          <div className="testimonial-image absolute h-full w-full top-none left-none">
            <img
              src="https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_1280.jpg"
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="testimonial-content relative w-full text-white p-md">
            <div className="testimonial-user mb-md">John doe</div>
            <div className="testimonial-user bold">Software Developer</div>
            <div className="testimonial-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              vitae in porro! Cum, et nisi? Vel voluptatum
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
