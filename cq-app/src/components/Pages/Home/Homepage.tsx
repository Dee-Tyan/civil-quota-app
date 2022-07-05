import React from "react";
import talent from "../../../assets/trainee.jpg";
import Testimonial from "../../Testimonial/Testimonial";

const Homepage = () => {
  return (
    <div className="">
      <main>
        <section className="w-full p-4 flex flex-col justify-center shadow-lg bg-gradient-to-r from-white to-blue-500 h-80 rounded">
          <h1 className="mb-1 text-4xl sm:text-6xl font-black">Next Generation Techies</h1>
          <p className="mt-0 text-sm ">
            Join our Tech Talent community to sponsor the next generation of
            innovators.
          </p>
        </section>

        <section className="grid sm:grid-cols-2 grid-cols-1 w-8/12 h-58 gap-8 mx-auto flex-auto">
          <div className="flex flex-col justify-center items-center my-8 mx-2">
            <h3 className="text-2xl mb-4">Not All Heroes Wear Cape</h3>
            <p>
              {" "}
              You have everything in your might to save the world, why don't you
              look into your hearts and lend a helping heart. The best time to
              plant a tree, they say, was yesterday. The second best time is
              now.{" "}
            </p>

            <div className="flex items-center h-18 mt-2">
              <button
                type="button"
                className="flex items-center rounded-lg text-snow py-2 px-8 text-sm mx-4 bg-gradient-to-r from-cyan-500 to-blue-500"
              >
                Join Us
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center my-8 mx-2 z-10">
            <img src={talent} className="rounded" />
          </div>
        </section>

        <section className="flex justify-center items-center py-4 xl:py-5 max-full ">
          <div className="container py-4 xl:py-5 border-black border-2 ">
            <div className="flex flex-row mb-5 ">
              <div className="grid md:cols-span-8 xl:cols-span-6 text-center mx-auto">
                <h2 className="mb-1 text-3xl">Talent Testimonies</h2>
                <p className="w-50">
                  "I woke up lucky and I am thankful for the chances I got. I
                  understand that not many people are." - Abel
                </p>
              </div>
            </div>
            <div className="grid sm:grid-rows-2 grid-flow-col grid-rows-4 gap-2 sm:gap-4">
              <Testimonial />
              <Testimonial />
              <Testimonial />
              <Testimonial />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
