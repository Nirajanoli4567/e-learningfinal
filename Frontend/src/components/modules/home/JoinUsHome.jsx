import img1 from "../../../assets/images/joinUs.jpg";

export const JoinUsHome = () => {
  return (
    <section className="flex join-us items-center">
      <div className="text-area w-half h-full flex column justify-center ">
        <div className="text-xl">Join us with 1000+ users</div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          ipsum velit placeat numquam dolores perferendis eveniet fugit cumque,
          blanditiis harum inventore molestiae eius! Quam optio illum
          reprehenderit consequuntur sint esse!
        </p>
      </div>
      <div className="image-area w-half flex justify-end items-end">
        <img src={img1} className=" h-full w-full" alt="" />
      </div>
    </section>
  );
};
